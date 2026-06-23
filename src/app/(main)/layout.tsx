import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Title and SEO metadata are inherited from root layout (layout.tsx)
// Individual pages can override via their own metadata export

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
