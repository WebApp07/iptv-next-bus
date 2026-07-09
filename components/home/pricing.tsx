"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$12",
    duration: "/month",
    popular: false,
    features: [
      "1 Device",
      "HD Streaming",
      "Instant Activation",
      "Email Support",
    ],
  },
  {
    name: "Premium",
    price: "$45",
    duration: "/6 months",
    popular: true,
    features: [
      "3 Devices",
      "4K Streaming",
      "Priority Support",
      "Instant Activation",
      "Multi Device",
    ],
  },
  {
    name: "Ultimate",
    price: "$75",
    duration: "/year",
    popular: false,
    features: [
      "5 Devices",
      "4K Streaming",
      "Priority Support",
      "Instant Activation",
      "Premium Servers",
      "24/7 Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            Pricing
          </span>

          <h2 className="mt-8 text-5xl font-bold">
            Choose Your
            <span className="block text-primary">Perfect Plan</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Flexible plans for every type of user.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-3 ${
                plan.popular
                  ? "border-primary bg-card shadow-2xl shadow-blue-500/20 scale-105"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <div className="mt-8 flex items-end">
                <span className="text-6xl font-black">{plan.price}</span>

                <span className="mb-2 ml-2 text-muted-foreground">
                  {plan.duration}
                </span>
              </div>

              <div className="mt-10 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-10 w-full rounded-xl" size="lg">
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
