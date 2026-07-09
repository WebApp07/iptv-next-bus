"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-blue-600/10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-xl">
          <div className="px-8 py-20 text-center">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Get Started Today
            </span>

            <h2 className="mt-8 text-5xl font-black md:text-6xl">
              Ready for a Better
              <span className="block text-primary">Streaming Experience?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Join thousands of satisfied customers and enjoy a premium
              streaming platform with fast activation and support for all your
              devices.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-xl">
                Start Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button size="lg" variant="outline" className="rounded-xl">
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
