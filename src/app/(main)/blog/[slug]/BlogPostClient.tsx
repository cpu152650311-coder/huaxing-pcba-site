'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  content: string[];
}

function renderContent(content: string[]) {
  const elements: React.ReactNode[] = [];
  content.forEach((block, i) => {
    if (block.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{block.slice(3)}</h2>
      );
    } else if (block.startsWith('- ')) {
      elements.push(
        <ul key={i} className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
          {block.split('\n').filter(Boolean).map((item, j) => (
            <li key={j}>{item.replace(/^- /, '')}</li>
          ))}
        </ul>
      );
    } else if (/^\d+\.\s/.test(block)) {
      elements.push(
        <ol key={i} className="list-decimal pl-6 space-y-1 text-gray-700 mb-4">
          {block.split('\n').filter(Boolean).map((item, j) => (
            <li key={j}>{item.replace(/^\d+\.\s/, '')}</li>
          ))}
        </ol>
      );
    } else {
      elements.push(
        <p key={i} className="text-gray-700 leading-relaxed mb-4">{block}</p>
      );
    }
  });
  return elements;
}

export default function BlogPostClient({
  posts,
  params,
}: {
  posts: Record<string, BlogPost>;
  params: Promise<{ slug: string }>;
}) {
  const [showInquiry, setShowInquiry] = useState(false);
  const postSlug = React.use(params).slug;
  const post = posts[postSlug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-brand-600 hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-white overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-600 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
            <span className="px-2.5 py-1 bg-brand-50 text-brand-700 rounded-full font-medium">
              {post.category}
            </span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg">
          {renderContent(post.content)}
        </article>
      </section>

      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-3 text-brand-100">
            Get a free quote and DFM review within 24 hours.
          </p>
          <button onClick={() => setShowInquiry(true)} className="mt-6 inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20 cursor-pointer">
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>

      <InquiryModal isOpen={showInquiry} onClose={() => setShowInquiry(false)} />
    </>
  );
}
