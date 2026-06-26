"use client";

import React, { useState } from "react";
import { Settings, Palette, Globe, Save, Loader2, Shield } from "lucide-react";

/**
 * Store Settings - Sovereign Branding Engine.
 * Allows merchants to configure their identity within the ecosystem.
 */
export default function StoreSettingsPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({
    primaryColor: "#0A84FF",
    fontFamily: "Cairo",
    slug: "modern-tech",
  });

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <Settings className="text-primary" size={32} />
          إعدادات الهوية البصرية
        </h2>
        <p className="text-slate-500 font-medium mt-1">خصص مظهر متجرك ليناسب علامتك التجارية السيادية</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Configuration Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
            <div>
              <label className="block text-sm font-black mb-4 mr-1 flex items-center gap-2">
                <Palette size={18} className="text-slate-400" />
                اللون الرئيسي للبراند
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  value={config.primaryColor}
                  onChange={(e) => setConfig({...config, primaryColor: e.target.value})}
                  className="h-14 w-28 rounded-2xl cursor-pointer border-none bg-slate-50 p-1"
                />
                <span className="font-mono font-bold text-slate-400 uppercase">{config.primaryColor}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-black mb-4 mr-1 flex items-center gap-2">
                <Globe size={18} className="text-slate-400" />
                رابط المتجر المخصص (Slug)
              </label>
              <div className="flex items-center gap-2 pr-4 bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-primary transition-all">
                <span className="text-slate-400 font-bold text-sm select-none">mahmoud.com/</span>
                <input
                  type="text"
                  value={config.slug}
                  onChange={(e) => setConfig({...config, slug: e.target.value})}
                  className="bg-transparent border-none py-4 w-full focus:outline-none font-bold text-slate-900"
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              disabled={loading}
              className="px-10 py-4 bg-primary text-white rounded-[20px] font-black hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> حفظ التغييرات</>}
            </button>
          </div>
        </div>

        {/* Real-time Preview */}
        <div className="space-y-6">
          <h3 className="font-black text-slate-400 uppercase text-xs tracking-widest mr-4">معاينة مباشرة</h3>
          <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl overflow-hidden scale-95 origin-top">
             <div className="h-20" style={{ backgroundColor: config.primaryColor }} />
             <div className="p-8 -mt-10 text-center">
                <div className="h-20 w-20 bg-white rounded-3xl mx-auto shadow-xl flex items-center justify-center border border-slate-50">
                   <div className="h-12 w-12 rounded-full opacity-20" style={{ backgroundColor: config.primaryColor }} />
                </div>
                <h4 className="text-xl font-black mt-4 text-slate-900">اسم متجرك</h4>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-tighter">قطاع التجزئة السيادي</p>
                <div className="mt-8 pt-6 border-t border-slate-50">
                   <button className="w-full py-3 rounded-xl text-white font-black text-xs shadow-lg" style={{ backgroundColor: config.primaryColor }}>
                      زيارة المتجر
                   </button>
                </div>
             </div>
          </div>
          <div className="p-6 bg-primary/5 rounded-[30px] border border-primary/10 flex items-start gap-4">
             <Shield className="text-primary mt-1" size={20} />
             <p className="text-[10px] font-bold text-slate-500 leading-relaxed">
               يتم تطبيق هذه الإعدادات على كافة واجهات عرض منتجاتك (الويب، الموبايل، ونتائج البحث) لضمان اتساق براندك.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
