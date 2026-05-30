import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  content: string[];
}

const posts: Record<string, BlogPost> = {
  'pcb-vs-pcba-whats-the-difference': {
    slug: 'pcb-vs-pcba-whats-the-difference',
    title: 'PCB vs PCBA: What\'s the Difference and Why It Matters',
    date: '2026-05-28',
    category: 'PCB Basics',
    content: [
      'If you\'re new to electronics manufacturing, the terms "PCB" and "PCBA" are easy to confuse. They sound similar, but they refer to two very different stages of the same process.',
      '## What is a PCB?',
      'A PCB (Printed Circuit Board) is the bare board — a flat substrate made of fiberglass, composite epoxy, or other laminate material with copper traces etched onto it. Think of it as the skeleton: it provides the mechanical structure and electrical pathways, but it has no electronic components attached.',
      'PCB fabrication involves:',
      '- **Layering**: Stacking copper and insulating layers (from 2 to 58+ layers)',
      '- **Etching**: Removing unwanted copper to leave circuit traces',
      '- **Drilling**: Creating holes for vias and through-hole components',
      '- **Plating**: Depositing copper inside holes to connect layers',
      '- **Solder Mask**: Applying protective coating (typically green)',
      '- **Silkscreen**: Printing reference designators and logos',
      '## What is a PCBA?',
      'A PCBA (Printed Circuit Board Assembly) is the finished product — a bare PCB after all electronic components have been soldered onto it. This is the "alive" board that actually does something.',
      'PCBA assembly involves:',
      '- **Solder Paste Printing**: Applying solder paste to pads',
      '- **Pick & Place**: Mounting components (resistors, ICs, connectors)',
      '- **Reflow Soldering**: Melting solder to form permanent joints',
      '- **Inspection**: AOI, X-ray, and functional testing',
      '- **DIP/Through-Hole**: Wave soldering or hand soldering',
      '## Key Differences at a Glance',
      '| Aspect | PCB | PCBA |',
      '|--------|-----|------|',
      '| What it is | Bare board with copper traces | Board with all components soldered |',
      '| Components | None | Resistors, ICs, capacitors, connectors |',
      '| Function | Passive — only conducts electricity | Active — performs electronic functions |',
      '| Testing | Electrical continuity only | Functional, ICT, flying probe |',
      '| Lead Time | 24h – 7 days | 5 – 15 days (after PCB ready) |',
      '| Cost | Lower ($0.50 – $50/board) | Higher ($5 – $500+/board) |',
      '## Why the Distinction Matters',
      'When sourcing manufacturing, you need to know whether you need just PCBs (if you\'ll assemble in-house) or full PCBA (turnkey). Many manufacturers, including HUAXING, offer both — and the choice depends on your volume, timeline, and in-house capabilities.',
      'For prototypes and low-volume runs, full turnkey PCBA is almost always more cost-effective. For high-volume production, you might separate PCB fabrication and assembly for cost optimization.',
      'At HUAXING, we handle both under one roof — PCB fabrication up to 58 layers and full SMT/DIP assembly, giving you single-vendor accountability and faster time-to-market.',
    ],
  },
  'smt-assembly-guide-2026': {
    slug: 'smt-assembly-guide-2026',
    title: 'Complete Guide to SMT Assembly: Process, Equipment, and Best Practices',
    date: '2026-05-25',
    category: 'Assembly',
    content: [
      'Surface Mount Technology (SMT) has revolutionized electronics manufacturing. Today, over 80% of all electronic assemblies use SMT components, and for good reason.',
      '## What is SMT Assembly?',
      'SMT is a method where electronic components are mounted directly onto the surface of a PCB. Unlike through-hole technology (THT), SMT components don\'t require drilled holes — they\'re soldered directly to pads on the board surface.',
      '## The SMT Assembly Process',
      '### 1. Solder Paste Printing',
      'Solder paste — a mixture of tiny solder balls and flux — is applied to the PCB pads through a laser-cut stencil. The stencil ensures precise paste placement and volume, which is critical for fine-pitch components.',
      'At HUAXING, we use automated solder paste inspection (SPI) after printing to verify paste volume and alignment before any components are placed.',
      '### 2. Pick & Place',
      'High-speed placement machines (Siemens/ASM SIPLACE and Yamaha YSM series) pick components from tape-and-reel, tray, or tube feeders and place them on the board with ±25μm accuracy. Modern machines place up to 80,000 components per hour.',
      '### 3. Reflow Soldering',
      'The board travels through a 10-zone reflow oven with carefully controlled temperature profiles. The solder paste melts, forming permanent electrical and mechanical connections, then cools to solidify.',
      '### 4. Inspection',
      'Every board passes through automated optical inspection (AOI) immediately after reflow. For BGA and other hidden joints, X-ray inspection detects voids, bridges, and insufficient solder.',
      '## Key Equipment at HUAXING',
      '- 9 SMT lines (4 high-speed ASM, 5 flexible Yamaha)',
      '- 6 AOI systems (Omron VT-RNS, SAKI BF-18D)',
      '- 2 X-ray systems (Nordson DAGE XD7600NT)',
      '- 10-zone reflow ovens with nitrogen atmosphere',
      '- 3D SPI for solder paste verification',
      '## Best Practices for SMT Assembly Success',
      '1. **Design for manufacturing (DFM)** — Ensure proper pad sizes, component spacing, and fiducial marks',
      '2. **Proper stencil design** — Aperture size and thickness affect paste volume and yield',
      '3. **Thermal management** — Large copper pours can cause tombstoning; use thermal reliefs',
      '4. **Panelization** — Multiple boards on one panel improves efficiency and cost',
      '5. **Component selection** — Prefer industry-standard packages to avoid supply chain issues',
    ],
  },
  'pcb-material-selection-guide': {
    slug: 'pcb-material-selection-guide',
    title: 'PCB Material Selection Guide: FR4, High-Frequency, and Advanced Substrates',
    date: '2026-05-20',
    category: 'PCB Design',
    content: [
      'The PCB substrate material you choose directly impacts your product\'s performance, reliability, and cost. Here\'s a practical guide to the most common materials and when to use each.',
      '## FR4 (Standard)',
      'FR4 is the workhorse of the PCB industry — a glass-reinforced epoxy laminate. It\'s affordable, widely available, and suitable for most consumer, industrial, and commercial electronics.',
      '- **Tg (Glass Transition)** : 130–180°C',
      '- **Dk (Dielectric Constant)** : ~4.5 at 1 GHz',
      '- **Cost**: Low',
      '- **Best for**: General-purpose digital, analog, and power boards',
      '## High-Frequency Materials (Rogers, PTFE/Teflon)',
      'For RF, microwave, and high-speed digital designs, standard FR4\'s dielectric properties degrade at high frequencies. Rogers and PTFE-based materials offer stable Dk and low loss.',
      '- **Tg**: 200–280°C',
      '- **Dk**: 2.2–3.5 (very stable across frequency)',
      '- **Cost**: 5–10× FR4',
      '- **Best for**: RF amplifiers, antennas, radar, 5G, high-speed backplanes',
      '## Polyimide (Flex & Rigid-Flex)',
      'Polyimide substrates enable flexible and rigid-flex PCBs, ideal for applications requiring bending, folding, or tight packaging.',
      '- **Tg**: 250–350°C',
      '- **Flexibility**: Can withstand millions of bend cycles',
      '- **Cost**: Moderate–High',
      '- **Best for**: Wearables, medical devices, cameras, automotive interiors',
      '## Aluminum / Metal Core (IMS)',
      'Insulated Metal Substrate (IMS) PCBs use a metal base layer (usually aluminum) to conduct heat away from high-power components.',
      '- **Thermal conductivity**: 1–4 W/mK (vs 0.3 for FR4)',
      '- **Cost**: Moderate',
      '- **Best for**: LED lighting, power supplies, motor controllers, automotive',
      '## Selection Checklist',
      '1. What frequency range? (FR4 works below 1 GHz)',
      '2. What thermal environment? (High temp = high Tg or metal core)',
      '3. Is flexibility required? (Rigid-flex = polyimide)',
      '4. What\'s your budget? (FR4 for cost-sensitive)',
      '5. What layer count? (FR4 handles 2–58 layers)',
      '6. Need help choosing? HUAXING offers engineering consultation on material selection for every project — free of charge.',
    ],
  },
};

// ── Table rows → proper HTML table ──
function renderTable(rows: string[]) {
  const headerRow = rows.find(r => !r.includes('---'));
  const allRows = rows.filter(r => !r.includes('---'));
  if (allRows.length === 0) return null;

  const parseRow = (row: string) => row.split('|').filter(c => c.trim()).map(c => c.trim());
  const isHeader = rows.some(r => r.includes('---'));

  const tableRows = allRows.map((r, i) => ({
    cells: parseRow(r),
    isHead: i === 0 && isHeader,
  }));

  return (
    <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl">
      <table className="w-full text-sm">
        {tableRows.length > 0 && (
          <thead>
            <tr className="bg-brand-50 border-b border-gray-200">
              {tableRows[0].cells.filter(c => c).map((cell, j) => (
                <th key={j} className="px-4 py-3 text-left font-semibold text-gray-900 text-xs uppercase tracking-wider whitespace-nowrap">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {tableRows.slice(tableRows.some(r => r.isHead) ? 1 : 0).map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
              {row.cells.filter(c => c).map((cell, j) => (
                <td key={j} className={`px-4 py-3 text-gray-600 ${j === 0 ? 'font-medium text-gray-900 whitespace-nowrap' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Paragraph renderer (single line, not table) ──
function renderParagraph(text: string, key: number) {
  // Bold inline
  const bolded = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');

  if (text.startsWith('## ')) {
    return <h2 key={key} className="text-2xl font-bold text-gray-900 font-heading mt-12 mb-4">{text.replace('## ', '')}</h2>;
  }
  if (text.startsWith('### ')) {
    return <h3 key={key} className="text-xl font-bold text-gray-900 font-heading mt-8 mb-3">{text.replace('### ', '')}</h3>;
  }
  if (text.startsWith('- **')) {
    return <li key={key} className="text-gray-600 ml-5 mt-1.5" dangerouslySetInnerHTML={{ __html: text.replace(/^- \*\*(.*?)\*\*\s*:\s*/, '<strong>$1</strong>: ') }} />;
  }
  if (text.startsWith('- ')) {
    return <li key={key} className="text-gray-600 ml-5 mt-1.5">{text.replace('- ', '')}</li>;
  }
  if (/^\d+\.\s/.test(text)) {
    return <li key={key} className="text-gray-600 ml-5 mt-1.5" dangerouslySetInnerHTML={{ __html: text.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
  }
  if (text === '') {
    return <div key={key} className="h-2" />;
  }
  return <p key={key} className="text-gray-600 mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: bolded }} />;
}

// ── Content block parser (groups table rows together) ──
function renderContent(content: string[]) {
  const elements: React.ReactNode[] = [];
  let tableRows: string[] | null = null;

  function flushTable() {
    if (tableRows) {
      elements.push(<div key={`t${elements.length}`}>{renderTable(tableRows)}</div>);
      tableRows = null;
    }
  }

  content.forEach((line, i) => {
    if (line.startsWith('|')) {
      if (!tableRows) tableRows = [];
      tableRows.push(line);
    } else {
      flushTable();
      elements.push(renderParagraph(line, i));
    }
  });
  flushTable(); // flush last table if any

  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg">
          {renderContent(post.content)}
        </article>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="mt-3 text-brand-100">
            Get a free quote and DFM review within 24 hours.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-brand-900/20">
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
