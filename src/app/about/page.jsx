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
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[380px] rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="/hero-image.png"
              alt="Team conference call presentation"
              fill
              priority
              className="object-cover"
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
            <p className="font-semibold text-[#2c3e50] text-[17px]">
              We provide end-to-end marketing infrastructure and support for
              agencies who are ready to scale.
            </p>

            <p className="text-gray-700">
              From behind-the-scenes systems to client-facing strategy, we give
              you the tools, talent, and time-saving processes you need to
              deliver better results—without burning out your team or blowing
              your budget.
            </p>

            <p className="font-semibold text-black pt-2">
              Here's how we help marketing agencies like yours grow:
            </p>

            <ul className="space-y-4 text-left sm:text-center max-w-3xl mx-auto pt-2 text-gray-800">
              <li>
                <strong className="font-bold text-black">
                  White-Labeled Campaign Services
                </strong>
                Need an extra set of expert hands? We handle the execution while
                you keep the credit—ads, funnels, automations, and more.
              </li>
              <li>
                <strong className="font-bold text-black">
                  Sales Enablement & Fulfillment Systems
                </strong>
                Close more deals with plug-and-play proposals, onboarding flows,
                and fulfillment docs that save you hours every week.
              </li>
              <li>
                <strong className="font-bold text-black">
                  A2P Messaging Compliance & SMS Strategy
                </strong>
                Navigate the world of text marketing confidently with compliant
                opt-ins, campaign registrations, and messaging that actually
                converts.
              </li>
              <li>
                <strong className="font-bold text-black">
                  Automation & Tech Integration
                </strong>
                Streamline your backend with systems that sync seamlessly—from
                CRMs to form funnels to reporting dashboards.
              </li>
              <li>
                <strong className="font-bold text-black">
                  Branding & Positioning Support
                </strong>
                Whether you're launching or levelling up, we help you refine
                your offer and brand voice so you stand out in a sea of
                sameness.
              </li>
            </ul>

            <p className="font-semibold text-black pt-6 text-[17px]">
              You're already great at what you do. We're just here to make it
              easier to do more of it, better.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-8 mt-8">
            <p className="text-sm text-gray-500 italic">
              Would you like a more niche version (e.g. for agencies in real
              estate, healthcare, or SaaS)? Or want to add pricing tiers or
              call-to-action sections under this?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
