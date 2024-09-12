import React from "react";
import {
  FaShopify,
  FaYoutube,
  FaProductHunt,
  FaCopyright,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPerson4 } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiFillFacebook } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#1a6f7a] to-[#227B94] text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-x-2 text-lg font-semibold">
            <FaShopify size={24} />
            <h1 className="text-2xl">OnStore</h1>
          </div>
          <div className="flex items-center gap-x-2 text-lg">
            <MdPerson4 size={20} />
            <h1>Abdulaziz</h1>
          </div>
          <div className="flex items-center gap-x-2 text-lg">
            <BsFillTelephoneFill size={18} />
            <h1>+998-93-908-03-35</h1>
          </div>
          <div className="flex items-center gap-x-2 text-sm text-gray-300">
            <FaCopyright size={18} />
            <h1>Copyright onStore 2024.</h1>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-x-2 text-lg">
            <BiSolidMessage size={20} />
            <h1>abdulaziz@gmail.com</h1>
          </div>
          <div className="flex items-center gap-x-2 text-lg">
            <PiInstagramLogoFill size={24} />
            <h1>@dobr1y.fx</h1>
          </div>
          <div className="flex items-center gap-x-2 text-lg">
            <FaYoutube size={24} />
            <h1>onStore Blog</h1>
          </div>
          <div className="flex items-center gap-x-2 text-lg">
            <AiFillFacebook size={24} />
            <h1>onStore Blog</h1>
          </div>
        </div>

        <div className="space-y-4">
          <ul className="space-y-3">
            <li className="flex items-center gap-x-3 text-lg hover:text-gray-300 transition-all">
              <FaProductHunt size={20} />
              <NavLink to="/" className="hover:underline">
                Products
              </NavLink>
            </li>
            <li className="flex items-center gap-x-3 text-lg hover:text-gray-300 transition-all">
              <IoMdCart size={20} />
              <NavLink to="/cart" className="hover:underline">
                Cart
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-x-3 text-lg hover:text-gray-300 transition-all">
            <IoLogIn size={20} />
            <Link to="/login" className="hover:underline">
              If you don't have an account?
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiInstagramLogoFill
            size={28}
            className="hover:text-gray-300 transition-all"
          />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={28} className="hover:text-gray-300 transition-all" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook
            size={28}
            className="hover:text-gray-300 transition-all"
          />
        </a>
      </div>
    </div>
  );
}
