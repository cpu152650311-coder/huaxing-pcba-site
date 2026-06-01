import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "HUAXING PCBA | Direct Factory PCB Manufacturing & Assembly",
  description: "25+ years PCB manufacturing. 9 SMT lines, 58-layer capability. Direct factory pricing from Shenzhen — zero MOQ. Get your free quote today.",
};

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
