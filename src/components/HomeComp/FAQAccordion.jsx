import React, { useEffect, useState } from 'react';
import emailjs from "@emailjs/browser";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const faqData = [
    {
        question: 'What are the types of business setup available in the UAE?',
        answer:
            'You can choose between Mainland, Free Zone, and Offshore company formation depending on your business activity, ownership preferences, and scalability goals.',
    },
    {
        question: 'How do I choose the right business license and jurisdiction?',
        answer:
            'Our experts help you choose the right license—commercial, professional, or industrial—and guide you through jurisdiction selection based on your industry and target market.',
    },
    {
        question: 'Do I need a local sponsor or service agent?',
        answer:
            'For certain mainland business activities, a local sponsor or service agent is required. We facilitate trusted and transparent arrangements to meet compliance requirements.',
    },
    {
        question: 'What corporate secretarial services do you offer?',
        answer:
            'We assist with drafting Memorandum & Articles of Association, maintaining statutory records, filing annual returns, and facilitating company restructuring or amendments.',
    },
    {
        question: 'Can you help with visa and PRO services?',
        answer:
            'Yes! From investor and employment visa processing to Emirates ID, medicals, and government approvals—our PRO team ensures a hassle-free experience.',
    },
    {
        question: 'What legal and document services do you provide?',
        answer:
            'We offer notarization, legal translations, and attestation from the Ministry of Foreign Affairs, embassies, and other UAE government bodies. We also draft legal agreements and powers of attorney.',
    },
    {
        question: 'Do you provide office space or virtual office options?',
        answer:
            'Yes, we offer flexible office solutions—from physical shared or private spaces to virtual office packages with mail handling, receptionist services, and Ejari registration.',
    },
    {
        question: 'Can you assist with opening a business bank account in the UAE?',
        answer:
            'Absolutely. We liaise with top UAE banks, prepare required KYC documentation, and coordinate with relationship managers to streamline the account opening process.',
    },
    {
        question: 'What accounting and tax compliance services do you provide?',
        answer:
            'Our experts handle bookkeeping, VAT registration and filing, ESR compliance, UBO reporting, and Corporate Tax advisory—ensuring full regulatory compliance.',
    },
    {
        question: 'Do you offer business advisory or consulting support?',
        answer:
            'Yes, we help you with market entry strategies, feasibility studies, business planning, and provide assistance for mergers, acquisitions, and liquidation processes.',
    },
    {
        question: 'Can you help with business liquidation or exit strategies?',
        answer:
            'Yes, we provide complete support for business closure including de-registration, final audits, clearances, and compliance with regulatory requirements to ensure a smooth and lawful exit.',
    },
    

];


const FAQAccordion = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const handleSend = (e) => {
        e.preventDefault();
        const serviceID = "service_feth3xs";
        const publicKey = "cVVb5LAcAeB0fjvof";

        emailjs
            .sendForm(serviceID, "template_zl0sdh8", e.target, publicKey)
            .then(() => {
                emailjs
                    .send(
                        serviceID,
                        "template_0kjnemo",
                        {
                            name: e.target.name.value,
                            email: e.target.email.value,
                            message: e.target.message.value,
                        },
                        publicKey
                    )
                    .then(() => {
                        setIsSubmitted(true);
                        e.target.reset();
                        setTimeout(() => setIsSubmitted(false), 30000);
                    })
                    .catch(() => setErrorMessage("Failed to send message to admin."));
            })
            .catch(() => setErrorMessage("Failed to send message. Please try again."));
    };

    const handleReset = () => {
        document.getElementById("contactForm").reset();
        setErrorMessage("");
    };

    const toggleFAQ = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

                {/* Left Section - Contact Form */}
                <div className="relative bg-white border border-[#19CAB7] rounded-3xl p-6 md:p-10 lg:w-1/2 w-full text-black shadow-2xl">
                    <h2 className="text-4xl font-bold mb-10 text-center text-[#19CAB7] uppercase tracking-wide">
                        Please fill in the form below
                    </h2>
                    <form id="contactForm" onSubmit={handleSend} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">First Name*</label>
                            <input type="text" name="firstName" required placeholder="Enter first name" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Last Name*</label>
                            <input type="text" name="lastName" required placeholder="Enter last name" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Email*</label>
                            <input type="email" name="email" required placeholder="Enter email" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Mobile Number*</label>
                            <input type="tel" name="mobile" required placeholder="e.g. 501111111" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Nationality*</label>
                            <select name="nationality" required className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#19CAB7] w-full">
                                <option value="">-- Please select --</option>
                                <option>Emirati (UAE)</option>
                                <option>Saudi Arabian</option>
                                <option>Qatari</option>
                                <option>Kuwaiti</option>
                                <option>Omani</option>
                                <option>Bahraini</option>
                                <option>Indian</option>
                                <option>Pakistani</option>
                                <option>Bangladeshi</option>
                                <option>Sri Lankan</option>
                                <option>Nepali</option>
                                <option>Egyptian</option>
                                <option>Nigerian</option>
                                <option>Kenyan</option>
                                <option>South African</option>
                                <option>American</option>
                                <option>British</option>
                                <option>Canadian</option>
                                <option>Australian</option>
                                <option>German</option>
                                <option>French</option>
                                <option>Filipino</option>
                                <option>Indonesian</option>
                                <option>Malaysian</option>
                                <option>Thai</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Country of Residence*</label>
                            <select name="residence" required className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#19CAB7]">
                                <option value="">-- Please select --</option>
                                <option>UAE</option>
                                <option>India</option>
                                <option>Saudi Arabia</option>
                                <option>Qatar</option>
                                <option>Kuwait</option>
                                <option>Oman</option>
                                <option>United Kingdom</option>
                                <option>United States</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="col-span-1 md:col-span-2 flex flex-col">
                            <label className="text-sm font-semibold mb-2">Notes*</label>
                            <textarea name="message" rows="5" required placeholder="Type your message here..." className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]" />
                        </div>
                       
                        <div className="col-span-1 md:col-span-2 text-center mt-4">
                            <button type="submit" className="bg-[#19CAB7] text-white px-12 py-3 rounded-full font-semibold hover:bg-[#17b3a4] transition-all duration-300 shadow-md">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section - FAQ Accordion */}
                <div className="w-full lg:w-1/2 space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <button
                                className={`flex items-center justify-between w-full px-6 py-4 text-left font-medium text-sm transition-all duration-300 ${activeIndex === index ? 'text-[#19CAB7] bg-[#E9FFFB]' : 'text-[#111111] bg-white'}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{item.question}</span>
                                <span className={`w-6 h-6 flex items-center justify-center rounded-full bg-[#19CAB7] text-white transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-black">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                            <div className={`px-6 pb-4 text-sm leading-relaxed transition-all duration-300 ${activeIndex === index ? 'block text-[#222]' : 'hidden'}`}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
