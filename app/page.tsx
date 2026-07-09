import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
