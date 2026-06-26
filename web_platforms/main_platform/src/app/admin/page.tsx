"use client";

import React from "react";
import { LayoutDashboard, Users, Store, ShieldAlert, BarChart3, Settings, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

/**
 * Master Admin Dashboard - Enterprise Command Center.
 * Designed for institutional scale and high-visibility analytics.
 */
export default function AdminDashboard() {
  const stats = [
    { label: "Active Nodes", value: "48,290", icon: Users, color: "text-primary", trend: "+12%" },
    { label: "Enterprise Stores", value: "1,284", icon: Store, color: "text-emerald-500", trend: "+5%" },
    { label: "Global GMV", value: "$1.2M", icon: BarChart3, color: "text-blue-500", trend: "+24%" },
    { label: "Security Anomalies", value: "0", icon: ShieldAlert, color: "text-rose-500", trend: "0%" },
  ];

  const menu = [
    { name: "Merchant Verification", href: "/admin/merchants", icon: Store, desc: "Manage institutional partners." },
    { name: "User Governance", href: "/admin/users", icon: Users, desc: "Account lifecycle and RBAC." },
    { name: "Forensic Audits", href: "/admin/audits", icon: ShieldAlert, desc: "Immutable system logs." },
    { name: "Market Intelligence", href: "/admin/analytics", icon: BarChart3, desc: "BI and growth trends." },
    { name: "Global Config", href: "/admin/settings/platform", icon: Settings, desc: "OTA Master controls." },
  ];

  return (
    <div className="p-10 space-y-12 bg-[#F8FAFC] min-h-screen antialiased">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="h-16 w-16 bg-white border border-slate-100 rounded-3xl flex items-center justify-center shadow-xl shadow-slate-200/50">
            <LayoutDashboard size={32} className="text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Command Center</h1>
            <p className="text-slate-500 font-bold mt-1">Institutional Platform Oversight & System Health.</p>
          </div>
        </div>

        <div className="flex gap-4">
           <div className="px-6 py-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-3">
              <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Network Operational</span>
           </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm group hover:shadow-2xl transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
               <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-primary/5 transition-colors">
                  <stat.icon className={stat.color} size={24} />
               </div>
               <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">{stat.trend}</span>
            </div>
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Control Surface */}
      <div>
        <h2 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest flex items-center gap-3">
           <Zap size={20} className="text-primary fill-primary" />
           Management Protocols
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="p-10 bg-white rounded-[50px] border border-slate-100 shadow-sm hover:shadow-3xl hover:border-primary/20 transition-all group flex flex-col items-start gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-x-10 -translate-y-10 group-hover:bg-primary/5 transition-colors" />
              <div className="h-16 w-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                <item.icon size={28} />
              </div>
              <div className="relative z-10">
                 <span className="text-2xl font-black text-slate-900 block mb-2">{item.name}</span>
                 <p className="text-slate-400 font-bold text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
