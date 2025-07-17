import React from 'react';
import { Link } from 'react-router-dom';

const AboutInHome = () => {
  return (
    <>
      {/* About Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 mt-32 px-4" data-aos="fade-up">
        <h3 className="text-[1.3rem] text-[#19CAB7] font-semibold uppercase tracking-widest">
          About Dubai Business Connect
        </h3>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-[#1e1e1e]">
          Your Trusted Partner in UAE Company Formation
        </h2>
      </div>

      {/* About Section */}
      <section className="flex flex-col md:flex-row gap-10 md:gap-20 max-w-7xl mx-auto px-5 py-5 md:px-6 overflow-hidden">
        {/* Image with Overlays */}
        <div className="relative flex-1 max-w-full md:max-w-lg rounded-xl">
          <img
            src="https://img.freepik.com/premium-vector/illustrative-interpretation-challenges-opportunities-modern-job-hunting_1263357-35046.jpg"
            alt="Business setup support in UAE"
            className="w-full h-auto object-cover rounded-xl"
            width="600"
            height="400"
          />

          {/* Rating Box */}
          <div className="absolute bottom-2 right-2 sm:bottom-0 sm:-right-5 bg-white rounded-xl p-4 w-36 sm:w-40 shadow-md flex flex-col">
            <div className="flex items-center justify-center gap-1 bg-[#cce7f7] rounded-full px-2 py-0.5 mb-2">
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star-half-alt text-yellow-400 text-xs"></i>
            </div>
            <p className="text-xl sm:text-2xl font-semibold leading-none">4.8/5</p>
          </div>

          {/* Brands Empowered Box */}
          <div className="absolute top-2 right-2 sm:-top-6 sm:-right-10 bg-white rounded-xl p-4 w-28 sm:w-32 shadow-md text-center">
            <p className="text-2xl sm:text-3xl font-bold leading-none">50+</p>
            <p className="text-xs mt-1">Brands Empowered</p>
          </div>

          {/* Caption */}
          <p className="absolute bottom-24 right-2 sm:right-12 text-[10px] sm:text-xs text-white mt-1">
            Client Rating on Google
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-xl flex flex-col gap-6">
          <p className="text-[1rem] md:text-base leading-relaxed text-black">
            Welcome to <strong>Dubai Business Connect</strong> — your trusted partner for seamless company formation, licensing, and business support across the UAE. We specialize in Free Zone, Mainland, and Offshore company setup, offering end-to-end solutions for entrepreneurs, startups, and established enterprises.
          </p>
          <p className="text-[1rem] md:text-base leading-relaxed text-black">
            Our services include business licensing, visa assistance, banking, virtual offices, and document clearance. With a dedicated team of UAE-based experts, we simplify the process so you can focus on growing your business.
          </p>
          <p className="text-[1rem] md:text-base leading-relaxed text-black">
            With over 30,000 clients served, Dubai Business Connect is proud to be RAKEZ-certified, reliable, and results-driven. Whether you're a local entrepreneur or an international investor, we offer complete guidance with unmatched support.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="relative overflow-hidden w-auto h-12 border-0 border-[#12A652] rounded-lg px-6 flex items-center justify-center bg-[#19CAB7] hover:bg-white transition-all duration-300 text-white hover:text-[#12A652] font-semibold group">
              <Link to="/OurCompany" className="z-10 text-sm font-medium text-inherit">
                <span>Read More</span>
              </Link>
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-all duration-500"></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInHome;
