import React from "react";
import { Link } from "react-router-dom";

const HomeBannerSection = () => {
  const cards = [
    {
      icon: "fas fa-building",
      title: "Company Formation",
      subtitle: "Setup & Licensing",
      description: "Establish mainland, free zone, or offshore companies with full licensing, jurisdiction selection, and sponsor support.",
      link: "#",
    },
    {
      icon: "fas fa-user-shield",
      title: "Secretarial Support",
      subtitle: "Corporate Services",
      description: "Get help with resolutions, legal filings, restructuring, and maintaining regulatory records with precision.",
      link: "#",
    },
    {
      icon: "fas fa-passport",
      title: "Visa & PRO Services",
      subtitle: "Government Liaison",
      description: "Handle visas, IDs, labor cards, and coordinate with authorities for smooth approvals and clearances.",
      link: "#",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full bg-black text-white overflow-hidden min-h-[120vh]">
        {/* Background Image */}
        <img
          src="https://storage.googleapis.com/a1aa/image/abbad0a0-6eaa-4c44-9558-54c517c36830.jpg"
          alt="Dubai Business Connect Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />

        {/* Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col items-center justify-center text-center space-y-5">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-white animate-fade-up">
            Start Your Dubai Business Journey – Company Formation Made Easy
          </h1>

          <p className="text-base sm:text-lg max-w-3xl text-white/80 animate-fade-up delay-200">
            Register your business in Dubai with expert assistance. We simplify mainland, free zone, and offshore company setup for startups, SMEs, and global investors.
          </p>

          <p className="text-sm sm:text-base max-w-2xl text-white/70 animate-fade-up delay-300">
            From trade license registration and visa processing to office setup and tax compliance, Dubai Business Connect provides end-to-end solutions trusted by over 30,000 entrepreneurs. Build your business with confidence in the UAE.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#19CAB7] text-black font-semibold text-sm sm:text-base rounded-full shadow hover:bg-[#12A652] transition"
          >
            Get Started <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>

      </section>

      {/* Cards Section: 50% out of background */}
      <div className="-mt-[10%] relative z-20 max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div className="text-4xl mb-4 text-[#12A652] group-hover:text-[#19CAB7] transition duration-300">
              <i className={card.icon}></i>
            </div>

            <h4 className="text-xl font-semibold mb-1 group-hover:text-black transition">{card.title}</h4>

            <span className="text-sm text-gray-500 group-hover:text-gray-700 transition">
              {card.subtitle}
            </span>

            <p className="mt-4 text-sm text-gray-600 group-hover:text-gray-800 transition">
              {card.description}
            </p>

            <Link
              to="/services"
              className="inline-block mt-6 text-sm font-medium text-[#12A652] group-hover:text-[#19CAB7] transition"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeBannerSection;
