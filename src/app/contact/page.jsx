"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nunito, Lato } from "next/font/google";
import { ArrowRight } from "lucide-react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Exact Legal Checkboxes
  const [agreeTransactional, setAgreeTransactional] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  // Submission State
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your message...");

    const formData = new FormData();
    formData.append("access_key", "e20acabc-de27-4de8-a0a9-967e0e1415ec");
    formData.append("subject", `New General Contact Inquiry: ${firstName} ${lastName}`.trim());
    formData.append("from_name", "Castle Home LLC Web Portal");
    formData.append("replyto", email);

    formData.append("Inquiry Type", "General Contact Inquiry");
    formData.append("First Name", firstName);
    formData.append("Last Name", lastName);
    formData.append("Full Name", `${firstName} ${lastName}`.trim());
    formData.append("Client Email", email);
    formData.append("Phone Number", phone ? phone : "Not provided");

    formData.append(
      "Transactional SMS Consent",
      agreeTransactional ? "Accepted (Opt-in)" : "Declined"
    );
    formData.append(
      "Marketing SMS Consent",
      agreeMarketing ? "Accepted (Opt-in)" : "Declined"
    );
    formData.append("Submission Page", "https://castlehomellc.com/contact");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Your message has been sent successfully! We will get in touch with you soon.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAgreeTransactional(false);
        setAgreeMarketing(false);
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setResult("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative w-full min-h-[90vh] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eef2f7] via-[#f5f7fb] to-[#ebf0f7] flex items-center justify-center overflow-hidden">
      {/* Background Architectural Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25 -z-10">
        <Image
          src="/image_bg.png"
          alt="Background Texture"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="w-full max-w-xl mx-auto">
        {/* Centered Single Column White Card (Reference Design) */}
        <div className="w-full bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-10 transition-all duration-300">
          <div className="text-center mb-8">
            <span className="text-[12px] font-bold tracking-wider text-gray-500 uppercase block mb-1">
              Get In Touch
            </span>
            <h1
              className={`${nunito.className} text-3xl sm:text-4xl font-extrabold text-[#1f2430] tracking-tight`}
            >
              Contact Castle Home LLC
            </h1>
            <p
              className={`${lato.className} text-sm text-gray-500 mt-2 max-w-md mx-auto`}
            >
              Have a question or looking to consult with our property specialists? Fill out the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name & Last Name (Inside border placeholder only, no labels above) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="firstName"
                name="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-300/30 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
              />
              <input
                type="text"
                id="lastName"
                name="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-300/30 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
              />
            </div>

            {/* Email Input with inner placeholder */}
            <input
              type="email"
              id="contactEmail"
              name="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-300/30 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
            />

            {/* Phone (optional) Input with inner placeholder */}
            <input
              type="tel"
              id="contactPhone"
              name="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone (optional)"
              className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-300/30 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
            />

            {/* Two Exact Checkboxes Provided by User */}
            <div className="space-y-3.5 pt-2">
              {/* Checkbox 1: Transactional */}
              <div className="flex items-start gap-3 text-left">
                <input
                  type="checkbox"
                  id="contactAgreeTransactional"
                  checked={agreeTransactional}
                  onChange={(e) => setAgreeTransactional(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#242830] focus:ring-gray-500 cursor-pointer shrink-0 accent-[#242830]"
                />
                <label
                  htmlFor="contactAgreeTransactional"
                  className={`${lato.className} text-xs text-gray-500 leading-relaxed cursor-pointer`}
                >
                  I agree to receive transactional text messages from Castle Home LLC, including responses to my property inquiries, appointment scheduling confirmation, and customer support updates. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance. Reply STOP to unsubscribe at any time.
                </label>
              </div>

              {/* Checkbox 2: Portfolio & Consulting Reviews */}
              <div className="flex items-start gap-3 text-left">
                <input
                  type="checkbox"
                  id="contactAgreeMarketing"
                  checked={agreeMarketing}
                  onChange={(e) => setAgreeMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#242830] focus:ring-gray-500 cursor-pointer shrink-0 accent-[#242830]"
                />
                <label
                  htmlFor="contactAgreeMarketing"
                  className={`${lato.className} text-xs text-gray-500 leading-relaxed cursor-pointer`}
                >
                  I consent to receive text messages from Castle Home LLC related to scheduled property evaluations, client-initiated market consulting updates, and administrative portfolio reviews. Message frequency may vary. Msg &amp; data rates may apply. Text HELP for assistance. Reply STOP to unsubscribe at any time.
                </label>
              </div>

              {/* Privacy Policy & Terms and Conditions Agreement Link */}
              <p
                className={`${lato.className} text-[11px] text-gray-400 pt-1 text-center sm:text-left`}
              >
                By submitting, you agree to our{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-black font-medium"
                >
                  Privacy Policy
                </Link>{" "}
                &amp;{" "}
                <Link
                  href="/terms"
                  className="underline hover:text-black font-medium"
                >
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>

            {/* Submit Button - Centered & Compact in Charcoal Gray */}
            <div className="pt-3 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  nunito.className
                } w-auto min-w-[200px] sm:min-w-[240px] bg-[#242830] hover:bg-[#181b20] text-white text-[15px] sm:text-[16px] font-bold py-3 px-8 rounded-xl inline-flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer disabled:opacity-70 mx-auto`}
              >
                <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Submission Status Message */}
            {result && (
              <div
                className={`p-3.5 rounded-xl text-xs font-semibold text-center ${
                  result.includes("successfully") ||
                  result.includes("Successfully")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-600 border border-red-200"
                }`}
              >
                {result}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
