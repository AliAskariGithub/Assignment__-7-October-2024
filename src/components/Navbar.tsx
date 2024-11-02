"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900  text-white px-6 py-8 md:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-lg font-semibold">
          Ali Askari&apos;s Portfolio
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <Link
            href="#home"
            className="hover:text-[#00EEFF] duration-500 transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#00EEFF] duration-500 transition"
          >
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-[#00EEFF] duration-500 transition"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="hover:text-[#00EEFF] duration-500 transition"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#00EEFF] duration-500 transition"
          >
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute justify-center right-0 bg-white bg-opacity-10 pl-2 w-32 pt-5 pb-5 flex-col items-center text-center space-y-4 mt-5">
          <Link
            href="#home"
            className="hover:text-[#00EEFF] duration-500 transition"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <br />
          <Link
            href="#about"
            className="hover:text-[#00EEFF] duration-500 transition"
            onClick={toggleMenu}
          >
            About
          </Link>
          <br />
          <Link
            href="#services"
            className="hover:text-[#00EEFF] duration-500 transition"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <br />
          <Link
            href="#projects"
            className="hover:text-[#00EEFF] duration-500 transition"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <br />
          <Link
            href="#contact"
            className="hover:text-[#00EEFF] duration-500 transition"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
