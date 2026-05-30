import Link from 'next/link';

const footerLinks = {
  Services: [
    { href: '/products/pcb-manufacturing', label: 'PCB Manufacturing' },
    { href: '/products/pcb-assembly', label: 'PCB Assembly' },
    { href: '/products/bom', label: 'BOM Procurement' },
    { href: '/capabilities', label: 'Capabilities' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/quality', label: 'Quality' },
    { href: '/contact', label: 'Contact' },
  ],
  Support: [
    { href: '/contact', label: 'Get a Quote' },
    { href: '#faq', label: 'FAQ' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white font-heading">HUAXING</span>
                <span className="text-lg font-bold text-brand-400 font-heading"> PCBA</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted PCB & PCBA manufacturing partner in Shenzhen, China. 
              25+ years of excellence, zero middlemen.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">ISO9001</span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">UL</span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">RoHS</span>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 HUAXING PCBA. All rights reserved.</p>
          <p className="text-sm text-gray-500">Shenzhen, China | PCB & PCBA Manufacturing</p>
        </div>
      </div>
    </footer>
  );
}
