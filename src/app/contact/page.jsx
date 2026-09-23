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
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [subscribeNews, setSubscribeNews] = useState(false);

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
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
                name="firstName"
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
                name="lastName"
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

            {/* Checkbox 1 */}
            <div className="flex items-start gap-2.5 pt-2">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#2b353b] focus:ring-[#2b353b] cursor-pointer"
              />
              <label
                htmlFor="agreeTerms"
                className={`${lato.className} text-xs text-gray-600 leading-tight cursor-pointer`}
              >
                I agree to the Terms of Service & Privacy Policy.
              </label>
            </div>

            {/* Checkbox 2 */}
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="subscribeNews"
                checked={subscribeNews}
                onChange={(e) => setSubscribeNews(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#2b353b] focus:ring-[#2b353b] cursor-pointer"
              />
              <label
                htmlFor="subscribeNews"
                className={`${lato.className} text-xs text-gray-600 leading-tight cursor-pointer`}
              >
                Receive updates, special offers, and newsletter emails.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className={`${nunito.className} w-full bg-[#2b353b] hover:bg-[#1f282d] text-white py-3 rounded-md text-sm font-semibold transition-all duration-200 active:scale-[0.99]`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
