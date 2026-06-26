"use client";

import React, { useState } from "react";
import { Globe, Smartphone, Languages, Save, Loader2, ShieldCheck, MapPin, Monitor } from "lucide-react";

/**
 * Platform Master Settings.
 * Central command for Super Admins to control Global links, active languages, and regional rules.
 */
export default function PlatformSettingsPage() {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState({
    android: "https://play.google.com/store/apps/mahmoud",
    ios: "https://apps.apple.com/app/mahmoud",
    web: "https://mahmoud-platform.com"
  });

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="p-8 space-y-10 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 italic">التحكم العالمي</h1>
          <p className="text-slate-500 font-bold mt-1">إدارة روابط التطبيقات، اللغات، والقواعد الجغرافية</p>
        </div>
        <button
          onClick={handleSave}
          className="px-8 py-3 bg-primary text-white rounded-2xl font-black flex items-center gap-2 hover:shadow-lg transition-all"
        >
          <Save size={20} />
          حفظ التغييرات
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Mobile Apps & Global Links */}
        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
          <h3 className="text-xl font-black flex items-center gap-3">
            <Smartphone className="text-primary" />
            روابط تطبيقات الجوال
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-slate-400 mb-2 uppercase">Android Play Store</label>
              <input
                value={links.android}
                onChange={(e) => setLinks({...links, android: e.target.value})}
                className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 mb-2 uppercase">iOS App Store</label>
              <input
                value={links.ios}
                onChange={(e) => setLinks({...links, ios: e.target.value})}
                className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>

        {/* Internationalization (i18n) */}
        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
          <h3 className="text-xl font-black flex items-center gap-3">
            <Languages className="text-primary" />
            اللغات المتاحة (i18n)
          </h3>
          <div className="grid grid-cols-2 gap-4">
             {['العربية', 'English', 'Français', 'Türkçe', 'Русский'].map((lang, i) => (
               <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="font-bold text-slate-700">{lang}</span>
                  <input type="checkbox" defaultChecked={i < 2} className="w-5 h-5 accent-primary" />
               </div>
             ))}
          </div>
        </div>

        {/* Sovereign Regional Targeting */}
        <div className="xl:col-span-2 bg-slate-900 text-white p-10 rounded-[50px] shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
              <div className="max-w-xl">
                 <h3 className="text-2xl font-black mb-4 flex items-center gap-3 italic text-primary">
                    <MapPin />
                    حاكمية التوزيع الجغرافي
                 </h3>
                 <p className="text-slate-400 font-medium leading-relaxed mb-8">
                    تسمح هذه الواجهة بتفعيل "الفلترة السيادية". يمكنك منع عرض متاجر أو منتجات معينة لمناطق جغرافية محددة أو لفئات عمرية معينة بناءً على القوانين المحلية أو استراتيجية التوسع.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-white/10 rounded-xl font-black text-xs hover:bg-primary transition-all">تفعيل فلترة دمشق</button>
                    <button className="px-6 py-3 bg-white/10 rounded-xl font-black text-xs hover:bg-primary transition-all">تحديد السن القانوني (+18)</button>
                 </div>
              </div>
              <div className="flex-1 bg-white/5 p-8 rounded-[40px] border border-white/10 backdrop-blur-md">
                 <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">حالة القواعد النشطة</span>
                    <ShieldCheck className="text-success" />
                 </div>
                 <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-between border border-white/5">
                       <span className="text-sm font-bold">المنتجات المقيدة جغرافياً</span>
                       <span className="px-3 py-1 bg-success/20 text-success rounded-lg text-[10px] font-black italic">ACTIVE</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-between border border-white/5">
                       <span className="text-sm font-bold">المتاجر تحت المراجعة</span>
                       <span className="px-3 py-1 bg-warning/20 text-warning rounded-lg text-[10px] font-black italic">PENDING</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
