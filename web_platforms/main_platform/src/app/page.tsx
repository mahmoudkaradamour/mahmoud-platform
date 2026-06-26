import React from "react";
import { ArrowRight, ShoppingBag, Store, ShieldCheck, Globe } from "lucide-react";

/**
 * Main Landing Page - Enterprise ZCL Design.
 * Features: High-performance SSR, RTL Support, Glassmorphism UI.
 */
export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl opacity-50" />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
          نظام التجارة السيادي <br /> المبتكر للشرق الأوسط
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          نمنح التجار السيادة الرقمية الكاملة ونوفر للمستهلكين تجربة شراء فائقة السرعة
          بذكاء اصطناعي مدمج وتقنيات الواقع المعزز.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
            ابدأ التسوق الآن
            <ShoppingBag size={20} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary border border-primary/20 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            انضم كتاجر
            <Store size={20} />
          </button>
        </div>
      </section>

      {/* Trust & Sovereignty Pillars */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-effect p-8 rounded-3xl">
            <ShieldCheck className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">أمن سيادي</h3>
            <p className="text-slate-600">
              تشفير بيانات جنائي وحماية كاملة للخصوصية وفق أعلى المعايير العالمية.
            </p>
          </div>
          <div className="glass-effect p-8 rounded-3xl border-sovereign-gold/20">
            <Globe className="text-secondary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">بنية تحتية محلية</h3>
            <p className="text-slate-600">
              سيرفرات فائقة السرعة موجهة خصيصاً للمنطقة لضمان أقل زمن استجابة.
            </p>
          </div>
          <div className="glass-effect p-8 rounded-3xl">
            <ArrowRight className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">تجارة غامرة</h3>
            <p className="text-slate-600">
              استكشف المنتجات عبر الواقع المعزز (AR) قبل الشراء لتقليل نسبة المرتجعات.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
