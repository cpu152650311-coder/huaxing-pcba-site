'use client';

import Link from 'next/link';
import Image from 'next/image';

const timeline = [
  {
    year: '1998',
    title: 'Founded in Shenzhen',
    description:
      'HUAXING started as a small electronic components distributor in Bao\'an District, Shenzhen. With a team of 12 people, we served local manufacturers with quality passive and active components.',
  },
  {
    year: '2003',
    title: 'Entered PCB Manufacturing',
    description:
      'Invested in our first PCB fabrication line. Started producing double-sided and 4-layer boards for industrial control and consumer electronics customers.',
  },
  {
    year: '2008',
    title: 'Expanded to SMT Assembly',
    description:
      'Opened our first SMT assembly line with Yamaha placement machines. Began offering full turnkey PCBA services — from PCB fabrication to component sourcing to finished assemblies.',
  },
  {
    year: '2012',
    title: 'New Factory & ISO 9001',
    description:
      'Relocated to a 45,000 m² facility in Fuyong, Shenzhen. Achieved ISO 9001:2008 certification and expanded to 6 SMT lines with ASM SIPLACE equipment.',
  },
  {
    year: '2016',
    title: 'UL & Automotive Certifications',
    description:
      'Received UL 796 recognition for PCB fabrication and IATF 16949 certification for automotive-grade PCBA. Started serving tier-1 automotive suppliers.',
  },
  {
    year: '2020',
    title: '150,000+ Global Customers',
    description:
      'Reached a milestone of 150,000 customers served across 60+ countries. Added 3 more SMT lines and introduced 3D AOI/X-ray inspection on all production lines.',
  },
  {
    year: '2024',
    title: '500K+ Products Delivered & Growing',
    description:
      'Over 500,000 products delivered worldwide. Factory capacity exceeds 13,000 items per month with 9 SMT lines, 4 DIP lines, and 600+ employees. Serving markets including automotive, medical, industrial, telecom, and consumer electronics.',
  },
];

const values = [
  {
    title: 'Quality First',
    description:
      'Every board is inspected, tested, and verified. We maintain IPC Class 2/3 standards with 100% AOI coverage on all SMT lines and full traceability on every shipment.',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Direct from Factory',
    description:
      'We are the manufacturer — no middlemen, no markups. Our Shenzhen factory delivers factory-direct pricing with full quality control from raw material to finished product.',
    icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v-.75A.75.75 0 013 3h-.75a.75.75 0 00-.75.75v.75m0 0v-.75A.75.75 0 013 3h.75a.75.75 0 01.75.75v.75m0 0v-.75A.75.75 0 013.75 3h.75a.75.75 0 01.75.75v.75M3.75 18.75V6.75a2.25 2.25 0 012.25-2.25h13.5a2.25 2.25 0 012.25 2.25v6.75',
  },
  {
    title: 'Customer Partnership',
    description:
      'We work as an extension of your engineering team. Free DFM reviews, collaborative problem-solving, and responsive support at every stage of your project.',
    icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
  },
  {
    title: 'Continuous Innovation',
    description:
      'We invest in the latest manufacturing technology — ASM SIPLACE, Koh Young 3D SPI, Omron 3D AOI, and automated test equipment — to stay ahead of industry demands.',
    icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  },
  {
    title: 'Reliability & Trust',
    description:
      '25+ years of consistent delivery. ISO 9001, UL, IATF 16949, and ISO 14001 certified. Our customer retention rate reflects the trust we have built over two decades.',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
  {
    title: 'Sustainability',
    description:
      'ISO 14001:2015 certified environmental management. Lead-free processing, waste reduction programs, and energy-efficient manufacturing across our 45,000 m² facility.',
    icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
  },
];

const factoryStats = [
  { label: 'Factory Area', value: '45,000', unit: 'm²' },
  { label: 'Employees', value: '600+', unit: 'skilled workers' },
  { label: 'SMT Lines', value: '9', unit: 'ASM & Yamaha' },
  { label: 'DIP Lines', value: '4', unit: 'wave & selective' },
  { label: 'Monthly Capacity', value: '13,000+', unit: 'items' },
  { label: 'Annual Output', value: '4M+', unit: 'boards' },
];

const globalStats = [
  { label: 'Countries Served', value: '60+' },
  { label: 'Global Customers', value: '150K+' },
  { label: 'Products Delivered', value: '500K+' },
  { label: 'Years in Business', value: '25+' },
];

const regions = [
  {
    name: 'North America',
    countries: 'USA, Canada, Mexico',
    pct: '28%',
    flag: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  },
  {
    name: 'Europe',
    countries: 'Germany, UK, France, Italy, Netherlands, Nordics',
    pct: '24%',
    flag: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  },
  {
    name: 'Asia Pacific',
    countries: 'Japan, South Korea, SE Asia, Australia',
    pct: '22%',
    flag: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  },
  {
    name: 'Middle East & Africa',
    countries: 'UAE, Saudi Arabia, Israel, South Africa',
    pct: '14%',
    flag: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  },
  {
    name: 'South America',
    countries: 'Brazil, Argentina, Chile, Colombia',
    pct: '12%',
    flag: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-pcba-concept.webp" alt="" width={1792} height={1024} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-brand-300 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About HUAXING</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
              25+ Years of<br />
              <span className="text-brand-300">PCB &amp; PCBA Excellence</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              From our roots as a small component distributor in Shenzhen to a global OEM manufacturer 
              serving 150,000+ customers across 60+ countries — HUAXING has been delivering quality 
              PCB and PCBA solutions since 1998.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="btn-primary">
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="#timeline" className="btn-secondary">
                Our Story
              </a>
            </div>
          </div>

          {/* Global stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {globalStats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl border border-white/10 shadow-sm p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-300 font-heading">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Company Story ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">From Components to Complete PCBA</h2>
              <p className="section-subtitle">
                HUAXING started in the electronic components industry in 1998, supplying passive 
                and active components to manufacturers in the Pearl River Delta. Over two decades, 
                we grew organically — adding PCB fabrication, SMT assembly, testing, and box build 
                under one roof.
              </p>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Today, our 45,000 m² factory in Shenzhen operates 9 SMT lines, 4 DIP lines, and 
                comprehensive inspection and testing facilities. We serve customers in automotive, 
                medical, industrial, telecommunications, and consumer electronics — delivering 
                factory-direct quality without middleman markups.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 font-heading">Direct Manufacturer</div>
                    <div className="text-sm text-gray-500">No middlemen, factory-direct pricing</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 font-heading">Certified Quality</div>
                    <div className="text-sm text-gray-500">ISO 9001, UL, IATF 16949</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="/images/team-factory.webp"
                  alt="HUAXING factory team - skilled workers in cleanroom environment"
                  width={1024}
                  height={931}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">At a Glance</h3>
                <div className="grid grid-cols-2 gap-5">
                  {[ 
                    { label: 'Founded', value: '1998' },
                    { label: 'Location', value: 'Shenzhen, China' },
                    { label: 'Facility', value: '45,000 m²' },
                    { label: 'Employees', value: '600+' },
                    { label: 'SMT Lines', value: '9' },
                    { label: 'Monthly Output', value: '13,000+ items' },
                    { label: 'Global Customers', value: '150K+' },
                    { label: 'Products Delivered', value: '500K+' },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-gray-100 pb-3 last:border-0">
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                      <div className="text-lg font-bold text-gray-900 font-heading mt-0.5">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Highlight Banner — Medical ─── */}
      <section className="relative bg-gray-900 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/old-industry-medical.webp" alt="" width={1024} height={640} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white font-heading">Medical-Grade PCBA Manufacturing</h3>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            ISO 13485 qualified processes for medical device electronics — from diagnostic equipment to patient monitoring systems.
          </p>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="bg-gray-50 py-20 md:py-28 overflow-hidden relative" id="timeline">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] opacity-5 pointer-events-none hidden lg:block">
          <Image src="/images/old-industry-industrial.webp" alt="" width={1024} height={640} className="w-full h-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle mx-auto">
              From a small component distributor to a global PCBA manufacturer — here is how we grew.
            </p>
          </div>

          <div className="mt-14 relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 -translate-x-1/2" />

            <div className="space-y-10 md:space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="md:flex items-start gap-8 md:even:flex-row-reverse"
                >
                  {/* Content card */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div
                      className={`bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-brand-100 transition-all duration-200 ${
                        index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center font-bold font-heading shadow-sm text-lg">
                          {item.year.slice(2)}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 font-heading">{item.title}</h3>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 border-4 border-white shadow-md items-center justify-center -my-1 z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Empty spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Values ─── */}
      <section className="bg-white py-20 md:py-28 overflow-hidden relative" id="values">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] opacity-5 pointer-events-none hidden lg:block">
          <Image src="/images/old-industry-consumer.webp" alt="" width={1024} height={640} className="w-full h-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Our Mission &amp; Values</h2>
            <p className="section-subtitle mx-auto">
              Our mission is simple: provide affordable, high-quality PCBA without middlemen. 
              Every decision we make is guided by these core values.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="card p-6 group hover:border-brand-200 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-heading">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Mission statement highlight */}
          <div className="mt-12 bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-100 shadow-sm p-8 md:p-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-14 h-14 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading">Our Mission</h3>
              <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                &ldquo;To provide affordable, high-quality PCB and PCBA solutions without middlemen — 
                empowering innovators and manufacturers worldwide to bring their products to market 
                faster, at lower cost, with uncompromising quality.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Factory / Team Stats ─── */}
      <section className="bg-gray-50 py-20 md:py-28" id="factory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Factory &amp; Team</h2>
              <p className="section-subtitle">
                Located in Shenzhen, China&apos;s electronics manufacturing hub, our 45,000 m² 
                factory is purpose-built for high-quality PCB fabrication and PCBA assembly. 
                With 600+ skilled employees, we operate around the clock to serve global customers.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  {
                    title: '9 SMT Lines',
                    desc: 'Featuring ASM SIPLACE X4iS and Yamaha YSM20R — 80,000 CPH each.',
                  },
                  {
                    title: '4 DIP Lines',
                    desc: 'Wave and selective soldering for mixed-technology boards.',
                  },
                  {
                    title: 'Full QC Suite',
                    desc: '3D AOI, X-ray, flying probe, ICT, and functional test in-house.',
                  },
                  {
                    title: 'In-House PCB Fab',
                    desc: '1–58 layers, HDI, flex/rigid-flex, heavy copper — all under one roof.',
                  },
                  {
                    title: 'Value-Added Services',
                    desc: 'Conformal coating, potting, box build, cable assembly, and more.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 font-heading">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="/images/factory-smt.webp"
                  alt="HUAXING engineer holding PCBA board at SMT production line"
                  width={516}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {factoryStats.slice(0, 6).map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 text-center hover:shadow-md hover:border-brand-100 transition-all duration-200">
                    <div className="text-lg font-bold text-brand-600 font-heading">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Global Presence ─── */}
      <section className="bg-white py-20 md:py-28 overflow-hidden relative" id="global">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] opacity-5 pointer-events-none hidden lg:block">
          <Image src="/images/old-industry-auto.webp" alt="" width={1024} height={640} className="w-full h-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Global Presence</h2>
            <p className="section-subtitle mx-auto">
              HUAXING exports to 60+ countries across five continents. Our global logistics network 
              ensures reliable delivery whether you are in San Jose, Berlin, Tokyo, or Dubai.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-5 gap-4">
            {regions.map((region) => (
              <div
                key={region.name}
                className="card p-6 text-center group hover:border-brand-200 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={region.flag} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 font-heading text-base">{region.name}</h3>
                <div className="text-2xl font-bold text-brand-600 font-heading mt-2">{region.pct}</div>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{region.countries}</p>
              </div>
            ))}
          </div>

          {/* Export highlight */}
          <div className="mt-12 bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-100 shadow-sm p-8 md:p-10">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {[
                { label: 'Countries Exported To', value: '60+' },
                { label: 'Ongoing Export Markets', value: '40+' },
                { label: 'Shipping Methods', value: 'Air / Sea / Express' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl md:text-3xl font-bold text-brand-600 font-heading">{item.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-brand-100 text-center">
              <p className="text-sm text-gray-600">
                We handle all export documentation, customs clearance, and logistics coordination. 
                Delivery times: <strong className="text-gray-900">3–5 days</strong> (express),{' '}
                <strong className="text-gray-900">5–10 days</strong> (air),{' '}
                <strong className="text-gray-900">15–30 days</strong> (sea).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Applications ─── */}
      <section className="bg-gray-50 py-20 md:py-28 overflow-hidden relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] opacity-5 pointer-events-none hidden lg:block">
          <Image src="/images/product-set-top-box.webp" alt="" width={1024} height={640} className="w-full h-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle mx-auto">
              From automotive-grade PCBA to medical device electronics — our manufacturing 
              capabilities span the most demanding industries.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Automotive',
                desc: 'IATF 16949 certified. Engine control units, ADAS, infotainment, power modules. PPAP and IMDS documentation.',
                icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
              },
              {
                title: 'Medical',
                desc: 'ISO 13485 compliant processes. Patient monitors, diagnostic equipment, implantable electronics. Full traceability & serialization.',
                icon: 'M4.26 10.147a60.438 60.438 0 014.591-.685m-4.591.685C3.78 11.543 2.25 9.428 2.25 7.5A4.5 4.5 0 016.75 3c1.367 0 2.626.42 3.624 1.118m-6.114 6.03c1.125 1.74 3.29 3.33 6.114 3.33 2.825 0 4.99-1.59 6.114-3.33m-6.114 0v3.375m6.114-3.375C20.22 11.543 21.75 9.428 21.75 7.5A4.5 4.5 0 0017.25 3c-1.367 0-2.626.42-3.624 1.118m-6.114 6.03c0 3.876 2.825 7.5 6.114 7.5 3.29 0 6.114-3.624 6.114-7.5',
              },
              {
                title: 'Industrial',
                desc: 'Power supplies, motor drives, IoT gateways, PLC controllers. Heavy copper up to 10oz, high-reliability assembly.',
                icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
              },
              {
                title: 'Telecommunications',
                desc: 'Base stations, routers, switches, optical modules. Controlled impedance ±5%, high-layer-count PCBs.',
                icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
              },
              {
                title: 'Consumer Electronics',
                desc: 'Smart home devices, wearables, IoT sensors. High-volume SMT with competitive pricing. Quick-turn prototypes to mass production.',
                icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z',
              },
              {
                title: 'Aerospace & Defense',
                desc: 'ITAR-compliant procedures. High-reliability soldering, conformal coating, extended temperature testing.',
                icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
              },
              {
                title: 'Lighting & LED',
                desc: 'LED driver boards, smart lighting control. Aluminum-core PCBs, high-power thermal management assembly.',
                icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
              },
              {
                title: 'Energy & Power',
                desc: 'Solar inverters, EV chargers, battery management systems (BMS). High-voltage, high-current PCB design.',
                icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605',
              },
            ].map((industry) => (
              <div
                key={industry.title}
                className="card p-6 group hover:border-brand-200 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-heading">{industry.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Let&apos;s Build Together
          </h2>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
            Whether you need a quick-turn prototype or high-volume production, HUAXING delivers 
            quality PCBA at factory-direct prices. Get your free quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200"
            >
              View Full Capabilities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
    </>
  );
}
