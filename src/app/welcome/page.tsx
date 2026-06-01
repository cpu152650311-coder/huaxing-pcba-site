'use client';

import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '9', label: 'SMT Lines' },
  { value: '58', label: 'Max PCB Layers' },
  { value: '150k+', label: 'Customers Served' },
];

const services = [
  { title: 'PCB Manufacturing', desc: '1–58 layers, HDI, flex, rigid-flex. ISO9001 & UL certified. 24h prototype turnaround.', icon: 'M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3' },
  { title: 'PCB Assembly', desc: '9 SMT + 5 DIP lines. 01005 to BGA. From $25 for 1-20 PCS. 3D AOI on every board.', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
  { title: 'BOM Procurement', desc: '5,000+ verified suppliers. Full turnkey with zero MOQ. Component sourcing & obsolescence management.', icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' },
  { title: 'Box Build Assembly', desc: 'End-to-end from bare PCB to finished enclosure. Conformal coating, potting, cabling, functional testing.', icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' },
];

const advantages = [
  { title: 'Direct Factory Pricing', desc: 'Shenzhen-based. Zero middlemen. Save 30–50% vs. Western quotes.' },
  { title: 'Free DFM Review', desc: 'Our engineers analyze your Gerbers for manufacturability issues — at no cost.' },
  { title: 'Zero MOQ', desc: 'From 1 prototype to 10,000+. No minimum order quantity ever.' },
  { title: '24h Response', desc: 'Detailed quote with DFM analysis within one business day. Every time.' },
  { title: 'ISO9001 & UL Certified', desc: 'IPC-A-610 Class 2/3. Full traceability. IATF 16949 for automotive.' },
  { title: '15M+ Daily Placement', desc: '9 SMT lines at 80,000 CPH each. 300,000+ boards per month capacity.' },
];

const testimonials = [
  { quote: 'HUAXING delivered our automotive ECU boards ahead of schedule with zero defects. Their DFM feedback saved us two design iterations.', company: 'European Tier-1 Automotive Supplier' },
  { quote: 'We switched 12 medical device SKUs to HUAXING. 40% cost reduction, same IPC Class 3 quality. Their documentation package is outstanding.', company: 'US Medical Device Manufacturer' },
  { quote: 'From prototype to 50k units in 8 weeks. HUAXING managed the entire BOM procurement — 487 line items, zero shortages.', company: 'Industrial IoT Scale-Up' },
];

const partners = [
  { name: 'Tesla', file: 'partner-tesla.webp' },
  { name: 'Avnet', file: 'partner-avnet.webp' },
  { name: 'Microchip', file: 'partner-microchip.webp' },
  { name: 'Tyco', file: 'partner-tyco.webp' },
  { name: 'Harley-Davidson', file: 'partner-harley.webp' },
  { name: 'Hexagon', file: 'partner-hexagon.webp' },
];

export default function WelcomePage() {
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <>
      <div className="bg-white font-sans">
        {/* ═══ ATTENTION — Hero ═══ */}
        <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-pcba-fallback.webp"
              alt=""
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/95" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white/90 text-sm mb-8">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Trusted by 150,000+ Engineers Worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Your PCB & PCBA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-orange-400">
                Manufacturing Partner
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              25+ years. 9 SMT lines. 58-layer capability. Direct factory pricing from Shenzhen — no middlemen, zero MOQ.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button
                onClick={() => setShowInquiry(true)}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-orange-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Get Your Free Quote Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={() => setShowInquiry(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white font-semibold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                Upload Your Gerber Files
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* ═══ INTEREST — Capabilities ═══ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why 150,000+ Engineers Choose HUAXING
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Direct access to Shenzhen&apos;s most advanced PCB manufacturing facility — at prices Western brokers can&apos;t match.
              </p>
            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div key={s.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-100 group-hover:scale-110 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  <button
                    onClick={() => setShowInquiry(true)}
                    className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 cursor-pointer"
                  >
                    Get Quote <span className="text-lg">→</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8">
              {['ISO9001:2015', 'UL Certified', 'RoHS', 'REACH', 'IPC-A-610', 'IATF 16949'].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ DESIRE — Social Proof + Advantages ═══ */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Save 30–50% Without<br />
                  Sacrificing Quality
                </h2>
                <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                  Our Shenzhen factory eliminates the distributor markup. You get IPC Class 3 quality at direct manufacturing cost — with engineering support that prevents costly design mistakes before production begins.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {advantages.map((a) => (
                    <div key={a.title} className="flex gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-brand-200 transition-all">
                      <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{a.title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowInquiry(true)}
                  className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-500/25 hover:shadow-xl cursor-pointer"
                >
                  Start Your Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/images/team-factory.webp" alt="HUAXING factory team" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Quality Rating</div>
                      <div className="font-bold text-gray-900">99.2% Lot Acceptance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Engineering teams at automotive, medical, and industrial companies rely on HUAXING for mission-critical PCBA.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
                  <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
                    &ldquo;
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-brand-600">{t.company}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-40 grayscale">
              {partners.map((p) => (
                <img key={p.name} src={`/images/${p.file}`} alt={p.name} className="h-8 mx-auto object-contain" />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ACTION — Final CTA ═══ */}
        <section className="relative py-24 md:py-36 bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero-pcba-concept.webp" alt="" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to Cut Your PCBA Costs?
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              Upload your Gerber files and BOM. Our engineering team will return a detailed quote with free DFM analysis within 24 hours — no obligation, no minimum order.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button
                onClick={() => setShowInquiry(true)}
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-500 to-orange-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-brand-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Get Your Free Quote Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Free DFM review included · Zero MOQ · ISO9001 & UL certified · 24h response
            </p>
          </div>
        </section>
      </div>

      <InquiryModal isOpen={showInquiry} onClose={() => setShowInquiry(false)} />
    </>
  );
}
