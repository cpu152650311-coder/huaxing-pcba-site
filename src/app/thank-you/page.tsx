import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-white overflow-hidden min-h-[70vh] flex items-center">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
            Thank You!
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Your inquiry has been received. Our engineering team will review your project
            and respond within <strong>24 hours</strong> with a detailed quote and DFM feedback.
          </p>
          <div className="mt-8 space-y-2 text-sm text-gray-400">
            <p>Checklist of what happens next:</p>
            <ul className="inline-block text-left space-y-1.5 mt-2">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Project review by engineering team
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free DFM analysis on your Gerber files
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Detailed quote within 24 hours
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/" className="btn-primary">
              Back to Home
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <Link href="/products/pcb-manufacturing" className="btn-secondary">
              Explore PCB Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
