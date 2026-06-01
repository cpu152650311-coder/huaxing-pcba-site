'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '9', label: 'SMT Lines' },
  { value: '5', label: 'DIP Lines' },
  { value: '58', label: 'Max PCB Layers' },
  { value: '13,000', label: 'Items / Month' },
  { value: '150k+', label: 'Customers Served' },
];

const services = [
  {
    title: 'PCB Manufacturing',
    description: 'Rapid prototyping to volume production. Up to 58 layers, HDI, flex, rigid-flex, and advanced substrates with ISO9001 & UL certification.',
    href: '/products/pcb-manufacturing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    title: 'PCB Assembly',
    description: '9 SMT + 5 DIP lines with Siemens/ASM & Yamaha placement. 01005 to BGA, AOI/X-ray inspected. From $25 for 1-20 PCS.',
    href: '/products/pcb-assembly',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'BOM Procurement',
    description: 'Full turnkey procurement from 5,000+ verified suppliers. Component sourcing, obsolescence management, and kitting — zero MOQ.',
    href: '/capabilities',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Box Build Assembly',
    description: 'End-to-end assembly from bare PCB and BOM to fully integrated enclosures. Conformal coating, potting, cabling, and functional testing included.',
    href: '/capabilities',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
];

const whyChooseUs = [
  {
    title: 'Uncompromising Quality',
    description: 'ISO9001, UL, and RoHS certified. Every board inspected by AOI, X-ray, and flying probe systems. 100% inline inspection on all SMT and DIP lines.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Direct Factory Pricing',
    description: 'Shenzhen-based manufacturer with zero middlemen. $25 for 1-20 PCS assembly. Competitive pricing with no minimum order quantity.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '25+ Years Expertise',
    description: 'Decades of PCB manufacturing and assembly experience. Engineering team provides free DFM review on every project before production begins.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

const products = [
  { src: '/images/app-medical.webp', caption: 'Medical Devices' },
  { src: '/images/app-robot.webp', caption: 'Robotics' },
  { src: '/images/product-smarthome-dimmer.webp', caption: 'Smart Home' },
  { src: '/images/product-set-top-box.webp', caption: 'Consumer Electronics' },
  { src: '/images/app-knx.webp', caption: 'Building Automation' },
  { src: '/images/app-consumer.webp', caption: 'Wearables & IoT' },
  { src: '/images/app-industrial.webp', caption: 'Industrial Control' },
  { src: '/images/app-automotive.webp', caption: 'Automotive' },
];

const partnerBrands = [
  'Tyco', 'Tesla', 'Microchip', 'Avnet', 'Isola',
  'Intel', 'AMD', 'NXP', 'Texas Instruments', 'STMicroelectronics',
  'Analog Devices', 'Infineon', 'ON Semiconductor', 'Renesas', 'Murata',
];

const partnerLogos = [
  { name: 'Avnet', src: '/images/partner-avnet.webp' },
  { name: 'Microchip', src: '/images/partner-microchip.webp' },
  { name: 'Tesla', src: '/images/partner-tesla.webp' },
  { name: 'Tyco', src: '/images/partner-tyco.webp' },
  { name: 'Harley-Davidson', src: '/images/partner-harley.webp' },
  { name: 'Medisim', src: '/images/partner-medisim.webp' },
  { name: 'SCC', src: '/images/partner-scc.webp' },
  { name: 'SPEC', src: '/images/partner-spec.webp' },
  { name: 'Hexagon', src: '/images/partner-hexagon.webp' },
  { name: 'Isola', src: '/images/partner-isola.webp' },
  { name: 'Arlon', src: '/images/partner-arlon.webp' },
];

const faqItems = [
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'We have zero MOQ. We accept prototype quantities as low as 1 PCB, and scale seamlessly to volume production of 10,000+ boards. Our $25 special offer covers 1-20 PCS assembly.',
  },
  {
    q: 'What certifications do you hold?',
    a: 'HUAXING PCBA is ISO9001:2015, UL, and RoHS certified. We also comply with REACH, IPC-A-610 Class 2/3, and ITAR standards. Our quality management system covers all production stages.',
  },
  {
    q: 'How do I request a quote?',
    a: 'Upload your Gerber files and BOM through our contact form, or email us directly. Our engineering team reviews every project within 24 hours and provides a detailed quote with DFM recommendations.',
  },
  {
    q: 'What file formats do you accept?',
    a: 'We accept Gerber (RS-274X), ODB++, IPC-2581, and CAD files for PCB fabrication. For assembly, we accept BOM (Excel/CSV), Pick & Place files (CPL/CSV), and assembly drawings (PDF/DXF).',
  },
  {
    q: 'What is your typical turnaround time?',
    a: 'PCB fabrication: 24-48 hours for quick-turn prototypes, 5-7 days for standard. PCB assembly: 5-10 business days depending on complexity and component availability. Expedited options available.',
  },
  {
    q: 'Do you provide BOM procurement?',
    a: 'Yes, we offer full turnkey procurement services. Our supply chain team sources components from 5,000+ verified suppliers, manages obsolescence, and provides kitting — all with competitive pricing.',
  },
  {
    q: 'What quality inspections do you perform?',
    a: 'Every board goes through AOI (automated optical inspection), SPI (solder paste inspection), and X-ray inspection for hidden joints. We also offer flying probe testing, ICT, and functional testing.',
  },
  {
    q: 'Can you handle complex PCB requirements?',
    a: 'Absolutely. We manufacture up to 58-layer PCBs, HDI, micro-via, blind/buried vias, flex and rigid-flex, thick copper, and high-frequency materials (Rogers, Teflon). Our 9 SMT lines handle 01005 to BGA components.',
  },
];

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showInquiry, setShowInquiry] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-pcba-concept.webp" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/95" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur border border-white/20 text-white/90 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ISO9001 &amp; UL Certified Manufacturer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Premium PCB &amp; PCBA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-orange-400">Manufacturing</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              25+ years of PCB manufacturing excellence. Shenzhen-based factory with 9 SMT lines, 
              5 DIP lines, and direct pricing — no middlemen. From prototype to volume production.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button onClick={() => setShowInquiry(true)} className="btn-primary text-base py-3.5 px-8 cursor-pointer">
                Request a Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <Link href="/products/pcb-manufacturing" className="btn-secondary text-base py-3.5 px-8">
                View Capabilities
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Zero MOQ
              </span>
              <span className="mx-3 text-gray-300">|</span>
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free DFM Review
              </span>
              <span className="mx-3 text-gray-300">|</span>
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                $25 for 1-20 PCS
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-600 font-heading">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100/60 border-y border-amber-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-200 text-amber-700 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <p className="text-amber-900 font-medium">
              <span className="font-bold">Special Offer:</span> PCB Assembly from just <span className="font-bold text-amber-700">$25</span> for 1-20 PCS — full turnkey, zero MOQ, free DFM review.
            </p>
            <button onClick={() => setShowInquiry(true)} className="text-sm font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-4 flex-shrink-0 cursor-pointer">
              Claim Now &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Comprehensive PCBA Services</h2>
            <p className="section-subtitle mx-auto">
              From bare PCB fabrication to fully assembled and tested box builds — we handle every step 
              of your electronics manufacturing under one roof.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card p-6 group hover:border-brand-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-heading group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-sm font-medium text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Why Choose HUAXING PCBA?</h2>
            <p className="section-subtitle mx-auto">
              We combine decades of manufacturing expertise with direct factory pricing to deliver 
              the best value for your PCB and PCBA needs.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 transition-colors duration-200">
                <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading">{item.title}</h3>
                <p className="mt-4 text-gray-500 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {['ISO9001:2015', 'UL Certified', 'RoHS Compliant', 'REACH Compliant', 'IPC-A-610 Class 2/3'].map((badge) => (
              <div key={badge} className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {badge}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/quality" className="btn-secondary text-base py-3 px-8">
              Explore Our Quality Standards
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PCBA Products Gallery */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">PCBA Applications Across Industries</h2>
            <p className="section-subtitle mx-auto">
              From medical devices and robotics to smart home systems and automotive — our PCBA 
              solutions power products across 150,000+ customer applications worldwide.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <button
                key={product.caption}
                onClick={() => setSelectedImage(product.src)}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 cursor-pointer text-left"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={product.src}
                    alt={product.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-brand-600 transition-colors">
                    {product.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Browse all → */}
          <div className="mt-10 text-center">
            <Link
              href="/products/pcb-assembly"
              className="btn-secondary text-base py-3 px-8"
            >
              View All PCBA Applications
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Product"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
          </div>
        </div>
      )}

      {/* Partner Brands */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle mx-auto">
              We supply PCB and PCBA solutions to 150,000+ customers worldwide, including 
              partnerships with these global brands.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="w-28 h-16 flex items-center justify-center bg-white rounded-lg border border-gray-100 shadow-sm px-3 hover:border-brand-200 hover:shadow-md transition-all duration-200 grayscale hover:grayscale-0">
                <Image src={logo.src} alt={logo.name} width={120} height={60} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              ...and 150,000+ more companies trust HUAXING PCBA for their manufacturing needs
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
              Learn More About HUAXING
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-pcba-concept.webp" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Upload your Gerber files and BOM for a free, no-obligation quote within 24 hours. 
            Our engineering team provides DFM feedback on every project.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center gap-2 bg-brand-600 text-white hover:bg-brand-700 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20 cursor-pointer"
            >
              Request a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </button>
            <Link
              href="/products/pcb-assembly"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-gray-300 hover:text-white hover:border-white/40 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200"
            >
              See Assembly Pricing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <span>Zero MOQ</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Free DFM Review</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>ISO9001 &amp; UL Certified</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>24h Response</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Quick answers to the most common questions about PCB &amp; PCBA manufacturing with HUAXING.
            </p>
          </div>

          <div className="mt-14 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFAQ === index;
              return (
                <div
                  key={index}
                  className="card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-gray-900 font-heading pr-4">{item.q}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-600">
              Still have questions? We&apos;re here to help.
            </p>
            <button
              onClick={() => setShowInquiry(true)}
              className="mt-3 inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors cursor-pointer"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <InquiryModal isOpen={showInquiry} onClose={() => setShowInquiry(false)} />
    </>
  );
}