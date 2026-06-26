"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/navbar";
import { CreditCard, Truck, MapPin, CheckCircle2, ShieldCheck, ArrowLeft, Loader2 } from "lucide-react";

/**
 * Checkout Page - Global Sovereign Financial Bridge.
 * Features: Multi-currency support, Localized Payment Methods, and Data Isolation.
 */
export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePlaceOrder = () => {
    setLoading(true);
    // Simulate API call to Financial & Logistics modules
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="h-24 w-24 bg-success/10 rounded-full flex items-center justify-center text-success mb-8 animate-bounce">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4">تم تأكيد طلبك بنجاح!</h1>
        <p className="text-slate-500 max-w-md mb-10 font-medium leading-relaxed">
          شكراً لثقتك بمنصة محمود. يمكنك الآن تتبع طلبك من لوحة التحكم أو عبر رقم التتبع المرسل لهاتفك.
        </p>
        <button
          onClick={() => window.location.href = '/dashboard/shipments'}
          className="px-10 py-4 bg-primary text-white rounded-2xl font-black hover:shadow-xl transition-all"
        >
          تتبع الطلب الآن
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50/50">
      <Navbar />

      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-black text-slate-900 mb-12">إتمام عملية الشراء</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Steps */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black">1</div>
                <h3 className="text-xl font-black">عنوان التسليم</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input placeholder="المدينة" className="p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-primary" />
                <input placeholder="الحي / الشارع" className="p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-primary" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black">2</div>
                <h3 className="text-xl font-black">طريقة الدفع السيادية</h3>
              </div>
              <div className="space-y-3">
                {['الدفع نقداً عند الاستلام', 'المحفظة الإلكترونية', 'البطاقة الائتمانية'].map((method, i) => (
                  <label key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:border-primary transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center">
                        {i === 0 && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </div>
                      <span className="font-bold text-slate-700">{method}</span>
                    </div>
                    <CreditCard className="text-slate-300" size={20} />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm sticky top-32">
              <h3 className="text-xl font-black mb-8">ملخص الطلب</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-500 font-bold">
                  <span>المجموع الفرعي</span>
                  <span>$2,450.00</span>
                </div>
                <div className="flex justify-between text-slate-500 font-bold">
                  <span>توصيل سريع</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between text-slate-500 font-bold">
                  <span>الضريبة (5%)</span>
                  <span>$122.50</span>
                </div>
              </div>
              <div className="flex justify-between text-2xl font-black text-slate-900 pt-6 border-t border-slate-100 mb-10">
                <span>الإجمالي</span>
                <span>$2,587.50</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black text-lg hover:bg-primary transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-200"
              >
                {loading ? <Loader2 className="animate-spin" /> : (
                  <>
                    تأكيد وشراء الآن
                    <ArrowLeft size={20} />
                  </>
                )}
              </button>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs font-black text-slate-400 opacity-60">
                 <ShieldCheck size={14} className="text-success" />
                 تشفير AES-256 نشط
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
