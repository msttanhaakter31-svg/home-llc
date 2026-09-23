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
              We started as a small, family-run marketing team with big ideas
              and an even bigger passion for helping local businesses grow. From
              late nights in our living room to launching successful campaigns
              for friends and neighbors, we built our agency on trust, hustle,
              and results.
            </p>

            <p>
              Over the years, our story evolved. As we helped businesses find
              their voice and scale their presence, we realized our true
              superpower: empowering other marketing agencies to do the same.
              We've walked the path—navigating client expectations, platform
              updates, tight budgets, and ambitious goals—and now we're here to
              share the systems, strategy, and support that took us from family
              hustle to agency partner.
            </p>

            <p>
              Whether you're an agency of one or a growing team, we help you
              scale smarter—not harder. From white-labeled campaign support and
              sales enablement to automation, compliance, and branding—we become
              your behind-the-scenes engine so you can focus on what you do
              best: serving clients and growing your brand.
            </p>

            <div className="pt-2">
              <p className="font-semibold text-[#1a1a1a]">
                Let's grow, together!
              </p>
            </div>

            <p className="text-sm text-gray-400 italic pt-2">
              Want this tailored to a specific tone (fun, luxury, tech-savvy,
              etc.) or for a specific audience (startup agencies, B2B-focused,
              etc.)?
            </p>
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
