import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <footer className="w-full bg-black text-white text-sm sm:text-base overflow-x-hidden">
        <div>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-4 py-6">
            {/* Company Info */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="font-bold text-xl text-[#19CAB7] mb-4">
                <Link to="/">Dubai Business Connect</Link>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Your trusted partner for setting up businesses in UAE. Fast, reliable, and RAKEZ-certified solutions for Free Zone and Mainland company formation.
              </p>
              <p className="text-[#12A652] font-semibold text-sm mb-2">Contact Us</p>
              <p className="flex items-center gap-2 mb-1 break-words">
                <i className="fas fa-phone-alt text-[#12A652]"></i> +971 58 123 4567
              </p>
              <p className="flex items-center gap-2 mb-1 break-all">
                <i className="fas fa-envelope text-[#12A652]"></i> info@dubaibusinessconnect.com
              </p>
              <p className="flex items-start gap-2 break-words">
                <i className="fas fa-map-marker-alt text-[#12A652] mt-1"></i>
                Sheikh Zayed Road, Dubai UAE
              </p>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <h4 className="text-[#19CAB7] font-bold text-base sm:text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/services', label: 'Our Services' },
                  { to: '/', label: 'FAQs' },
                  { to: '/contact', label: 'Contact Us' }
                ].map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-white block transition-all duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Setup Services */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <h4 className="text-[#19CAB7] font-bold text-base sm:text-lg mb-4">Company Setup Packages</h4>
              <ul className="space-y-2 text-white font-medium break-words">
                {[
                  'Dubai Business Connect Company Formation',
                  'Free Zone Business License',
                  'Mainland Company Setup',
                  'Virtual Office UAE',
                  'Business Visa Assistance',
                  'E-Commerce Setup UAE'
                ].map(service => (
                  <li key={service} className="hover:text-[#12A652] cursor-pointer">{service}</li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <h4 className="text-[#19CAB7] font-bold text-base sm:text-lg mb-4">Connect With Us</h4>
              <p className="text-sm text-gray-300 mb-4">
                Follow us for the latest UAE business updates, tips, and offers.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=100063705264515', color: '#1877F2' },
                  { icon: 'twitter', href: 'https://twitter.com/yourprofile', color: '#1DA1F2' },
                  { icon: 'instagram', href: 'https://www.instagram.com/dubai_businessconnect', color: '#E1306C' },
                  { icon: 'linkedin', href: 'https://linkedin.com/in/yourprofile', color: '#0A66C2' },
                  { icon: 'youtube', href: 'https://www.youtube.com/@DubaiBusinessConnect', color: '#FF0000' },
                ].map((media, i) => (
                  <a
                    key={i}
                    href={media.href}
                    target="_blank"
                    className="text-lg"
                    aria-label={media.icon}
                    style={{ color: media.color }}
                  >
                    <i className={`fab fa-${media.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#333]"></div>

          {/* Copyright */}
          <div className="text-center text-[#12A652] py-2 text-sm">
            © {new Date().getFullYear()} Dubai Business Connect. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 cursor-pointer bg-[#19CAB7] text-black
        p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
};

export default Footer;
