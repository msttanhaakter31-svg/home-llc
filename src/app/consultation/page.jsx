"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nunito, Lato } from "next/font/google";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:30 AM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ConsultationPage() {
  // Calendar State (Current Date reference: Sep 25, 2026)
  const today = new Date(2026, 8, 25);
  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(today);

  // Time Selection State
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [timePeriod, setTimePeriod] = useState("AM");
  const [customHour, setCustomHour] = useState("10");
  const [customMinute, setCustomMinute] = useState("00");

  // Form Fields State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [assistanceNeeds, setAssistanceNeeds] = useState("");

  // Checkboxes State with Exact User Legal Copy
  const [agreeTransactional, setAgreeTransactional] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  // Submission State
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calendar Helpers
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const isPastDay = (d) => {
    const check = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const base = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return check < base;
  };

  const handleCustomTimeApply = (h, m, p) => {
    const formatted = `${h.padStart(2, "0")}:${m} ${p}`;
    setSelectedTime(formatted);
  };

  // Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Scheduling your consultation...");

    const formData = new FormData();
    formData.append("access_key", "e20acabc-de27-4de8-a0a9-967e0e1415ec");
    formData.append("subject", `New Property Consultation Booking: ${name}`);
    formData.append("from_name", "Castle Home LLC Web Portal");
    formData.append("replyto", email);

    formData.append("Inquiry Type", "Property Consultation Request");
    formData.append("Client Name", name);
    formData.append("Client Email", email);
    formData.append("Phone Number", phone ? phone : "Not provided");
    if (assistanceNeeds) {
      formData.append("Real Estate Needs", assistanceNeeds);
    }

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    formData.append("Consultation Date", formattedDate);
    formData.append("Consultation Time", selectedTime);

    formData.append(
      "Transactional SMS Consent",
      agreeTransactional ? "Accepted (Opt-in)" : "Declined"
    );
    formData.append(
      "Marketing SMS Consent",
      agreeMarketing ? "Accepted (Opt-in)" : "Declined"
    );
    formData.append("Submission Page", "https://castlehomellc.com/consultation");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "Your Property Consultation has been scheduled successfully! Our real estate specialist will reach out shortly."
        );
        setName("");
        setEmail("");
        setPhone("");
        setAssistanceNeeds("");
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

      <div className="w-full max-w-5xl mx-auto">
        {/* Main 2-Column Rounded Card in Charcoal Gray & White Theme */}
        <div className="w-full bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Calendar & Time Selection (Charcoal Gray Palette) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[12px] font-bold tracking-wider text-gray-500 uppercase block mb-1">
                  Appointment Scheduling
                </span>
                <h1
                  className={`${nunito.className} text-2xl sm:text-3xl font-extrabold text-[#1f2430] tracking-tight`}
                >
                  Schedule Consultation
                </h1>
                <p className={`${lato.className} text-sm text-gray-500 mt-1`}>
                  Choose a convenient date and time slot for your property consultation.
                </p>
              </div>

              {/* Monthly Interactive Calendar */}
              <div className="bg-[#f8fafc] border border-gray-200/80 rounded-2xl p-5 shadow-xs">
                {/* Header: Month & Navigation */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`${nunito.className} text-base font-bold text-[#1f2430]`}
                  >
                    {MONTH_NAMES[month]} {year}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={prevMonth}
                      aria-label="Previous Month"
                      className="p-1.5 rounded-lg text-gray-500 hover:text-black hover:bg-gray-200/70 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={nextMonth}
                      aria-label="Next Month"
                      className="p-1.5 rounded-lg text-gray-500 hover:text-black hover:bg-gray-200/70 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Days of Week Row */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-400 mb-2">
                  {DAYS_OF_WEEK.map((d) => (
                    <div key={d} className="py-1">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Days of Month Grid */}
                <div className="grid grid-cols-7 gap-1.5">
                  {/* Previous month filler */}
                  {Array.from({ length: firstDayIndex }).map((_, i) => {
                    const dayNum = daysInPrevMonth - firstDayIndex + i + 1;
                    return (
                      <div
                        key={`prev-${i}`}
                        className="h-9 flex items-center justify-center text-xs text-gray-300 font-medium select-none"
                      >
                        {dayNum}
                      </div>
                    );
                  })}

                  {/* Active month days */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const dayNum = i + 1;
                    const dateObj = new Date(year, month, dayNum);
                    const isSelected = isSameDay(dateObj, selectedDate);
                    const isPast = isPastDay(dateObj);

                    return (
                      <button
                        key={`curr-${dayNum}`}
                        type="button"
                        disabled={isPast}
                        onClick={() => setSelectedDate(dateObj)}
                        className={`h-9 w-full rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                          isSelected
                            ? "bg-[#242830] text-white shadow-md shadow-gray-700/20 scale-105"
                            : isPast
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-700 hover:bg-gray-200/70 hover:text-[#1f2430]"
                        }`}
                      >
                        {dayNum}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1f2430]">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span>Select Time</span>
                </div>

                {/* Quick Time Slots in Gray Palette */}
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#242830] text-white shadow-sm"
                            : "bg-[#edf2f7] text-gray-700 hover:bg-[#e2e8f0]"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Time Selector with AM / PM */}
                <div className="pt-2 bg-[#f8fafc] border border-gray-200/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-gray-500 font-medium">Custom Time:</span>
                  <div className="flex items-center gap-2">
                    <select
                      value={customHour}
                      onChange={(e) => {
                        setCustomHour(e.target.value);
                        handleCustomTimeApply(
                          e.target.value,
                          customMinute,
                          timePeriod
                        );
                      }}
                      className="bg-white border border-gray-300 rounded-lg px-2 py-1 font-semibold text-gray-800 outline-none"
                    >
                      {[
                        "08",
                        "09",
                        "10",
                        "11",
                        "12",
                        "01",
                        "02",
                        "03",
                        "04",
                        "05",
                        "06",
                      ].map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                    <span>:</span>
                    <select
                      value={customMinute}
                      onChange={(e) => {
                        setCustomMinute(e.target.value);
                        handleCustomTimeApply(
                          customHour,
                          e.target.value,
                          timePeriod
                        );
                      }}
                      className="bg-white border border-gray-300 rounded-lg px-2 py-1 font-semibold text-gray-800 outline-none"
                    >
                      {["00", "15", "30", "45"].map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>

                    {/* AM / PM Toggle in Gray Theme */}
                    <div className="inline-flex rounded-lg bg-gray-200 p-0.5 font-bold">
                      <button
                        type="button"
                        onClick={() => {
                          setTimePeriod("AM");
                          handleCustomTimeApply(customHour, customMinute, "AM");
                        }}
                        className={`px-2 py-0.5 rounded-md text-[11px] transition-all cursor-pointer ${
                          timePeriod === "AM"
                            ? "bg-[#242830] text-white shadow-xs"
                            : "text-gray-600 hover:text-black"
                        }`}
                      >
                        AM
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTimePeriod("PM");
                          handleCustomTimeApply(customHour, customMinute, "PM");
                        }}
                        className={`px-2 py-0.5 rounded-md text-[11px] transition-all cursor-pointer ${
                          timePeriod === "PM"
                            ? "bg-[#242830] text-white shadow-xs"
                            : "text-gray-600 hover:text-black"
                        }`}
                      >
                        PM
                      </button>
                    </div>
                  </div>
                </div>

                {/* Selected Appointment Confirmation Badge */}
                <div className="bg-[#f3f4f6] border border-gray-300/80 rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-semibold text-[#1f2430]">
                  <CheckCircle2 className="w-4 h-4 text-gray-700 shrink-0" />
                  <span>
                    Selected:{" "}
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    at {selectedTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Form Inputs & Exact Checkboxes */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[12px] font-bold tracking-wider text-gray-500 uppercase block mb-1">
                  Contact Information
                </span>
                <h2
                  className={`${nunito.className} text-2xl sm:text-3xl font-extrabold text-[#1f2430] tracking-tight`}
                >
                  Your Details
                </h2>
                <p className={`${lato.className} text-sm text-gray-500 mt-1`}>
                  Please provide your contact information to confirm your appointment.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input with Inner Placeholder */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-300/30 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
                  />
                </div>

                {/* Email Input with Inner Placeholder */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-300/30 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
                  />
                </div>

                {/* Phone (optional) Input with Inner Placeholder */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="Phone (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone (optional)"
                    className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-300/30 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
                  />
                </div>

                {/* How can we assist you with your real estate needs? (optional) */}
                <div className="relative">
                  <textarea
                    id="consultationNeeds"
                    name="Real Estate Needs (optional)"
                    rows={3}
                    value={assistanceNeeds}
                    onChange={(e) => setAssistanceNeeds(e.target.value)}
                    placeholder="How can we assist you with your real estate needs? (optional)"
                    className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-300/30 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none resize-none"
                  ></textarea>
                </div>

                {/* Two Exact Checkboxes Provided by User */}
                <div className="space-y-3.5 pt-2">
                  {/* Checkbox 1: Transactional */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeTransactional"
                      checked={agreeTransactional}
                      onChange={(e) => setAgreeTransactional(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#242830] focus:ring-gray-500 cursor-pointer shrink-0 accent-[#242830]"
                    />
                    <label
                      htmlFor="agreeTransactional"
                      className={`${lato.className} text-xs text-gray-500 leading-relaxed cursor-pointer`}
                    >
                      I agree to receive transactional text messages from Castle Home LLC, including responses to my property inquiries, appointment scheduling confirmation, and customer support updates. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance. Reply STOP to unsubscribe at any time.
                    </label>
                  </div>

                  {/* Checkbox 2: Portfolio & Consulting Reviews */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeMarketing"
                      checked={agreeMarketing}
                      onChange={(e) => setAgreeMarketing(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#242830] focus:ring-gray-500 cursor-pointer shrink-0 accent-[#242830]"
                    />
                    <label
                      htmlFor="agreeMarketing"
                      className={`${lato.className} text-xs text-gray-500 leading-relaxed cursor-pointer`}
                    >
                      I consent to receive text messages from Castle Home LLC related to scheduled property evaluations, client-initiated market consulting updates, and administrative portfolio reviews. Message frequency may vary. Msg &amp; data rates may apply. Text HELP for assistance. Reply STOP to unsubscribe at any time.
                    </label>
                  </div>

                  {/* Privacy Policy & Terms and Conditions Links */}
                  <p className={`${lato.className} text-[11px] text-gray-400 pt-1`}>
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
                    } w-auto min-w-[220px] sm:min-w-[260px] bg-[#242830] hover:bg-[#181b20] text-white text-[15px] sm:text-[16px] font-bold py-3 px-8 rounded-xl inline-flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer disabled:opacity-70 mx-auto`}
                  >
                    <span>
                      {isSubmitting
                        ? "Scheduling Consultation..."
                        : "Schedule Consultation"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Status Message */}
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
        </div>
      </div>
    </main>
  );
}
