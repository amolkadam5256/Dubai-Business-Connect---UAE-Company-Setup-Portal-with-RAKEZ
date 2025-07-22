import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: "Company Formation",
    desc: "Mainland, Free Zone, Offshore formation with license, jurisdiction & sponsor support.",
    icon: "fas fa-building",
  },
  {
    title: "Secretarial Services",
    desc: "Drafting MOA, resolutions, legal restructuring, statutory compliance & filings.",
    icon: "fas fa-file-signature",
  },
  {
    title: "Visa & PRO Services",
    desc: "Investor, employment, family visa processing with IDs, labor cards, and approvals.",
    icon: "fas fa-passport",
  },
  {
    title: "Document & Legal Support",
    desc: "Attestation, notarization, translation, POA & custom legal agreement drafting.",
    icon: "fas fa-file-contract",
  },
  {
    title: "Office Solutions",
    desc: "Shared/private spaces, virtual offices, mail services, Ejari support.",
    icon: "fas fa-briefcase",
  },
  {
    title: "Bank Account Assistance",
    desc: "Full coordination for business bank accounts, KYC, and document handling.",
    icon: "fas fa-university",
  },
  {
    title: "Accounting & Tax",
    desc: "Bookkeeping, VAT, ESR, UBO, tax advisory and compliance services.",
    icon: "fas fa-calculator",
  },
  {
    title: "Business Advisory",
    desc: "Market entry, M&A, liquidation, feasibility studies, and business plans.",
    icon: "fas fa-chart-line",
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-20 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up">
          Our Services
        </h2>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Expert Business Consulting for Setup, Growth & Compliance in the UAE.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f9fafb] shadow-xl p-6 rounded-2xl hover:shadow-2xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-[#19CAB7] text-4xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
