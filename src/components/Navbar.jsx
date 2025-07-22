import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import Topbar from "./Topbar";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const activeClass = "text-[#19CAB7] font-bold";
  const baseClass = "hover:text-[#12A652] transition duration-300";

  return (
    <header className="w-full shadow-md">
      <nav className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-bold text-xl" style={{ color: "#19CAB7" }}>
            <Link to="/">Dubai Business Connect</Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium items-center">
            <li>
              <Link to="/" className={`${pathname === "/" ? activeClass : baseClass}`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`${pathname === "/about" ? activeClass : baseClass}`}>About</Link>
            </li>
            <li>
              <Link to="/start-business" className={`${pathname === "/start-business" ? activeClass : baseClass}`}>Start a Business</Link>
            </li>
            <li>
              <Link to="/services" className={`${pathname === "/services" ? activeClass : baseClass} flex items-center gap-1`}>
                Services               </Link>
            </li>
            <li>
              <Link to="/contact" className={`${pathname === "/contact" ? activeClass : baseClass}`}>Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-black"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-2 border-t">
          <Link to="/" onClick={closeMobileMenu} className="block hover:text-[#12A652]">Home</Link>
          <Link to="/about" onClick={closeMobileMenu} className="block hover:text-[#12A652]">About</Link>
          <Link to="/start-business" onClick={closeMobileMenu} className="block hover:text-[#12A652]">Start a Business</Link>
          <Link to="/services" onClick={closeMobileMenu} className="block hover:text-[#12A652] flex items-center gap-1">
            Services 
          </Link>
          <Link to="/contact" onClick={closeMobileMenu} className="block hover:text-[#12A652]">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
