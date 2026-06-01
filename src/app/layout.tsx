import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HUAXING PCBA | Premium PCB Manufacturing & Assembly",
  description:
    "25+ years of PCB manufacturing excellence. 9 SMT lines, 5 DIP lines, up to 58 layers. ISO9001, UL, RoHS certified. Zero MOQ, direct factory pricing from Shenzhen.",
  keywords: [
    "PCB manufacturing",
    "PCBA assembly",
    "SMT assembly",
    "PCB factory China",
    "circuit board manufacturer",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
