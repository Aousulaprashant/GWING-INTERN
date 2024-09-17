// components/Footer.js

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[rgba(247,249,252,1)] font-poppins py-8">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="/images/gwing.svg"
            alt="Gwing Software Technologies"
            className="mx-auto"
            style={{ width: "150px" }}
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8 mt-14">
          <a href="#" className="text-gray-900 hover:text-gray-600">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-600">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-600">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-600">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-gray-600 text-sm">
          Copyright © Gwing 2024. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
