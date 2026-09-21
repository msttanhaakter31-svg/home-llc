import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] text-black py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation / Back link */}
        <div>
          <Link
            href="/"
            className="text-xs font-semibold tracking-wider text-gray-500 hover:text-black uppercase transition-colors inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Legal & Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-neutral-900">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
        </header>

        {/* Content */}
        <article className="space-y-8 text-sm sm:text-base text-gray-600 leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-medium text-black tracking-tight">
              1. Information We Collect
            </h2>
            <p>
              When you submit a request through our contact form, we collect the
              details you provide, including your first name, last name, company
              name, phone number, and any project-specific details submitted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-black tracking-tight">
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information to evaluate design inquiries,
              respond to consultation requests within 24 hours, and deliver our
              quarterly architectural journal if you choose to subscribe.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-black tracking-tight">
              3. Data Protection & Sharing
            </h2>
            <p>
              We respect your privacy and never sell or trade your personal
              information to third parties. All personal data is processed
              securely and kept confidential within Aura Studio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-black tracking-tight">
              4. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or your
              data, please reach out to us at{" "}
              <span className="font-medium text-black underline">
                privacy@aurastudio.com
              </span>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
