import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
	const [visible, setVisible] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const {
		setShowSearch,
		getCartCount,
		navigate,
		token,
		setToken,
		setCartItems,
	} = useContext(ShopContext);

	const logout = () => {
		navigate("/login");
		localStorage.removeItem("token");
		setToken("");
		setCartItems({});
	};

	return (
		<>
			{/* Top Header */}
			<div className="bg-white shadow-sm sticky top-0 z-40">
				<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
					{/* Header Top Section */}
					<div className="flex items-center justify-between py-3 border-b">
						{/* Logo */}
						<Link to="/" className="flex items-center gap-2">
							<div className="bg-yellow-400 px-3 py-1 rounded-sm font-bold text-xl text-blue-600">
								LICKHILL
							</div>
						</Link>

						{/* Search Bar */}
						<div className="hidden md:flex flex-1 mx-6">
							<input
								type="text"
								onClick={() => setShowSearch(true)}
								placeholder="Search for Products, Brands and More"
								className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
							/>
						</div>

						{/* Right Section */}
						<div className="flex items-center gap-6">
							{/* Account */}
							<div className="relative group">
								<button
									onClick={() =>
										token
											? setDropdownOpen(!dropdownOpen)
											: navigate("/login")
									}
									className="flex items-center gap-1 text-gray-700 hover:text-blue-600 text-sm font-medium"
								>
									<span>👤</span>
									<span className="hidden sm:inline">
										{token ? "Account" : "Login"}
									</span>
								</button>
								{token && dropdownOpen && (
									<div className="absolute right-0 mt-0 w-40 bg-white shadow-lg rounded-sm text-sm z-50">
										<p className="px-4 py-3 cursor-pointer hover:bg-gray-100">
											My Profile
										</p>
										<p
											onClick={() => {
												navigate("/orders");
												setDropdownOpen(false);
											}}
											className="px-4 py-3 cursor-pointer hover:bg-gray-100 border-t"
										>
											Orders
										</p>
										<p
											onClick={logout}
											className="px-4 py-3 cursor-pointer hover:bg-gray-100 border-t"
										>
											LogOut
										</p>
									</div>
								)}
							</div>

							{/* Cart */}
							<Link to="/cart" className="relative">
								<div className="flex items-center gap-1">
									<span className="text-2xl">🛒</span>
									<span className="hidden sm:inline text-sm font-medium">
										Cart
									</span>
									{getCartCount() > 0 && (
										<span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
											{getCartCount()}
										</span>
									)}
								</div>
							</Link>

							{/* Mobile Menu */}
							<button
								onClick={() => setVisible(!visible)}
								className="md:hidden text-2xl"
							>
								☰
							</button>
						</div>
					</div>

					{/* Category Navigation */}
					<div className="hidden md:flex items-center justify-start gap-6 py-3 overflow-x-auto">
						<Link
							to="/"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">👜</span>
							<span className="font-medium text-xs">For You</span>
						</Link>
						<Link
							to="/collection?category=Fashion"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">👕</span>
							<span className="font-medium text-xs">Fashion</span>
						</Link>
						<Link
							to="/collection?category=Mobiles"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">�</span>
							<span className="font-medium text-xs">Mobiles</span>
						</Link>
						<Link
							to="/collection?category=Beauty"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">💄</span>
							<span className="font-medium text-xs">Beauty</span>
						</Link>
						<Link
							to="/collection?category=Electronics"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">�️</span>
							<span className="font-medium text-xs">
								Electronics
							</span>
						</Link>
						<Link
							to="/collection?category=Home"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">🏠</span>
							<span className="font-medium text-xs">Home</span>
						</Link>
						<Link
							to="/collection?category=Appliances"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">⚡</span>
							<span className="font-medium text-xs">
								Appliances
							</span>
						</Link>
						<Link
							to="/collection?category=Toys, Baby & More"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">🧸</span>
							<span className="font-medium text-xs">Toys</span>
						</Link>
						<Link
							to="/collection?category=Food & Health"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">🍎</span>
							<span className="font-medium text-xs">
								Food & Health
							</span>
						</Link>
						<Link
							to="/collection?category=Auto Accessories"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">🚗</span>
							<span className="font-medium text-xs">Auto</span>
						</Link>
						<Link
							to="/collection?category=2 Wheelers"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">🏍️</span>
							<span className="font-medium text-xs">
								2 Wheeler
							</span>
						</Link>
						<Link
							to="/collection?category=Sports & Outdoors"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">⚽</span>
							<span className="font-medium text-xs">Sports</span>
						</Link>
						<Link
							to="/collection?category=Books & More"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">�</span>
							<span className="font-medium text-xs">Books</span>
						</Link>
						<Link
							to="/collection?category=Furniture"
							className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 text-xs whitespace-nowrap"
						>
							<span className="text-2xl">🛋️</span>
							<span className="font-medium text-xs">
								Furniture
							</span>
						</Link>
					</div>
				</div>
			</div>

			{/* Mobile Menu Sidebar */}
			<div
				className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transition-all duration-300 z-50 ${visible ? "translate-x-0" : "translate-x-full"} md:hidden`}
			>
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-4 border-b">
						<span className="font-bold text-lg">Menu</span>
						<button
							onClick={() => setVisible(false)}
							className="text-2xl"
						>
							✕
						</button>
					</div>
					<div className="flex flex-col gap-2 p-4">
						<NavLink
							onClick={() => setVisible(false)}
							to="/"
							className="py-3 px-4 hover:bg-gray-100 rounded"
						>
							Home
						</NavLink>
						<NavLink
							onClick={() => setVisible(false)}
							to="/collection"
							className="py-3 px-4 hover:bg-gray-100 rounded"
						>
							Collection
						</NavLink>
						<NavLink
							onClick={() => setVisible(false)}
							to="/about"
							className="py-3 px-4 hover:bg-gray-100 rounded"
						>
							About
						</NavLink>
						<NavLink
							onClick={() => setVisible(false)}
							to="/contact"
							className="py-3 px-4 hover:bg-gray-100 rounded"
						>
							Contact
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
