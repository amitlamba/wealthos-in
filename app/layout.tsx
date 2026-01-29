import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wealthos.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WealthOS — Define and achieve your goals",
    template: "%s | WealthOS",
  },
  description:
    "WealthOS helps you define your financial goals, track progress, and achieve them — simply and clearly.",
  openGraph: {
    title: "WealthOS — Define and achieve your goals",
    description: "Define your financial goals, track progress, and achieve them — simply and clearly.",
    url: siteUrl,
    siteName: "WealthOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WealthOS — Define and achieve your goals",
    description: "Define your financial goals, track progress, and achieve them — simply and clearly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <header className="sticky top-0 z-[100] w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/95">
          <nav className="w-full max-w-7xl mx-auto flex h-14 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg text-primary">WealthOS</span>
            </Link>
            <div className="flex items-center gap-2">
              <Button asChild>
                <Link
                  href="https://app.wealthos.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border bg-background py-12">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-8">
              <Link
                href="https://app.wealthos.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
                Get started
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/pages/faq"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/pages/pricing"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
            </nav>
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} WealthOS. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

