'use client';

import Image from 'next/image';
import Link from 'next/link';

const certificationList = [
  { name: 'ISO 9001:2015', scope: 'Quality Management System', desc: 'Certified for PCB design, fabrication, assembly, and test services. Audited annually by SGS — covering all production stages from incoming materials to final shipment.' },
  { name: 'UL Certification', scope: 'PCB Safety Standard', desc: 'UL 796 recognized for PCB fabrication. Suitable for end products requiring UL component recognition and safety compliance.' },
  { name: 'RoHS & REACH', scope: 'Hazardous Substance Compliance', desc: 'All lead-free assembly lines are RoHS-compliant. Full material declaration reports available per board. Halide-free fluxes used across SMT lines.' },
  { name: 'IPC Class 2 / 3', scope: 'Industry Standards Compliance', desc: 'All production follows IPC-A-600, IPC-6012, IPC-A-610, and J-STD-001. Class 3 available for high-reliability applications.' },
  { name: 'ITAR Compliance', scope: 'International Traffic in Arms', desc: 'ITAR-compliant facility procedures for defense and aerospace projects. Secure handling of controlled technical data.' },
  { name: 'ISO 14001:2015', scope: 'Environmental Management', desc: 'EMS certified — waste management, lead-free processing, and environmental controls in place across the 45,000 m² facility.' },
];

const inspectionProcess = [
  {
    stage: '01',
    title: 'Incoming QC (IQC)',
    description: 'Raw PCBs and components inspected upon arrival. Bare boards undergo visual inspection, dimensional verification, and coupon testing. Components checked for date code, quantity, and solderability.',
    color: 'from-brand-500 to-brand-600',
  },
  {
    stage: '02',
    title: 'Solder Paste Inspection (SPI)',
    description: '3D SPI (Koh Young) measures paste volume, area, height, and alignment on every board post-printing. Out-of-spec prints trigger automatic stencil cleaning and reprint. Reports available per panel.',
    color: 'from-brand-400 to-brand-500',
  },
  {
    stage: '03',
    title: 'Automated Optical Inspection (AOI)',
    description: 'Every board passes through 3D AOI (Omron / SAKI) after reflow — checking component presence, polarity, alignment, tombstoning, and solder joint quality. Defective boards flagged and routed to repair.',
    color: 'from-brand-500 to-brand-600',
  },
  {
    stage: '04',
    title: 'X-Ray Inspection',
    description: 'BGA, QFN, and other hidden-joint components inspected via Nordson DAGE digital X-ray. Void percentage, solder ball shape, and bridging analyzed per J-STD-001. Minimum 5 boards per batch sampled.',
    color: 'from-brand-400 to-brand-500',
  },
  {
    stage: '05',
    title: 'In-Circuit Testing (ICT)',
    description: 'Agilent i3070 fixtures test opens, shorts, resistor/capacitor values, diode orientation, and basic IC connectivity. Full pass/fail reports generated per board with traceable logging.',
    color: 'from-brand-500 to-brand-600',
  },
  {
    stage: '06',
    title: 'Functional Testing (FCT)',
    description: 'Custom test jigs simulate real-world operating conditions — power-on tests, signal integrity checks, firmware loading, and system-level validation. Test scripts developed with your engineering team.',
    color: 'from-brand-400 to-brand-500',
  },
  {
    stage: '07',
    title: 'Final Visual Inspection (FVI)',
    description: 'IPC-A-610 Class 2/3 visual criteria applied to every board before packing. Documentation includes inspection stamp, serial number (if requested), and digital photo archive for full traceability.',
    color: 'from-brand-500 to-brand-600',
  },
  {
    stage: '08',
    title: 'Outgoing QC (OQC)',
    description: 'Final verification of packaging, labeling, quantity, and documentation (CoC, test reports, shipping manifest). Lot acceptance sampling per ANSI/ASQ Z1.4 AQL standards.',
    color: 'from-brand-400 to-brand-500',
  },
];

const testingCapabilities = [
  {
    title: 'Automated Optical Inspection (AOI)',
    systems: 'Omron VT-RNS (3D inline), SAKI BF-18D (2D/3D hybrid)',
    coverage: '100% of all boards on all SMT lines',
    resolution: '15μm, detects missing/polarity/shifted/tombstoned components',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'X-Ray Inspection',
    systems: 'Nordson DAGE XD7600NT (digital X-ray)',
    coverage: 'BGA, QFN, DFN, and all hidden-solder-joint packages',
    resolution: 'Void percentage analysis per J-STD-001, bridge detection, ball shape',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Flying Probe Testing',
    systems: 'Takaya APT-1500F (4-head simultaneous)',
    coverage: 'Opens, shorts, resistors, capacitors, diodes, inductors, basic ICs',
    resolution: 'No fixture required — ideal for prototypes and medium-volume runs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'In-Circuit Testing (ICT)',
    systems: 'Agilent i3070 (3,072 test points)',
    coverage: 'Opens, shorts, resistor/capacitor values, diode orientation, IC connectivity',
    resolution: 'Full test reports per board with pass/fail logging and traceability',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'Functional Testing (FCT)',
    systems: 'Custom test jigs & automated test equipment',
    coverage: 'Power-on, signal integrity, firmware loading, system-level validation',
    resolution: 'Test scripts developed collaboratively with your engineering team',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'Solder Paste Inspection (SPI)',
    systems: 'Koh Young 3D SPI (inline)',
    coverage: '100% of boards — paste volume, area, height, alignment measurement',
    resolution: '±12μm print repeatability, automatic stencil cleaning trigger',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

const qualityMetrics = [
  { value: '100%', label: 'AOI Coverage', sub: 'On all SMT lines, every board' },
  { value: '3x', label: 'Quality Checks', sub: 'Per product, per production run' },
  { value: '95%+', label: 'Customer Satisfaction', sub: 'Based on post-delivery surveys' },
  { value: '>99.2%', label: 'Lot Acceptance Rate', sub: 'Based on 2024 annual data' },
  { value: '>98.5%', label: 'On-Time Delivery', sub: 'Across all product categories' },
  { value: '<0.3%', label: 'Customer RMA Rate', sub: 'Within 12 months of shipment' },
];

export default function QualityPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-100/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-brand-100/30 blur-3xl" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] opacity-10 pointer-events-none hidden lg:block">
          <Image src="/images/factory-quality.webp" alt="" width={550} height={869} className="w-full h-full object-contain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Quality Assurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading leading-tight">
              Uncompromising<br />
              <span className="text-brand-600">Quality Standards</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Every board leaving our factory is inspected, tested, and verified against the strictest 
              industry standards. ISO9001, UL, and RoHS certified — with IPC Class 2/3 compliance 
              and 100% AOI coverage across all SMT lines.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="btn-primary">
                Request Quality Documentation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="#certifications" className="btn-secondary">
                View Certifications
              </a>
            </div>
          </div>

          {/* Certification badges */}
          <div className="mt-16 flex flex-wrap items-center gap-3">
            {['ISO9001:2015', 'UL Certified', 'RoHS Compliant', 'REACH Compliant', 'IPC Class 2/3', 'IATF 16949', 'ISO 14001:2015'].map((badge) => (
              <div key={badge} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-gray-100 shadow-sm text-brand-700 text-sm font-medium">
                <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quality Metrics / Stats ─── */}
      <section className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {qualityMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-600 font-heading">{metric.value}</div>
                <div className="text-xs md:text-sm font-medium text-gray-700 mt-1">{metric.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quality Certifications Grid ─── */}
      <section className="bg-gray-50 py-20 md:py-28" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Quality Certifications</h2>
            <p className="section-subtitle mx-auto">
              HUAXING holds globally recognized certifications across quality, safety, environmental, 
              and automotive standards — audited regularly by SGS, UL, and other accredited bodies.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationList.map((cert) => (
              <div key={cert.name} className="card p-6 group hover:border-brand-200 transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-heading text-base">{cert.name}</h3>
                    <p className="text-xs text-brand-600 font-medium">{cert.scope}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Inspection Process Flow ─── */}
      <section className="bg-white py-20 md:py-28 overflow-hidden relative" id="inspection-process">
        <div className="absolute left-0 top-0 w-1/4 h-full opacity-5 pointer-events-none hidden lg:block">
          <Image src="/images/hero-hero.webp" alt="" width={550} height={869} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Inspection Process Flow</h2>
            <p className="section-subtitle mx-auto">
              Eight-stage quality system covering every step from incoming materials to outgoing shipment. 
              Each board goes through at least three rigorous quality checks before delivery.
            </p>
          </div>

          <div className="mt-14 relative">
            {/* Vertical timeline line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-100 -translate-x-1/2" />

            <div className="space-y-10 md:space-y-0">
              {inspectionProcess.map((step, index) => (
                <div key={step.title} className="md:flex items-start gap-8 md:even:flex-row-reverse">
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-gray-50 rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-brand-100 transition-all duration-200 ${index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center font-bold font-heading text-sm shadow-sm">
                          {step.stage}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 font-heading">{step.title}</h3>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot (desktop) */}
                  <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 border-4 border-white shadow-md items-center justify-center -my-1 z-10" />

                  {/* Empty spacer for even items */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testing Capabilities ─── */}
      <section className="bg-gray-50 py-20 md:py-28" id="testing-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Testing Capabilities</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive testing infrastructure covering every stage of production — from solder paste 
              inspection through functional validation. Every board is tested, every joint verified.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingCapabilities.map((test) => (
              <div key={test.title} className="card p-6 group hover:border-brand-200 transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  {test.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">{test.title}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Systems: </span>
                    <span className="text-gray-500">{test.systems}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Coverage: </span>
                    <span className="text-gray-500">{test.coverage}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Resolution: </span>
                    <span className="text-gray-500">{test.resolution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { label: 'Boards Inspected Daily', value: '30,000+' },
                { label: 'Inspection Points per Board', value: '500+' },
                { label: 'Years of QC Data', value: '15+' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-brand-600 font-heading">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quality Commitment ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Quality Commitment</h2>
              <p className="section-subtitle">
                Quality is not a department at HUAXING — it is embedded in every process, every machine, 
                and every person on the factory floor. We believe in doing it right the first time.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  { title: '3x Rigorous Quality Checks', desc: 'Every product undergoes a minimum of three independent quality checks before shipment — inline AOI, electrical test, and final visual inspection.' },
                  { title: 'Full Traceability', desc: 'Every board is serialized and tracked through production. Digital photo archives, test reports, and material certificates accompany each shipment.' },
                  { title: 'Continuous Improvement', desc: 'Monthly quality reviews, corrective action tracking (8D/CAPA), and annual internal audits ensure our processes only get better over time.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 font-heading">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="/images/team-factory.webp"
                  alt="HUAXING quality control team at work"
                  width={1024}
                  height={931}
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white text-center text-xs text-gray-500 border-t border-gray-100">
                  Quality control team ensuring every board meets strict standards
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 font-heading">Quality by the Numbers</h3>
                <div className="mt-6 space-y-6">
                  {[
                    { metric: 'Customer Satisfaction', value: '95%+', bar: 'w-[95%]' },
                    { metric: 'On-Time Delivery', value: '98.5%', bar: 'w-[98.5%]' },
                    { metric: 'First-Pass Yield', value: '97%+', bar: 'w-[97%]' },
                    { metric: 'Lot Acceptance Rate', value: '99.2%', bar: 'w-[99%]' },
                  ].map((item) => (
                    <div key={item.metric}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-gray-700">{item.metric}</span>
                        <span className="text-sm font-bold text-brand-600">{item.value}</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full ${item.bar} transition-all duration-500`} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Quality metrics audited quarterly. <span className="font-medium text-gray-700">Full reports available upon request.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Experience the HUAXING Quality Difference
          </h2>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
            Upload your Gerber files and BOM for a free, no-obligation quote within 24 hours. 
            Every project comes with full DFM review and quality documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20"
            >
              Request Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200"
            >
              View Manufacturing Capabilities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-brand-200">
            Zero MOQ · Free DFM Review · ISO9001 &amp; UL Certified · IPC Class 2/3 · 24/7 Customer Support
          </p>
        </div>
      </section>
    </>
  );
}
