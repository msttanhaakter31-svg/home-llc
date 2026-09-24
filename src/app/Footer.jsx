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
                href="mailto:info@letsmakeitdigital.com"
                className="text-[#5282c0] hover:underline"
              >
                info@letsmakeitdigital.com
              </a>
            </p>
            <div className="pt-2">
              <p className="font-semibold text-black">Address</p>
              <p className="text-gray-600">123 West 14th st</p>
              <p className="text-gray-600">New York, NY 10001</p>
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
              <p>Mon – Sat 9:00am – 8:00pm</p>
              <p>Sunday – CLOSED</p>
            </div>
            <div>
              <p className="font-semibold text-black">Phone Number:</p>
              <p>917-345-6789</p>
            </div>
          </div>
        </div>

        {/* Column 3: Map View */}
        <div className="w-full h-48 rounded-md overflow-hidden border border-gray-200 shadow-sm relative">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617541280387!2d-73.99767802342596!3d40.73801897138965!2m3!1f0!f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599f365313a1%3A0x6b801452427f7f32!2sW%2014th%20St%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Middle Banner: Blue Ribbon */}
      <div className="w-full bg-[#5880f6] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm text-center sm:text-left">
          {/* Office */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-base">📍</span>
            <div>
              <p className="font-semibold">Office:</p>
              <p className="opacity-90">123 West 14th st</p>
              <p className="opacity-90">New York, NY 10001</p>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-base">📞</span>
            <p>
              <span className="font-semibold">Call </span>
              <a href="tel:9173456789" className="hover:underline">
                917-345-6789
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-base">✉️</span>
            <p>
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:info@letsmakeitdigital.com"
                className="hover:underline"
              >
                info@letsmakeitdigital.com
              </a>
            </p>
          </div>

          {/* Site */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-base">🌐</span>
            <div>
              <p className="font-semibold">Site:</p>
              <a
                href="https://www.letsmakeitdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline opacity-90"
              >
                www.letsmakeitdigital.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Logo & Legal Links */}
      <div className="w-full py-10 flex flex-col items-center justify-center space-y-4">
        <Link href="/" className="relative w-24 h-24 block">
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
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
