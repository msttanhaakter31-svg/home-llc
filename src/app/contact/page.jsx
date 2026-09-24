"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Nunito, Lato } from "next/font/google";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactPage() {
  const [phoneValue, setPhoneValue] = useState("");
  const [result, setResult] = useState("");
  const [agreeTransactionalSMS, setAgreeTransactionalSMS] = useState(false);
  const [agreeMarketingSMS, setAgreeMarketingSMS] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    // Web3Forms Access Key
    formData.append("access_key", "57b7eb44-4a37-42be-bd55-4a2c6a1642a1");
    if (phoneValue) {
      formData.append("Phone Number", phoneValue);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
        setPhoneValue("");
        setAgreeTransactionalSMS(false);
        setAgreeMarketingSMS(false);
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
    <main className="relative w-full py-16 sm:py-24 px-6 lg:px-12 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/image_bg.png"
        alt="Background Pattern"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
        {/* Title */}
        <h1
          className={`${nunito.className} text-[32px] sm:text-[40px] font-bold text-[#1f2438] mb-12 text-center tracking-tight`}
        >
          Contact Us
        </h1>

        {/* Form Container */}
        <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-dashed border-gray-300">
          <form className="space-y-5" onSubmit={onSubmit}>
            {/* First Name - REQUIRED */}
            <div className="space-y-1.5">
              <label
                htmlFor="firstName"
                className={`${lato.className} block text-xs font-bold text-gray-800`}
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="First Name"
                required
                placeholder="First Name"
                className="w-full bg-[#f4f7f9] border-none rounded-md px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
              />
            </div>

            {/* Last Name - REQUIRED */}
            <div className="space-y-1.5">
              <label
                htmlFor="lastName"
                className={`${lato.className} block text-xs font-bold text-gray-800`}
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="Last Name"
                required
                placeholder="Last Name"
                className="w-full bg-[#f4f7f9] border-none rounded-md px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
              />
            </div>

            {/* Email - REQUIRED */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className={`${lato.className} block text-xs font-bold text-gray-800`}
              >
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full bg-[#f4f7f9] border-none rounded-md pl-10 pr-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                />
              </div>
            </div>

            {/* Phone - OPTIONAL with All Countries */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className={`${lato.className} block text-xs font-bold text-gray-800`}
              >
                Phone{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <div className="bg-[#f4f7f9] rounded-md px-3.5 py-2 text-sm text-gray-800 focus-within:ring-2 focus-within:ring-gray-400 transition-all">
                <PhoneInput
                  defaultCountry="BD"
                  placeholder="Enter phone number"
                  value={phoneValue}
                  onChange={setPhoneValue}
                  className="w-full flex items-center gap-2 [&>input]:bg-transparent [&>input]:outline-none [&>input]:w-full [&>input]:text-sm"
                />
              </div>
            </div>

            {/* A2P 10DLC & TCPA Unbundled Checkboxes */}
            <div className="space-y-3 pt-1">
              {/* Checkbox 1: Transactional / Booking SMS */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="agreeTransactionalSMS"
                  name="Transactional SMS Consent"
                  value="Accepted"
                  checked={agreeTransactionalSMS}
                  onChange={(e) => setAgreeTransactionalSMS(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#2b353b] focus:ring-[#2b353b] cursor-pointer shrink-0"
                />
                <label
                  htmlFor="agreeTransactionalSMS"
                  className={`${lato.className} text-[11px] text-gray-600 leading-normal cursor-pointer`}
                >
                  I agree to receive automated transactional and booking alert
                  SMS messages from [Company Name]. Message and data rates may
                  apply. Reply STOP to cancel or HELP for help.
                </label>
              </div>

              {/* Checkbox 2: Marketing & Newsletters */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="agreeMarketingSMS"
                  name="Marketing SMS Consent"
                  value="Accepted"
                  checked={agreeMarketingSMS}
                  onChange={(e) => setAgreeMarketingSMS(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#2b353b] focus:ring-[#2b353b] cursor-pointer shrink-0"
                />
                <label
                  htmlFor="agreeMarketingSMS"
                  className={`${lato.className} text-[11px] text-gray-600 leading-normal cursor-pointer`}
                >
                  I agree to receive recurring promotional SMS messages,
                  updates, and newsletters from [Company Name]. Consent is not a
                  condition of purchase. Message frequency varies. Text STOP to
                  unsubscribe, HELP for assistance.
                </label>
              </div>

              {/* Legal Terms Disclaimer */}
              <p className={`${lato.className} text-[11px] text-gray-400 pt-1`}>
                By submitting this form, you agree to our{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black font-medium"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black font-medium"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Submit Button & Status Message */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className={`${nunito.className} w-full bg-[#2b353b] hover:bg-[#1f282d] text-white py-3 rounded-md text-sm font-semibold transition-all duration-200 active:scale-[0.99] cursor-pointer`}
              >
                Submit
              </button>

              {result && (
                <p
                  className={`${
                    lato.className
                  } text-xs font-medium text-center ${
                    result.includes("Successfully")
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {result}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
