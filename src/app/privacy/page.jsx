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
  title: "Privacy Policy | Lets Make It Digital",
  description: "Privacy Policy for Lets Make It Digital.",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Full-Screen Background Container (matches .bg-fixed & .bgCover) */}
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
            Privacy Policy
          </h1>

          {/* Introduction */}
          <div
            className={`${lato.className} space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed`}
          >
            <p className="font-semibold text-gray-900">Privacy Policy</p>
            <p className="text-xs text-gray-500">
              Effective Date: [Insert Date]
            </p>
            <p className="text-xs text-gray-500">Last Updated: [Insert Date]</p>

            <p>
              Lets Make It Digital (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website, use our
              services, or engage with our marketing solutions.
            </p>
            <p>
              By accessing or using our services, you agree to this Privacy
              Policy.
            </p>
          </div>

          {/* Article Body */}
          <article
            className={`${lato.className} space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed`}
          >
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                1. Information We Collect
              </h2>
              <p>
                We may collect personal information that you voluntarily provide
                to us, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact Information: Name, email address, phone number.</li>
                <li>
                  Business Information: Company name, website URL, job title,
                  and details about your marketing needs.
                </li>
                <li>
                  Communication Data: Messages, inquiries, or feedback sent
                  through forms, chat, or email.
                </li>
                <li>
                  Payment Information: If applicable, billing details for paid
                  services (processed securely via third-party processors).
                </li>
              </ul>
            </section>

            <hr className="border-gray-300 my-6" />

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                2. How We Use Your Information
              </h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  To provide, operate, and maintain our digital marketing and
                  agency support services.
                </li>
                <li>
                  To communicate with you regarding inquiries, appointments,
                  services, updates, or promotional offers.
                </li>
                <li>
                  To deliver tailored marketing solutions, campaign support, and
                  automation integrations.
                </li>
                <li>To process transactions and manage customer accounts.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                3. SMS Marketing & Compliance
              </h2>
              <p>If you opt-in to receive SMS messages from us:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  We will use your phone number to send service updates,
                  appointment reminders, and promotional messages via A2P 10DLC
                  compliant platforms.
                </li>
                <li>Message and data rates may apply.</li>
                <li>
                  You may opt-out at any time by replying STOP to any message or
                  contacting us at{" "}
                  <a
                    href="mailto:support@letsmakeitdigital.com"
                    className="text-blue-600 underline"
                  >
                    support@letsmakeitdigital.com
                  </a>
                  .
                </li>
              </ul>
              <p className="font-medium text-gray-900 pt-1">
                A2P 10DLC Commitment:
              </p>
              <p>
                We do not share, sell, or rent SMS opt-in data or phone numbers
                to third parties for marketing purposes.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                4. How We Share Your Information
              </h2>
              <p>
                We do not sell your personal information. We may share
                information in limited circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  With Service Providers: Trusted third-party vendors who assist
                  in operating our website, managing CRMs, processing payments,
                  or delivering email/SMS marketing (e.g., Twilio, Mailchimp,
                  Stripe).
                </li>
                <li>
                  For Legal Reasons: To comply with applicable laws, court
                  orders, or governmental regulations.
                </li>
                <li>
                  Business Transfers: In connection with any merger, sale of
                  company assets, financing, or acquisition.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                We may use cookies, tracking pixels, and web beacons to collect
                information about your browsing activities to analyze website
                traffic and optimize your user experience.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                6. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical
                security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                7. Your Rights
              </h2>
              <p>
                Depending on your location, you may have rights regarding your
                personal data, including the right to access, correct, or delete
                your personal information.
              </p>
              <p>To exercise these rights, please contact us at:</p>
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
                Website:{" "}
                <Link href="/" className="text-blue-600 underline">
                  www.letsmakeitdigital.com
                </Link>
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to external sites. We are not
                responsible for the privacy practices or content of these
                third-party services.
              </p>
            </section>

            <hr className="border-gray-300 my-6" />

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated &quot;Last
                Updated&quot; date.
              </p>
            </section>

            <hr className="border-gray-300 my-6" />

            {/* Section 11 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                11. Contact Us
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy,
                please contact us at:
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
