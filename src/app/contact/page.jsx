"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Nunito, Lato } from "next/font/google";
import {
  Calendar as CalendarIcon,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Preset consultation time slots
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

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialMode =
    searchParams.get("mode") === "consultation" ||
    searchParams.get("type") === "consultation"
      ? "consultation"
      : "contact";

  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    const requestedMode =
      searchParams.get("mode") || searchParams.get("type");
    if (requestedMode === "consultation") {
      setMode("consultation");
    } else if (requestedMode === "contact") {
      setMode("contact");
    }
  }, [searchParams]);

  // Calendar State
  const today = new Date(2026, 8, 25); // Current date reference: Sep 25, 2026
  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(today);

  // Time State
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [timePeriod, setTimePeriod] = useState("AM");
  const [customHour, setCustomHour] = useState("10");
  const [customMinute, setCustomMinute] = useState("00");

  // Form Fields State
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Checkboxes State
  const [agreeTransactionalSMS, setAgreeTransactionalSMS] = useState(false);
  const [agreeMarketingSMS, setAgreeMarketingSMS] = useState(false);

  // Submission State
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calendar Generation Helpers
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

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "57b7eb44-4a37-42be-bd55-4a2c6a1642a1");
    formData.append("Form Type", mode === "consultation" ? "Property Consultation Booking" : "General Contact Inquiry");

    if (mode === "consultation") {
      formData.append("Full Name", fullName);
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      formData.append("Consultation Date", formattedDate);
      formData.append("Consultation Time", selectedTime);
    } else {
      formData.append("First Name", firstName);
      formData.append("Last Name", lastName);
      formData.append("Full Name", `${firstName} ${lastName}`.trim());
      if (message) {
        formData.append("Message", message);
      }
    }

    formData.append("Email", email);
    if (phone) {
      formData.append("Phone Number", phone);
    }

    formData.append(
      "Transactional SMS Consent",
      agreeTransactionalSMS ? "Accepted" : "Declined"
    );
    formData.append(
      "Marketing SMS Consent",
      agreeMarketingSMS ? "Accepted" : "Declined"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          mode === "consultation"
            ? "Your Property Consultation has been booked successfully! Our team will contact you shortly."
            : "Your message has been sent successfully! We will get in touch with you soon."
        );
        // Reset inputs
        setFullName("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAgreeTransactionalSMS(false);
        setAgreeMarketingSMS(false);
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
    <main className="relative w-full min-h-[90vh] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#e8ecf6] via-[#f1f4fa] to-[#eaf0f8] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Architectural Watermark Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
        <Image
          src="/image_bg.png"
          alt="Background Texture"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Subtle Mode Switcher Tabs */}
        <div className="inline-flex items-center p-1.5 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-200/70 mb-8 transition-all">
          <button
            type="button"
            onClick={() => setMode("consultation")}
            className={`${
              nunito.className
            } flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
              mode === "consultation"
                ? "bg-[#5b8bf7] text-white shadow-sm"
                : "text-gray-600 hover:text-black hover:bg-gray-100/60"
            }`}
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Schedule Consultation</span>
          </button>

          <button
            type="button"
            onClick={() => setMode("contact")}
            className={`${
              nunito.className
            } flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
              mode === "contact"
                ? "bg-[#5b8bf7] text-white shadow-sm"
                : "text-gray-600 hover:text-black hover:bg-gray-100/60"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>General Contact</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: PROPERTY CONSULTATION (2-COLUMN: CALENDAR & TIME + DETAILS FORM) */}
        {/* ========================================================================= */}
        {mode === "consultation" ? (
          <div className="w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-10 lg:p-12 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Calendar & Time Selection */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2
                    className={`${nunito.className} text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight`}
                  >
                    Select Date &amp; Time
                  </h2>
                  <p
                    className={`${lato.className} text-sm text-gray-500 mt-1`}
                  >
                    Pick a convenient date and slot for your property consultation.
                  </p>
                </div>

                {/* Calendar Component */}
                <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-5 shadow-inner">
                  {/* Month & Navigation Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`${nunito.className} text-base font-bold text-gray-900`}
                    >
                      {MONTH_NAMES[month]} {year}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={prevMonth}
                        aria-label="Previous Month"
                        className="p-1.5 rounded-lg text-gray-500 hover:text-black hover:bg-gray-200/60 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={nextMonth}
                        aria-label="Next Month"
                        className="p-1.5 rounded-lg text-gray-500 hover:text-black hover:bg-gray-200/60 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Days of Week Header */}
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-400 mb-2">
                    {DAYS_OF_WEEK.map((d) => (
                      <div key={d} className="py-1">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1.5">
                    {/* Previous Month trailing days */}
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

                    {/* Current Month days */}
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
                              ? "bg-[#5b8bf7] text-white shadow-md shadow-[#5b8bf7]/30 scale-105"
                              : isPast
                              ? "text-gray-300 cursor-not-allowed"
                              : "text-gray-700 hover:bg-[#e8effe] hover:text-[#5b8bf7]"
                          }`}
                        >
                          {dayNum}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Selection Section */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
                    <Clock className="w-4 h-4 text-[#5b8bf7]" />
                    <span>Select Time Slot</span>
                  </div>

                  {/* Preset Time Slots */}
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
                              ? "bg-[#5b8bf7] text-white shadow-sm"
                              : "bg-[#edf2f7] text-gray-700 hover:bg-[#e2e8f0]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Time Adjuster with AM / PM */}
                  <div className="pt-2 bg-[#f8fafc] border border-gray-100 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="text-gray-500 font-medium">
                      Custom Time:
                    </span>
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
                        className="bg-white border border-gray-200 rounded-lg px-2 py-1 font-semibold text-gray-800 outline-none"
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
                        className="bg-white border border-gray-200 rounded-lg px-2 py-1 font-semibold text-gray-800 outline-none"
                      >
                        {["00", "15", "30", "45"].map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>

                      {/* AM / PM Toggle */}
                      <div className="inline-flex rounded-lg bg-gray-200 p-0.5 font-bold">
                        <button
                          type="button"
                          onClick={() => {
                            setTimePeriod("AM");
                            handleCustomTimeApply(customHour, customMinute, "AM");
                          }}
                          className={`px-2 py-0.5 rounded-md text-[11px] transition-all cursor-pointer ${
                            timePeriod === "AM"
                              ? "bg-white text-gray-900 shadow-xs"
                              : "text-gray-500"
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
                              ? "bg-white text-gray-900 shadow-xs"
                              : "text-gray-500"
                          }`}
                        >
                          PM
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Selected Summary Badge */}
                  <div className="bg-[#edf5ff] border border-[#d6e6fe] rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-semibold text-[#2859c5]">
                    <CheckCircle2 className="w-4 h-4 text-[#5b8bf7] shrink-0" />
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

              {/* Right Column: Information & Form Matching Reference Style */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2
                    className={`${nunito.className} text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight`}
                  >
                    Your Information
                  </h2>
                  <p
                    className={`${lato.className} text-sm text-gray-500 mt-1`}
                  >
                    Fill out your contact details to lock in your appointment.
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
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Name"
                      className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-[#5b8bf7] focus:ring-4 focus:ring-[#5b8bf7]/15 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
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
                      className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-[#5b8bf7] focus:ring-4 focus:ring-[#5b8bf7]/15 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
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
                      className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-[#5b8bf7] focus:ring-4 focus:ring-[#5b8bf7]/15 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
                    />
                  </div>

                  {/* Two Checkboxes */}
                  <div className="space-y-3 pt-2">
                    {/* Checkbox 1: Transactional / Booking SMS */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agreeTransactionalSMS"
                        checked={agreeTransactionalSMS}
                        onChange={(e) =>
                          setAgreeTransactionalSMS(e.target.checked)
                        }
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5b8bf7] focus:ring-[#5b8bf7] cursor-pointer shrink-0 accent-[#5b8bf7]"
                      />
                      <label
                        htmlFor="agreeTransactionalSMS"
                        className={`${lato.className} text-xs text-gray-500 leading-relaxed cursor-pointer`}
                      >
                        I agree to receive automated transactional and booking
                        alert SMS messages from Castle Home LLC regarding my
                        request. Message and data rates may apply. Reply STOP to
                        cancel or HELP for help.
                      </label>
                    </div>

                    {/* Checkbox 2: Marketing & Promotional SMS */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agreeMarketingSMS"
                        checked={agreeMarketingSMS}
                        onChange={(e) =>
                          setAgreeMarketingSMS(e.target.checked)
                        }
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5b8bf7] focus:ring-[#5b8bf7] cursor-pointer shrink-0 accent-[#5b8bf7]"
                      />
                      <label
                        htmlFor="agreeMarketingSMS"
                        className={`${lato.className} text-xs text-gray-500 leading-relaxed cursor-pointer`}
                      >
                        I agree to receive recurring promotional SMS messages,
                        updates, and newsletters from Castle Home LLC. Consent
                        is not a condition of purchase. Message frequency
                        varies. Text STOP to unsubscribe, HELP for assistance.
                      </label>
                    </div>

                    {/* Terms & Privacy Agreement Link */}
                    <p
                      className={`${lato.className} text-[11px] text-gray-400 pt-1`}
                    >
                      By submitting, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="underline hover:text-black font-medium"
                      >
                        Terms of Service
                      </Link>{" "}
                      &amp;{" "}
                      <Link
                        href="/privacy"
                        className="underline hover:text-black font-medium"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Submit Button styled matching reference */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${
                        nunito.className
                      } w-full bg-[#5b8bf7] hover:bg-[#4878e6] text-white text-[16px] font-bold py-3.5 px-6 rounded-xl flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer disabled:opacity-70`}
                    >
                      <span>
                        {isSubmitting
                          ? "Booking Consultation..."
                          : "Schedule Consultation"}
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Submission Status Message */}
                  {result && (
                    <div
                      className={`p-3 rounded-xl text-xs font-semibold text-center ${
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
        ) : (
          /* ========================================================================= */
          /* VIEW 2: GENERAL CONTACT (CENTERED SINGLE-COLUMN CARD, NO SIDE COLUMNS)  */
          /* ========================================================================= */
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-10 transition-all duration-300">
            <div className="text-center mb-8">
              <h1
                className={`${nunito.className} text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight`}
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
              {/* First Name & Last Name (Inside border placeholder only) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="firstName"
                  name="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-[#5b8bf7] focus:ring-4 focus:ring-[#5b8bf7]/15 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
                />
                <input
                  type="text"
                  id="lastName"
                  name="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-[#5b8bf7] focus:ring-4 focus:ring-[#5b8bf7]/15 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
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
                className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-[#5b8bf7] focus:ring-4 focus:ring-[#5b8bf7]/15 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
              />

              {/* Phone (optional) Input with inner placeholder */}
              <input
                type="tel"
                id="contactPhone"
                name="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (optional)"
                className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-[#5b8bf7] focus:ring-4 focus:ring-[#5b8bf7]/15 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none"
              />

              {/* Message (optional) Input with inner placeholder */}
              <textarea
                id="contactMessage"
                name="Message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we assist you with your real estate needs? (optional)"
                className="w-full bg-[#f0f4f9] hover:bg-[#e8eef5] focus:bg-white border border-transparent focus:border-[#5b8bf7] focus:ring-4 focus:ring-[#5b8bf7]/15 rounded-xl px-4 py-3.5 text-[15px] text-gray-800 placeholder:text-gray-400 placeholder:font-normal transition-all outline-none resize-none"
              ></textarea>

              {/* Two Checkboxes */}
              <div className="space-y-3 pt-2">
                {/* Checkbox 1: Transactional / Booking SMS */}
                <div className="flex items-start gap-3 text-left">
                  <input
                    type="checkbox"
                    id="contactAgreeTransactionalSMS"
                    checked={agreeTransactionalSMS}
                    onChange={(e) =>
                      setAgreeTransactionalSMS(e.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5b8bf7] focus:ring-[#5b8bf7] cursor-pointer shrink-0 accent-[#5b8bf7]"
                  />
                  <label
                    htmlFor="contactAgreeTransactionalSMS"
                    className={`${lato.className} text-xs text-gray-500 leading-relaxed cursor-pointer`}
                  >
                    I agree to receive automated transactional and booking alert
                    SMS messages from Castle Home LLC regarding my request.
                    Message and data rates may apply. Reply STOP to cancel or
                    HELP for help.
                  </label>
                </div>

                {/* Checkbox 2: Marketing & Promotional SMS */}
                <div className="flex items-start gap-3 text-left">
                  <input
                    type="checkbox"
                    id="contactAgreeMarketingSMS"
                    checked={agreeMarketingSMS}
                    onChange={(e) =>
                      setAgreeMarketingSMS(e.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5b8bf7] focus:ring-[#5b8bf7] cursor-pointer shrink-0 accent-[#5b8bf7]"
                  />
                  <label
                    htmlFor="contactAgreeMarketingSMS"
                    className={`${lato.className} text-xs text-gray-500 leading-relaxed cursor-pointer`}
                  >
                    I agree to receive recurring promotional SMS messages,
                    updates, and newsletters from Castle Home LLC. Consent is
                    not a condition of purchase. Message frequency varies. Text
                    STOP to unsubscribe, HELP for assistance.
                  </label>
                </div>

                {/* Terms & Privacy Agreement Link */}
                <p
                  className={`${lato.className} text-[11px] text-gray-400 pt-1 text-center sm:text-left`}
                >
                  By submitting, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline hover:text-black font-medium"
                  >
                    Terms of Service
                  </Link>{" "}
                  &amp;{" "}
                  <Link
                    href="/privacy"
                    className="underline hover:text-black font-medium"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${
                    nunito.className
                  } w-full bg-[#5b8bf7] hover:bg-[#4878e6] text-white text-[16px] font-bold py-3.5 px-6 rounded-xl flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer disabled:opacity-70`}
                >
                  <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Submission Status Message */}
              {result && (
                <div
                  className={`p-3 rounded-xl text-xs font-semibold text-center ${
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
        )}
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] w-full flex items-center justify-center bg-[#f1f4fa]">
          <div className="w-8 h-8 border-4 border-[#5b8bf7] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
