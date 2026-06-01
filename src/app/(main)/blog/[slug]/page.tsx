import BlogPostClient from './BlogPostClient';

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
      'If you\'re new to electronics manufacturing, the terms "PCB" and "PCBA" are easy to confuse.',
      '## What is a PCB?',
      'A PCB (Printed Circuit Board) is the bare board — a flat substrate with copper traces. No components attached.',
      'PCB fabrication involves layering, etching, drilling, and plating copper onto the substrate.',
      '## What is a PCBA?',
      'A PCBA (Printed Circuit Board Assembly) is a PCB with electronic components soldered onto it — resistors, capacitors, ICs, connectors.',
      'PCBA involves solder paste application, component placement, reflow soldering, and inspection.',
      '## Key Differences',
      '- PCB = bare board; PCBA = assembled board with components',
      '- PCB is fabricated; PCBA is assembled',
      '- You order PCBs from a fab house; you order PCBA from an assembly house',
      '- HUAXING does both — which saves you time and logistics costs',
      'Contact us for a quote on your PCB or PCBA project today.',
    ],
  },
  'smt-assembly-guide-2026': {
    slug: 'smt-assembly-guide-2026',
    title: 'SMT Assembly Guide 2026: Process, Equipment & Best Practices',
    date: '2026-05-27',
    category: 'PCB Assembly',
    content: [
      'Surface Mount Technology (SMT) is the dominant method for modern PCB assembly.',
      '## The SMT Assembly Process',
      '1. Solder Paste Printing — applying paste through a stencil onto PCB pads',
      '2. Solder Paste Inspection (SPI) — 3D inspection of paste volume and alignment',
      '3. Component Placement — high-speed pick-and-place machines (up to 80,000 CPH)',
      '4. Reflow Soldering — controlled heating profile melts solder to form joints',
      '5. Automated Optical Inspection (AOI) — visual inspection of every joint',
      '6. X-ray Inspection — for BGA and hidden joints',
      'HUAXING operates 9 SMT lines with Siemens/ASM and Yamaha placement systems.',
      '## Component Capabilities',
      '- 01005 to 55mm² BGA packages',
      '- Fine-pitch down to 0.3mm',
      '- Double-sided SMT assembly',
      '- Mixed technology (SMT + through-hole)',
      'Get a free DFM review with your quote.',
    ],
  },
  'pcb-material-selection-guide': {
    slug: 'pcb-material-selection-guide',
    title: 'PCB Material Selection Guide: FR-4, Rogers, and Beyond',
    date: '2026-05-26',
    category: 'PCB Manufacturing',
    content: [
      'Choosing the right PCB material impacts performance, reliability, and cost.',
      '## Common PCB Materials',
      '- FR-4: Standard fiberglass epoxy. Tg 130-180°C. Good for most applications.',
      '- High-Tg FR-4: Tg >170°C. Better for lead-free soldering and high-temperature use.',
      '- Rogers: Low dielectric loss. Ideal for RF/microwave applications.',
      '- Polyimide: High temperature resistance. Used in aerospace and military.',
      '- Aluminum: Metal-core for LED and power applications (heat dissipation).',
      '- Flex Materials: Polyimide film for flexible and rigid-flex PCBs.',
      '## Key Parameters',
      '- Tg (Glass Transition Temperature): Higher = better thermal performance',
      '- Dk (Dielectric Constant): Lower = better for high-frequency signals',
      '- Df (Dissipation Factor): Lower = less signal loss',
      '- CTE (Coefficient of Thermal Expansion): Lower = better dimensional stability',
      'HUAXING stocks FR-4, High-Tg, Rogers, and aluminum substrates. Contact us for material recommendations.',
    ],
  },
  'dfm-checklist-pcb-assembly': {
    slug: 'dfm-checklist-pcb-assembly',
    title: 'DFM Checklist: 12 Rules for Manufacturable PCB Assembly',
    date: '2026-05-25',
    category: 'PCB Design',
    content: [
      'Design for Manufacturing (DFM) prevents costly production issues.',
      '## The 12 DFM Rules',
      '1. Maintain minimum 0.15mm trace/space for standard PCBs',
      '2. Add fiducial marks (3 minimum) on board edges',
      '3. Keep components ≥3mm from board edges',
      '4. Avoid 90° trace corners — use 45° angles',
      '5. Ensure proper thermal relief on ground pads',
      '6. Maintain 0.3mm minimum annular ring',
      '7. Add tooling holes (≥3.2mm) for assembly fixtures',
      '8. Keep BGA pads within reworkable area',
      '9. Use standard pad sizes from component datasheets',
      '10. Include polarity markers for diodes, capacitors, ICs',
      '11. Panelize with 5mm border and V-score or routing',
      '12. Export Gerber RS-274X with drill files included',
      '## Free DFM Review',
      'Send your Gerber files to HUAXING. Our engineers provide a free DFM report within 24 hours — before you commit to production.',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogPostClient posts={posts} params={params} />;
}
