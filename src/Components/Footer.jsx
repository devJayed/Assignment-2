import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Contact Us</h5>
            <p>Beside ICT Tower, Agargaon, Dhaka</p>
            <p>Email: info@foodieheaven.com</p>
            <p>Phone: +8801622927718</p>
          </div>

          {/* Important Links */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Important Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 border-t border-gray-700 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Foodie Heaver. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
