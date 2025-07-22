// src/components/IndustriesInHome.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const industries = [
  {
    icon: 'fas fa-city',
    title: 'Business Setup & Company Formation',
    description:
      'Mainland, Free Zone, and Offshore company formation. Guidance on jurisdiction, license types, and legal compliance. Includes trade license, approvals, and local sponsor arrangements.',
  },
  {
    icon: 'fas fa-user-shield',
    title: 'Corporate Secretarial & Administration',
    description:
      'Drafting Memorandum & Articles of Association, preparing resolutions, maintaining statutory records, and handling annual returns, restructuring, and changes to company structure.',
  },
  {
    icon: 'fas fa-id-badge',
    title: 'PRO (Public Relations Officer) Services',
    description:
      'Investor, employment, and family visa processing. Includes Emirates ID, medical appointments, labor and immigration card issuance, and coordination with government authorities.',
  },
  {
    icon: 'fas fa-file-signature',
    title: 'Document Clearing & Legal Support',
    description:
      'End-to-end support for document attestation, notarization, and translation. Legal document preparation including power of attorney and custom agreements.',
  },
  {
    icon: 'fas fa-building',
    title: 'Office Solutions',
    description:
      'Providing physical office spaces (shared/private), virtual office services (address, mail, reception), and Ejari registration to support business establishment.',
  },
  {
    icon: 'fas fa-university',
    title: 'Bank Account Opening Assistance',
    description:
      'Complete coordination with banks for opening business accounts, documentation preparation, KYC support, and direct communication with relationship managers.',
  },
  {
    icon: 'fas fa-calculator',
    title: 'Accounting, VAT & Tax Compliance',
    description:
      'Bookkeeping, financial reporting, VAT registration and filing, ESR compliance, UBO reporting, and expert corporate tax advisory and registration services.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Business Advisory & Consulting',
    description:
      'Market entry strategy, feasibility studies, business plans, support with mergers, acquisitions, liquidation, and other corporate advisory solutions.',
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
          OUR SERVICES
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-black">
          Expert Business Consulting for <br />
          Setup, Growth & Compliance in UAE
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
