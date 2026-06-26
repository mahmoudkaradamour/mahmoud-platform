"use client";

import React, { useState } from "react";
import { FileText, Save, Languages, Palette, Layout, CheckCircle2, Eye, ShieldCheck } from "lucide-react";

/**
 * Admin Billing & Invoice Configuration.
 * Allows global control over invoice design, language, and visible fields.
 */
export default function BillingConfigPage() {
  const [config, setConfig] = useState({
    invoiceLanguage: "ar",
    showTaxId: true,
    showMerchantLogo: true,
    primaryColor: "#0A84FF",
    footerText: "شكراً لتعاملك مع منصتنا السيادية",
    template: "modern"
  });

  return (
    <div className="p-8 space-y-10 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 italic">تخصيص الفواتير</h1>
          <p className="text-slate-500 font-bold mt-1">التحكم في شكل ولغة الفواتير الصادرة للزبائن</p>
        </div>
        <button className="px-8 py-3 bg-primary text-white rounded-2xl font-black flex items-center gap-2 hover:shadow-lg transition-all">
          <Save size={20} />
          حفظ الإعدادات العالمية
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Settings Panel */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-xl font-black flex items-center gap-2">
              <Layout className="text-primary" size={24} />
              هيكلية الفاتورة
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="text-sm font-black text-slate-700 block">لغة الفاتورة الافتراضية</label>
                <select
                  className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none font-bold"
                  value={config.invoiceLanguage}
                  onChange={(e) => setConfig({...config, invoiceLanguage: e.target.value})}
                >
                  <option value="ar">العربية (الافتراضية)</option>
                  <option value="en">English (International)</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-black text-slate-700 block">ثيم الفاتورة</label>
                <div className="flex gap-2">
                   {['modern', 'classic', 'minimal'].map(t => (
                     <button
                        key={t}
                        onClick={() => setConfig({...config, template: t})}
                        className={`flex-1 py-3 rounded-xl border-2 font-bold text-xs uppercase ${config.template === t ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-400'}`}
                     >
                        {t}
                     </button>
                   ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-50">
               <label className="text-sm font-black text-slate-700 block">العناصر المرئية</label>
               <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-sm font-bold">إظهار الرقم الضريبي</span>
                    <input type="checkbox" checked={config.showTaxId} onChange={e => setConfig({...config, showTaxId: e.target.checked})} className="w-5 h-5 accent-primary" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-sm font-bold">إظهار شعار التاجر</span>
                    <input type="checkbox" checked={config.showMerchantLogo} onChange={e => setConfig({...config, showMerchantLogo: e.target.checked})} className="w-5 h-5 accent-primary" />
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <label className="text-sm font-black text-slate-700 block">تذييل الفاتورة (Footer)</label>
               <textarea
                  className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none font-medium h-24"
                  value={config.footerText}
                  onChange={(e) => setConfig({...config, footerText: e.target.value})}
               />
            </div>
          </div>
        </div>

        {/* Live Invoice Preview */}
        <div className="space-y-6">
          <h3 className="font-black text-slate-400 uppercase text-xs tracking-widest mr-4 flex items-center gap-2">
            <Eye size={16} /> معاينة حية للفاتورة
          </h3>
          <div className="bg-white p-12 rounded-[50px] shadow-2xl border border-slate-100 min-h-[600px] flex flex-col scale-95 origin-top">
             <div className="flex justify-between items-start mb-16">
                <div>
                  <h2 className="text-3xl font-black italic text-slate-900">INVOICE</h2>
                  <p className="text-slate-400 font-bold mt-1">#INV-2026-001</p>
                </div>
                {config.showMerchantLogo && <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-300 font-black text-[10px]">LOGO</div>}
             </div>

             <div className="grid grid-cols-2 gap-12 mb-16">
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase mb-2">مفوتر إلى:</p>
                   <p className="font-bold text-slate-900">العميل: سامر حسن</p>
                   <p className="text-sm text-slate-500">دمشق، المزة، بناء 14</p>
                </div>
                <div className="text-left">
                   <p className="text-[10px] font-black text-slate-400 uppercase mb-2">تاريخ الإصدار:</p>
                   <p className="font-bold text-slate-900">{new Date().toLocaleDateString(config.invoiceLanguage === 'ar' ? 'ar-EG' : 'en-US')}</p>
                </div>
             </div>

             <div className="border-y-2 border-slate-50 py-8 mb-8 flex-1">
                <div className="flex justify-between font-black text-sm text-slate-400 mb-6 px-4 uppercase">
                   <span>البند</span>
                   <span>المبلغ</span>
                </div>
                <div className="space-y-6 px-4">
                   <div className="flex justify-between font-bold text-slate-800">
                      <span>هاتف iPhone 15 Pro Max</span>
                      <span>$1,200.00</span>
                   </div>
                   <div className="flex justify-between font-bold text-slate-800">
                      <span>توصيل سريع</span>
                      <span>$15.00</span>
                   </div>
                </div>
             </div>

             <div className="flex justify-end mb-12 px-4">
                <div className="w-64 space-y-3">
                   <div className="flex justify-between text-slate-500 font-bold text-sm">
                      <span>المجموع الفرعي</span>
                      <span>$1,215.00</span>
                   </div>
                   <div className="flex justify-between text-2xl font-black text-slate-900 pt-3 border-t border-slate-100">
                      <span>الإجمالي</span>
                      <span style={{ color: config.primaryColor }}>$1,215.00</span>
                   </div>
                </div>
             </div>

             <div className="mt-auto pt-8 border-t border-slate-50 text-center">
                <p className="text-sm font-bold text-slate-400">{config.footerText}</p>
                <div className="mt-4 flex items-center justify-center gap-2 opacity-30">
                  <ShieldCheck size={14} />
                  <span className="text-[8px] font-black uppercase">Sovereign Financial Ledger Verified</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
