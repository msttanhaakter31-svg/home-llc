"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f8f9fa] border-b border-gray-100 pt-4 md:pt-6 pb-4 relative z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo Image (Left) */}
        <Link href="/" className="relative w-20 h-20 sm:w-28 sm:h-28 block">
          <Image
            src="/image.png"
            alt="Lets Make It Digital Logo"
            fill
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 text-base text-gray-800 font-medium">
          <Link
            href="/"
            className="px-[25px] py-[5px] hover:text-black transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="about"
            className="px-[25px] py-[5px] hover:text-black transition-all duration-300 ease-in-out"
          >
            About
          </Link>

          <Link
            href="contact"
            className="px-[25px] py-[5px] hover:text-black transition-all duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
        >
          {isOpen ? (
            /* Close Icon (X) */
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f9fa] border-b border-gray-200 px-6 pt-4 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-black font-medium py-2 text-center"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-black font-medium py-2 text-center"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-black font-medium py-2 text-center"
          >
            Contact
          </Link>
        </div>
      )}

      {/* Welcome Header */}
      <div className="w-full text-center pt-6 md:pt-8 pb-2 px-4">
        <h1
          className={`${nunito.className} text-2xl sm:text-[32px] font-bold text-black tracking-tight`}
        >
          <strong>Welcome to Lets Make It Digital!</strong>
        </h1>
      </div>
    </nav>
  );
}
