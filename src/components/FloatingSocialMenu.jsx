import React, { useState, useEffect, useRef } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

const icons = [
  { icon: <FaFacebookF />, href: 'https://facebook.com' },
  { icon: <FaTwitter />, href: 'https://twitter.com' },
  { icon: <FaInstagram />, href: 'https://instagram.com' },
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/1234567890' },
];

const FloatingSocialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const baseRadius = 110; // Closer distance

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-10 right-4 z-50" ref={menuRef}>
      <div className="relative w-20 h-20">
        {icons.map((item, index) => {
          const angle = (Math.PI / 2) * (index / (icons.length - 1));
          const radius = baseRadius;
          const x = -radius * Math.cos(angle);
          const y = -radius * Math.sin(angle);

          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute flex items-center justify-center w-11 h-11 text-white rounded-full shadow-md transition-all duration-500 ease-out hover:scale-110"
              style={{
                background: index % 2 === 0 ? '#12A652' : '#11BFAE',
                transform: isOpen ? `translate(${x}px, ${y}px)` : 'translate(0, 0)',
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none',
              }}
            >
              {item.icon}
            </a>
          );
        })}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-[#11BFAE] to-[#12A652] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-0.5' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mt-1 transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mt-1 transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default FloatingSocialMenu;
