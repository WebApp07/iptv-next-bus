import CTA from "@/components/home/cta";
import Devices from "@/components/home/devices";
import FAQ from "@/components/home/faq";
import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/pricing";
import Testimonials from "@/components/home/testimonials";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Devices />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
