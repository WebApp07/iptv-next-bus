"use client";

import { motion } from "framer-motion";
import {
  Tv,
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  Gamepad2,
} from "lucide-react";

const devices = [
  {
    icon: Tv,
    title: "Smart TV",
    description: "Samsung, LG, Android TV",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Android & iPhone",
  },
  {
    icon: Laptop,
    title: "Laptop",
    description: "Windows & macOS",
  },
  {
    icon: Tablet,
    title: "Tablet",
    description: "Android & iPad",
  },
  {
    icon: Monitor,
    title: "Desktop",
    description: "Any modern browser",
  },
  {
    icon: Gamepad2,
    title: "Streaming Devices",
    description: "Fire TV & Chromecast",
  },
];

export default function Devices() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-background" />

      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            Watch Anywhere
          </span>

          <h2 className="mt-8 text-5xl font-bold">
            Every Device.
            <span className="block text-primary">One Experience.</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Enjoy your subscription across all your favorite devices with a
            seamless experience.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {devices.map((device, index) => {
            const Icon = device.icon;

            return (
              <motion.div
                key={device.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-semibold">{device.title}</h3>

                <p className="mt-3 text-muted-foreground">
                  {device.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
