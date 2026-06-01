import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-white px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-2">
          Your inquiry has been received.
        </p>
        <p className="text-gray-500 leading-relaxed mb-8">
          Our engineering team will review your files and respond within 24 hours
          with a detailed quote and free DFM analysis.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-500/25"
          >
            Back to Home
          </Link>
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-brand-300 text-gray-700 font-semibold rounded-xl transition-all"
          >
            Our Capabilities
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Need immediate assistance? Email us at{' '}
          <a href="mailto:info@huaxingpcba.com" className="text-brand-600 hover:underline">
            info@huaxingpcba.com
          </a>
        </p>
      </div>
    </div>
  );
}
