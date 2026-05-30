'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products/pcb-manufacturing', label: 'PCB Manufacturing' },
  { href: '/products/pcb-assembly', label: 'PCB Assembly' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/quality', label: 'Quality' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/images/logo.webp" alt="HUAXING PCBA" width={140} height={40} className="h-8 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-3 btn-primary text-sm py-2 px-5">
              Get Quote
            </Link>
          </nav>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="lg:hidden pb-4 border-t border-gray-100 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-600 rounded-lg hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="block mt-2 btn-primary text-sm text-center py-2" onClick={() => setOpen(false)}>
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
