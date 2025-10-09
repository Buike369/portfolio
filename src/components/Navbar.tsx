"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // modern icons
import { motion } from "framer-motion";

interface NavbarLink {
  id: number;
  text: string;
}

const navbarText: NavbarLink[] = [
  { id: 1, text: "Home" },
  { id: 2, text: "About" },
  { id: 3, text: "Services" },
  { id: 4, text: "Resume" },
  { id: 5, text: "Projects" },
  { id: 6, text: "Contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0  bg-white/70 backdrop-blur-md shadow-md z-50" style={{width:"100%",maxWidth:"1200px",  left: "50%",
    transform: "translateX(-50%)" ,borderRadius:"5px", background:"#1c1c1e",
    border: "1px solid rgba(122, 122, 122, .2)"}}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand Logo / Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          
          <span className="text-2xl font-extrabold tracking-tight text-gray-800" style={{color:"#fff"}}>
            K<span className="text-blue-600" style={{color:"#40a3a5"}}>C</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navbarText.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.text.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
                style={{color:"#fff"}}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={28} style={{color:"#fff"}}/> : <Menu size={28}style={{color:"#fff"}}/>}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
          style={{backgroundColor:"#1c1c1e", borderTop:"1px solid #28282a"}}
        >
          <ul className="flex flex-col  py-4 space-y-4 px-4" >
            {navbarText.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.text.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 font-medium hover:text-blue-600 transition duration-200"
                  style={{color:'#fff'}}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
