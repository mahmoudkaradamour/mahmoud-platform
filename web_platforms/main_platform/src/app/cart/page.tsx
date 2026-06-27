"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import { ShoppingCart, Trash2, ArrowRight, ShieldCheck, CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";

/**
 * Consolidated Enterprise Cart.
 * High-performance settlement preparation.
 */
export default function CartPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <Navbar />

      <div className="container mx-auto px-10">
        <h1 className="text-4xl font-black text-slate-900 italic mb-12 tracking-tighter uppercase">Allocation Ledger (Cart)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 📋 Line Items */}
          <div className="lg:col-span-2 space-y-6">
            {[1, 2].map(i => (
              <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex items-center gap-8 group">
                <div className="h-24 w-24 bg-slate-50 rounded-[25px] flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                   <ShoppingCart size={40} />
                </div>
                <div className="flex-1">
                   <h3 className="text-xl font-black text-slate-900">iPhone 15 Pro Max</h3>
                   <p className="text-slate-400 font-bold text-xs uppercase mt-1 tracking-widest">Global SKU: IP15-PM-TITAN</p>
                </div>
                <div className="text-right">
                   <p className="text-2xl font-black text-slate-900">$1,599</p>
                   <button className="text-rose-500 font-black text-[10px] uppercase mt-2 hover:underline">Remove Node</button>
                </div>
              </div>
            ))}
          </div>

          {/* 🏛️ Settlement Summary */}
          <div className="relative">
            <div className="bg-slate-900 text-white p-10 rounded-[50px] shadow-3xl sticky top-32 overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

               <h3 className="text-xl font-black mb-10 italic relative z-10">Settlement Summary</h3>
               <div className="space-y-6 relative z-10 border-b border-white/5 pb-10">
                  <div className="flex justify-between text-slate-400 font-bold">
                     <span>Net Acquisition</span>
                     <span>$3,198.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400 font-bold">
                     <span>Institutional Tax (5%)</span>
                     <span>$159.90</span>
                  </div>
                  <div className="flex justify-between text-slate-400 font-bold">
                     <span>Global Logistics</span>
                     <span>FREE</span>
                  </div>
               </div>

               <div className="flex justify-between items-end pt-10 mb-12 relative z-10">
                  <span className="text-slate-500 font-black text-xs uppercase tracking-widest">Total Liability</span>
                  <span className="text-4xl font-black text-white italic">$3,357.90</span>
               </div>

               <Link href="/checkout" className="btn-primary w-full group !py-5 relative z-10">
                  Execute Checkout
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </Link>

               <div className="mt-8 flex items-center justify-center gap-3 opacity-20 relative z-10">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Sovereign Financial Shield v1.0</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
