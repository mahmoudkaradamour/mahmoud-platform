import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../../styles/globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import QueryProvider from "@/lib/providers/query-provider";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Platform | Sovereign Commerce Ecosystem",
  description: "Next-generation multi-vendor marketplace for MENA markets.",
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
    <html lang="ar" dir="rtl" className={cn(cairo.variable, "antialiased")}>
      <body className="bg-background text-slate-900 font-cairo">
        <QueryProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
