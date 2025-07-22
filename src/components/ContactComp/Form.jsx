import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_feth3xs";
    const templateID = "template_zl0sdh8"; // You can change this if needed
    const publicKey = "cVVb5LAcAeB0fjvof";

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 30000);
      })
      .catch(() => {
        setErrorMessage("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-2xl border border-[#19CAB7]">
        <h2 className="text-4xl font-bold mb-10 text-center text-[#19CAB7] uppercase tracking-wide">
          Please fill in the form below
        </h2>

        {isSubmitted ? (
          <div className="text-center text-2xl text-green-600 font-semibold">
            ✅ Thank you! Your message has been sent.
          </div>
        ) : (
          <>
            {errorMessage && (
              <div className="text-center text-red-500 mb-4 font-medium">{errorMessage}</div>
            )}

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Enter first name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Enter last name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter email"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Mobile Number*</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="e.g. 501111111"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]"
                />
              </div>


              {/* Country of Residence */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Country of Residence*</label>
                <select
                  name="residence"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#19CAB7]"
                >
                  <option value="">-- Please select --</option>
                  <option>India</option>
                  <option>UAE</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Notes */}
              <div className="col-span-1 md:col-span-2 flex flex-col">
                <label className="text-sm font-semibold mb-2">Notes*</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Type your message here..."
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19CAB7]"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="col-span-1 md:col-span-2 text-center mt-4">
                <button
                  type="submit"
                  className="bg-[#19CAB7] text-white px-12 py-3 rounded-full font-semibold hover:bg-[#17b3a4] transition-all duration-300 shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Form;
