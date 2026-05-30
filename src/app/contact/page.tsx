'use client';

import Link from 'next/link';
import { useState } from 'react';

const companyInfo = {
  address: 'Building A, Huaxing Industrial Park, Fuyong Street, Bao\'an District, Shenzhen, Guangdong 518103, China',
  email: 'info@huaxingpcba.com',
  phone: '+86-755-2733-6688',
  phone2: '+86-755-2733-6699',
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const FORM_ENDPOINT = 'https://formsubmit.co/info@huaxingpcba.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.ok || res.redirected) {
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', company: '', message: '' });
          setFiles([]);
        } else {
          alert('Submission failed. Please email us directly at info@huaxingpcba.com.');
        }
      })
      .catch(() => {
        alert('Network error. Please email us directly at info@huaxingpcba.com.');
      });
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading leading-tight">
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
              <h2 className="section-title">Request a Quote</h2>
              <p className="section-subtitle">
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
                  <h3 className="text-xl font-bold text-green-800 font-heading">Thank You!</h3>
                  <p className="mt-2 text-green-700">
                    Your inquiry has been received. Our engineering team will review your files and 
                    respond within 24 hours with a detailed quote and DFM feedback.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-6" encType="multipart/form-data">
                  <input type="hidden" name="_subject" value="HUAXING PCBA - New Inquiry from Website" />
                  <input type="hidden" name="_captcha" value="true" />
                  <input type="hidden" name="_template" value="box" />
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                        value={formData.company}
                        onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project — PCB layers, quantity, surface finish, assembly requirements, target lead time, etc."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Upload Design Files
                    </label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50/50 hover:bg-gray-50 hover:border-brand-300 transition-all duration-200">
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

                  {/* Accepted file types */}
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
                    className="btn-primary w-full justify-center text-base py-3.5"
                  >
                    Submit Inquiry
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    <svg className="w-3.5 h-3.5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Your information is kept confidential and will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* ─── Company Info Sidebar ─── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div className="card p-8">
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">Contact Information</h3>
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

              {/* Business Hours */}
              <div className="card p-8">
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">Business Hours</h3>
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

              {/* 24h Response Commitment */}
              <div className="card p-8 bg-gradient-to-br from-brand-50 to-white border-brand-100">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-heading">Response Within 24 Hours</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Our engineering team reviews every inquiry within one business day. You&apos;ll 
                      receive a detailed quote with DFM analysis, lead time estimates, and our 
                      recommendations for your project — all free of charge.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 text-xs text-brand-700 bg-brand-100 px-3 py-1.5 rounded-full font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Free DFM Review
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-brand-700 bg-brand-100 px-3 py-1.5 rounded-full font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        No Obligation Quote
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-brand-700 bg-brand-100 px-3 py-1.5 rounded-full font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Confidential
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Contact Us ─── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Why Send Your Inquiry to HUAXING?</h2>
            <p className="section-subtitle mx-auto">
              From quick-turn prototypes to high-volume production, we deliver quality, speed, and value.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Direct Factory Pricing',
                desc: 'Shenzhen-based manufacturer with zero middlemen. PCB assembly from $25 for 1-20 PCS.',
                icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Free DFM Review',
                desc: 'Our engineers analyze your Gerber files and BOM for manufacturability issues before production — at no cost.',
                icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
              },
              {
                title: 'Zero MOQ',
                desc: 'No minimum order quantity. We accept prototype quantities as low as 1 PCB and scale to 10,000+.',
                icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
              },
              {
                title: 'Fast Turnaround',
                desc: 'PCB prototypes in 24 hours, assembly in 5-7 days. Expedited options available for urgent projects.',
                icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 group hover:border-brand-200 transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
            Upload your Gerber files and BOM above, or reach out directly. Either way, 
            you&apos;ll get a detailed quote within 24 hours — guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Us Directly
            </a>
            <a
              href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Us Now
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-200">
            <span>Zero MOQ</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Free DFM Review</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>ISO9001 &amp; UL Certified</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>24h Response Time</span>
          </div>
        </div>
      </section>

      {/* ─── Quick Links ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Explore Our Services</h2>
            <p className="section-subtitle mx-auto">
              Not ready to reach out yet? Learn more about what we offer.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/products/pcb-manufacturing" className="btn-secondary text-sm py-2.5 px-6">
              PCB Manufacturing
            </Link>
            <Link href="/products/pcb-assembly" className="btn-secondary text-sm py-2.5 px-6">
              PCB Assembly
            </Link>
            <Link href="/capabilities" className="btn-secondary text-sm py-2.5 px-6">
              Full Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
