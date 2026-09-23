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

export const metadata = {
  title: "Terms of Service | Lets Make It Digital",
  description: "Terms of Service for Lets Make It Digital.",
};

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Full-Screen Background Container */}
      <div className="fixed inset-0 -z-10 bg-white pointer-events-none">
        <Image
          src="/image_bg.png"
          alt="Background Pattern"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Page Content */}
      <main className="relative w-full py-16 sm:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <h1
            className={`${nunito.className} text-[32px] sm:text-[40px] font-bold text-[#1f2438] tracking-tight`}
          >
            Terms of Service
          </h1>

          {/* Header Dates & Intro */}
          <div
            className={`${lato.className} space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed`}
          >
            <p className="font-semibold text-gray-900">Terms of Service</p>
            <p className="text-xs text-gray-500">
              Effective Date: [Insert Date]
            </p>
            <p className="text-xs text-gray-500">Last Updated: [Insert Date]</p>

            <p>
              Welcome to Lets Make It Digital. These Terms of Service
              (&quot;Terms,&quot; &quot;Agreement&quot;) govern your use of the
              services provided by Lets Make It Digital (&quot;Company,&quot;
              &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these
              Terms and our Privacy Policy.
            </p>
          </div>

          {/* Article Body */}
          <article
            className={`${lato.className} space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed`}
          >
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                1. Services Provided
              </h2>
              <p>
                Lets Make It Digital provides marketing services including, but
                not limited to:
              </p>
              <p>
                Campaign development and execution, SMS and email marketing
                support, Automation and CRM integration, Branding, design, and
                digital strategy, White-labeled marketing support for agencies.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any
                aspect of our services at any time with or without prior notice.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                2. User Obligations
              </h2>
              <p>
                You agree to use our Services only in compliance with all
                applicable local, state, and federal laws and regulations,
                including A2P messaging compliance laws, CAN-SPAM Act, TCPA, and
                other applicable laws. You shall not use our services for any
                unlawful, deceptive, or spam activity.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                3. SMS & Messaging Terms
              </h2>
              <p>
                If you use our Services to send SMS messages or access messaging
                platforms:
              </p>
              <p>
                Users must explicit opt-in prior to receiving messages via text.
                You must include opt-out language such as &quot;Reply STOP to
                unsubscribe&quot; on every message. Message and data rates may
                apply depending on the mobile carrier provided. You agree to
                abide by the messaging policy guidelines provided.
              </p>
              <p>
                We do not guarantee message delivery speeds, network uptime, or
                full carrier delivery of text messages.
              </p>
            </section>

            <hr className="border-gray-300 my-6" />

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                4. Client Responsibilities
              </h2>
              <p>As a client using our services:</p>
              <p>
                You agree to provide timely communication, required information,
                domain access, required creative content, and approvals for work
                to move forward in a timely manner according to project
                timelines.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                5. Payment Terms
              </h2>
              <p>
                All payments for services are due according to the agreed-upon
                proposal or invoice. Late payments may incur late fees or result
                in temporary suspension of services.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                6. Intellectual Property
              </h2>
              <p>
                All materials, strategies, graphics, and content created by Lets
                Make It Digital remain our intellectual property until paid in
                full. Upon final payment, ownership rights transfer to the
                client, excluding proprietary software, templates, or workflows
                used in rendering the service.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                7. Confidentiality
              </h2>
              <p>
                Both parties agree to maintain the confidentiality of
                proprietary information shared during the scope of the
                engagement, unless disclosure is required by law or agreed to in
                writing.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Lets Make It
                Digital shall not be liable for any indirect, incidental,
                consequential, or punitive damages arising out of your use or
                inability to use our services.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                9. Termination
              </h2>
              <p>
                We may terminate or suspend access immediately if you breach
                these Terms. Upon termination, your right to use our Services
                will cease immediately, and all outstanding payments remain due.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                10. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of [Insert State], without regard to
                its conflict of law provisions.
              </p>
            </section>

            <hr className="border-gray-300 my-6" />

            {/* Section 11 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                11. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Any
                changes will be posted on this page, and your continued use of
                our Services constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                12. Contact Us
              </h2>
              <p>
                If you have any questions regarding these Terms, please contact
                us at:
              </p>

              <div className="space-y-2 pt-2">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:support@letsmakeitdigital.com"
                    className="text-blue-600 underline"
                  >
                    support@letsmakeitdigital.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+18005550199"
                    className="text-gray-800 hover:underline"
                  >
                    +1 (800) 555-0199
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <Link href="/" className="text-blue-600 underline">
                    www.letsmakeitdigital.com
                  </Link>
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
