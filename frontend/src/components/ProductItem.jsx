import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
	const { currency } = useContext(ShopContext);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
			<div
				className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="relative overflow-hidden bg-gray-100 aspect-square">
					<img
						className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
						src={image[0]}
						alt={name}
					/>
					{isHovered && image[1] && (
						<img
							className="absolute inset-0 w-full h-full object-cover"
							src={image[1]}
							alt={name}
						/>
					)}
					<div
						className={`absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold`}
					>
						20% OFF
					</div>
				</div>
				<div className="p-3">
					<p className="font-semibold text-sm text-gray-800 line-clamp-2 h-9">
						{name}
					</p>
					<div className="mt-2 flex items-center gap-2">
						<p className="text-lg font-bold text-gray-900">
							{currency}
							{price}
						</p>
						<p className="text-xs text-gray-500 line-through">
							{currency}
							{Math.round(price * 1.25)}
						</p>
					</div>
					<div className="mt-2 flex items-center gap-1 text-xs text-yellow-500">
						<span>★★★★☆</span>
						<span className="text-gray-600">(24)</span>
					</div>
					<button className="w-full mt-3 bg-blue-600 text-white py-1.5 rounded text-xs font-semibold hover:bg-blue-700 transition">
						Quick View
					</button>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
