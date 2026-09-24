import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-800">
      {/* Upper Footer: Address, Hours, & Map */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Column 1: Post Address and Mail */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-black tracking-tight">
            Post Address and Mail
          </h3>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-black">Email: </strong>
              <a
                href="mailto:invest@castlehomellc.com"
                className="text-[#5282c0] hover:underline"
              >
                invest@castlehomellc.com
              </a>
            </p>
            <div className="pt-2">
              <p className="font-semibold text-black">Address</p>
              <p className="text-gray-600">4539 N 22nd St, Ste N</p>
              <p className="text-gray-600">Phoenix, AZ 85016</p>
            </div>
          </div>
        </div>

        {/* Column 2: Get In Touch */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-black tracking-tight">
            Get In Touch
          </h3>
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-black">Assistance Hours</p>
              <p>Mon – Sat 9:00am – 5:00pm</p>
              <p>Sunday – CLOSED</p>
            </div>
            <div>
              <p className="font-semibold text-black">Phone Number:</p>
              <p>
                <a href="tel:6232123077" className="hover:underline text-gray-700">
                  (623)-212-3077
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Map View */}
        <div className="w-full h-48 rounded-md overflow-hidden border border-gray-200 shadow-sm relative">
          <iframe
            title="Google Maps Location - Castle Home LLC"
            src="https://maps.google.com/maps?q=33.502736,-112.034481&hl=en&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Middle Banner: Dark Grey Ribbon */}
      <div className="w-full bg-[#242830] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm text-center sm:text-left">
          {/* Office */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-base">📍</span>
            <p>
              <span className="font-semibold">Office: </span>
              <span className="opacity-90">4539 N 22nd St, Ste N, Phoenix, AZ 85016</span>
            </p>
          </div>

          {/* Call */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-base">📞</span>
            <p>
              <span className="font-semibold">Call </span>
              <a href="tel:6232123077" className="hover:underline">
                (623)-212-3077
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-base">✉️</span>
            <p>
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:invest@castlehomellc.com"
                className="hover:underline"
              >
                invest@castlehomellc.com
              </a>
            </p>
          </div>

          {/* Site */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-base">🌐</span>
            <p>
              <span className="font-semibold">Site: </span>
              <a
                href="https://castlehomellc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline opacity-90"
              >
                castlehomellc.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Logo & Legal Links */}
      <div className="w-full py-10 flex flex-col items-center justify-center space-y-4">
        <Link href="/" className="relative w-36 h-36 sm:w-44 sm:h-44 block">
          <Image
            src="/logo-transparent.png"
            alt="Castle Home LLC Logo"
            fill
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5282c0]">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/terms" className="hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
