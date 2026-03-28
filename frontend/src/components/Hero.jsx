import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();
	const [currentBanner, setCurrentBanner] = useState(0);

	const banners = [
		{
			color: "bg-blue-600",
			title: "Fashion Sale",
			subtitle: "Up to 50% OFF",
			description: "On your favorite brands",
			icon: "👗",
		},
		{
			color: "bg-purple-600",
			title: "Electronics",
			subtitle: "Best Deals",
			description: "Premium gadgets at unbeatable prices",
			icon: "📱",
		},
		{
			color: "bg-indigo-900",
			title: "Premium Collection",
			subtitle: "Exclusive Items",
			description: "Curated for you",
			icon: "⭐",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentBanner((prev) => (prev + 1) % 3);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="w-full">
			{/* Main Banner Carousel */}
			<div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg">
				<div
					className="flex transition-transform duration-500"
					style={{
						transform: `translateX(-${currentBanner * 100}%)`,
					}}
				>
					{banners.map((banner, index) => (
						<div
							key={index}
							className={`w-full h-full ${banner.color} flex items-center justify-between px-8 sm:px-12 md:px-16 flex-shrink-0`}
						>
							<div className="text-white max-w-md">
								<div className="text-5xl mb-4">
									{banner.icon}
								</div>
								<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
									{banner.title}
								</h2>
								<p className="text-lg sm:text-xl font-semibold mb-1">
									{banner.subtitle}
								</p>
								<p className="text-sm sm:text-base opacity-90 mb-4">
									{banner.description}
								</p>
								<button
									onClick={() => navigate("/collection")}
									className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
								>
									Shop Now
								</button>
							</div>
							<div className="hidden md:block text-8xl opacity-20">
								{banner.icon}
							</div>
						</div>
					))}
				</div>

				{/* Carousel Indicators */}
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
					{banners.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentBanner(index)}
							className={`w-2 h-2 rounded-full transition ${
								currentBanner === index
									? "bg-white w-6"
									: "bg-white bg-opacity-50"
							}`}
						/>
					))}
				</div>

				{/* Navigation Arrows */}
				<button
					onClick={() =>
						setCurrentBanner(
							(prev) =>
								(prev - 1 + banners.length) % banners.length,
						)
					}
					className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center transition text-xl"
				>
					‹
				</button>
				<button
					onClick={() =>
						setCurrentBanner((prev) => (prev + 1) % banners.length)
					}
					className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center transition text-xl"
				>
					›
				</button>
			</div>

			{/* Secondary Banners */}
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
				<div
					className="bg-yellow-100 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer"
					onClick={() => navigate("/collection")}
				>
					<div className="text-4xl mb-2">✈️</div>
					<p className="font-semibold text-sm">Extra Discounts</p>
					<p className="text-xs text-gray-600">On first purchase</p>
				</div>
				<div
					className="bg-green-100 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer"
					onClick={() => navigate("/collection")}
				>
					<div className="text-4xl mb-2">🚚</div>
					<p className="font-semibold text-sm">Free Shipping</p>
					<p className="text-xs text-gray-600">
						On orders above ₹500
					</p>
				</div>
				<div
					className="bg-pink-100 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer hidden md:block"
					onClick={() => navigate("/collection")}
				>
					<div className="text-4xl mb-2">💝</div>
					<p className="font-semibold text-sm">Gift Vouchers</p>
					<p className="text-xs text-gray-600">Buy now, use later</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
