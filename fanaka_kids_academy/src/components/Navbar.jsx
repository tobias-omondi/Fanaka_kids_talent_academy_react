import React, { useState } from 'react';
import { AiFillTikTok, AiOutlineWhatsApp, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/fanakakidslogo.jpeg';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Social icons section */}
      <div className="bg-white shadow-1xl">
        <ul className="bg-slate-200 w-60 text-3xl flex justify-evenly p-2 ml-auto shadow-2xl rounded-s-2xl">
          <li>
            <a href="#" className="text-black hover:text-gray-800">
              <AiFillTikTok />
            </a>
          </li>
          <li>
            <a href="#" className="text-green-600 hover:text-green-300">
              <AiOutlineWhatsApp />
            </a>
          </li>
        </ul>
      </div>

      {/* Main Navbar container */}
      <div className="bg-orange-600 p-5 flex items-center justify-between shadow-2xl">
        {/* Logo for the website */}
        <img src={logo} alt="logo" className="w-14 rounded-e-md m-3 shadow-xl" />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-10 font-medium">
          <Link to="/" className="text-white hover:text-red-700">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-red-700">
            About Us
          </Link>
          <Link to="/blog" className="text-white hover:text-red-700">
            Blog
          </Link>

          {/* Dropdown for Media */}
          <div className="relative">
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex items-center text-white hover:text-red-700"
            >
              Media <ChevronDown className="ml-2" />
            </button>

            {/* Dropdown Menu */}
            {isDropDownOpen && (
              <div className="absolute left-0 mt-2 bg-orange-600 text-white shadow-lg rounded-md">
                <Link to="/images" className="block px-4 py-2 hover:bg-orange-500">
                  Images
                </Link>
                <Link to="/videos" className="block px-4 py-2 hover:bg-orange-500">
                  Videos
                </Link>
              </div>
            )}
          </div>

          <Link to="/games" className="text-white hover:text-red-700">
            Game
          </Link>
          <Link to="/contact" className="text-white hover:text-red-700">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-orange-600 md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link to="/" className="text-white hover:text-red-700" onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-red-700" onClick={toggleMobileMenu}>
                About Us
              </Link>
              <Link to="/blog" className="text-white hover:text-red-700" onClick={toggleMobileMenu}>
                Blog
              </Link>
              
              {/* Mobile Media Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex items-center text-white hover:text-red-700"
                >
                  Media <ChevronDown className="ml-2" />
                </button>

                {isDropDownOpen && (
                  <div className="flex flex-col items-center bg-orange-500 w-full">
                    <Link to="/images" className="text-white hover:text-red-700 py-2" onClick={toggleMobileMenu}>
                      Images
                    </Link>
                    <Link to="/videos" className="text-white hover:text-red-700 py-2" onClick={toggleMobileMenu}>
                      Videos
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/games" className="text-white hover:text-red-700" onClick={toggleMobileMenu}>
                Game
              </Link>
              <Link to="/contact" className="text-white hover:text-red-700" onClick={toggleMobileMenu}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
