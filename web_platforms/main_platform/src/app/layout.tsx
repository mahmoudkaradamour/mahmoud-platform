import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import QueryProvider from "@/lib/providers/query-provider";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Enterprise | Global Distribution Ecosystem",
  description: "Bank-grade multi-vendor e-commerce platform for international-scale commerce automation.",
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={cn(cairo.variable, "antialiased")}>
      <body className="bg-background text-slate-900 font-sans">
        <QueryProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
