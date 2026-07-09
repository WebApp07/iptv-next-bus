"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does activation take?",
    answer:
      "Most subscriptions are activated within a few minutes after your order is confirmed.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "You can use the service on Smart TVs, Android TV, Fire TV Stick, Apple devices, smartphones, tablets, Windows, macOS and compatible media players.",
  },
  {
    question: "Can I use multiple devices?",
    answer:
      "Yes. Depending on the plan you purchase, you can connect one or more devices.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes. Our support team is available to help with setup, activation and any technical questions.",
  },
  {
    question: "How do I renew my subscription?",
    answer:
      "Simply log in to your account, choose your subscription and renew it from your dashboard.",
  },
  {
    question: "Can I manage my subscription online?",
    answer:
      "Yes. Your dashboard lets you view your subscription, orders and account information in one place.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            FAQ
          </span>

          <h2 className="mt-8 text-5xl font-bold">
            Frequently Asked
            <span className="block text-primary">Questions</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-base leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
