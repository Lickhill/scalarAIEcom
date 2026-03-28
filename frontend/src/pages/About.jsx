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
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Aura, where fashion meets compassion. We believe style
            should be cruelty-free, empowering, and timeless—a reflection of who
            you are without compromise.
            <br />
            <br />
            <b className="text-gray-800">Our Philosophy</b>
            <br />
            <br />
            At Aura, we are committed to: 🌿 Animal-Friendly Fashion – No fur,
            no leather, no harm. Every piece is crafted with love for both
            fashion and the planet. 👗 Women-Centric Styles – Designed
            exclusively for women, our collections celebrate elegance,
            confidence, and individuality. ♻️ Sustainable Choices – Ethical
            materials, mindful production, and a promise to create fashion that
            feels good inside and out.
          </p>
          <p>
            
            <b className="text-gray-800">Our Mission</b>
            <br />
            <br />
            At Aura, our mission is to create fashion that is both ethical and empowering.
            <br />
            <br />
Redefining fashion with kindness – We believe that beauty should never come at the cost of animals. Every piece we design is 100% cruelty-free, proving that style and ethics can coexist.
Empowering women through fashion – Our collections are crafted exclusively for women, embracing individuality, confidence, and grace. We want every woman to feel strong, seen, and celebrated in what she wears.
Promoting sustainability and mindful living – We are committed to ethical sourcing, sustainable practices, and timeless fashion that goes beyond trends to make a lasting impact.
Aura is more than just a brand—it is a step toward a more conscious and compassionate future.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
          <Title text1={'Why'} text2={'Aura'}/>
          <p className="text-xl py-1">We don’t just make clothes;
            <br/>
            We create an experience of self-expression and empowerment. Our designs embrace the harmony between beauty and responsibility, tradition and modernity, softness and strength. Join us in redefining fashion—one ethical choice at a time.</p>
        </div>
        
        <br/>
        <br/>
        <br/>
        <NewsletterBox/>
    </div>
  );
};

export default About;
