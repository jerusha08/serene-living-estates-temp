import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-slate-200 shadow-md">
      <div className="container px-4 py-2 relative">
        <h1 className="text-lg font-bold text-center lg:text-xl">
          Join 31,000+ others and never miss <br /> out on new tips, tutorials, and more.
        </h1>

        <div className="flex flex-col justify-center items-center mt-2 md:flex-row">
          <input
            id="email"
            type="text"
            className="px-2 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Email Address"
          />

          <button className="w-full px-3 py-1 mt-2 md:mt-0 md:ml-2 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto focus:outline-none bg-blue-800 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>

        <hr className="h-px bg-slate-200 border-none my-3" />

        <div className="flex items-center justify-between md:justify-center">
          

          <div className="flex  absolute bottom-2 right-0 md:m-0">
            <div className="flex mx-2 space-x-2">
              <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500">
                <AiFillFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500">
                <AiFillInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500">
                <AiFillTwitterSquare size={24} />
              </a>
              <a href="#" className="text-gray-600 transition-colors duration-300 hover:text-blue-500">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
