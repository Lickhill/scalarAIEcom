import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
	return (
		<div>
			<div className="text-center text-2xl pt-10 border-t">
				<Title text1={"CONTACT"} text2={"US"} />
			</div>

			<div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
				<img
					className="w-full md:max-w-[480px]"
					src={assets.contact_img}
					alt=""
				/>
				<div className="flex flex-col justify-center items-start gap-6">
					<p className="font-semibold text-xl text-gray-600">
						Our Headquarters
					</p>
					<p className="text-gray-500">
						Mumbai Office,
						<br />
						Bandra, Mumbai - 400050, India
					</p>
					<p className="text-gray-500">
						Tel: +91-9876-543-210 <br /> Email: support@lickhill.com
					</p>
					<p className="font-semibold text-xl text-gray-600">
						Join LICKHILL
					</p>
					<p className="text-gray-500">
						Become part of our growing team and help us create
						amazing fashion experiences.
					</p>
					<button className="border border-blue-600 px-8 py-4 text-sm text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-500">
						Explore Careers
					</button>
				</div>
			</div>
			<NewsletterBox />
		</div>
	);
};

export default Contact;
