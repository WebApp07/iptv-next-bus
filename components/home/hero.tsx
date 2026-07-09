"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck, Tv, Globe, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Purple Glow */}
      <div className="absolute right-20 bottom-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            ⭐ Trusted by thousands of customers
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl"
        >
          Premium Entertainment
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            For Every Screen.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          Enjoy fast activation, premium streaming quality, and support for
          Smart TVs, phones, tablets, Fire TV, Android, Apple devices, and more.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="gap-2 rounded-xl">
            Start Free Trial
            <ArrowRight size={18} />
          </Button>

          <Button variant="outline" size="lg" className="gap-2 rounded-xl">
            <Play size={18} />
            View Plans
          </Button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          <Stat
            icon={<Users size={22} />}
            value="50K+"
            label="Happy Customers"
          />
          <Stat icon={<ShieldCheck size={22} />} value="99.9%" label="Uptime" />
          <Stat icon={<Tv size={22} />} value="20+" label="Supported Devices" />
          <Stat icon={<Globe size={22} />} value="120+" label="Countries" />
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<ShieldCheck className="h-10 w-10 text-blue-500" />}
            title="Secure Platform"
            text="Reliable service with enterprise-grade infrastructure."
          />

          <FeatureCard
            icon={<Tv className="h-10 w-10 text-violet-500" />}
            title="Multi Device"
            text="Watch on Smart TVs, phones, tablets and computers."
          />

          <FeatureCard
            icon={<Play className="h-10 w-10 text-emerald-500" />}
            title="Instant Access"
            text="Activate your subscription within minutes."
          />
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-3 flex justify-center text-primary">{icon}</div>

      <h3 className="text-3xl font-bold">{value}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="mb-6 flex justify-center">{icon}</div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-4 text-muted-foreground">{text}</p>
    </div>
  );
}
