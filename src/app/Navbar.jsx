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
        <Link
          href="/"
          className="relative w-36 h-28 sm:w-44 sm:h-32 md:w-56 md:h-40 lg:w-64 lg:h-44 block shrink-0"
        >
          <Image
            src="/logo-transparent.png"
            alt="Castle Home LLC Logo"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-2 text-[17px] text-gray-900 font-bold">
          <Link
            href="/"
            className="px-[20px] py-[6px] hover:text-[#da7932] transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-[20px] py-[6px] hover:text-[#da7932] transition-all duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-[20px] py-[6px] hover:text-[#da7932] transition-all duration-300 ease-in-out"
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
            className="block text-gray-900 hover:text-[#da7932] font-bold py-2 text-center text-lg"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-900 hover:text-[#da7932] font-bold py-2 text-center text-lg"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-900 hover:text-[#da7932] font-bold py-2 text-center text-lg"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
