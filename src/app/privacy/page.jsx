import Image from "next/image";
import { Nunito, Lato } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Privacy Policy | Castle Home LLC",
  description: "Privacy Policy for Castle Home LLC.",
};

export default function PrivacyPolicy() {
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
            className={`${nunito.className} text-[34px] sm:text-[44px] font-extrabold text-black tracking-tight`}
          >
            Privacy Policy
          </h1>

          {/* Header Dates & Intro */}
          <div
            className={`${lato.className} space-y-4 text-black text-[16px] sm:text-[18px] leading-relaxed`}
          >
            <p className="font-bold text-black text-[19px] sm:text-[21px]">
              Privacy Policy
            </p>
            <p className="text-[14px] sm:text-[15px] text-black font-semibold">
              Effective Date: September 24, 2026
            </p>
            <p className="text-[14px] sm:text-[15px] text-black font-semibold">
              Last Updated: September 24, 2026
            </p>

            <p>
              Castle Home LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              operates the website and text messaging services associated with
              our residential property consulting, consulting assistance, and
              valuation services. We are fully committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your personal information when you visit our website,
              request property valuation estimates, or opt into our mobile
              communication programs.
            </p>
          </div>

          {/* Article Body */}
          <article
            className={`${lato.className} space-y-8 text-[16px] sm:text-[18px] text-black leading-relaxed`}
          >
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-black">
                1. Information We Collect
              </h2>
              <p>
                We only collect personal information that you voluntarily
                provide to us through our website contact forms, property
                valuation submission fields, or interactive tools. This
                information may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-black font-bold">Identity Data:</strong> Your
                  name, email address, and mailing address.
                </li>
                <li>
                  <strong className="text-black font-bold">Property Data:</strong> Real
                  estate details, property addresses, and details required for
                  evaluating housing trends or property consultations.
                </li>
                <li>
                  <strong className="text-black font-bold">
                    Contact &amp; Mobile Data:
                  </strong>{" "}
                  Your phone number and explicit SMS opt-in consent records.
                </li>
              </ul>
            </section>

            <hr className="border-gray-300" />

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-black">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect strictly to manage our
                internal operations and provide you with requested real estate
                consulting services. Specifically, your data is used to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Process and respond to your direct real estate inquiries or
                  property valuation requests.
                </li>
                <li>
                  Schedule consultations, coordinate appointments, and deliver
                  requested consumer support.
                </li>
                <li>
                  Send transactional updates, localized housing insights, and
                  property notifications (only where explicit consent is
                  provided).
                </li>
              </ul>
            </section>

            <hr className="border-gray-300" />

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-black">
                3. Absolute Restriction on Data Sharing &amp; Selling
              </h2>
              <p>
                Castle Home LLC does not sell, rent, trade, lease, or share
                consumer information, leads, or personal data with any third
                parties or affiliates for marketing, promotional, or any other
                commercial purposes. Your personal data is kept strictly
                confidential within our organization.
              </p>
            </section>

            <hr className="border-gray-300" />

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-black">
                4. SMS &amp; Mobile Text Messaging Policy
              </h2>
              <p>
                We treat text messaging originator opt-in data with the highest
                level of security and privacy.
              </p>
              <div className="bg-gray-50 border border-gray-300 p-6 rounded-xl space-y-3 mt-3">
                <p className="font-bold text-black text-[17px] sm:text-[18px]">
                  Strict Mobile Privacy Mandates:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>
                    No mobile information will be shared with third parties or
                    affiliates for marketing/promotional purposes.
                  </li>
                  <li>
                    Text messaging originator opt-in data and consent will not
                    be shared with any third parties, except for aggregators and
                    providers of the Text Message services.
                  </li>
                  <li>
                    No mobile information will be shared with third
                    parties/affiliates for marketing/promotional purposes.
                    Information sharing to subcontractors in support services,
                    such as customer service, is permitted. All other use case
                    categories exclude text messaging originator opt-in data
                    and consent; this information will not be shared with any
                    third parties.
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-gray-300" />

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-black">
                5. Data Security Practices
              </h2>
              <p>
                We implement administrative, technical, and physical security
                measures to safeguard your personal data against unauthorized
                access, destruction, loss, alteration, or disclosure. Access to
                consumer details is strictly limited to authorized internal
                personnel who require the data to fulfill your real estate
                service requests.
              </p>
            </section>

            <hr className="border-gray-300" />

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-black">
                6. Cookies and Tracking Information
              </h2>
              <p>
                Our website may utilize standard internet cookies, web beacons,
                and tracking pixels to optimize your browsing experience and
                analyze general website traffic patterns. These technical tools
                collect non-identifiable browser attributes and do not capture
                or store your mobile phone number, SMS consent metrics, or
                personal identity details. You can configure your internet
                browser to refuse cookies, though certain interactive features
                on our site may become unavailable.
              </p>
            </section>

            <hr className="border-gray-300" />

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-black">
                7. Your Privacy Rights &amp; Opt-Out Controls
              </h2>
              <p>You have complete control over your communication preferences:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-black font-bold">SMS Opt-Out:</strong> You
                  can cancel or revoke text message consent at any time by
                  replying <strong className="text-black font-bold">STOP</strong> to any text message received from
                  us. A final confirmation message will be sent, and no further
                  mobile messages will be delivered.
                </li>
                <li>
                  <strong className="text-black font-bold">Customer Support:</strong>{" "}
                  For questions, data correction requests, or information
                  regarding this policy, you may text <strong className="text-black font-bold">HELP</strong> or
                  contact us directly using the details provided below.
                </li>
              </ul>
            </section>

            <hr className="border-gray-300" />

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-black">
                8. Updates to This Privacy Policy
              </h2>
              <p>
                We reserve the right to modify this Privacy Policy to ensure
                continued compliance with changing telecom carrier regulations
                and federal frameworks. Any updates will be posted directly to
                this web page with a revised &quot;Effective Date&quot; at the
                top.
              </p>
            </section>

            <hr className="border-gray-300" />

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-[20px] sm:text-[23px] font-bold text-black">
                9. Contact Information
              </h2>
              <p>
                For questions or concerns regarding your data or this policy,
                please contact us at:
              </p>
              <div className="space-y-2 pt-2 text-[16px] sm:text-[18px]">
                <p>
                  <strong className="text-black font-bold">Business Name:</strong>{" "}
                  Castle Home LLC
                </p>
                <p>
                  <strong className="text-black font-bold">Office Address:</strong>{" "}
                  4539 N 22nd St, Ste N, Phoenix, AZ 85016
                </p>
                <p>
                  <strong className="text-black font-bold">Phone:</strong>{" "}
                  <a
                    href="tel:6232123077"
                    className="text-blue-700 font-semibold underline underline-offset-2 hover:text-black transition-colors"
                  >
                    (623)-212-3077
                  </a>
                </p>
                <p>
                  <strong className="text-black font-bold">Website Domain:</strong>{" "}
                  <a
                    href="https://castlehomellc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold underline underline-offset-2 hover:text-black transition-colors"
                  >
                    castlehomellc.com
                  </a>
                </p>
                <p>
                  <strong className="text-black font-bold">Contact Email:</strong>{" "}
                  <a
                    href="mailto:invest@castlehomellc.com"
                    className="text-blue-700 font-semibold underline underline-offset-2 hover:text-black transition-colors"
                  >
                    invest@castlehomellc.com
                  </a>
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
