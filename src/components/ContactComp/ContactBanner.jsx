import React, { useState, useEffect } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const ContactBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const contactInfo = {
    address: {
      street: "Sheikh Zayed Road",
      city: "Dubai",
      state: "Dubai",
      zip: "",
      country: "UAE"
    },
    phone: "+971 50 576 1914",
    email: "info@dubaibusinessconnect.com",
    hours: "Mon-Fri: 8:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM"
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to handle smooth scroll to contact form
  const scrollToContactForm = (e, formType = 'general') => {
    e.preventDefault();
    
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      if (!isExpanded) {
        setIsExpanded(true);
        setTimeout(() => {
          console.log(`Redirecting to ${formType} form`);
        }, 500);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function to open directions in Google Maps
  const getDirections = (e) => {
    e.preventDefault();
    const address = `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.country}`;
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  // Function to schedule a call
  const scheduleCall = (e) => {
    e.preventDefault();
    const calendlyUrl = `https://calendly.com/dubaibusinessconnect/30min`;
    window.open(calendlyUrl, '_blank');
  };

  return (
    <div className={`relative w-full max-w-6xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* Main Banner */}
      <div className="relative bg-gradient-to-r from-[#19CAB7] via-[#16b3a4] to-[#139c8d] rounded-2xl shadow-2xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/15 animate-pulse"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 p-8">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                Start Your Dubai Business Journey
              </h2>
              <p className="text-white/90 text-lg font-medium">
                Expert company formation in UAE - Free Zone, Mainland & Offshore
              </p>
            </div>
            
            <button
              onClick={toggleExpand}
              className="flex items-center space-x-2 bg-white/25 hover:bg-white/35 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg border border-white/20"
            >
              <span className="font-semibold">
                {isExpanded ? 'Show Less' : 'Contact Details'}
              </span>
              {isExpanded ? (
                <ChevronUpIcon className="w-5 h-5 animate-bounce" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 animate-bounce" />
              )}
            </button>
          </div>

          {/* Contact Details - Always Visible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Address */}
            <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/25 rounded-full group-hover:bg-white/35 transition-colors duration-300">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Dubai Office</h3>
                  <p className="text-white/90 text-sm">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}, {contactInfo.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/25 rounded-full group-hover:bg-white/35 transition-colors duration-300">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Call Us Now</h3>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-white/90 text-sm hover:text-white transition-colors duration-200 font-medium"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/25 rounded-full group-hover:bg-white/35 transition-colors duration-300">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-white/90 text-sm hover:text-white transition-colors duration-200 font-medium"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Section */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Company Information */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-4 flex items-center">
                    <MapPinIcon className="w-6 h-6 mr-2" />
                    Dubai Business Connect
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p><strong className="text-white">Location:</strong> {contactInfo.address.street}, {contactInfo.address.city}</p>
                    <p><strong className="text-white">Country:</strong> {contactInfo.address.country}</p>
                    <p><strong className="text-white">Specialization:</strong> UAE Company Formation</p>
                    <p><strong className="text-white">Services:</strong> Free Zone, Mainland, Offshore Setup</p>
                    {/* <p><strong className="text-white">Certification:</strong> RAKEZ Certified Partner</p> */}
                  </div>
                </div>

                {/* Business Hours & Support */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-4 flex items-center">
                    <ClockIcon className="w-6 h-6 mr-2" />
                    Business Hours & Support
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p><strong className="text-white">Business Hours:</strong> {contactInfo.hours}</p>
                    <p><strong className="text-white">Emergency Support:</strong> +971 50 576 1914</p>
                    <p><strong className="text-white">General Inquiries:</strong> info@dubaibusinessconnect.com</p>
                    <p><strong className="text-white">Support:</strong> info@dubaibusinessconnect.com</p>
                    <p><strong className="text-white">Clients Served:</strong> 10,000+ Entrepreneurs</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons with Links */}
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <a 
                  href="#" 
                  onClick={getDirections}
                  className="bg-white text-[#19CAB7] px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center"
                >
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  Visit Our Office
                </a>
                
                <a 
                  href="#contact-form" 
                  onClick={(e) => scrollToContactForm(e, 'consultation')}
                  className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/15 transition-all duration-300 hover:scale-105 inline-flex items-center"
                >
                  <ClockIcon className="w-4 h-4 mr-2" />
                  Free Consultation
                </a>
                
                <a 
                  href="#contact-form" 
                  onClick={(e) => scrollToContactForm(e, 'business-setup')}
                  className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/15 transition-all duration-300 hover:scale-105 inline-flex items-center"
                >
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  Start Business Setup
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="#contact-form" 
          onClick={(e) => scrollToContactForm(e, 'quick-inquiry')}
          className="bg-[#19CAB7] hover:bg-[#16b3a4] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse border-2 border-white inline-block"
          title="Quick Business Inquiry"
        >
          <emailIcon className="w-6 h-6" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default ContactBanner;