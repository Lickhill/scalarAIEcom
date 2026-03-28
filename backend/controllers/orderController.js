import prisma from "../config/db.js";
import razorpay from "razorpay";
import { sendOrderConfirmationEmail } from "../config/email.js";

//global variables
const currency = "INR";
const deliveryCharge = 0;

//gateway initialize
const razorpayInstance = new razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// placing orders using COD method
const placeOrder = async (req, res) => {
	try {
		const { userId, items, amount, address } = req.body;

		const orderData = {
			userId,
			items,
			address,
			amount,
			paymentMethod: "COD",
			payment: false,
			date: Date.now(),
		};

		const newOrder = await prisma.order.create({
			data: orderData,
		});

		// Decrement stock for each item in the order
		let itemsArray = items;

		// Parse items if it's a string
		if (typeof itemsArray === "string") {
			itemsArray = JSON.parse(itemsArray);
		}

		if (Array.isArray(itemsArray) && itemsArray.length > 0) {
			for (const item of itemsArray) {
				try {
					await prisma.product.update({
						where: { id: item._id },
						data: {
							stock: {
								decrement: item.quantity,
							},
						},
					});
				} catch (updateError) {
					console.error(
						`Error updating stock for product ${item._id}:`,
						updateError.message,
					);
				}
			}
		}

		await prisma.user.update({
			where: { id: userId },
			data: { cartData: {} },
		});

		// Parse address to get email
		let addressData = address;
		if (typeof addressData === "string") {
			addressData = JSON.parse(addressData);
		}

		// Send order confirmation email
		if (addressData.email) {
			await sendOrderConfirmationEmail(addressData.email, {
				orderId: newOrder.id,
				items: itemsArray,
				amount,
				address: addressData,
				paymentMethod: "COD",
				status: "Order Placed",
				date: newOrder.date,
			});
		}

		res.json({ success: true, message: "Order Placed" });
	} catch (error) {
		console.error("PlaceOrder error:", error);
		res.json({ success: false, message: error.message });
	}
};

//Placing orders using Stripe
const placeOrderStripe = async (req, res) => {};

//Placing orders using Razorpay
const placeOrderRazorpay = async (req, res) => {
	try {
		const { userId, items, amount, address } = req.body;

		const orderData = {
			userId,
			items,
			address,
			amount,
			paymentMethod: "Razorpay",
			payment: false,
			date: Date.now(),
		};

		const newOrder = await prisma.order.create({
			data: orderData,
		});

		const options = {
			amount: amount * 100,
			currency: currency,
			receipt: newOrder.id.toString(),
		};

		await razorpayInstance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.json({ success: false, message: error });
			}
			res.json({ success: true, order });
		});
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

const verifyRazorpay = async (req, res) => {
	try {
		const { userId, razorpay_order_id } = req.body;

		const orderInfo =
			await razorpayInstance.orders.fetch(razorpay_order_id);

		if (orderInfo.status === "paid") {
			const order = await prisma.order.findUnique({
				where: { id: orderInfo.receipt },
			});

			// Decrement stock for each item in the order
			let items = order.items;

			// Parse items if it's a string
			if (typeof items === "string") {
				items = JSON.parse(items);
			}

			if (Array.isArray(items) && items.length > 0) {
				for (const item of items) {
					try {
						await prisma.product.update({
							where: { id: item._id },
							data: {
								stock: {
									decrement: item.quantity,
								},
							},
						});
					} catch (updateError) {
						console.error(
							`Error updating stock for product ${item._id}:`,
							updateError.message,
						);
					}
				}
			}

			await prisma.order.update({
				where: { id: orderInfo.receipt },
				data: { payment: true },
			});
			await prisma.user.update({
				where: { id: userId },
				data: { cartData: {} },
			});

			// Parse address to get email
			let addressData = order.address;
			if (typeof addressData === "string") {
				addressData = JSON.parse(addressData);
			}

			// Send order confirmation email
			if (addressData.email) {
				await sendOrderConfirmationEmail(addressData.email, {
					orderId: order.id,
					items,
					amount: order.amount,
					address: addressData,
					paymentMethod: "Razorpay",
					status: "Order Placed",
					date: order.date,
				});
			}

			res.json({ success: true, message: "Payment Successful" });
		} else {
			res.json({ success: false, message: "Payment failed" });
		}
	} catch (error) {
		console.error("VerifyRazorpay error:", error);
		res.json({ success: false, message: error.message });
	}
};

//All orders data for admin panel
const allOrders = async (req, res) => {
	try {
		const orders = await prisma.order.findMany();
		// Convert BigInt to string for JSON serialization
		const ordersFormatted = orders.map((order) => ({
			...order,
			date: order.date.toString(),
		}));
		res.json({ success: true, orders: ordersFormatted });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

//User order data for frontend
const userOrders = async (req, res) => {
	try {
		const { userId } = req.body;

		const orders = await prisma.order.findMany({
			where: { userId },
		});
		// Convert BigInt to string for JSON serialization
		const ordersFormatted = orders.map((order) => ({
			...order,
			date: order.date.toString(),
		}));
		res.json({ success: true, orders: ordersFormatted });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

//update order status from admin panel
const updateStatus = async (req, res) => {
	try {
		const { orderId, status } = req.body;

		await prisma.order.update({
			where: { id: orderId },
			data: { status },
		});
		res.json({ success: true, message: "Status Udated" });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

export {
	verifyRazorpay,
	placeOrder,
	placeOrderStripe,
	placeOrderRazorpay,
	allOrders,
	userOrders,
	updateStatus,
};
