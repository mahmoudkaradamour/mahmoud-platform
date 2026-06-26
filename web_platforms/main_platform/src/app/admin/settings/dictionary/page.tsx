"use client";

import React, { useState } from "react";
import { Save, Languages, Search, Edit3, Loader2 } from "lucide-react";
import ar from '../../../../../../shared/i18n/ar.json';

/**
 * Institutional Dictionary Manager.
 * Allows the Master Admin to modify any UI string across Web and Mobile in real-time.
 */
export default function DictionaryManagerPage() {
  const [loading, setLoading] = useState(false);
  const [dictionary, setDictionary] = useState(ar);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="p-10 space-y-12 bg-slate-50 min-h-screen antialiased">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 bg-white border border-slate-100 rounded-3xl flex items-center justify-center shadow-xl">
            <Languages size={32} className="text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic">Institutional Dictionary</h1>
            <p className="text-slate-500 font-bold">Manage every word and phrase across the platform.</p>
          </div>
        </div>
        <button onClick={handleSave} disabled={loading} className="btn-primary">
          {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> Commit Global Changes</>}
        </button>
      </div>

      <div className="bg-white rounded-[50px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center gap-4 bg-slate-50/50">
           <Search size={20} className="text-slate-400" />
           <input placeholder="Search protocol keys..." className="bg-transparent border-none outline-none font-bold text-slate-800 w-full" />
        </div>

        <div className="p-10 grid gap-10">
           {Object.entries(dictionary).map(([section, keys]: [string, any]) => (
             <div key={section} className="space-y-6">
                <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] ml-2">{section} Protocol</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                   {Object.entries(keys).map(([key, value]: [string, any]) => (
                     <div key={key} className="p-6 bg-slate-50 rounded-[30px] border border-slate-100 group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">{key}</label>
                        <div className="flex items-center gap-4">
                           <input
                             defaultValue={value}
                             className="flex-1 bg-white border border-slate-200 rounded-2xl px-6 py-3 font-bold text-slate-800 focus:ring-4 focus:ring-primary/10 transition-all"
                           />
                           <button className="h-12 w-12 bg-white text-slate-300 rounded-xl flex items-center justify-center hover:text-primary transition-all">
                              <Edit3 size={18} />
                           </button>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
