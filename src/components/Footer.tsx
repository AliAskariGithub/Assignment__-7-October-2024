import Link from "next/link";
import React from "react";
import { FiLinkedin, FiTwitter, FiGithub, FiFacebook } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 px-10 py-4 md:px-20">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-3 text-sm md:text-base md:space-x-6 mb-4">
          <Link href="#home" className="hover:text-white">
            Home
          </Link>
          <Link href="#about" className="hover:text-white">
            About
          </Link>
          <Link href="#services" className="hover:text-white">
            Services
          </Link>
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3 text-sm md:text-base md:space-x-6 space-y-4 gap-10 text-gray-400">
          <Link href="https://www.linkedin.com/in/ali-askari-355257308/">
            <p>
              <FiLinkedin
                className="hover:text-cyan-500 mt-3 duration-500 transition"
                size={24}
              />
            </p>
          </Link>

          <Link href="https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09">
            <p>
              <FiTwitter
                className="hover:text-cyan-500 duration-500 transition"
                size={24}
              />
            </p>
          </Link>

          <Link href="https://github.com/AliAskariGithub">
            <p>
              <FiGithub
                className="hover:text-cyan-500 duration-500 transition"
                size={24}
              />
            </p>
          </Link>

          <Link href="https://www.facebook.com/profile.php?id=61564881342854">
            <p>
              <FiFacebook
                className="hover:text-cyan-500 duration-500 transition"
                size={24}
              />
            </p>
          </Link>
        </div>

        <p className="text-xs font-sans mt-6">
          ©2024 Figma Design Portfolio | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
