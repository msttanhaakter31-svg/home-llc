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
  title: "Terms and Conditions | Castle Home LLC",
  description: "Terms and Conditions for Castle Home LLC.",
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
            Terms and Conditions
          </h1>

          {/* Header Dates & Intro */}
          <div
            className={`${lato.className} space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed`}
          >
            <p className="font-semibold text-gray-900">Terms and Conditions</p>
            <p className="text-xs text-gray-500 font-medium">
              Effective Date: 09/24/2026
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Last Updated: 09/24/2026
            </p>

            <p>
              Welcome to Castle Home LLC. These Terms and Conditions (&quot;Terms&quot;)
              govern your use of our website, products, and conditions (&ldquo;Conditions&rdquo;),
              provided by Castle Home LLC (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;,
              or &ldquo;us&rdquo;).
            </p>
            <p>
              By accessing or using our Conditions, you agree to be bound by these
              Terms and our{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>

          {/* Article Body */}
          <article
            className={`${lato.className} space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed`}
          >
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                1. Conditions Provided
              </h2>
              <p>
                Castle Home LLC provides real estate consulting, property assessment,
                and marketing services. We assist property owners by evaluating real
                estate assets, providing property solutions, and connecting individuals
                looking to sell properties with specialized real estate opportunities.
                Our services are provided on an &quot;as-is&quot; and &quot;as-available&quot;
                basis, subject to change or termination at our sole discretion without
                prior notice.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                2. Use of Conditions
              </h2>
              <p>
                By using our website, submitting your information, or engaging with
                our services, you agree to use the platform solely for lawful
                purposes. You are prohibited from submitting false, misleading, or
                fraudulent information. Castle Home LLC reserves the right to restrict
                or terminate access to our platform or services for any user who
                violates these terms, engages in unauthorized scraping, or misuses
                our submission forms.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1f2438]">
                3. SMS &amp; Messaging Terms
              </h2>
              <p>
                Castle Home LLC provides specialized text messaging updates regarding
                property inquiries, scheduling valuation appointments, and delivering
                tailored property acquisition offers. You can cancel the SMS service
                at any time. Just text &quot;<strong>STOP</strong>&quot; to{" "}
                <a
                  href="tel:6232123077"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  (623)-212-3077
                </a>.
                After you send the SMS message &quot;<strong>STOP</strong>&quot; to us,
                we will send you an SMS message to confirm that you have been
                unsubscribed. After this, you will no longer receive SMS messages
                from us. If you want to join again, just sign up as you did the first
                time and we will start sending SMS messages to you again.
              </p>
              <p>
                If you are experiencing issues with the messaging program you can
                reply with the keyword <strong>HELP</strong> for more assistance,
                or you can get help directly at{" "}
                <a
                  href="tel:6232123077"
                  className="text-blue-600 hover:underline"
                >
                  (623)-212-3077
                </a>{" "}
                or{" "}
                <a
                  href="mailto:info@letsmakeitdigital.com"
                  className="text-blue-600 hover:underline"
                >
                  info@letsmakeitdigital.com
                </a>.
                Carriers are not liable for delayed or undelivered messages. As
                always, message and data rates may apply for any messages sent to
                you from us and to us from you. You will receive recurring messages
                based on your account activity and inquiries. If you have any
                questions about your text plan or data plan, it is best to contact
                your wireless provider. If you have any questions regarding privacy,
                please read our privacy policy:{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-lg font-bold text-[#1f2438]">
                4. Contact Information
              </h2>
              <p>
                If you have any questions, inquiries, or need clarification
                regarding these Terms and Conditions, please contact Castle Home LLC at:
              </p>
              <div className="space-y-1.5 pt-1 text-sm sm:text-base">
                <p>
                  <strong className="text-gray-900">Company:</strong> Castle Home LLC
                </p>
                <p>
                  <strong className="text-gray-900">Phone:</strong>{" "}
                  <a
                    href="tel:6232123077"
                    className="text-blue-600 hover:underline"
                  >
                    (623)-212-3077
                  </a>
                </p>
                <p>
                  <strong className="text-gray-900">Email:</strong>{" "}
                  <a
                    href="mailto:info@letsmakeitdigital.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@letsmakeitdigital.com
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
