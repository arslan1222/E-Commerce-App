import React from "react";
import { assets } from "../assets/frontend_assets";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            At CONNECT, we offer carefully curated products that
            bring joy and innovation to your everyday life. Discover quality,
            style, and convenience with every purchase.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://web.facebook.com/profile.php?id=100066694849448"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-gray-600 hover:text-blue-600 text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/arslan-haider-a0b297257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-gray-600 hover:text-blue-700 text-xl" />
            </a>
            <a
              href="https://wa.me/923217077229"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-gray-600 hover:text-green-600 text-xl" />
            </a>
            <a
              href="https://github.com/arslan1222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-600 hover:text-black text-xl" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              <li>About Us</li>
            </Link>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92-3217077229</li>
            <li>arslanhaiderchand88@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; Copyright 2025 @ CONNECT - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
