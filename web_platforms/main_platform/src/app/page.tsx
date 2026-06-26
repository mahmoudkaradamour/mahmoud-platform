"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Globe,
  TrendingUp,
  ChevronRight,
  Package,
  Layers,
  Cpu,
  CreditCard
} from "lucide-react";

/**
 * Enterprise Global Landing Page.
 * Institutional Design with high-fidelity components.
 */
export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* 🏆 Hero: The Institutional Edge */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black tracking-widest uppercase mb-8 border border-blue-100">
              <Zap size={14} className="fill-blue-600" />
              Global Tier-0 Distribution Ecosystem
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              The Future of <br />
              <span className="text-primary italic">Global Commerce.</span>
            </h1>

            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-lg">
              Architecting high-performance, bank-grade infrastructure for modern digital markets. Secure, scalable, and autonomous.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-primary group">
                Launch Enterprise Portal
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all">
                Explore Ecosystem
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
               <Layers size={32} />
               <Cpu size={32} />
               <Globe size={32} />
               <ShieldCheck size={32} />
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] bg-slate-900 rounded-[60px] shadow-3xl overflow-hidden relative border-[12px] border-white ring-1 ring-slate-100">
               <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-primary/20" />
               <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-2xl rounded-[40px] border border-white/10">
                  <p className="text-white/60 font-black text-xs uppercase tracking-widest mb-2">Network Status</p>
                  <div className="flex justify-between items-end">
                     <div>
                        <p className="text-2xl font-black text-white">Verified</p>
                        <p className="text-xs text-blue-400 font-bold">100k+ Transactions/Sec</p>
                     </div>
                     <div className="flex gap-1">
                        {[4,7,5,9,6,8,10].map((h, i) => (
                          <div key={i} className="w-1 bg-primary rounded-full" style={{ height: h * 4 }} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Core Pillars: Institutional Verification */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter">Engineered for Dominance.</h2>
            <p className="text-slate-500 font-bold">Our architecture leverages state-of-the-art distributed systems to provide unmatched market reliability.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheck size={32} />}
              title="CQRS & Integrity"
              desc="Bank-grade financial ledger ensuring zero data drift through high-speed event sourcing."
            />
            <FeatureCard
              icon={<Cpu size={32} />}
              title="AI Orchestration"
              desc="Sub-millisecond personalization driven by isolated vector microservices."
            />
            <FeatureCard
              icon={<CreditCard size={32} />}
              title="Global Payments"
              desc="A unified financial bridge supporting high-frequency enterprise checkout flows."
            />
          </div>
        </div>
      </section>

      {/* 🏛️ The Footer: Institutional Trust */}
      <footer className="bg-slate-900 text-white pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-20 pb-24 border-b border-white/5">
             <div className="lg:col-span-2">
                <h2 className="text-3xl font-black tracking-tighter mb-8 italic">MAHMOUD <span className="text-primary underline">ENTERPRISE</span></h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                  Setting the gold standard for distributed e-commerce infrastructure. Trusted by leading institutions for autonomous commerce automation.
                </p>
             </div>
             <div>
                <h4 className="font-black uppercase text-xs tracking-widest text-slate-500 mb-8">Solutions</h4>
                <ul className="space-y-4 font-bold text-slate-300">
                   <li><Link href="/catalog" className="hover:text-primary transition-colors">Digital Catalog</Link></li>
                   <li><Link href="/bidding" className="hover:text-primary transition-colors">Reverse Auctions</Link></li>
                   <li><Link href="/analytics" className="hover:text-primary transition-colors">Market Intelligence</Link></li>
                </ul>
             </div>
             <div>
                <h4 className="font-black uppercase text-xs tracking-widest text-slate-500 mb-8">Institutional</h4>
                <ul className="space-y-4 font-bold text-slate-300">
                   <li><Link href="/security" className="hover:text-primary transition-colors">Security Audit</Link></li>
                   <li><Link href="/compliance" className="hover:text-primary transition-colors">Legal Compliance</Link></li>
                   <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                </ul>
             </div>
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
             <p className="text-slate-500 text-xs font-black uppercase">© 2026 Mahmoud Enterprise Platform. All rights reserved.</p>
             <div className="flex gap-6 grayscale opacity-30">
                <Globe size={20} />
                <ShieldCheck size={20} />
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
      <div className="h-16 w-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest">
         Learn More <ChevronRight size={14} />
      </div>
    </div>
  );
}
