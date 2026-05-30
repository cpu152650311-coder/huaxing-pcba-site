'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

const smtStats = [
  { label: 'SMT Lines', value: '9' },
  { label: 'DIP Lines', value: '4' },
  { label: 'AOI Systems', value: '6' },
  { label: 'Daily Capacity', value: '15M+ components' },
];

const smtCapabilities = [
  {
    title: 'High-Speed Placement',
    description: 'Siemens / ASM SIPLACE and Yamaha YSM series placement machines achieving 80,000+ CPH with ±25μm precision.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    title: 'Fine-Pitch & Micro-BGA',
    description: 'Capable of placing BGA, QFP, QFN, micro-BGA, and PoP (Package on Package) with 0201 and 01005 chip components.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Solder Paste Printing',
    description: 'Laser-cut and electroformed stencils with automated solder paste inspection (SPI) for consistent paste volume and alignment.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
      </svg>
    ),
  },
  {
    title: 'RoHS & Lead-Free Assembly',
    description: 'Full leaded and lead-free (RoHS compliant) assembly capability with precise reflow profiling for all solder paste types.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Production',
    description: 'Mix of high-volume (Siemens/ASM) and flexible (Yamaha) lines enables rapid changeover and quick-turn prototyping.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    title: 'Reflow Soldering',
    description: '10-zone reflow ovens with nitrogen atmosphere capability for optimized thermal profiles on complex assemblies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
  },
];

const dipCapabilities = [
  { title: 'Wave Soldering', description: 'Lead-free and leaded wave soldering with flux spray and preheating for optimal through-hole joint quality.' },
  { title: 'Selective Soldering', description: 'Programmable selective soldering for mixed-technology boards requiring precise solder application to specific through-hole components.' },
  { title: 'Hand Soldering', description: 'Skilled hand soldering for rework, prototypes, and components unsuitable for automated processes.' },
  { title: 'Press-Fit Assembly', description: 'Automated and manual press-fit insertion for connectors and compliant-pin components.' },
];

const inspectionCapabilities = [
  {
    title: 'AOI (Automated Optical Inspection)',
    description: '6 AOI systems inspect solder joints, component presence, polarity, and alignment at production speed across all SMT and DIP lines.',
    highlight: '100% inline inspection — every board, every joint',
  },
  {
    title: 'X-Ray Inspection',
    description: 'Digital X-ray for hidden solder joints under BGA, QFN, and other bottom-terminated components. Detects voids, bridges, and insufficient solder.',
    highlight: 'BGA void analysis & micro-joint inspection',
  },
  {
    title: 'Flying Probe Testing',
    description: 'Fixtureless electrical testing for opens, shorts, and component values. Ideal for prototypes and medium-volume runs without custom test fixtures.',
    highlight: 'No tooling cost — rapid program generation',
  },
  {
    title: 'ICT & Functional Testing',
    description: 'Custom fixture-based in-circuit testing and functional test solutions for volume production with full traceability and test reports.',
    highlight: 'Comprehensive test coverage & data logging',
  },
];

const processSteps = [
  { step: '01', title: 'Solder Paste Printing', description: 'Laser-cut stencil applied to bare PCB with precise paste volume controlled by SPI inspection.' },
  { step: '02', title: 'Pick & Place', description: 'Components placed by Siemens/ASM or Yamaha machines at up to 80,000 CPH with vision alignment.' },
  { step: '03', title: 'Reflow Soldering', description: '10-zone convection reflow with nitrogen atmosphere and real-time temperature profiling.' },
  { step: '04', title: 'AOI Inspection', description: 'Automated optical inspection catches placement, polarity, and soldering defects immediately after reflow.' },
  { step: '05', title: 'DIP / Through-Hole', description: 'Wave or selective soldering for through-hole components, followed by visual inspection.' },
  { step: '06', title: 'Final Inspection', description: 'X-ray, flying probe, or ICT testing depending on board complexity and customer requirements.' },
];

const specialCapabilities = [
  {
    title: 'Conformal Coating',
    description: 'Acrylic, silicone, urethane, and parylene conformal coating for protection against moisture, dust, chemicals, and extreme temperatures. Selective coating available.',
  },
  {
    title: 'Potting & Encapsulation',
    description: 'Epoxy and polyurethane potting for high-voltage, vibration-prone, or harsh-environment assemblies. Full or selective encapsulation options.',
  },
  {
    title: 'Ultrasonic & DI Water Cleaning',
    description: 'Removes flux residues and contaminants using ultrasonic baths and deionized water rinse for high-reliability and medical-grade assemblies.',
  },
  {
    title: 'Box Build & Full Turnkey Assembly',
    description: 'End-to-end assembly from bare PCB and BOM procurement through SMT, DIP, testing, conformal coating, and final box build integration.',
  },
  {
    title: 'BOM Procurement & Management',
    description: 'Full turnkey procurement with component sourcing, obsolescence management, and kitting. Over 5,000 verified supplier relationships.',
  },
  {
    title: 'Engineering Support & DFM',
    description: 'Design for Manufacturing (DFM) review, panelization optimization, stencil design, and test strategy consultation before production begins.',
  },
];

export default function PCBAssemblyPage() {
  const [showInquiry, setShowInquiry] = useState(false);
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/app-robot.webp" alt="" width={1024} height={640} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
              </svg>
              <span>PCBA Assembly</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
              Precision PCB Assembly<br />
              <span className="text-brand-600">9 SMT + 4 DIP Lines</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              HUAXING operates 9 fully automatic SMT assembly lines equipped with Siemens/ASM and Yamaha 
              placement machines, plus 4 DIP lines with wave and selective soldering. From 01005 micro-components 
              to complex BGA assemblies — all inspected by AOI, X-ray, and flying probe systems.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button onClick={() => setShowInquiry(true)} className="btn-primary cursor-pointer">
                Request PCB Assembly Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <Link href="/capabilities" className="btn-secondary">
                View All Capabilities
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {smtStats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl border border-white/10 shadow-sm p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white font-heading">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SMT Capabilities Grid ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">SMT Assembly Capabilities</h2>
            <p className="section-subtitle mx-auto">
              Our 9 SMT lines combine high-speed placement with ultra-fine-pitch accuracy for boards of any complexity. 
              All lines are backed by AOI and SPI for zero-defect manufacturing.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {smtCapabilities.map((cap) => (
              <div key={cap.title} className="card p-6 group hover:border-brand-200 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-heading">{cap.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIP / Through-Hole ─── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">DIP &amp; Through-Hole Assembly</h2>
              <p className="section-subtitle">
                4 dedicated DIP assembly lines handle all through-hole and mixed-technology requirements 
                with wave soldering, selective soldering, and press-fit capabilities.
              </p>
              <div className="mt-8 space-y-4">
                {dipCapabilities.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 font-heading">Component Types We Assemble</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['BGA', 'QFP', 'QFN', 'micro-BGA', 'PoP (Package on Package)', '0201', '01005', 'CSP', 'DFN', 'SOT', 'SOIC', 'PLCC', 'Connectors', 'Transformers', 'Headers', 'Potentiometers'].map((comp) => (
                  <div key={comp} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {comp}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Inspection & Quality ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Inspection &amp; Quality Control</h2>
            <p className="section-subtitle mx-auto">
              Every board is inspected at multiple stages. Our quality system ensures defects are caught early 
              and every shipment meets your specifications.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {inspectionCapabilities.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-medium">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Assembly Process Flow ─── */}
      <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] opacity-5 pointer-events-none hidden lg:block">
          <Image src="/images/product-dimming.webp" alt="" width={1024} height={640} className="w-full h-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Assembly Process Flow</h2>
            <p className="section-subtitle mx-auto">
              From solder paste printing to final inspection — every board follows a standardized, 
              controlled process to ensure repeatable quality.
            </p>
          </div>

          <div className="mt-14 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-200 -translate-y-1/2" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4">
              {processSteps.map((item) => (
                <div key={item.step} className="relative bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center group hover:border-brand-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold font-heading mx-auto group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900 font-heading text-sm">{item.title}</h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Special Capabilities ─── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] opacity-5 pointer-events-none hidden lg:block">
          <Image src="/images/product-set-top-box.webp" alt="" width={1024} height={640} className="w-full h-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Special &amp; Value-Added Services</h2>
            <p className="section-subtitle mx-auto">
              Beyond standard assembly, we offer a comprehensive suite of value-added services to reduce 
              your supply chain complexity and accelerate time-to-market.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialCapabilities.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Assembly Line Overview ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Assembly Line Overview</h2>
              <p className="section-subtitle">
                Our 9 SMT lines combine high-speed Siemens/ASM placement with flexible Yamaha lines, 
                enabling rapid changeover between prototypes and volume production. Each line is 
                equipped with inline 3D SPI, AOI, and real-time process monitoring.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { label: 'High-Speed Lines', value: '4', note: 'ASM SIPLACE X4iS, 80,000 CPH' },
                  { label: 'Flexible Lines', value: '5', note: 'Yamaha YSM20R, 72,000 CPH' },
                  { label: 'AOI Systems', value: '6', note: 'Omron VT-RNS, SAKI BF-18D' },
                  { label: 'X-Ray Systems', value: '2', note: 'Nordson DAGE XD7600NT' },
                ].map((line) => (
                  <div key={line.label} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{line.label}</div>
                      <div className="text-xs text-gray-400">{line.note}</div>
                    </div>
                    <div className="text-2xl font-bold text-brand-600">{line.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/images/factory-smt.webp"
                alt="HUAXING SMT assembly line - engineer with PCBA board"
                width={516}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-3 bg-white text-center text-xs text-gray-500 border-t border-gray-100">
                SMT production line — 80,000 components placed per hour
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Ready to Start Your Assembly Project?
          </h2>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
            Upload your Gerber files and BOM for a quick-turn quote. Our engineering team reviews every 
            project before production to ensure manufacturability and optimal pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20 cursor-pointer"
            >
              Upload Files & Get Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </button>
            <Link
              href="/products/pcb-manufacturing"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              Explore PCB Fabrication
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-brand-200">
            Zero MOQ · Free DFM Review · ISO9001 &amp; UL Certified · 24/7 Customer Support
          </p>
        </div>
      </section>

      <InquiryModal isOpen={showInquiry} onClose={() => setShowInquiry(false)} />
    </>
  );
}
