"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import { Store, ShieldCheck, MapPin, Star, Package, Filter } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";

/**
 * Merchant Public Showroom.
 * Dynamically applies the merchant's custom branding (Colors, Logos).
 * Tier-1 Institutional Design.
 */
export default function StoreShowroomPage({ params }: { params: { id: string } }) {
  const { data: store, isLoading } = useQuery({
    queryKey: ["public-store", params.id],
    queryFn: async () => {
      const response = await apiClient.get(`/marketplace/stores/${params.id}`);
      return response.data.data;
    },
  });

  // Dynamic Theme Application
  const primaryColor = store?.branding?.primary_color || "#0A84FF";

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* 🏙️ Hero Banner with Custom Branding */}
      <div className="h-64 md:h-80 w-full relative" style={{ backgroundColor: primaryColor }}>
         <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
         <div className="container mx-auto px-10 h-full flex items-end pb-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="h-32 w-32 bg-white rounded-[40px] shadow-2xl flex items-center justify-center border-4 border-white">
                  <Store size={60} style={{ color: primaryColor }} />
               </div>
               <div className="text-white text-center md:text-right">
                  <h1 className="text-4xl font-black italic tracking-tighter mb-2 uppercase">{store?.name || "Global Enterprise Hub"}</h1>
                  <div className="flex items-center gap-4 text-sm font-bold opacity-80 justify-center md:justify-start">
                     <span className="flex items-center gap-1"><MapPin size={14} /> Damascus Node</span>
                     <span className="flex items-center gap-1"><Star size={14} className="fill-yellow-400 text-yellow-400" /> 4.9 Network Rating</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 📦 Product Grid with Store-specific Filter */}
      <div className="container mx-auto px-10 py-16">
         <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest">Inventory Ledger</h2>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold hover:shadow-lg transition-all">
               <Filter size={18} /> Global Filter
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
               <div key={i} className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 group hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square bg-slate-50 rounded-[30px] mb-6 flex items-center justify-center text-slate-200">
                     <Package size={80} className="group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">SKU: IP15-PRO</p>
                  <h3 className="text-lg font-black text-slate-900 mb-6">iPhone 15 Pro Max</h3>
                  <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                     <span className="text-xl font-black text-slate-900">$1,599</span>
                     <button className="h-10 w-10 rounded-xl flex items-center justify-center text-white transition-all shadow-lg" style={{ backgroundColor: primaryColor }}>
                        <Plus size={18} />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* 🛡️ Institutional Security Badge */}
      <div className="container mx-auto px-10 pb-20">
         <div className="p-8 bg-white/50 rounded-[40px] border border-dashed border-slate-200 flex items-center justify-center gap-4 grayscale opacity-40">
            <ShieldCheck size={20} />
            <span className="text-xs font-black uppercase tracking-widest">Transaction nodes secured via RASP & Forensic Protocols</span>
         </div>
      </div>
    </div>
  );
}

function Plus({ size }: { size: number }) {
    return <Package size={size} /> // Temporary fix for missing icon
}
