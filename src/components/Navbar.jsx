import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import Topbar from "./Topbar";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef();
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
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              ref={dropdownRef}
            >
              <button className="flex items-center gap-1 hover:text-[#12A652]">
                Services <RiArrowDownSLine />
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white border rounded shadow-lg py-2 mt-2 w-64 z-50">
                  <li><Link to="/client-services" className="block px-4 py-2 hover:bg-[#19CAB7] hover:text-white">Client Services</Link></li>
                  <li><Link to="/licensing-renewals" className="block px-4 py-2 hover:bg-[#19CAB7] hover:text-white">Licensing & Renewals</Link></li>
                  <li><Link to="/leasing-services" className="block px-4 py-2 hover:bg-[#19CAB7] hover:text-white">Leasing Services</Link></li>
                  <li><Link to="/visa-services" className="block px-4 py-2 hover:bg-[#19CAB7] hover:text-white">Visa Services</Link></li>
                  <li><Link to="/golden-visa" className="block px-4 py-2 hover:bg-[#19CAB7] hover:text-white">Golden Visa</Link></li>
                  <li><Link to="/green-visa" className="block px-4 py-2 hover:bg-[#19CAB7] hover:text-white">Green Visa</Link></li>
                  <li><Link to="/visa-medical" className="block px-4 py-2 hover:bg-[#19CAB7] hover:text-white">Visa Medical Services</Link></li>
                  <li><Link to="/workers-insurance" className="block px-4 py-2 hover:bg-[#19CAB7] hover:text-white">Workers Protection Insurance</Link></li>
                  <li><Link to="/value-added" className="block px-4 py-2 hover:bg-[#19CAB7] hover:text-white">Value Added Services</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className={`${pathname === "/contact" ? activeClass : baseClass}`}>Contact</Link>
            </li>
            <li>
              <Link to="/offers" className={`${pathname === "/offers" ? activeClass : baseClass}`}>Offers</Link>
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

          {/* Mobile Services Toggle */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between items-center w-full font-semibold text-left hover:text-[#12A652]"
            >
              <span>Services</span>
              <RiArrowDownSLine
                className={`transform transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#19CAB7]" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileServicesOpen ? "max-h-[1000px]" : "max-h-0"}`}
            >
              <div className="ml-4 mt-2 space-y-1">
                <Link to="/client-services" onClick={closeMobileMenu} className="block text-sm hover:text-[#12A652]">Client Services</Link>
                <Link to="/licensing-renewals" onClick={closeMobileMenu} className="block text-sm hover:text-[#12A652]">Licensing & Renewals</Link>
                <Link to="/leasing-services" onClick={closeMobileMenu} className="block text-sm hover:text-[#12A652]">Leasing Services</Link>
                <Link to="/visa-services" onClick={closeMobileMenu} className="block text-sm hover:text-[#12A652]">Visa Services</Link>
                <Link to="/golden-visa" onClick={closeMobileMenu} className="block text-sm hover:text-[#12A652]">Golden Visa</Link>
                <Link to="/green-visa" onClick={closeMobileMenu} className="block text-sm hover:text-[#12A652]">Green Visa</Link>
                <Link to="/visa-medical" onClick={closeMobileMenu} className="block text-sm hover:text-[#12A652]">Visa Medical Services</Link>
                <Link to="/workers-insurance" onClick={closeMobileMenu} className="block text-sm hover:text-[#12A652]">Workers Protection Insurance</Link>
                <Link to="/value-added" onClick={closeMobileMenu} className="block text-sm hover:text-[#12A652]">Value Added Services</Link>
              </div>
            </div>
          </div>

          <Link to="/contact" onClick={closeMobileMenu} className="block hover:text-[#12A652]">Contact</Link>
          <Link to="/offers" onClick={closeMobileMenu} className="block hover:text-[#12A652]">Offers</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
