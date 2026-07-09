"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed K.",
    role: "Verified Customer",
    text: "The interface is beautiful, activation was instant, and everything works perfectly across my devices.",
  },
  {
    name: "Sarah M.",
    role: "Verified Customer",
    text: "I've tried several streaming platforms, but this one feels the most polished and easiest to use.",
  },
  {
    name: "Michael R.",
    role: "Verified Customer",
    text: "Fast setup, premium quality, and excellent support. Highly recommended for anyone looking for a smooth experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            Testimonials
          </span>

          <h2 className="mt-8 text-5xl font-bold">
            Loved by
            <span className="block text-primary">Our Customers</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Here's what our customers say about their experience.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-border bg-card p-8 shadow-xl transition-all hover:border-primary/40 hover:shadow-primary/10"
            >
              <div className="mb-6 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-muted-foreground">"{item.text}"</p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">{item.name}</h4>

                  <p className="text-sm text-primary">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
