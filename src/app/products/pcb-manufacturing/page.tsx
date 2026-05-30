'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

const keySpecs = [
  { label: 'Max Layers', value: '58', description: 'Multilayer stackup for complex designs' },
  { label: 'Thickness', value: '0.2–6.0mm', description: 'From ultra-thin to heavy-copper boards' },
  { label: 'Copper Weight', value: '0.5–6oz', description: 'Standard, heavy, and extreme copper' },
  { label: 'Min L/S', value: '3/3 mil', description: 'Fine-line impedance-controlled traces' },
  { label: 'Min Drill', value: '0.2mm', description: 'Micro-via and dense routing support' },
  { label: 'Max Board Size', value: '600×600mm', description: 'Large-format panel capability' },
];

const capabilities = [
  {
    title: 'HDI Technology',
    description: 'High-Density Interconnect with micro-via stacking, via-in-pad, and sequential lamination for compact, high-performance designs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Blind & Buried Vias',
    description: 'Laser-drilled blind vias and mechanically drilled buried vias for space-saving layer interconnections in multilayer designs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    ),
  },
  {
    title: 'Impedance Control',
    description: 'Controlled impedance (±5%) with TDR verification for RF, high-speed digital, and differential pair requirements up to 100Ω.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Gold Fingers',
    description: 'Beveled gold fingers with hard gold plating (30–50µ\") for edge-connector cards and PCIe/memory module applications.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    title: 'Surface Finishes',
    description: 'Full range including ENIG (immersion gold), HASL leaded/lead-free, OSP, immersion silver, immersion tin, and hard/soft gold.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Backplane & Heavy Copper',
    description: 'Up to 6oz copper for high-current backplanes, power distribution boards, and thermal management applications.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
      </svg>
    ),
  },
  {
    title: 'Via-in-Pad & Plugging',
    description: 'Conductive and non-conductive via fill, tenting, and plugging with flat surface finish for BGA and dense component placement.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
      </svg>
    ),
  },
  {
    title: 'Edge Plating & Castellated Holes',
    description: 'Edge-plated PCBs with castellated solder points for module-on-base-board integration and custom form-factor designs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const materialOptions = [
  {
    name: 'FR-4 Standard',
    description: 'Standard glass-epoxy laminate for general-purpose PCBs. Excellent mechanical strength, electrical insulation, and cost-efficiency.',
    tg: '130–140°C',
    applications: 'Consumer electronics, industrial controls, lighting',
  },
  {
    name: 'High-Tg FR-4',
    description: 'High glass-transition-temperature (170°C+) material for lead-free soldering, multilayer boards, and high-reliability applications.',
    tg: '170–180°C',
    applications: 'Automotive, telecom, servers, power electronics',
  },
  {
    name: 'Rogers (High-Frequency)',
    description: 'Ceramic-filled PTFE composites with stable dielectric constant and low loss tangent for RF and microwave circuits.',
    tg: '280°C+',
    applications: '5G, RF amplifiers, antennas, radar systems',
  },
  {
    name: 'PTFE / Teflon',
    description: 'Ultra-low-loss PTFE laminates for high-frequency and high-speed digital applications requiring minimal signal degradation.',
    tg: '280°C+',
    applications: 'Microwave, satellite, aerospace, high-speed digital',
  },
  {
    name: 'Aluminum / Metal-Core',
    description: 'Aluminum-backed IMS (Insulated Metal Substrate) for excellent thermal dissipation in high-power LED and power electronics.',
    tg: '150°C+',
    applications: 'Power LED, motor drives, power supplies, automotive lighting',
  },
  {
    name: 'Flex & Rigid-Flex',
    description: 'Flexible polyimide laminates and combination rigid-flex constructions for dynamic-bending and space-constrained interconnects.',
    tg: '150–200°C',
    applications: 'Wearables, medical devices, cameras, foldable electronics',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality management system for consistent product quality and continuous improvement.' },
  { name: 'UL 94V-0', description: 'Flammability rating ensuring all materials self-extinguish within 10 seconds — the highest industry standard.' },
  { name: 'RoHS & REACH', description: 'Full compliance with RoHS and REACH directives for lead-free and restricted-substance-free manufacturing.' },
  { name: 'IPC-A-600 Class 2/3', description: 'Acceptability criteria for printed boards — meeting both Class 2 (dedicated service) and Class 3 (high-reliability/harsh environment).' },
  { name: 'IPC-6012 Class 2/3', description: 'Qualification and performance specification for rigid PCBs, including Class 3 for mission-critical applications.' },
  { name: 'CAF-Resistant Materials', description: 'Anti-CAF (Conductive Anodic Filament) materials and processes for high-reliability, high-humidity environments.' },
];

const qualityTests = [
  { label: 'Impedance (TDR)', desc: 'Verified on every controlled-impedance layer' },
  { label: 'Microsection Analysis', desc: 'Plating thickness, layer alignment & hole wall quality' },
  { label: 'Solderability Test', desc: 'Edge-dip & wave-solder simulation' },
  { label: 'Thermal Stress', desc: '10-second 288°C float test per IPC-TM-650' },
  { label: 'Electrical Test', desc: 'Flying probe or fixture-based opens/shorts' },
  { label: 'Hi-Pot / Insulation', desc: 'Dielectric strength & insulation resistance' },
  { label: 'Solder Mask Adhesion', desc: 'Cross-cut tape test per IPC-SM-840' },
  { label: 'Cleanliness (ION)', desc: 'Ion chromatography for surface contamination' },
];

export default function PCBMfgPage() {
  const [showInquiry, setShowInquiry] = useState(false);
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
              </svg>
              <span>PCB Manufacturing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading leading-tight">
              Precision PCB Manufacturing<br />
              <span className="text-brand-600">Up to 58 Layers</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              HUAXING manufactures PCBs in a wide range of materials and processes — from standard FR-4 
              to high-frequency Rogers, aluminum IMS, and rigid-flex. With up to 58 layers, 3/3 mil 
              line/space, and full HDI capability, we produce boards for the most demanding applications.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button onClick={() => setShowInquiry(true)} className="btn-primary cursor-pointer">
                Request PCB Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <Link href="/capabilities" className="btn-secondary">
                View All Capabilities
              </Link>
            </div>
          </div>

          {/* Key specs bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keySpecs.map((spec) => (
              <div key={spec.label} className="bg-gray-50 rounded-xl border border-gray-100 shadow-sm p-5 text-center">
                <div className="text-lg md:text-xl font-bold text-brand-600 font-heading">{spec.value}</div>
                <div className="text-xs text-gray-500 mt-1 mb-1">{spec.label}</div>
                <div className="text-[10px] text-gray-400 leading-tight">{spec.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Capabilities Grid ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">PCB Manufacturing Capabilities</h2>
            <p className="section-subtitle mx-auto">
              From HDI micro-via technology to heavy-copper backplanes and rigid-flex constructions — 
              our manufacturing lines handle the full spectrum of PCB fabrication requirements.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
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

      {/* ─── Consumer Electronics Showcase ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/images/old-industry-consumer.webp"
                alt="Consumer electronics PCBA showcase - set-top box"
                width={1024}
                height={640}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="section-title">Consumer Electronics Manufacturing</h2>
              <p className="section-subtitle">
                From set-top boxes to smart home devices, HUAXING delivers high-volume PCB manufacturing
                for consumer electronics at competitive prices without compromising quality.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                  <div className="text-2xl font-bold text-brand-600">15M+</div>
                  <div className="text-xs text-gray-500">Daily Component Placement</div>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                  <div className="text-2xl font-bold text-brand-600">300K+</div>
                  <div className="text-xs text-gray-500">Boards per Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Material Options ─── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Material Options</h2>
            <p className="section-subtitle mx-auto">
              We work with the widest range of PCB laminates — choose the right material for your 
              application requirements, from cost-effective FR-4 to high-performance Rogers and flex.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialOptions.map((mat) => (
              <div key={mat.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 font-heading">{mat.name}</h3>
                <div className="mt-2 inline-block px-2.5 py-0.5 bg-brand-50 text-brand-700 rounded-full text-xs font-medium">
                  Tg {mat.tg}
                </div>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{mat.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Typical Applications</span>
                  <p className="mt-1 text-sm text-gray-600">{mat.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Manufacturing Excellence ─── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Manufacturing Excellence</h2>
            <p className="section-subtitle text-center mx-auto">
              Our 45,000 m² manufacturing facility in Shenzhen is equipped with industry-leading 
              machinery and staffed by 600+ skilled engineers and technicians. Every board is 
              produced under strict quality controls with full traceability.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 max-w-lg mx-auto gap-4">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
              <div className="text-2xl font-bold text-brand-600">58</div>
              <div className="text-xs text-gray-500">Max PCB Layers</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
              <div className="text-2xl font-bold text-brand-600">25K+</div>
              <div className="text-xs text-gray-500">m² Monthly Capacity</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
              <div className="text-2xl font-bold text-brand-600">6</div>
              <div className="text-xs text-gray-500">Quality Checks</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
              <div className="text-2xl font-bold text-brand-600">0.2mm</div>
              <div className="text-xs text-gray-500">Min. Drill Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Certifications & Quality ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Certifications &amp; Quality Control</h2>
            <p className="section-subtitle mx-auto">
              Every board is manufactured under ISO 9001:2015 certified processes and tested against 
              IPC and UL standards. Our in-house QC lab performs comprehensive testing on every production batch.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Certifications list */}
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality tests table */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">In-House Quality Tests</h3>
              <div className="divide-y divide-gray-200">
                {qualityTests.map((test) => (
                  <div key={test.label} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <span className="text-sm font-medium text-gray-900">{test.label}</span>
                    <span className="text-xs text-gray-500 ml-4 text-right">{test.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Capabilities Summary Table ─── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Technical Specifications</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive PCB fabrication capabilities across all major process categories.
            </p>
          </div>

          <div className="mt-14 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-600 text-white">
                    <th className="text-left px-6 py-3.5 font-semibold">Parameter</th>
                    <th className="text-left px-6 py-3.5 font-semibold">Capability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Max Layers', '58'],
                    ['PCB Thickness', '0.2mm – 6.0mm'],
                    ['Copper Weight (Inner/Outer)', '0.5oz – 6oz'],
                    ['Min Line Width / Space', '3 / 3 mil'],
                    ['Min Mechanical Drill', '0.2mm'],
                    ['Min Laser Drill (HDI)', '0.075mm (3 mil)'],
                    ['Max Board Size', '600 × 600mm'],
                    ['Aspect Ratio', '12:1 (standard), 16:1 (advanced)'],
                    ['Surface Finishes', 'ENIG, HASL (lead-free/leaded), OSP, Immersion Ag, Immersion Sn, Hard Gold, Soft Gold'],
                    ['Solder Mask', 'Green, blue, red, black, white, yellow, matte, photoimageable'],
                    ['Legend / Silkscreen', 'White, yellow, black (liquid photoimageable)'],
                    ['Impedance Tolerance', '±5% (on specified layers)'],
                    ['Registration Tolerance', '±0.075mm (layers), ±0.05mm (drill)'],
                    ['Gold Finger Bevel', '30° – 45° angle, hard gold 30–50µ\"'],
                    ['Via Fill Options', 'Conductive epoxy, non-conductive epoxy, tenting, plugging'],
                  ].map(([param, value]) => (
                    <tr key={param} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 text-gray-700 font-medium">{param}</td>
                      <td className="px-6 py-3 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Ready to Manufacture Your PCBs?
          </h2>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
            Upload your Gerber files for a quick-turn quote. Our engineering team reviews every 
            order before production to ensure manufacturability and competitive pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20 cursor-pointer"
            >
              Upload Gerbers & Get Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </button>
            <Link
              href="/products/pcb-assembly"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              Explore PCB Assembly
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
