import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#fcfcfc] py-16 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-8">
          {/* Subtitle / Category */}
          <div className="flex items-center space-x-2">
            <span className="w-6 h-[1px] bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-medium text-gray-500">
              Architecture & Living
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-black leading-[1.1] tracking-tight">
            Designing <br />
            spaces that <br />
            <span className="font-serif italic font-normal">breathe.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg max-w-lg leading-relaxed">
            We strip away the non-essential to construct environments
            characterized by clarity, purpose, and enduring light.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#contact"
              className="bg-black text-white text-sm px-7 py-3.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-5 relative h-[480px] sm:h-[560px] w-full rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/hero-image.png"
            alt="Minimalist modern interior with wooden kitchen island and pendant lights"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
