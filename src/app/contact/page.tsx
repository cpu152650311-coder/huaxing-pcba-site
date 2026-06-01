'use client';

import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

const FORM_ENDPOINT = '/api/contact';

const companyInfo = {
  address: 'Building A, Huaxing Industrial Park, Fuyong Street, Bao\'an District, Shenzhen, Guangdong 518103, China',
  email: 'info@huaxingpcba.com',
};

const businessHours = [
  { day: 'Monday – Friday', hours: '8:30 AM – 6:00 PM (CST)' },
  { day: 'Saturday', hours: '9:00 AM – 12:00 PM (CST)' },
  { day: 'Sunday', hours: 'Closed' },
];

const acceptedFiles = [
  { label: 'Gerber Files', ext: '(.zip, .gbr)' },
  { label: 'BOM / Pick & Place', ext: '(.xlsx, .csv)' },
  { label: 'Assembly Drawings', ext: '(.pdf, .dxf)' },
  { label: 'CAD Source Files', ext: '(.pcb, .brd)' },
];

export default function ContactPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError('');
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: fd });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setFiles([]);
      } else {
        const data = await res.json().catch(() => ({}));
        setFormError((data as { error?: string })?.error || 'Failed to send. Please email us directly.');
      }
    } catch {
      setFormError('Network error. Please email us directly at info@huaxingpcba.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Let&apos;s Build Your<br />
              <span className="text-brand-600">Next Project</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Send us your PCB files and requirements. Our engineering team reviews every project
              within 24 hours and provides a detailed quote with free DFM feedback.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Contact Form + Info ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* ─── Form ─── */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Request a Quote</h2>
              <p className="text-lg text-gray-500 mb-8">
                Fill in your details and upload your design files. We&apos;ll get back to you
                with a comprehensive quote and DFM analysis.
              </p>

              {submitted ? (
                <div className="mt-10 p-8 bg-green-50 border border-green-200 rounded-2xl text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Thank You!</h3>
                  <p className="mt-2 text-green-700">
                    Your inquiry has been received. Our engineering team will review your files and
                    respond within 24 hours with a detailed quote and DFM feedback.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Honey pot — invisible to humans, traps bots */}
                  <input
                    type="text"
                    name="_honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute -left-[9999px] opacity-0 h-0 w-0"
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+86 / +1 / etc."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your project — PCB layers, quantity, surface finish, assembly requirements, target lead time, etc."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Upload Design Files
                    </label>
                    <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50/50 hover:bg-gray-50 hover:border-brand-300 transition-all duration-200">
                      <div className="text-center">
                        <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold text-brand-600">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Gerber, BOM, Pick & Place, CAD files accepted</p>
                        <input
                          type="file"
                          name="attachment"
                          multiple
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                    {files.length > 0 && (
                      <div className="mt-3 space-y-1.5">
                        {files.map((file, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                            <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="truncate">{file.name}</span>
                            <span className="text-xs text-gray-400 ml-auto">({(file.size / 1024).toFixed(0)} KB)</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="mt-2 text-xs text-gray-400">
                      Accepted formats: .zip, .gbr, .xlsx, .csv, .pdf, .dxf, .pcb, .brd (max 20 MB per file)
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {acceptedFiles.map((file) => (
                      <span key={file.label} className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs text-gray-500">
                        {file.label}
                        <span className="text-gray-400">{file.ext}</span>
                      </span>
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : (
                      <>
                        Submit Inquiry
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>

                  {formError && (
                    <p className="text-sm text-red-600 text-center bg-red-50 p-3 rounded-lg">{formError}</p>
                  )}

                  <p className="text-xs text-gray-400 text-center">
                    Your information is kept confidential and will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* ─── Company Info Sidebar ─── */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-2xl border border-gray-100 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Factory Address</p>
                      <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{companyInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-gray-100 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <span className="text-sm text-gray-700">{item.day}</span>
                      <span className={`text-sm font-medium ${item.hours === 'Closed' ? 'text-red-500' : 'text-gray-900'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-400">
                  Time zone: China Standard Time (UTC+8)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InquiryModal isOpen={showInquiry} onClose={() => setShowInquiry(false)} />
    </>
  );
}
