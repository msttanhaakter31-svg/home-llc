import Image from "next/image";
import Link from "next/link";
import { Nunito, Lato } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f8f9fa] pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background Real Estate Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Image
          src="/image_bg.png"
          alt="Background Real Estate Pattern"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Centered Welcome Headline */}
        <h1
          className={`${nunito.className} text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#0d1322] tracking-tight mb-12 sm:mb-16 md:mb-20`}
        >
          Welcome to Castle Home LLC!
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Multi-colored Hero Headline matching reference */}
            <h2
              className={`${nunito.className} text-[32px] sm:text-[40px] md:text-[44px] font-extrabold leading-[1.15] tracking-tight`}
            >
              <span className="text-[#0d1322]">Streamlined Property</span>
              <br />
              <span className="text-[#0d1322]">Solutions &amp; </span>
              <span className="text-[#da7932]">Real Estate</span>
              <br />
              <span className="text-[#da7932]">Investments</span>
            </h2>

            <p
              className={`${lato.className} text-base sm:text-[17px] text-[#4b5563] leading-relaxed max-w-lg`}
            >
              Castle Home LLC provides dedicated property valuations, comprehensive market
              consulting, and corporate real estate portfolio management. We guide clients
              through strategic asset evaluation with complete operational transparency and
              corporate integrity.
            </p>

            {/* Pill-shaped consultation button */}
            <div className="pt-2">
              <a
                href="/contact"
                className={`${nunito.className} inline-block bg-[#da7932] hover:bg-[#c36522] text-white text-[16px] sm:text-[17px] font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]`}
              >
                Request a Property Consultation
              </a>
            </div>

            {/* SMS & Legal Disclaimer directly below button */}
            <p
              className={`${lato.className} text-[11px] sm:text-xs text-gray-500 leading-normal max-w-lg pt-1`}
            >
              By providing your phone number, you consent to receive message
              updates from Castle Home LLC. Msg &amp; data rates may apply. Reply
              STOP to opt-out. View our{" "}
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
                Terms
              </Link>
              .
            </p>
          </div>

          {/* Right Column: Hero Illustration Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[650px] lg:max-w-[720px] aspect-[976/730]">
              <Image
                src="/home.svg"
                alt="Castle Home LLC Real Estate Solutions"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
