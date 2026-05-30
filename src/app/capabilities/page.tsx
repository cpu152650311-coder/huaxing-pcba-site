'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

const heroStats = [
  { label: 'Years Experience', value: '25+' },
  { label: 'SMT Lines', value: '9' },
  { label: 'Daily Capacity', value: '15M+' },
  { label: 'Certifications', value: '6' },
];

const technicalCapabilities = [
  { category: 'Board Layers', capability: '1–58 layers', detail: 'Standard, HDI, flex, rigid-flex, heavy copper' },
  { category: 'Min. Trace / Spacing', capability: '2.5mil / 2.5mil', detail: 'Advanced line/space down to 2.5mil for HDI' },
  { category: 'Min. Mechanical Drill', capability: '6mil (0.15mm)', detail: 'Laser drill: 4mil (0.1mm) microvias' },
  { category: 'Max. Board Size', capability: '610 × 540mm', detail: 'Larger panels available upon request' },
  { category: 'Board Thickness', capability: '0.2mm – 6.0mm', detail: '±0.05mm tolerance on standard builds' },
  { category: 'Copper Weight', capability: '0.5oz – 10oz', detail: 'Heavy copper up to 20oz for power applications' },
  { category: 'Surface Finish', capability: 'HASL, ENIG, OSP, Immersion Tin/Silver', detail: 'ENIG + OSP selective finish available' },
  { category: 'Solder Mask', capability: 'LPI & photoimageable', detail: 'Colors: green, blue, red, black, white, yellow, matte' },
  { category: 'Impedance Control', capability: '±5% tolerance', detail: 'Controlled impedance up to 100Ω differential' },
  { category: 'Component Placement', capability: '01005 to BGA', detail: 'Micro-BGA, PoP, QFN, CSP, QFP 0.3mm pitch' },
  { category: 'Solder Types', capability: 'Leaded & Lead-Free', detail: 'RoHS, SAC305, SN100C, halide-free fluxes' },
  { category: 'Standards Met', capability: 'IPC Class 2 & 3', detail: 'IPC-6012, IPC-A-600, IPC-A-610, J-STD-001' },
];

const equipmentList = [
  {
    category: 'SMT Placement Machines',
    items: [
      { name: 'ASM SIPLACE X4iS', qty: 6, spec: '80,000 CPH, ±25μm @ 4σ' },
      { name: 'ASM SIPLACE SX2', qty: 4, spec: '55,000 CPH, ±25μm @ 4σ' },
      { name: 'Yamaha YSM20R', qty: 6, spec: '72,000 CPH, ±28μm, flexible' },
      { name: 'Yamaha YSM10', qty: 4, spec: '48,000 CPH, mid-range flex' },
    ],
  },
  {
    category: 'Solder Paste Printers',
    items: [
      { name: 'DEK Horizon 03iX', qty: 6, spec: '±12μm print repeatability, SPI integrated' },
      { name: 'EKRA X5', qty: 3, spec: 'High-precision stencil printer' },
    ],
  },
  {
    category: 'Reflow Ovens',
    items: [
      { name: 'Heller 1936 MKIII', qty: 6, spec: '10-zone, nitrogen-capable, 2,040mm heated length' },
      { name: 'BTU Pyramax 125N', qty: 3, spec: '10-zone convection, N₂ atmosphere' },
    ],
  },
  {
    category: 'Wave & Selective Soldering',
    items: [
      { name: 'Seho ECOSyS 3000', qty: 3, spec: 'Lead-free wave soldering, flux spray & preheat' },
      { name: 'ERSA Versaflow 3', qty: 1, spec: 'Selective soldering, multi-nozzle program' },
      { name: 'Manual wave stations', qty: 3, spec: 'Hand soldering & rework stations' },
    ],
  },
  {
    category: 'Inspection & Test',
    items: [
      { name: 'Omron VT-RNS AOI', qty: 4, spec: '3D inline AOI, 15μm resolution' },
      { name: 'SAKI BF-18D AOI', qty: 2, spec: '2D/3D hybrid AOI, high-speed' },
      { name: 'Nordson DAGE XD7600NT', qty: 2, spec: 'Digital X-ray, BGA void analysis' },
      { name: 'Takaya APT-1500F', qty: 3, spec: 'Flying probe tester, 4-head simultaneous' },
      { name: 'Agilent i3070 ICT', qty: 2, spec: 'In-circuit test, 3,072 test points' },
      { name: 'SPI (Solder Paste Inspection)', qty: 6, spec: 'Inline 3D SPI by Koh Young' },
    ],
  },
  {
    category: 'Conformal Coating & Cleaning',
    items: [
      { name: 'Nordson Select Coat SL-940', qty: 2, spec: 'Selective conformal coating' },
      { name: 'Ultrasonic cleaning line', qty: 2, spec: 'DI water + ultrasonic for flux removal' },
    ],
  },
];

const capacityStats = [
  { period: 'Daily SMT Placement', value: '15 million+', unit: 'components' },
  { period: 'Monthly PCBA', value: '300,000+', unit: 'boards' },
  { period: 'Monthly PCB (sqm)', value: '25,000+', unit: 'm²' },
  { period: 'Panel Types per Day', value: '40+', unit: 'designs' },
  { period: 'Max Panel Size', value: '610 × 540', unit: 'mm' },
  { period: 'Annual Output', value: '4+ million', unit: 'boards' },
];

const qcProcesses = [
  {
    title: 'Incoming QC (IQC)',
    description: 'All raw PCBs and components are inspected upon arrival. Bare boards go through visual inspection, dimensional verification, and coupon testing. Components are checked for date code, quantity, and solderability.',
  },
  {
    title: 'Solder Paste Inspection (SPI)',
    description: 'Post-printing 3D SPI (Koh Young) measures paste volume, area, height, and alignment on every board. Out-of-spec prints trigger automatic stencil cleaning and reprint. Reports available per panel.',
  },
  {
    title: 'Post-Placement AOI',
    description: 'After reflow, each board passes through 3D AOI (Omron/SAKI) that checks component presence, polarity, alignment, tombstoning, and solder joint quality. Defective boards are flagged and routed to repair stations.',
  },
  {
    title: 'X-Ray Inspection',
    description: 'BGA, QFN, and other hidden-joint components are inspected via Nordson DAGE digital X-ray. Void percentage, solder ball shape, and bridging are analyzed per J-STD-001 standards. Sampling rate: minimum 5 boards per batch.',
  },
  {
    title: 'In-Circuit Testing (ICT)',
    description: 'Agilent i3070 fixtures test opens, shorts, resistor/capacitor values, diode orientation, and basic IC connectivity. Full test reports are generated per board with pass/fail logging.',
  },
  {
    title: 'Functional Testing (FCT)',
    description: 'Custom test jigs simulate real-world operating conditions — power-on tests, signal integrity checks, firmware loading, and system-level validation. Test scripts are developed in collaboration with your engineering team.',
  },
  {
    title: 'Final Visual Inspection (FVI)',
    description: 'IPC-A-610 Class 2/3 visual criteria applied to every board before packing. Documentation: inspection stamp, serial number (if requested), and digital photo archive for traceability.',
  },
  {
    title: 'Outgoing QC (OQC)',
    description: 'Final verification of packaging, labeling, quantity, and accompanying documentation (CoC, test reports, shipping manifest). Sampling per AQL (ANSI/ASQ Z1.4) for lot acceptance.',
  },
];

const leadTimes = [
  { type: 'PCB Prototype (≤10 pcs)', express: '24 hours', standard: '3–5 days', notes: 'Standard FR4, 1–6 layers' },
  { type: 'PCB Sample (10–100 pcs)', express: '48 hours', standard: '5–7 days', notes: 'Multi-layer, ENIG finish' },
  { type: 'PCB Production (100–1,000 pcs)', express: '5–7 days', standard: '10–12 days', notes: 'Including tooling & E-test' },
  { type: 'PCB Volume (1,000+)', express: '10–12 days', standard: '15–20 days', notes: 'Bulk pricing applies' },
  { type: 'PCBA Prototype Assembly', express: '48–72 hours', standard: '5–7 days', notes: 'Turnkey, all components in stock' },
  { type: 'PCBA Low-Volume (100–1,000)', express: '5–7 days', standard: '10–14 days', notes: 'Includes stencil, reflow, test' },
  { type: 'PCBA Medium-Volume (1,000–10,000)', express: '10–14 days', standard: '15–25 days', notes: 'Full turnkey with BOM procurement' },
  { type: 'PCBA High-Volume (10,000+)', express: '15–20 days', standard: '25–35 days', notes: 'Dedicated line allocation' },
  { type: 'Box Build / Full Assembly', express: 'N/A', standard: '20–40 days', notes: 'Depends on BOM complexity & cabinet sourcing' },
];

const certifications = [
  { name: 'ISO 9001:2015', scope: 'Quality Management System', desc: 'Certified for PCB design, fabrication, assembly, and test services. Audited annually by SGS.' },
  { name: 'UL (EXXXXXX)', scope: 'PCB Safety Standard', desc: 'UL 796 recognized for PCB fabrication. Suitable for end products requiring UL component recognition.' },
  { name: 'RoHS & REACH', scope: 'Hazardous Substance Compliance', desc: 'All lead-free assembly lines are RoHS-compliant. Full material declaration reports available per board.' },
  { name: 'IPC Members', scope: 'Industry Standards Compliance', desc: 'Active member of IPC. All production follows IPC-A-600, IPC-6012, IPC-A-610, and J-STD-001.' },
  { name: 'IATF 16949', scope: 'Automotive Quality', desc: 'Certified for automotive PCB and PCBA production. PPAP and IMDS documentation available.' },
  { name: 'ISO 14001:2015', scope: 'Environmental Management', desc: 'EMS certified — waste management, lead-free processing, and environmental controls in place.' },
];

const industries = [
  { title: 'Automotive', image: '/images/app-automotive.webp', alt: 'Automotive electronics motor driver PCBA', desc: 'IATF 16949 certified. Engine control units, ADAS, infotainment, power modules with PPAP and IMDS documentation.' },
  { title: 'Medical', image: '/images/app-medical.webp', alt: 'Medical equipment control PCBA', desc: 'ISO 13485 qualified processes. Medical device electronics, diagnostic equipment, and patient monitoring systems.' },
  { title: 'Industrial', image: '/images/app-industrial.webp', alt: 'Industrial automation motion control PCBA', desc: 'Motion control, PLCs, motor drives, and power distribution boards built for harsh environments.' },
  { title: 'IoT & Connectivity', image: '/images/app-iot.webp', alt: 'IoT device PCBA electronics', desc: 'Wireless modules, sensor nodes, gateways, and connectivity solutions for smart infrastructure.' },
  { title: 'Smart Home', image: '/images/app-smarthome.webp', alt: 'Smart home electronics dimming module PCBA', desc: 'KNX, Zigbee, and WiFi-enabled devices — from dimming modules to smart thermostats.' },
  { title: 'Consumer Electronics', image: '/images/app-consumer.webp', alt: 'Consumer electronics network set-top box PCBA', desc: 'High-volume consumer devices including set-top boxes, wearables, and entertainment systems.' },
  { title: 'Robotics', image: '/images/app-robot.webp', alt: 'Intelligent service robot PCBA', desc: 'Service robots, collaborative robots (cobots), and automated guided vehicles (AGVs).' },
  { title: 'KNX Building Control', image: '/images/app-knx.webp', alt: 'Smart building KNX control PCBA', desc: 'KNX-certified building automation — lighting control, HVAC, and energy management systems.' },
];

export default function CapabilitiesPage() {
  const [showInquiry, setShowInquiry] = useState(false);
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
              <span>Our Capabilities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading leading-tight">
              Comprehensive PCBA<br />
              <span className="text-brand-600">Manufacturing Capabilities</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              With 25+ years of PCB manufacturing and assembly expertise, HUAXING operates 9 SMT lines, 
              4 DIP lines, and a full suite of inspection, testing, and value-added services under one roof. 
              From rapid prototypes to high-volume production — all backed by ISO, UL, and IATF 16949 certifications.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button onClick={() => setShowInquiry(true)} className="btn-primary cursor-pointer">
                Discuss Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a href="#technical-capabilities" className="btn-secondary">
                Explore Capabilities
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-xl border border-gray-100 shadow-sm p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-600 font-heading">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Overview ─── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">End-to-End PCBA Solutions</h2>
            <p className="section-subtitle mx-auto">
              From bare PCB fabrication through SMT assembly, testing, conformal coating, and box build integration — 
              HUAXING offers a fully integrated manufacturing ecosystem under one roof, reducing lead times and supply chain complexity.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'PCB Fabrication', desc: '1–58 layers, HDI, flex, rigid-flex, metal core. ISO 9001 & UL certified. 25,000+ m² monthly capacity.', icon: 'M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3' },
              { title: 'SMT Assembly', desc: '9 lines with ASM SIPLACE & Yamaha. 01005 to BGA/PoP. 80,000 CPH per line. 3D AOI on every board.', icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' },
              { title: 'DIP & Through-Hole', desc: '4 DIP lines with wave and selective soldering. Press-fit, hand soldering, and rework capabilities for mixed-technology boards.', icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.087 4.113' },
              { title: 'Testing & QC', desc: '3D AOI, X-ray, flying probe, ICT, and functional test. IPC-A-610 Class 3, full traceability, and documented quality reports.', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
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

      {/* ─── Technical Capabilities Table ─── */}
      <section className="bg-gray-50 py-20 md:py-28" id="technical-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Technical Capabilities</h2>
            <p className="section-subtitle mx-auto">
              Detailed specifications across PCB fabrication and assembly. Our engineering team reviews 
              every project to ensure the right process parameters for your design.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-600 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold font-heading">Parameter</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-heading">Capability</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-heading hidden md:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {technicalCapabilities.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.category}</td>
                    <td className="px-5 py-3.5 text-brand-600 font-medium">{row.capability}</td>
                    <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Equipment List ─── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Equipment &amp; Machinery</h2>
            <p className="section-subtitle mx-auto">
              Our factory floor is equipped with industry-leading machinery from ASM, Yamaha, Heller, BTU, 
              Omron, Nordson, and Seho — maintained on a rigorous PM schedule with real-time OEE monitoring.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {equipmentList.map((group) => (
              <div key={group.category}>
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-600 rounded-full" />
                  {group.category}
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-gray-700">
                        <th className="text-left px-5 py-3 font-semibold">Model</th>
                        <th className="text-left px-5 py-3 font-semibold">Qty</th>
                        <th className="text-left px-5 py-3 font-semibold hidden sm:table-cell">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.items.map((item, i) => (
                        <tr key={item.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                          <td className="px-5 py-3 text-gray-900 font-medium">{item.name}</td>
                          <td className="px-5 py-3 text-brand-600 font-semibold">{item.qty}</td>
                          <td className="px-5 py-3 text-gray-500 hidden sm:table-cell">{item.spec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Production Capacity ─── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Production Capacity</h2>
              <p className="section-subtitle">
                HUAXING operates a 45,000 m² manufacturing facility in Shenzhen, China with 
                9 SMT lines, 4 DIP lines, and dedicated PCB fabrication capacity serving 
                customers across automotive, industrial, medical, telecommunications, and consumer electronics.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {capacityStats.map((stat) => (
                  <div key={stat.period} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <div className="text-2xl font-bold text-brand-600 font-heading">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.period}</div>
                    <div className="text-xs text-gray-400">{stat.unit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 font-heading">Production Lines Overview</h3>
              <div className="mt-6 space-y-5">
                {[
                  { line: 'High-Speed SMT (ASM SIPLACE)', qty: '4 lines', output: '80,000 CPH each', use: 'High-volume consumer, automotive' },
                  { line: 'Flexible SMT (Yamaha YSM)', qty: '5 lines', output: '48,000–72,000 CPH each', use: 'Medium-volume, quick-turn, prototypes' },
                  { line: 'DIP / Through-Hole Assembly', qty: '4 lines', output: 'Wave + selective', use: 'Mixed-tech, power, industrial' },
                  { line: 'PCB Fabrication Lines', qty: '3 lines', output: '25,000 m²/month', use: 'Multi-layer, HDI, rigid-flex' },
                ].map((line) => (
                  <div key={line.line} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-brand-500 mt-1.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{line.line}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{line.qty} · {line.output}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{line.use}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Factory area: <strong className="text-gray-900">45,000 m²</strong> · Employees: <strong className="text-gray-900">600+</strong> · Founded: <strong className="text-gray-900">1998</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Applications ─── */}
      <section className="bg-white py-20 md:py-28" id="applications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Industry Applications</h2>
            <p className="section-subtitle mx-auto">
              HUAXING manufactures PCBA for a wide range of industries — from automotive electronics 
              to smart home devices. Each application is built to industry-specific quality standards 
              and backed by relevant certifications.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="card overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={ind.image}
                    alt={ind.alt}
                    width={1024}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 font-heading">{ind.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QC/QA Processes ─── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Quality Control &amp; Assurance</h2>
            <p className="section-subtitle mx-auto">
              Eight-stage quality system covering every step from incoming materials to outgoing shipment. 
              Our goal is zero defects delivered to your door — every time.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-x-8 gap-y-6">
            {qcProcesses.map((qc, i) => (
              <div key={qc.title} className="flex gap-5 p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-100 hover:shadow-md transition-all duration-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold font-heading text-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 font-heading">{qc.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{qc.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl border border-gray-100 p-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { label: 'Lot Acceptance Rate', value: '>99.2%', sub: 'Based on 2024 annual data' },
                { label: 'On-Time Delivery', value: '>98.5%', sub: 'Across all product categories' },
                { label: 'Customer RMA Rate', value: '<0.3%', sub: 'Within 12 months of shipment' },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl md:text-3xl font-bold text-brand-600 font-heading">{metric.value}</div>
                  <div className="text-sm font-medium text-gray-700 mt-1">{metric.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{metric.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Lead Times ─── */}
      <section className="bg-gray-50 py-20 md:py-28" id="lead-times">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Lead Times</h2>
            <p className="section-subtitle mx-auto">
              Express and standard lead times across PCB fabrication, assembly, and box build. 
              Express service uses dedicated fast-track lines with priority scheduling.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-600 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold font-heading">Product / Service</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-heading">Express</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-heading">Standard</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-heading hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {leadTimes.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.type}</td>
                    <td className="px-5 py-3.5">
                      {row.express === 'N/A' ? (
                        <span className="text-gray-400">N/A</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-brand-600 font-semibold">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          {row.express}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-gray-700">{row.standard}</td>
                    <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-gray-500 text-center">
            * Express lead times are subject to material availability and current line loading. 
            Contact our sales team for real-time lead time confirmation.
          </p>
        </div>
      </section>

      {/* ─── Certifications ─── */}
      <section className="bg-white py-20 md:py-28" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Industry Certifications</h2>
            <p className="section-subtitle mx-auto">
              HUAXING holds globally recognized certifications across quality, safety, environmental, 
              and automotive standards — audited regularly by SGS, UL, and other accredited bodies.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
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

          <div className="mt-10 text-center">
            <button
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors cursor-pointer"
            >
              Request certification documentation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Put Our Capabilities to Work
          </h2>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
            From concept to volume production — our engineering team is ready to review your project, 
            provide DFM feedback, and deliver a competitive quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20 cursor-pointer"
            >
              Submit Your Inquiry
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </button>
            <a
              href="#technical-capabilities"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              View Technical Specs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-200">
            Zero MOQ · Free DFM Review · ISO9001 &amp; UL Certified · IATF 16949 Automotive · 24/7 Customer Support
          </p>
        </div>
      </section>

      <InquiryModal isOpen={showInquiry} onClose={() => setShowInquiry(false)} />
    </>
  );
}
