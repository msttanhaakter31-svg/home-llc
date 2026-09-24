"use client";

import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    // Web3Forms Access Key
    formData.append("access_key", "e20acabc-de27-4de8-a0a9-967e0e1415ec");
    formData.append("subject", "New Inquiry from Castle Home LLC Website");
    formData.append("from_name", "Castle Home LLC Web Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#fcfcfc] py-20 md:py-28 text-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Side: Header & Intro Text */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase block">
            Initiate Protocol
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-[56px] font-normal leading-[1.08] tracking-tight text-neutral-900">
            Start the <br /> conversation.
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-2 max-w-md">
            Whether you have a fully formed brief or just a fragment of an idea,
            we're ready to listen. Fill out the details, and our lead architect
            will be in touch within 24 hours.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="space-y-8">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="relative z-0">
                <input
                  type="text"
                  id="first_name"
                  name="First Name"
                  placeholder=" "
                  required
                  className="peer block w-full appearance-none border-b border-gray-300 bg-transparent pb-3 pt-4 text-sm text-black focus:border-black focus:outline-none focus:ring-0 transition-colors"
                />
                <label
                  htmlFor="first_name"
                  className="absolute top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
                >
                  First Name *
                </label>
              </div>

              {/* Last Name */}
              <div className="relative z-0">
                <input
                  type="text"
                  id="last_name"
                  name="Last Name"
                  placeholder=" "
                  required
                  className="peer block w-full appearance-none border-b border-gray-300 bg-transparent pb-3 pt-4 text-sm text-black focus:border-black focus:outline-none focus:ring-0 transition-colors"
                />
                <label
                  htmlFor="last_name"
                  className="absolute top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
                >
                  Last Name *
                </label>
              </div>
            </div>

            {/* Company Name */}
            <div className="relative z-0">
              <input
                type="text"
                id="company_name"
                name="Company Name"
                placeholder=" "
                className="peer block w-full appearance-none border-b border-gray-300 bg-transparent pb-3 pt-4 text-sm text-black focus:border-black focus:outline-none focus:ring-0 transition-colors"
              />
              <label
                htmlFor="company_name"
                className="absolute top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
              >
                Company Name
              </label>
            </div>

            {/* Phone Number */}
            <div className="relative z-0">
              <input
                type="tel"
                id="phone_number"
                name="Phone Number"
                placeholder=" "
                required
                className="peer block w-full appearance-none border-b border-gray-300 bg-transparent pb-3 pt-4 text-sm text-black focus:border-black focus:outline-none focus:ring-0 transition-colors"
              />
              <label
                htmlFor="phone_number"
                className="absolute top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
              >
                Phone Number *
              </label>
            </div>

            {/* Unbundled Explicit Consent Checkboxes (A2P 10DLC & TCPA Compliant) */}
            <div className="space-y-4 pt-2">
              {/* Checkbox 1: Transactional */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="Transactional SMS Consent"
                  value="Accepted"
                  className="mt-0.5 h-4 w-4 rounded-sm border-gray-300 text-black focus:ring-0 cursor-pointer accent-black shrink-0"
                />
                <span className="text-xs text-gray-600 leading-normal">
                  I agree to receive transactional text messages from Castle Home LLC, including responses to my property inquiries, appointment scheduling confirmation, and customer support updates. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance. Reply STOP to unsubscribe at any time.
                </span>
              </label>

              {/* Checkbox 2: Portfolio & Consulting Reviews */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="Marketing SMS Consent"
                  value="Accepted"
                  className="mt-0.5 h-4 w-4 rounded-sm border-gray-300 text-black focus:ring-0 cursor-pointer accent-black shrink-0"
                />
                <span className="text-xs text-gray-500 leading-normal">
                  I consent to receive text messages from Castle Home LLC related to scheduled property evaluations, client-initiated market consulting updates, and administrative portfolio reviews. Message frequency may vary. Msg &amp; data rates may apply. Text HELP for assistance. Reply STOP to unsubscribe at any time.
                </span>
              </label>

              {/* Required Terms Agreement Disclaimer */}
              <p className="text-[11px] text-gray-400 pt-1">
                By submitting this form, you agree to our{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black font-medium"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black font-medium"
                >
                  Terms and Conditions
                </a>
                .
              </p>
            </div>

            {/* Submit Button & Status Message */}
            <div className="pt-4 space-y-5">
              <button
                type="submit"
                className="group relative bg-[#121212] text-white px-8 py-4 text-xs font-medium tracking-wider flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all duration-300 cursor-pointer"
              >
                <span>Submit Request</span>
                <span className="text-sm transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              {/* Submission Result Text */}
              {result && (
                <p
                  className={`text-xs font-medium ${
                    result.includes("Successfully")
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {result}
                </p>
              )}

              {/* Legal Links Footer */}
              <div className="flex items-center gap-4 text-sm font-semibold text-gray-700 pt-1">
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black hover:underline transition-all inline-flex items-center gap-1"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black hover:underline transition-all inline-flex items-center gap-1"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
