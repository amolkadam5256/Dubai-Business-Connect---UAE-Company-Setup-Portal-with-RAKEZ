import React, { useState } from "react";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Comprehensive country data with flags and codes
  const countries = [
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
    { name: "Qatar", code: "+974", flag: "🇶🇦" },
    { name: "Oman", code: "+968", flag: "🇴🇲" },
    { name: "Kuwait", code: "+965", flag: "🇰🇼" },
    { name: "Bahrain", code: "+973", flag: "🇧🇭" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "Germany", code: "+49", flag: "🇩🇪" },
    { name: "France", code: "+33", flag: "🇫🇷" },
    { name: "Singapore", code: "+65", flag: "🇸🇬" },
    { name: "Malaysia", code: "+60", flag: "🇲🇾" },
    { name: "Japan", code: "+81", flag: "🇯🇵" },
    { name: "South Korea", code: "+82", flag: "🇰🇷" },
    { name: "China", code: "+86", flag: "🇨🇳" },
    { name: "Brazil", code: "+55", flag: "🇧🇷" },
    { name: "South Africa", code: "+27", flag: "🇿🇦" },
    { name: "Other", code: "+", flag: "🌍" }
  ];

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);

    const country = countries.find(c => c.name === countryName);
    if (country) {
      setCountryCode(country.code);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const form = e.target;
    const formData = new FormData(form);

    // Add proper form data structure for Web3Forms
    const data = {
      access_key: "f77f930f-c45b-437a-abd1-f021ec73e813", // Replace with your actual key
      subject: "New Contact Form Submission",
      from_name: "Company Website",
      botcheck: false,
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      residence: formData.get('residence'),
      mobile: formData.get('mobile'),
      message: formData.get('message')
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: '🎉 Your message has been sent successfully! We\'ll get back to you within 24 hours.'
        });
        setIsSubmitted(true);
        form.reset();
        setSelectedCountry("");
        setCountryCode("");
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: '⚠️ Failed to send message. Please check your connection and try again, or contact us directly at hello@company.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitStatus({ type: '', message: '' });
    setSelectedCountry("");
    setCountryCode("");
  };

  // Test function to check API key
  const testAPIKey = async () => {
    try {
      const response = await fetch("https://api.web3forms.com/check-key", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "f77f930f-c45b-437a-abd1-f021ec73e813"
        })
      });
      const result = await response.json();
      console.log("API Key Check:", result);
    } catch (error) {
      console.error("API Key Check Failed:", error);
    }
  };

  // Uncomment the line below to test your API key
  // useEffect(() => { testAPIKey(); }, []);

  return (
    <section id="contact-form" className="min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#19CAB7]/30 relative overflow-hidden">

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#19CAB7]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#19CAB7]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-[#19CAB7] uppercase tracking-wide drop-shadow-sm">
            Get In Touch With Us
          </h2>

          {/* Status Messages */}
          {submitStatus.message && (
            <div className={`mb-6 p-6 rounded-2xl border-2 text-center animate-fade-in ${submitStatus.type === 'success'
                ? 'bg-gradient-to-r from-green-50 to-emerald-100 border-green-300 text-green-800'
                : 'bg-gradient-to-r from-red-50 to-orange-100 border-red-300 text-red-800'
              }`}>
              <div className="text-3xl mb-3">
                {submitStatus.type === 'success' ? '🎉' : '⚠️'}
              </div>
              <p className="font-semibold text-lg">{submitStatus.message}</p>
              {submitStatus.type === 'error' && (
                <button
                  onClick={resetForm}
                  className="mt-3 bg-[#19CAB7] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#17b3a4] transition-colors"
                >
                  Try Again
                </button>
              )}
            </div>
          )}

          {isSubmitted ? (
            /* Success Animation */
            <div className="text-center py-12 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border-2 border-green-300">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-green-400 rounded-full flex items-center justify-center text-4xl text-white animate-bounce">
                    ✓
                  </div>
                  <div className="absolute inset-0 border-4 border-green-300 rounded-full animate-ping"></div>
                </div>
              </div>

              <div className="text-2xl md:text-3xl text-green-700 font-bold mb-4">
                Message Sent Successfully!
              </div>

              <p className="text-gray-700 text-lg mb-6 max-w-md mx-auto">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetForm}
                  className="bg-[#19CAB7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#17b3a4] transition-all duration-300 shadow-md hover:scale-105"
                >
                  Send Another Message
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="border-2 border-[#19CAB7] text-[#19CAB7] px-8 py-3 rounded-full font-semibold hover:bg-[#19CAB7] hover:text-white transition-all duration-300"
                >
                  Back to Top
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {/* First Name */}
              <div className="flex flex-col group">
                <label className="text-sm font-semibold mb-3 text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-[#19CAB7] rounded-full mr-2"></span>
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Enter your first name"
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#19CAB7] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-[#19CAB7]/50"
                  disabled={isSubmitting}
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col group">
                <label className="text-sm font-semibold mb-3 text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-[#19CAB7] rounded-full mr-2"></span>
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Enter your last name"
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#19CAB7] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-[#19CAB7]/50"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col group">
                <label className="text-sm font-semibold mb-3 text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-[#19CAB7] rounded-full mr-2"></span>
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#19CAB7] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-[#19CAB7]/50"
                  disabled={isSubmitting}
                />
              </div>

              {/* Country of Residence */}
              <div className="flex flex-col group">
                <label className="text-sm font-semibold mb-3 text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-[#19CAB7] rounded-full mr-2"></span>
                  Country of Residence*
                </label>
                <div className="relative">
                  <select
                    name="residence"
                    required
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#19CAB7] focus:border-transparent transition-all duration-300 appearance-none cursor-pointer group-hover:border-[#19CAB7]/50"
                    disabled={isSubmitting}
                  >
                    <option value="">-- Select Your Country --</option>
                    {countries.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.flag} {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    ▼
                  </div>
                </div>
              </div>

              {/* Mobile Number with Country Code */}
              <div className="col-span-1 md:col-span-2 flex flex-col group">
                <label className="text-sm font-semibold mb-3 text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-[#19CAB7] rounded-full mr-2"></span>
                  Mobile Number*
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1 max-w-[200px]">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-500">🌍</span>
                    </div>
                    <input
                      type="text"
                      value={countryCode}
                      readOnly
                      placeholder="Code"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-700 font-mono cursor-not-allowed"
                    />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="Enter your mobile number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#19CAB7] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-[#19CAB7]/50"
                    disabled={isSubmitting}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Select your country first to see the country code
                </p>
              </div>

              {/* Message */}
              <div className="col-span-1 md:col-span-2 flex flex-col group">
                <label className="text-sm font-semibold mb-3 text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-[#19CAB7] rounded-full mr-2"></span>
                  Your Message*
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us how we can help you... What services are you interested in? Any specific requirements?"
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#19CAB7] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-vertical group-hover:border-[#19CAB7]/50"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 text-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#19CAB7] to-[#16b3a4] text-white px-12 py-4 rounded-full font-semibold hover:from-[#17b3a4] hover:to-[#139c8d] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>📧</span>
                      Send Message
                      <span>→</span>
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  ✨ We'll respond within 24 hours. Your information is secure with us.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;