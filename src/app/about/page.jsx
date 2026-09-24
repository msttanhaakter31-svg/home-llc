import Image from "next/image";
import Link from "next/link";
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

      {/* What We Do Section */}
      <section className="w-full bg-[#f4f7fa] border-t border-gray-200/60 py-20 px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2
              className={`${nunito.className} text-[32px] sm:text-[38px] font-bold text-[#1a1a1a] tracking-tight`}
            >
              What We Do
            </h2>
            <div
              className={`${lato.className} space-y-4 text-gray-700 text-[16px] sm:text-[17px] leading-relaxed`}
            >
              <p className="font-semibold text-[#242830] text-[18px] sm:text-[19px]">
                Operating as Castle Home LLC, we simplify the property evaluation process for homeowners. Our primary focus is assisting property owners by delivering clear, reliable insights into their real estate assets and providing tailored property solutions.
              </p>
              <p className="text-gray-600">
                We act as a specialized bridge, connecting individuals looking to transition out of their properties with customized real estate opportunities.
              </p>
            </div>
          </div>

          {/* Our Core Operations */}
          <div className="space-y-8">
            <div className="inline-block text-center">
              <span className="text-[11px] font-bold tracking-widest text-[#242830] uppercase bg-white border border-gray-200/80 px-4 py-1.5 rounded-full shadow-xs">
                Comprehensive Property Services
              </span>
              <h3
                className={`${nunito.className} text-[26px] sm:text-[30px] font-bold text-[#1a1a1a] mt-3`}
              >
                Our Core Operations
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {/* 1. Property Valuation & Assessment */}
              <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow duration-200 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-[#242830] text-white flex items-center justify-center font-bold text-[16px] mb-4">
                  1
                </div>
                <h4
                  className={`${nunito.className} font-bold text-[#1a1a1a] text-[18px] mb-2`}
                >
                  Property Valuation &amp; Assessment
                </h4>
                <p className={`${lato.className} text-[15px] text-gray-600 leading-relaxed`}>
                  We analyze market data and property conditions to provide homeowners with an accurate assessment of their real estate assets. If you are curious about the current value or potential of your property, our team delivers comprehensive evaluations without any obligation.
                </p>
              </div>

              {/* 2. Tailored Property Solutions */}
              <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow duration-200 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-[#242830] text-white flex items-center justify-center font-bold text-[16px] mb-4">
                  2
                </div>
                <h4
                  className={`${nunito.className} font-bold text-[#1a1a1a] text-[18px] mb-2`}
                >
                  Tailored Property Solutions
                </h4>
                <p className={`${lato.className} text-[15px] text-gray-600 leading-relaxed`}>
                  Every homeowner&apos;s situation is unique. Whether you are managing an inherited property, looking to downsize quickly, or dealing with an underutilized asset, we create strategic property plans designed to resolve your specific real estate challenges.
                </p>
              </div>

              {/* 3. Consultation & Strategic Connections */}
              <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow duration-200 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-[#242830] text-white flex items-center justify-center font-bold text-[16px] mb-4">
                  3
                </div>
                <h4
                  className={`${nunito.className} font-bold text-[#1a1a1a] text-[18px] mb-2`}
                >
                  Consultation &amp; Strategic Connections
                </h4>
                <p className={`${lato.className} text-[15px] text-gray-600 leading-relaxed`}>
                  We utilize our extensive industry networks to match your property with specialized real estate opportunities. We guide you through the process from initial consultation to final agreement, ensuring transparency and professional oversight at every stage.
                </p>
              </div>
            </div>
          </div>

          {/* Transparent Communications Card */}
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-200/80 text-left space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className={`${nunito.className} text-[22px] sm:text-[24px] font-bold text-[#1a1a1a]`}>
                Transparent Communications
              </h3>
              <p className={`${lato.className} text-gray-600 text-[15px] sm:text-[16px] mt-2 leading-relaxed`}>
                When you interact with our platform or submit an inquiry, you can expect clear, straightforward communication. We utilize SMS updates and phone consultations to keep you informed about:
              </p>
            </div>

            <ul className="space-y-3 text-gray-700 text-[15px]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>Scheduled property assessment appointments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>Updates regarding your property valuation report</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>Tailored property acquisition options and solutions</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-gray-100 text-[14px] text-gray-500 leading-relaxed">
              To review how we manage your information and messaging, please read our{" "}
              <Link
                href="/privacy"
                className="text-[#242830] font-semibold underline underline-offset-4 hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              and our{" "}
              <Link
                href="/terms"
                className="text-[#242830] font-semibold underline underline-offset-4 hover:text-black transition-colors"
              >
                Terms and Conditions
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
