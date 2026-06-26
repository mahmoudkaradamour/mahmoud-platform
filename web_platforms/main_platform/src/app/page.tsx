"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import { ArrowLeft, Zap, Sparkles, Star, TrendingUp, Package, ShieldCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";

/**
 * Enterprise Main Landing Page.
 * Implements full marketplace discovery flow:
 * Exclusive Offers -> Main Categories -> Best Sellers.
 */
export default function HomePage() {
  // Fetch real products from MongoDB Catalog for the Best Sellers section
  const { data: products, isLoading } = useQuery({
    queryKey: ["homepage-products"],
    queryFn: async () => {
      const response = await apiClient.get("/catalog/products");
      return response.data.data;
    },
  });

  return (
    <div className="relative pt-24 md:pt-32">
      <Navbar />

      {/* 1. Hero Section: Exclusive Offers & Immersion */}
      <section className="container mx-auto px-6 mb-16">
        <div className="relative h-[500px] md:h-[600px] rounded-[50px] overflow-hidden bg-slate-900 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-slate-900/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 opacity-60" />

          <div className="relative z-20 h-full flex flex-col justify-center px-12 md:px-20 max-w-3xl">
            <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.2em] mb-6">
              <Zap size={16} />
              عروض حصرية لفترة محدودة
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              اكتشف جيل <br /> <span className="text-primary italic">التجارة السيادية</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-medium">
              استمتع بتجربة تسوق غامرة مدعومة بالواقع المعزز، مع ضمان أمان بياناتك عبر أحدث تقنيات التشفير الجنائي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-primary text-white rounded-2xl font-black hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-3">
                تسوق العروض
                <ArrowLeft size={20} />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-black hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                تجربة الـ AR
                <Sparkles size={20} className="text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Categories: Quick Discovery */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-slate-900 italic">الفئات الرئيسية</h2>
          <button className="text-primary font-bold hover:underline">عرض الكل</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {["الإلكترونيات", "الأزياء", "المنزل", "الصحة", "العقارات", "السيارات"].map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-white rounded-[40px] border border-slate-100 flex items-center justify-center mb-4 group-hover:shadow-xl group-hover:border-primary/20 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Package size={40} className="text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-center font-black text-slate-800 group-hover:text-primary transition-colors">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Best Sellers: Real-time Data Section */}
      <section className="bg-slate-50 py-24 mb-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
              <TrendingUp size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900">المنتجات الأكثر مبيعاً</h2>
              <p className="text-slate-500 font-bold">بناءً على طلبات المستهلكين الحقيقية</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading ? (
              [1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-[40px] h-[400px] animate-pulse border border-slate-100" />
              ))
            ) : products?.map((product: any) => (
              <div key={product.id} className="bg-white rounded-[40px] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all group flex flex-col h-full">
                <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
                   {/* Badge */}
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1 text-[10px] font-black z-10 shadow-sm text-slate-900">
                     <Star size={10} className="fill-warning text-warning" />
                     4.9
                   </div>
                   {/* Product Placeholder Image */}
                   <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                      <Package size={80} className="group-hover:scale-110 transition-transform duration-700" />
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                   <p className="text-xs font-black text-slate-400 mb-2 uppercase tracking-tighter">{product.category_path}</p>
                   <h3 className="text-lg font-black text-slate-900 mb-4 line-clamp-2 h-14">{product.name.ar || product.name.en}</h3>

                   <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="text-2xl font-black text-slate-900">
                        {product.base_price} <span className="text-sm font-bold text-slate-400 uppercase">{product.currency}</span>
                      </div>
                      <button className="h-12 w-12 bg-primary text-white rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-primary/40 transition-all">
                        <ArrowLeft size={20} />
                      </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Banner */}
      <section className="container mx-auto px-6 mb-24">
         <div className="bg-primary/5 rounded-[50px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="relative z-10">
               <h2 className="text-4xl font-black text-slate-900 mb-6 italic">تجارة بلا حدود، <br /> بأمان سيادي مطلق.</h2>
               <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl shadow-sm text-success"><ShieldCheck size={20} /></div>
                    <span className="font-bold text-slate-600">بيانات مشفرة جنائياً</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl shadow-sm text-primary"><Star size={20} /></div>
                    <span className="font-bold text-slate-600">تجار موثقون 100%</span>
                  </div>
               </div>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
               <div className="text-5xl font-black text-primary">+1M</div>
               <p className="font-bold text-slate-500 uppercase tracking-widest text-sm">مستهلك يثق بنا</p>
            </div>
         </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="bg-white border-t border-slate-100 py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-right">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black text-primary mb-6 italic uppercase">MAHMOUD</h2>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
              منصة التجارة السيادية الأولى في المنطقة، نوفر لك الأدوات اللازمة للنمو والنجاح في العالم الرقمي.
            </p>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-6">المنصة</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li><Link href="/catalog" className="hover:text-primary transition-all">الكتالوج العام</Link></li>
              <li><Link href="/bidding" className="hover:text-primary transition-all">سوق المزايدات</Link></li>
              <li><Link href="/merchants" className="hover:text-primary transition-all">دليل التجار</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-6">قانوني</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li><Link href="/privacy" className="hover:text-primary transition-all">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-all">الشروط والأحكام</Link></li>
              <li><Link href="/compliance" className="hover:text-primary transition-all">التدقيق والامتثال</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
