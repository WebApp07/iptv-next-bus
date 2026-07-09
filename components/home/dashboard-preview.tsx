"use client";

import { Play, Tv, Smartphone, Monitor } from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Glow */}

      <div className="absolute -inset-8 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Main Card */}

      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        <div className="border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">StreamHub</h3>

              <p className="text-sm text-muted-foreground">Premium Dashboard</p>
            </div>

            <Play className="text-primary" />
          </div>
        </div>

        <div className="space-y-4 p-6">
          <div className="rounded-xl bg-primary/10 p-5">
            <p className="text-sm text-muted-foreground">Active Plan</p>

            <h2 className="mt-2 text-3xl font-bold">Premium</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Device icon={<Tv />} title="Smart TV" />

            <Device icon={<Monitor />} title="Desktop" />

            <Device icon={<Smartphone />} title="Android" />

            <Device icon={<Smartphone />} title="iPhone" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Device({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="rounded-xl border border-border p-4 transition hover:bg-accent">
      <div className="mb-3 text-primary">{icon}</div>

      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}
