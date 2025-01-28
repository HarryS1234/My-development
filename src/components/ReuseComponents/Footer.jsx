import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin,FaTiktok } from 'react-icons/fa'; 
import { RiTwitterXLine } from "react-icons/ri";// Social media icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Icon from './Icon';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Icon /> {/* Custom height */}
        </div>

        {/* Use justify-center to center the grid items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center text-center md:text-left">
          {/* Address and Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2 text-[#1dbbec] font-bold">2500 Williams Pkwy</p>
            <p className="mb-2 text-[#1dbbec] font-bold">Brampton, ON L6S 5M9</p>
            <p className="mb-2 font-bold">
              Email: <a href="mailto:Veerjicooling@gmail.com" className="text-[#1dbbec] font-bold hover:underline">Veerjicooling@gmail.com</a>
            </p>
            <p className="mb-2 font-bold">Cell: <a href="tel:647-210-6862" className="text-[#1dbbec] font-bold hover:underline">647-210-6862</a></p>
            <p className="mb-2 font-bold">Phone: <a href="tel:905-792-3555" className="text-[#1dbbec] font-bold hover:underline">905-792-3555</a></p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-[#1dbbec] font-bold">
              <li>
                <Link to="/refrigeration" className="hover:underline">Commercial Refrigeration</Link>
              </li>
              <li>
                <Link to="/refrigeration" className="hover:underline">Commercial Walk-In Cooler</Link>
              </li>
              <li>
                <Link to="/refrigeration" className="hover:underline">Commercial Freezer</Link>
              </li>
              <li>
                <Link to="/heating-ac" className="hover:underline">Heating & Air Conditioning</Link>
              </li>
              <li>
                <Link to="/maintenance" className="hover:underline">Installation/Maintenance</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us on Social Media</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/profile.php?id=61569368603260" target="_blank" rel="noopener noreferrer" className="text-[#1dbbec] hover:text-blue-300">
                <FaFacebook size={40} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1dbbec] hover:text-blue-300">
                <RiTwitterXLine size={40} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1dbbec] hover:text-blue-300">
                <FaInstagram size={40} />
              </a>
              <a href="https://Tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#1dbbec] hover:text-blue-300">
                <FaTiktok size={40} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-8 border-t border-gray-700 pt-8">
          <p className="font-bold">Copyrights © 2024 All Rights Reserved by Veerji Mechanical</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;