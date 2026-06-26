"use client";

import React, { useState } from "react";
import { Plus, Trash2, Save, FileText, Layout, CheckCircle2 } from "lucide-react";

/**
 * Dynamic Onboarding Form Builder.
 * Allows Master Admin to define what merchants must provide during registration.
 */
export default function OnboardingBuilderPage() {
  const [fields, setFields] = useState([
    { id: 1, label: "الرقم الضريبي", type: "text", required: true },
    { id: 2, label: "صورة السجل التجاري", type: "file", required: true },
  ]);

  const addField = () => {
    setFields([...fields, { id: Date.now(), label: "حقل جديد", type: "text", required: false }]);
  };

  return (
    <div className="p-8 space-y-10 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 italic">بناء نماذج التسجيل</h1>
          <p className="text-slate-500 font-bold mt-1">تخصيص البيانات المطلوبة من التجار الجدد</p>
        </div>
        <button className="px-8 py-3 bg-primary text-white rounded-2xl font-black flex items-center gap-2 hover:shadow-lg transition-all">
          <Save size={20} />
          حفظ النموذج العالمي
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Editor */}
        <div className="bg-white p-10 rounded-[50px] border border-slate-100 shadow-sm space-y-8">
           <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-black">حقول النموذج الحالية</h3>
              <button onClick={addField} className="p-3 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all">
                 <Plus size={20} />
              </button>
           </div>

           <div className="space-y-4">
              {fields.map((field, i) => (
                <div key={field.id} className="p-6 bg-slate-50 rounded-[30px] border border-slate-100 flex items-center gap-6 group">
                   <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center font-black text-primary border border-slate-100">
                      {i + 1}
                   </div>
                   <div className="flex-1">
                      <input
                        value={field.label}
                        onChange={() => {}}
                        className="w-full bg-transparent border-none font-bold text-slate-800 outline-none"
                      />
                      <p className="text-[10px] text-slate-400 font-black uppercase mt-1">نوع الحقل: {field.type}</p>
                   </div>
                   <button className="p-3 text-slate-300 hover:text-error transition-all opacity-0 group-hover:opacity-100">
                      <Trash2 size={18} />
                   </button>
                </div>
              ))}
           </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-6 scale-95 origin-top">
           <h3 className="font-black text-slate-400 uppercase text-xs tracking-widest mr-4">معاينة واجهة التاجر</h3>
           <div className="bg-white p-12 rounded-[50px] shadow-2xl border border-slate-100">
              <h2 className="text-2xl font-black mb-8">تسجيل تاجر جديد</h2>
              <div className="space-y-6">
                 {fields.map(field => (
                   <div key={field.id} className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase">{field.label}</label>
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-300 italic text-sm">
                         {field.type === 'file' ? 'انقر لرفع الملف...' : 'أدخل البيانات هنا...'}
                      </div>
                   </div>
                 ))}
                 <button className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black mt-4">إرسال الطلب للمراجعة</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
