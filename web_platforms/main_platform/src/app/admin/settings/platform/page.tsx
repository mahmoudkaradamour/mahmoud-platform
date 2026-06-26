"use client";

import React, { useState } from "react";
import { Globe, Smartphone, Languages, Save, Loader2, ShieldCheck, MapPin, Monitor, Trash2, Plus } from "lucide-react";

/**
 * Platform Master Settings.
 * Central command for Global links, active languages, and regional rules.
 */
export default function PlatformSettingsPage() {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState({
    android: "https://play.google.com/store/apps/mahmoud",
    ios: "https://apps.apple.com/app/mahmoud",
    web: "https://mahmoud-enterprise.com"
  });

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="p-10 space-y-12 bg-[#F8FAFC] min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic">Global Orchestration</h1>
          <p className="text-slate-500 font-bold mt-1">Institutional control over distribution channels and localization logic.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="btn-primary"
        >
          {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> Deploy Configuration</>}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Mobile Apps & Global Links */}
        <div className="bg-white p-10 rounded-[50px] border border-slate-100 shadow-sm space-y-8">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-12 w-12 bg-blue-50 text-primary rounded-2xl flex items-center justify-center">
                <Smartphone size={24} />
             </div>
             <h3 className="text-xl font-black">Distribution Links</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Android Play Store</label>
              <input
                value={links.android}
                onChange={(e) => setLinks({...links, android: e.target.value})}
                className="input-field !bg-slate-50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">iOS App Store</label>
              <input
                value={links.ios}
                onChange={(e) => setLinks({...links, ios: e.target.value})}
                className="input-field !bg-slate-50"
              />
            </div>
          </div>
        </div>

        {/* Internationalization (i18n) */}
        <div className="bg-white p-10 rounded-[50px] border border-slate-100 shadow-sm space-y-8">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-12 w-12 bg-blue-50 text-primary rounded-2xl flex items-center justify-center">
                <Languages size={24} />
             </div>
             <h3 className="text-xl font-black">System Localization</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { name: 'العربية', code: 'AR', active: true },
               { name: 'English', code: 'EN', active: true },
               { name: 'Français', code: 'FR', active: false },
               { name: 'Türkçe', code: 'TR', active: false },
             ].map((lang, i) => (
               <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-[30px] border border-slate-100 hover:border-primary/20 transition-all cursor-pointer group">
                  <div>
                     <span className="font-black text-slate-800 block">{lang.name}</span>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{lang.code} ISO Protocol</span>
                  </div>
                  <input type="checkbox" defaultChecked={lang.active} className="w-6 h-6 accent-primary" />
               </div>
             ))}
          </div>
          <button className="w-full py-4 border-2 border-dashed border-slate-200 text-slate-400 rounded-3xl font-black text-sm hover:border-primary/20 hover:text-primary transition-all flex items-center justify-center gap-2">
             <Plus size={18} /> Append Regional Pack
          </button>
        </div>

        {/* Global Regional Filtering */}
        <div className="xl:col-span-2 bg-slate-900 text-white p-12 rounded-[60px] shadow-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />

           <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-16 items-center">
              <div className="max-w-2xl">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-primary rounded-full text-xs font-black tracking-widest uppercase mb-8 border border-white/10">
                    <MapPin size={14} className="fill-primary" />
                    Distributed Geo-Governance
                 </div>
                 <h3 className="text-4xl font-black mb-8 leading-tight italic">Regional & Demographic <br /> Guardrails.</h3>
                 <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                    Define global accessibility rules. Enforce age-restricted browsing (+18) or regional blacklists based on local regulatory compliance frameworks.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-primary text-white rounded-2xl font-black hover:shadow-xl hover:shadow-primary/20 transition-all">Enable Global Guard</button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-2xl font-black hover:bg-white/20 transition-all">Configure Demographics</button>
                 </div>
              </div>

              <div className="w-full lg:w-[450px] bg-white/5 p-10 rounded-[50px] border border-white/10 backdrop-blur-xl">
                 <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Active Directives</span>
                    <div className="h-2 w-2 bg-success rounded-full animate-ping" />
                 </div>
                 <div className="space-y-6">
                    <div className="p-6 bg-white/5 rounded-3xl flex items-center justify-between border border-white/5 group hover:bg-white/10 transition-all">
                       <div>
                          <span className="text-sm font-black block">Damascus Node</span>
                          <span className="text-[10px] font-black text-slate-500 uppercase">Operational</span>
                       </div>
                       <div className="px-3 py-1 bg-success/20 text-success rounded-lg text-[10px] font-black italic">SECURED</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-3xl flex items-center justify-between border border-white/5 group hover:bg-white/10 transition-all">
                       <div>
                          <span className="text-sm font-black block">Age Verification (+18)</span>
                          <span className="text-[10px] font-black text-slate-500 uppercase">Mandatory Global</span>
                       </div>
                       <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-[10px] font-black italic">ACTIVE</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
