import Image from "next/image";
import { Nunito, Lato } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <h1
          className={`${nunito.className} text-[32px] sm:text-[36px] font-bold text-[#1a1a1a] mb-8`}
        >
          Our Story
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Content Column */}
          <div
            className={`${lato.className} lg:col-span-7 space-y-6 text-[#677294] text-[16px] sm:text-[17px] leading-[1.7]`}
          >
            <p>
              We started Castle Home LLC with a straightforward vision: to simplify
              the real estate process and provide dependable property solutions for
              our community. What began as a local effort to help property owners
              navigate complex markets has grown into a dedicated real estate
              consultation and property acquisition company. Built on a foundation
              of transparency, professional integrity, and tailored service, we
              bridge the gap between property sellers and local market opportunities.
            </p>

            <p>
              Over the years, our services have evolved to meet the changing
              needs of the market. As we helped more clients find practical
              solutions for their real estate assets, we established our primary
              objective: delivering seamless, stress-free property transitions. We
              have walked the path—navigating changing market values, coordinating
              professional assessments, and working within specialized timelines.
              Today, we are proud to share our direct market insights,
              comprehensive research, and specialized assistance to help property
              owners move forward with absolute confidence.
            </p>

            <p>
              Whether you are a property owner looking for direct real estate
              insights or a local real estate professional seeking a reliable partner
              for your next venture, we help you streamline the path ahead. From
              structural evaluations and market comparisons to full-service property
              assessments, we become your dependable operational engine so you can
              focus on making the best choices for your real estate portfolio.
            </p>

            <div className="pt-2">
              <p className="font-semibold text-[#1a1a1a]">
                Let's build your next real estate chapter, together.
              </p>
            </div>

            {/* SMS Communications & Privacy Disclosures */}
            <div className="pt-6 border-t border-gray-200 space-y-3">
              <h2
                className={`${nunito.className} text-[20px] font-bold text-[#1a1a1a]`}
              >
                SMS Communications & Privacy Disclosures
              </h2>
              <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#677294]">
                Castle Home LLC values your privacy. By providing your phone
                number and interacting with our team via text messaging, you
                consent to receive direct operational and promotional
                communications regarding our real estate consulting and property
                services. Message frequency varies. Message and data rates may
                apply. Reply STOP to opt out of future messaging at any time, or
                HELP for further assistance.
              </p>
              <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#677294]">
                We protect your information with strict security protocols.
                Personal data, including mobile phone numbers and opt-in consent
                details, will not be shared, rented, or sold to third-party
                entities or affiliates for marketing or promotional purposes
                under any circumstances.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative w-full h-[340px] sm:h-[420px] flex items-center justify-center">
            <Image
              src="/hero-image.svg"
              alt="Castle Home LLC property consultation"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section (Grey Background Block) */}
      <section className="w-full bg-[#dbe1e9] py-20 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2
            className={`${nunito.className} text-[32px] sm:text-[36px] font-bold text-[#1a1a1a]`}
          >
            What We Do
          </h2>

          <div
            className={`${lato.className} space-y-6 text-[#1a1a1a] text-[15px] sm:text-[16px] leading-[1.8]`}
          >
            <p className="font-semibold text-[#2c3e50] text-[18px] sm:text-[19px] leading-snug">
              At Castle Home LLC, we specialize in off-market property
              acquisition, real estate asset evaluation, and localized market
              pairing.
            </p>

            <p className="text-gray-700 max-w-3xl mx-auto text-[16px]">
              We act as a dedicated bridge in the residential real estate market
              by identifying properties with hidden potential and thoroughly
              assessing their baseline value.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/60 space-y-2">
                <h3
                  className={`${nunito.className} font-bold text-black text-[17px]`}
                >
                  Property Acquisition
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Specializing in off-market property acquisition and sourcing
                  residential opportunities with hidden baseline potential.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/60 space-y-2">
                <h3
                  className={`${nunito.className} font-bold text-black text-[17px]`}
                >
                  Asset Evaluation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Conducting comprehensive structural reviews, neighborhood data
                  analysis, and property logistics management to streamline
                  research.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/60 space-y-2">
                <h3
                  className={`${nunito.className} font-bold text-black text-[17px]`}
                >
                  Strategic Pairing
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Serving as the operational engine for seamless property
                  transitions across real estate professionals, buyers, and local
                  families.
                </p>
              </div>
            </div>

            <p className="text-gray-800 font-medium pt-4 max-w-3xl mx-auto text-[16px] leading-relaxed">
              Through comprehensive structural reviews, neighborhood data
              analysis, and property logistics management, we streamline the
              research phase of real estate. We handle the heavy lifting of
              sourcing and evaluating local residential opportunities, serving as
              the strategic back-end engine for property transitions so our
              network of real estate professionals, buyers, and local families
              can confidently execute their property goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
