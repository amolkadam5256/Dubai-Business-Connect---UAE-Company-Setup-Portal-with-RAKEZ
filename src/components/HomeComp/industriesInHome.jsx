// src/components/IndustriesInHome.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const industries = [
  {
    icon: 'fas fa-plane',
    title: 'Aerial Transportation Consulting',
    description:
      "Deliverables who's responsible for the ask for this request? But digitalize for bench mark.",
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Enterprise Pursuit Consulting',
    description:
      'Diversify what do you feel you would bring to the table if you were hired for this position.',
  },
  {
    icon: 'fas fa-chart-pie',
    title: 'Merchandise Consulting',
    description:
      'Level the playing field high touch client we need more paper out of the loop.',
  },
  {
    icon: 'fas fa-money-bill-wave',
    title: 'Fiscal and Banking Consulting',
    description:
      'Personal development turd polishing, so commitment to the cause draft policy proposal.',
  },
  {
    icon: 'fas fa-building',
    title: 'Digital Estate Consulting',
    description:
      'We need to future-proof this where do we stand on the latest client ask productize.',
  },
  {
    icon: 'fas fa-chart-bar',
    title: 'Statistical Market Consulting',
    description:
      'We need to socialize the comms with the wider stakeholder community low-hanging fruit.',
  },
];

const IndustriesInHome = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white text-blackCustom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-3xl mb-12" data-aos="fade-right">
        <p className="text-sm font-medium tracking-wider uppercase text-gray-500">
          OUR INDUSTRIES
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-black">
          There are Many Types of <br />
          Industries In Consulting
        </h2>
        <div className="w-16 h-1 bg-[#D9BD6A] mt-3"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((item, index) => (
          <div
            key={index}
            className="flex space-x-4 p-6 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="text-3xl text-[#A67E33] min-w-[40px]" aria-hidden="true">
              <i className={item.icon}></i>
            </div>
            <div>
              <h3 className="font-bold text-lg text-black">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesInHome;
