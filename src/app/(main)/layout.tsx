import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HUAXING PCBA | Premium PCB Manufacturing & Assembly",
  description: "25+ years of PCB manufacturing excellence. 9 SMT lines, 5 DIP lines, up to 58 layers. ISO9001, UL, RoHS certified. Zero MOQ, direct factory pricing from Shenzhen.",
  keywords: ["PCB manufacturing", "PCBA assembly", "SMT assembly", "PCB factory China", "circuit board manufacturer"],
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
