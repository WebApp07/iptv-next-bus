import DashboardPreview from "./dashboard-preview";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
            ⭐ Trusted by thousands
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">
            Premium Entertainment
            <span className="block text-primary">For Every Screen.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Watch on Smart TVs, Android, Apple devices, tablets and computers
            with a premium experience.
          </p>

          <div className="mt-10 flex gap-4">
            <Button size="lg">
              Start Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline" size="lg">
              View Plans
            </Button>
          </div>

          <div className="mt-14 flex gap-10">
            <Stat number="50K+" text="Customers" />

            <Stat number="99.9%" text="Uptime" />

            <Stat number="24/7" text="Support" />
          </div>
        </div>

        {/* RIGHT */}

        <DashboardPreview />
      </div>
    </section>
  );
}

function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <h3 className="text-3xl font-bold">{number}</h3>

      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}
