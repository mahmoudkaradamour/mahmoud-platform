"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { ShoppingCart, Heart, Share2, ShieldCheck, Box, Zap, Star } from "lucide-react";

/**
 * Product Detail Page - Immersive Experience.
 * Features: Detailed Specs, Merchant Info, and AR Visualization stub.
 */
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", params.id],
    queryFn: async () => {
      const response = await apiClient.get(`/catalog/products/${params.id}`);
      return response.data.data;
    },
  });

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">جاري تحميل تفاصيل المنتج...</div>;

  return (
    <div className="pt-32 pb-24">
      <Navbar />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Product Images & AR */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-[50px] border border-slate-100 flex items-center justify-center text-slate-200 overflow-hidden relative shadow-2xl">
                <Box size={160} />
                <button className="absolute bottom-8 right-8 px-6 py-3 bg-slate-900/80 backdrop-blur-md text-white rounded-2xl font-black flex items-center gap-2 hover:bg-primary transition-all">
                    <Zap size={18} className="text-secondary" />
                    عرض في غرفتك (AR)
                </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="aspect-square bg-white rounded-3xl border border-slate-100 flex items-center justify-center text-slate-300 hover:border-primary transition-all cursor-pointer">
                    <Box size={32} />
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Product Info & Purchase */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-4">
               <Star size={14} className="fill-primary" />
               المنتج الأعلى تقييماً في فئته
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              {product?.name?.ar || product?.name?.en}
            </h1>

            <div className="flex items-center gap-6 mb-8">
               <div className="text-3xl font-black text-primary">
                 {product?.base_price} {product?.currency}
               </div>
               <div className="text-slate-400 line-through text-xl font-bold">
                 {(product?.base_price * 1.2).toFixed(2)} {product?.currency}
               </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
               هذا المنتج مصمم وفق أعلى معايير الجودة لضمان أداء استثنائي. يتضمن ميزات فريدة تجعله الخيار الأول للمحترفين في المنطقة.
            </p>

            {/* Attributes Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
               {product?.attributes?.map((attr: any, i: number) => (
                 <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">{attr.key}</p>
                    <p className="font-bold text-slate-800">{attr.value}</p>
                 </div>
               ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
               <button className="flex-1 py-5 bg-primary text-white rounded-[24px] font-black text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-3">
                 إضافة للسلة
                 <ShoppingCart size={24} />
               </button>
               <button className="px-6 py-5 bg-white border border-slate-200 text-slate-400 rounded-[24px] hover:text-error hover:border-error/20 transition-all">
                 <Heart size={24} />
               </button>
               <button className="px-6 py-5 bg-white border border-slate-200 text-slate-400 rounded-[24px] hover:text-primary hover:border-primary/20 transition-all">
                 <Share2 size={24} />
               </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 p-6 border-t border-slate-100 flex items-center justify-between opacity-60">
               <div className="flex items-center gap-2 text-xs font-black">
                 <ShieldCheck size={18} className="text-success" />
                 ضمان لمدة عامين
               </div>
               <div className="flex items-center gap-2 text-xs font-black">
                 <Truck size={18} className="text-primary" />
                 توصيل سريع سيادي
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Truck({ size, className }: { size: number, className: string }) {
    return <Box size={size} className={className} /> // Temporary fix for missing lucide icon in this context if any
}
