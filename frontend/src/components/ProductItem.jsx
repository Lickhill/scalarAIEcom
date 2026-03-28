import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
	const { currency } = useContext(ShopContext);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
			<div
				className="bg-white overflow-hidden rounded-lg"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div
					className="relative overflow-hidden bg-gray-200 rounded-lg flex items-center justify-center w-full"
					style={{ aspectRatio: "3/4" }}
				>
					<img
						className={`transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
						src={image[0]}
						alt={name}
					/>
					{isHovered && image[1] && (
						<img
							className="absolute inset-0 transition-transform duration-500"
							src={image[1]}
							alt={name}
						/>
					)}
				</div>
				<div className="p-2">
					<p className="text-sm text-gray-800 line-clamp-2">{name}</p>
					<div className="flex items-center gap-2">
						<p className="text-xs text-gray-500 line-through">
							{currency}
							{Math.round(price * 1.25)}
						</p>
						<p className="text-base font-bold text-gray-900">
							{currency}
							{price}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
