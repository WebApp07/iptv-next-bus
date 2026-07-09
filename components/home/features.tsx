"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Tv, Globe, Clock3, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Your subscription is ready within minutes after purchase.",
  },
  {
    icon: Tv,
    title: "Multi Device",
    description:
      "Watch on Smart TVs, Android, Apple devices, tablets and computers.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Streaming",
    description:
      "Stable servers with high availability for uninterrupted viewing.",
  },
  {
    icon: Globe,
    title: "Worldwide Access",
    description:
      "Enjoy your subscription wherever you are with internet access.",
  },
  {
    icon: Clock3,
    title: "Always Available",
    description:
      "Optimized infrastructure designed for consistent performance.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Our team is available to help you whenever you need assistance.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Why Choose StreamHub
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">
            Built for a Premium
            <span className="block text-primary">Streaming Experience</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need in one subscription platform with modern
            technology, beautiful design and premium performance.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-semibold">{feature.title}</h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
