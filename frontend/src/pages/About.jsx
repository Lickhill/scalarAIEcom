import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
	return (
		<div>
			<div className="text-2xl text-center pt-8 border-t">
				<Title text1={"ABOUT"} text2={"US"} />
			</div>

			<div className="my-10 flex flex-col md:flex-row gap-16">
				<img
					className="w-full md:max-w-[450px]"
					src={assets.about_img}
					alt="About LICKHILL"
				/>
				<div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
					<p>
						Welcome to LICKHILL, where fashion meets innovation and
						style. We believe style should be accessible, inspiring,
						and timeless—a reflection of who you are without
						compromise.
						<br />
						<br />
						<b className="text-gray-800">Our Philosophy</b>
						<br />
						<br />
						At LICKHILL, we are committed to: ��� Quality Fashion –
						Premium fabrics, perfect stitching, no compromise. Every
						piece is crafted with care for style and comfort. ���
						Diverse Collections – Designed for everyone, our
						collections celebrate elegance, confidence, and
						individuality. ✨ Trendy Choices – Latest styles,
						mindful production, and a promise to create fashion that
						feels good and looks great.
					</p>
					<p>
						<b className="text-gray-800">Our Mission</b>
						<br />
						<br />
						At LICKHILL, our mission is to create fashion that is
						both accessible and inspiring.
						<br />
						<br />
						Bringing style to everyone – We believe that great
						fashion should be for all. Every piece we design
						combines quality with affordability, proving that style
						and value can coexist. Empowering through fashion – Our
						collections are designed for everyone, embracing
						individuality, confidence, and grace. We want every
						person to feel confident and celebrated in what they
						wear. Promoting quality and timeless fashion – We are
						committed to quality sourcing, thoughtful designs, and
						fashion that goes beyond trends to make a lasting
						impression. LICKHILL is more than just a brand—it is a
						step toward making quality fashion accessible to
						everyone.
					</p>
				</div>
			</div>

			<div className="text-center py-12">
				<Title text1={"Why"} text2={"LICKHILL"} />
				<p className="text-xl py-4 text-gray-600 max-w-2xl mx-auto">
					We don't just make clothes; we create an experience of
					self-expression and empowerment. Our designs embrace the
					harmony between beauty and quality, tradition and
					innovation, style and comfort. Join us in redefining
					fashion—one quality choice at a time.
				</p>
			</div>

			<br />
			<br />
			<br />
			<NewsletterBox />
		</div>
	);
};

export default About;
