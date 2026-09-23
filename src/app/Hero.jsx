import Image from "next/image";
import { Nunito, Lato } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f8f9fa] py-16 md:py-20 overflow-hidden">
      {/* Background wave pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Image
          src="/image_bg.png"
          alt="Background Lines Pattern"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2
              className={`${nunito.className} text-[28px] text-black leading-tight`}
            >
              Learn how to Grow a Fueled <br className="hidden sm:inline" />
              Marketing Agency
            </h2>

            <p
              className={`${lato.className} text-[18px] text-[#677294] leading-[1.6em] pb-2 max-w-md`}
            >
              Want this tailored to a specific tone (fun, luxury, tech-savvy,
              etc.) or for a specific audience (startup agencies, B2B-focused,
              etc.)? Hire Lets Make It Digital!
            </p>

            <div>
              <a
                href="#contact"
                className="inline-block bg-[#FF8A73] text-white text-[18px] sm:text-[20px] font-bold px-[28px] py-[14px] rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:opacity-90 transition-opacity"
              >
                Schedule Your Discovery Call
              </a>
            </div>
          </div>

          {/* Right Column: Hero Illustration Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[4/3]">
              <Image
                src="/home.png"
                alt="Growth marketing illustration"
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
