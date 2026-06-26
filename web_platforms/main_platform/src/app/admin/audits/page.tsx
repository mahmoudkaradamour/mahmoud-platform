"use client";

import React from "react";
import { ShieldAlert, Fingerprint, Activity, Lock, Database, Search, Filter, AlertCircle, CheckCircle2 } from "lucide-react";

/**
 * Forensic Audit Page - Sovereign Transparency.
 * Visualizes the immutable logs from PostgreSQL and security claims.
 */
export default function ForensicAuditsPage() {
  const auditLogs = [
    { id: "LOG-9821", event: "LOGIN_SUCCESS", user: "mahmoud@dev.com", ip: "192.168.1.1", status: "SECURE", time: "2026-06-26 10:15:22" },
    { id: "LOG-9822", event: "SENSITIVE_DATA_ACCESS", user: "admin@platform.com", ip: "10.0.0.45", status: "MONITORED", time: "2026-06-26 11:02:10" },
    { id: "LOG-9823", event: "FAILED_LOGIN_ATTEMPT", user: "unknown", ip: "45.12.89.2", status: "BLOCKED", time: "2026-06-26 11:14:05" },
    { id: "LOG-9824", event: "TRANSACTION_SIGNED", user: "seller_01", ip: "172.16.0.21", status: "VERIFIED", time: "2026-06-26 11:20:55" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SECURE': return 'text-success bg-success/10 border-success/20';
      case 'MONITORED': return 'text-primary bg-primary/10 border-primary/20';
      case 'BLOCKED': return 'text-error bg-error/10 border-error/20';
      default: return 'text-slate-400 bg-slate-100 border-slate-200';
    }
  };

  return (
    <div className="p-8 space-y-10 bg-slate-900 min-h-screen text-white">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-white/5 pb-10">
        <div>
          <h1 className="text-4xl font-black italic flex items-center gap-4">
            <ShieldAlert size={40} className="text-primary" />
            التدقيق الجنائي
          </h1>
          <p className="text-slate-400 font-bold mt-2 uppercase tracking-[0.2em] text-xs">Immutable Forensic Ledger v1.0</p>
        </div>
        <div className="flex gap-4">
           <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Fingerprint className="text-primary" size={20} />
              <span className="font-black text-slate-300 text-xs uppercase">تشفير البصمة مفعل</span>
           </div>
        </div>
      </div>

      {/* Security Infrastructure Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "محاولات الاختراق المحجوبة", value: "1,204", icon: Lock, color: "text-error" },
          { label: "سلامة قاعدة البيانات", value: "100%", icon: Database, color: "text-success" },
          { label: "النشاط اللحظي (Queries/sec)", value: "840", icon: Activity, color: "text-primary" },
          { label: "تحقق الهوية (MFA)", value: "98.2%", icon: CheckCircle2, color: "text-success" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white/5 p-6 rounded-[30px] border border-white/10">
              <Icon size={24} className={`${stat.color} mb-4`} />
              <p className="text-slate-500 font-bold text-xs mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      {/* Audit Log Table */}
      <div className="bg-white/5 rounded-[40px] border border-white/10 overflow-hidden">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-xl font-black">سجل الفعاليات الأمنية</h3>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                placeholder="بحث في البصمات..."
                className="pr-12 pl-4 py-3 bg-black/20 border border-white/10 rounded-xl text-sm focus:ring-2 focus:ring-primary/40 outline-none w-64"
              />
            </div>
            <button className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              <Filter size={20} className="text-slate-400" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-white/[0.02]">
              <tr>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">المعرف</th>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">نوع الحدث</th>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">المستخدم</th>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">IP Address</th>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">الحالة الجنائية</th>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">التوقيت</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.02] transition-all group">
                  <td className="px-8 py-6 font-mono text-xs text-slate-400">{log.id}</td>
                  <td className="px-8 py-6">
                    <span className="font-black text-sm">{log.event}</span>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold text-slate-300">{log.user}</td>
                  <td className="px-8 py-6 font-mono text-xs text-slate-500">{log.ip}</td>
                  <td className="px-8 py-6">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] font-black ${getStatusColor(log.status)}`}>
                      {log.status === 'BLOCKED' && <AlertCircle size={12} />}
                      {log.status}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-xs text-slate-500 font-bold">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
