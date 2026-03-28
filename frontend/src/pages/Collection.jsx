import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
	const { products, search, showSearch } = useContext(ShopContext);
	const location = useLocation();
	const [showFilter, setShowFilter] = useState(false);
	const [filterProducts, setFilterProducts] = useState([]);
	const [category, setCategory] = useState([]);
	const [subcategory, setSubCategory] = useState([]);

	const toggleSubCategory = (e) => {
		if (subcategory.includes(e.target.value)) {
			setSubCategory((prev) =>
				prev.filter((item) => item !== e.target.value),
			);
		} else {
			setSubCategory((prev) => [...prev, e.target.value]);
		}
	};

	const applyFilter = () => {
		let productsCopy = products.slice();

		if (showSearch && search) {
			productsCopy = productsCopy.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase()),
			);
		}

		if (category.length > 0) {
			productsCopy = productsCopy.filter((item) =>
				category.includes(item.category),
			);
		}

		if (subcategory.length > 0) {
			productsCopy = productsCopy.filter((item) =>
				subcategory.includes(item.subcategory),
			);
		}

		console.log("Category:", category);
		console.log("Filtered Products Count:", productsCopy.length);
		console.log("Filtered Products:", productsCopy);

		setFilterProducts(productsCopy);
	};

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const categoryParam = params.get("category");
		console.log("URL search:", location.search);
		console.log("Category param:", categoryParam);

		if (categoryParam) {
			setCategory([categoryParam]);
			setSubCategory([]); // Reset subcategory when category changes
		} else {
			setCategory([]);
			setSubCategory([]);
		}
	}, [location.search]);

	useEffect(() => {
		applyFilter();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, subcategory, search, showSearch, products]);

	return (
		<div className="flex flex-row sm:flex-roe gap-1 sm:gap-10 pt-10 border-t">
			{/*Filter options */}
			<div className="min-w-60">
				<p className="my-2 text-xl flex items-center cursor-pointer gap-2">
					FILTERS
				</p>

				{/*subcategory filter*/}
				<div
					className={`border border-gray-300 pl-5 py-3 mt-6 w-64 sm:w-52 ${
						showFilter ? "" : "hidden"
					} sm:block`}
				>
					<p className="mb-3 text-sm font-medium">SUB-CATEGORIES</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
						<p className="flex gap-2">
							<input
								className="w-3"
								type="checkbox"
								value={"Standard"}
								onChange={toggleSubCategory}
							/>{" "}
							Standard
						</p>
						<p className="flex gap-2">
							<input
								className="w-3"
								type="checkbox"
								value={"Premium"}
								onChange={toggleSubCategory}
							/>{" "}
							Premium
						</p>
						<p className="flex gap-2">
							<input
								className="w-3"
								type="checkbox"
								value={"Budget"}
								onChange={toggleSubCategory}
							/>{" "}
							Budget
						</p>
						<p className="flex gap-2">
							<input
								className="w-3"
								type="checkbox"
								value={"Luxury"}
								onChange={toggleSubCategory}
							/>{" "}
							Luxury
						</p>
						<p className="flex gap-2">
							<input
								className="w-3"
								type="checkbox"
								value={"Basic"}
								onChange={toggleSubCategory}
							/>{" "}
							Basic
						</p>
					</div>
				</div>
			</div>

			{/*Right side */}
			<div className="flex-1">
				<div className="flex justify-between text-base sm:text-2xl mb-4">
					<Title text1={"ALL"} text2={"COLLECTIONS"} />
				</div>

				{/*Map products*/}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
					{filterProducts.map((item, index) => (
						<ProductItem
							key={index}
							name={item.name}
							id={item._id}
							price={item.price}
							image={item.image}
							stock={item.stock}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Collection;
