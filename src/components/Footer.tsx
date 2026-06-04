'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

const footerLinks = {
  Services: [
    { href: '/pcb-manufacturing', label: 'PCB Manufacturing' },
    { href: '/pcb-assembly', label: 'PCB Assembly' },
    { href: '/capabilities', label: 'BOM Procurement' },
    { href: '/capabilities', label: 'Capabilities' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/quality', label: 'Quality' },
    { href: '/contact', label: 'Contact' },
  ],
};

export default function Footer() {
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/images/logo.webp" alt="HUAXING PCBA" width={140} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Your trusted PCB & PCBA manufacturing partner in Shenzhen, China. 
              25+ years of excellence, zero middlemen.
            </p>
            <button
              onClick={() => setShowInquiry(true)}
              className="mt-6 inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              Request Quote
            </button>
            <div className="flex gap-3 mt-4">
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">ISO9001</span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">UL</span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">RoHS</span>
            </div>
          </div>
          <div className="md:col-start-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-sm text-gray-500">© 2026 HUAXING PCBA. All rights reserved.</p>
          <p className="text-sm text-gray-500">Shenzhen, China | PCB & PCBA Manufacturing</p>
        </div>
      </div>
      <InquiryModal isOpen={showInquiry} onClose={() => setShowInquiry(false)} />
    </footer>
  );
}
