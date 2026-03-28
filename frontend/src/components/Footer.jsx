import React from "react";
import { assets } from "../assets/assets";


const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

      <div>
        <img src={assets.brand_logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
        Aura is a brand made exclusively for women, celebrating confidence, authenticity, and self-love. We are proudly 100% cruelty-free, ensuring beauty never comes at the cost of kindness. Every product is crafted with care to enhance your natural radiance—because true beauty shines from within.
        </p>
      </div>

        <div>
            <p className="text-xl font-medium nm-5">COMPANY</p>
            <br/>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy</li>
            </ul>
        </div>

        <div>
            <p className="tex-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-212-457-4784</li>
                <li>contact@youraura.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr/>
            <p className="py-5 text-sm text-center">Copyright 2025@ aura.com - All Rights Reserved.</p>
        </div>

    </div>
  );
};

export default Footer;
