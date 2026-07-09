import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo */}

          <div>
            <h2 className="text-2xl font-black">
              Nova<span className="text-primary">Stream</span>
            </h2>

            <p className="mt-4 text-muted-foreground">
              Premium streaming platform with fast activation, beautiful
              experience and multi-device support.
            </p>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-semibold">Company</h3>

            <div className="mt-4 space-y-3">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-primary"
              >
                Home
              </Link>

              <Link
                href="#features"
                className="block text-muted-foreground hover:text-primary"
              >
                Features
              </Link>

              <Link
                href="#pricing"
                className="block text-muted-foreground hover:text-primary"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Support */}

          <div>
            <h3 className="font-semibold">Support</h3>

            <div className="mt-4 space-y-3">
              <Link
                href="#faq"
                className="block text-muted-foreground hover:text-primary"
              >
                FAQ
              </Link>

              <Link
                href="/"
                className="block text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>

              <Link
                href="/"
                className="block text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="font-semibold">Follow Us</h3>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NovaStream. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Social({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-border transition hover:border-primary hover:bg-primary/10">
      {children}
    </div>
  );
}
