'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

const posts: BlogPost[] = [
  {
    slug: 'pcb-vs-pcba-whats-the-difference',
    title: 'PCB vs PCBA: What\'s the Difference and Why It Matters',
    excerpt: 'Understanding the distinction between bare PCB fabrication and full PCB assembly is crucial for electronics manufacturing. Learn the key differences, processes, and when to choose each.',
    date: '2026-05-28',
    category: 'PCB Basics',
  },
  {
    slug: 'smt-assembly-guide-2026',
    title: 'Complete Guide to SMT Assembly: Process, Equipment, and Best Practices',
    excerpt: 'Surface Mount Technology (SMT) is the backbone of modern electronics manufacturing. This comprehensive guide covers the entire SMT assembly process, from solder paste printing to reflow soldering.',
    date: '2026-05-25',
    category: 'Assembly',
  },
  {
    slug: 'pcb-material-selection-guide',
    title: 'PCB Material Selection Guide: FR4, High-Frequency, and Advanced Substrates',
    excerpt: 'Choosing the right PCB substrate material is critical for performance and reliability. Compare FR4, Rogers, Teflon, and other materials across thermal, electrical, and cost dimensions.',
    date: '2026-05-20',
    category: 'PCB Design',
  },
  {
    slug: 'dfm-checklist-pcb-assembly',
    title: 'The Ultimate DFM Checklist for PCB Assembly Success',
    excerpt: 'Design for Manufacturing (DFM) review catches issues before production. This checklist covers pad design, solder mask, component spacing, panelization, and test point requirements.',
    date: '2026-05-15',
    category: 'Design Tips',
  },
];

export default function BlogPage() {
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <span>Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading leading-tight">
              PCB &amp; PCBA<br />
              <span className="text-brand-600">Knowledge Hub</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Expert insights on PCB manufacturing, assembly processes, design best practices, 
              and industry trends — written by our engineering team in Shenzhen.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group overflow-hidden hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                {post.image && (
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="px-2.5 py-1 bg-brand-50 text-brand-700 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 font-heading group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-sm font-medium text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {posts.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <h3 className="text-xl font-bold text-gray-400 font-heading">Coming Soon</h3>
              <p className="text-sm text-gray-300 mt-2">Blog posts are being written. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA — Get a Free Quote */}
      <section className="relative bg-gradient-to-br from-brand-600 to-brand-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
            From prototype to high-volume production, get factory-direct pricing and 
            expert engineering support for your PCB assembly needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20 cursor-pointer"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-3.5 px-8 rounded-lg transition-all duration-200"
            >
              Contact Us
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

      <InquiryModal isOpen={showInquiry} onClose={() => setShowInquiry(false)} />
    </>
  );
}
