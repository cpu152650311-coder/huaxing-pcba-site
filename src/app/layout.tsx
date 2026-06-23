import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://huaxingpcba.com"),
  title: {
    default: "HUAXING PCBA | Premium PCB Manufacturing & Assembly",
    template: "%s | HUAXING PCBA",
  },
  description:
    "25+ years of PCB manufacturing excellence. 9 SMT lines, 5 DIP lines, up to 58 layers. ISO9001, UL, RoHS certified. Zero MOQ, direct factory pricing from Shenzhen.",
  keywords: [
    "PCB manufacturing",
    "PCBA assembly",
    "SMT assembly",
    "PCB factory China",
    "circuit board manufacturer",
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huaxingpcba.com",
    siteName: "HUAXING PCBA",
    title: "HUAXING PCBA | Premium PCB Manufacturing & Assembly",
    description:
      "25+ years of PCB manufacturing excellence. 9 SMT lines, 5 DIP lines, up to 58 layers. ISO9001, UL, RoHS certified. Zero MOQ, direct factory pricing from Shenzhen.",
    images: [
      {
        url: "/images/hero-pcba-concept.webp",
        width: 1024,
        height: 640,
        alt: "HUAXING PCBA Factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HUAXING PCBA | Premium PCB Manufacturing & Assembly",
    description:
      "25+ years of PCB manufacturing excellence. 9 SMT lines, 5 DIP lines, up to 58 layers. Zero MOQ, direct factory pricing.",
    images: ["/images/hero-pcba-concept.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HUAXING PCBA",
              url: "https://huaxingpcba.com",
              logo: "https://huaxingpcba.com/favicon-48x48.png",
              description:
                "25+ years of PCB manufacturing excellence. 9 SMT lines, 5 DIP lines, up to 58 layers. ISO9001, UL, RoHS certified.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Shenzhen",
                addressCountry: "CN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "sales@huaxingpcba.com",
              },
              sameAs: [],
            }),
          }}
        />
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen bg-white font-sans">{children}</body>
    </html>
  );
}
