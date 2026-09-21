import Link from "next/link";

export default function TermsOfService() {
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
            Legal & Terms
          </span>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-neutral-900">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
        </header>

        {/* Content */}
        <article className="space-y-8 text-sm sm:text-base text-gray-600 leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-medium text-black tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website or submitting project
              inquiries to Aura Studio, you agree to comply with and be bound by
              these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-black tracking-tight">
              2. Intellectual Property
            </h2>
            <p>
              All content, architectural renderings, photography, and design
              frameworks presented on this site belong exclusively to Aura
              Studio and are protected under global copyright laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-black tracking-tight">
              3. Service Inquiries & Consultations
            </h2>
            <p>
              Submitting a form inquiry does not establish a formal contract for
              architectural services. A binding client agreement is established
              only after mutual execution of a formal project contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-black tracking-tight">
              4. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with
              applicable local laws without regard to conflict of law
              principles.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
