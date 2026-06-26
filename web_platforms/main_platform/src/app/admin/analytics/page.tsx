"use client";

import React from "react";
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight, Globe, Zap, Target } from "lucide-react";

/**
 * Global Analytics Hub - Platform Business Intelligence.
 * Provides real-time insights into GMV, user acquisition, and merchant performance.
 */
export default function AnalyticsPage() {
  const kpis = [
    { label: "إجمالي حجم التداول (GMV)", value: "$1.2M", change: "+12.5%", trend: "up", icon: DollarSign, color: "text-success" },
    { label: "المستخدمين النشطين", value: "45.8K", change: "+8.2%", trend: "up", icon: Users, color: "text-primary" },
    { label: "معدل تحويل المزايدات", value: "68%", change: "-2.1%", trend: "down", icon: Target, color: "text-warning" },
    { label: "سرعة تنفيذ الطلبات", value: "1.4s", change: "+0.5s", trend: "up", icon: Zap, color: "text-secondary" },
  ];

  return (
    <div className="p-8 space-y-10 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 italic">ذكاء الأعمال (BI)</h1>
          <p className="text-slate-500 font-bold mt-1">الرؤية الاستراتيجية لأداء المنصة السيادية</p>
        </div>
        <div className="flex gap-4">
           <select className="bg-white px-6 py-3 rounded-2xl border border-slate-200 font-bold text-sm outline-none">
              <option>آخر 30 يوم</option>
              <option>آخر 90 يوم</option>
              <option>هذا العام</option>
           </select>
           <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl font-black text-sm hover:shadow-xl transition-all">تصدير التقرير</button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <kpi.icon size={24} className={kpi.color} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-black ${kpi.trend === 'up' ? 'text-success' : 'text-error'}`}>
                {kpi.change}
                {kpi.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <p className="text-slate-500 font-bold text-sm mb-1">{kpi.label}</p>
            <h3 className="text-3xl font-black text-slate-900">{kpi.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-10 rounded-[50px] border border-slate-100 shadow-sm">
           <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black flex items-center gap-3">
                <TrendingUp className="text-primary" />
                تحليل النمو المالي
              </h3>
              <div className="flex gap-4 text-xs font-bold">
                 <span className="flex items-center gap-2 text-slate-400"><div className="w-3 h-3 bg-primary rounded-full" /> المبيعات</span>
                 <span className="flex items-center gap-2 text-slate-400"><div className="w-3 h-3 bg-secondary rounded-full" /> العمولات</span>
              </div>
           </div>
           <div className="h-[350px] flex items-end gap-4 px-4">
              {[60, 80, 45, 90, 70, 100, 55, 85, 40, 75, 95, 110].map((h, i) => (
                <div key={i} className="flex-1 space-y-2 group cursor-help">
                   <div className="relative w-full bg-slate-50 rounded-t-xl overflow-hidden h-full">
                      <div
                        className="absolute bottom-0 w-full bg-primary/20 group-hover:bg-primary/40 transition-all rounded-t-xl"
                        style={{ height: `${h}%` }}
                      />
                      <div
                        className="absolute bottom-0 w-full bg-primary group-hover:shadow-lg transition-all rounded-t-xl"
                        style={{ height: `${h * 0.6}%` }}
                      />
                   </div>
                   <p className="text-[10px] text-center font-black text-slate-300">{i + 1}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-slate-900 text-white p-10 rounded-[50px] shadow-2xl relative overflow-hidden flex flex-col">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <h3 className="text-xl font-black mb-8 relative z-10 flex items-center gap-3">
             <Globe className="text-primary" />
             التوزع الجغرافي
           </h3>
           <div className="space-y-6 flex-1 relative z-10">
              {[
                { city: "دمشق", percentage: 45, color: "bg-primary" },
                { city: "حلب", percentage: 25, color: "bg-secondary" },
                { city: "حمص", percentage: 15, color: "bg-success" },
                { city: "اللاذقية", percentage: 10, color: "bg-warning" },
                { city: "أخرى", percentage: 5, color: "bg-slate-600" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex justify-between text-xs font-black uppercase">
                      <span>{item.city}</span>
                      <span className="text-slate-400">{item.percentage}%</span>
                   </div>
                   <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }} />
                   </div>
                </div>
              ))}
           </div>
           <div className="mt-10 p-6 bg-white/5 rounded-3xl border border-white/10 relative z-10">
              <p className="text-xs font-bold text-slate-400 leading-relaxed italic">
                "تتركز القوة الشرائية حالياً في العاصمة بنسبة نمو مستدامة تصل لـ 14% شهرياً."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
