import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Company Formation",
    description: "Mainland, Free Zone & Offshore setup with full licensing and sponsor support.",
    icon: "fas fa-building",
    delay: 100,
  },
  {
    title: "Corporate Secretarial",
    description: "Drafting resolutions, legal filings, and statutory record maintenance.",
    icon: "fas fa-file-signature",
    delay: 200,
  },
  {
    title: "Visa & PRO Services",
    description: "Visa processing, Emirates ID, labor cards, and government liaison.",
    icon: "fas fa-passport",
    delay: 300,
  },
  {
    title: "Legal & Document Clearing",
    description: "Notarization, attestation, translations & power of attorney.",
    icon: "fas fa-gavel",
    delay: 400,
  },
  {
    title: "Office Solutions",
    description: "Shared/Private offices, Virtual Address & Ejari registration.",
    icon: "fas fa-map-marker-alt",
    delay: 500,
  },
  {
    title: "Bank Account Opening",
    description: "Business account coordination, KYC documentation & bank liaisons.",
    icon: "fas fa-university",
    delay: 600,
  },
  {
    title: "VAT & Tax Compliance",
    description: "Bookkeeping, VAT filing, ESR & UBO compliance, and tax advisory.",
    icon: "fas fa-file-invoice-dollar",
    delay: 700,
  },
  {
    title: "Business Advisory",
    description: "Market entry strategy, feasibility studies, mergers & liquidation.",
    icon: "fas fa-lightbulb",
    delay: 800,
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">
          Expert Business Services in the UAE
        </h2>
        <p className="text-lg mb-10" data-aos="fade-up" data-aos-delay="200">
          End-to-End Setup, Growth & Compliance Support for Entrepreneurs and Corporates
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-teal-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="text-3xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12" data-aos="zoom-in" data-aos-delay="1000">
          <button className="px-8 py-3 bg-white text-teal-700 font-semibold rounded-full hover:bg-gray-100 transition">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
