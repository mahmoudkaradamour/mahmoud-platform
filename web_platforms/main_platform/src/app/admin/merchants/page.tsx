"use client";

import React from "react";
import { CheckCircle, XCircle, Clock, Shield, Search, MoreVertical, ExternalLink } from "lucide-react";

/**
 * Super Admin - Merchant Verification Hub.
 * Responsible for approving new stores and ensuring regulatory compliance.
 */
export default function MerchantApprovalsPage() {
  const pendingMerchants = [
    { id: 1, name: "متجر التقنية الحديثة", owner: "سامر حسن", date: "2026-06-25", type: "RETAIL" },
    { id: 2, name: "مجموعة الشام التجارية", owner: "لينا علي", date: "2026-06-24", type: "WHOLESALE" },
  ];

  return (
    <div className="p-8 space-y-10 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 italic uppercase tracking-tighter">حاكمية المنصة</h1>
          <p className="text-slate-500 font-bold mt-1">إدارة وتوثيق شركاء النجاح (التجار)</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 flex items-center gap-3">
              <Shield className="text-primary" size={20} />
              <span className="font-black text-slate-700 uppercase text-xs">وضع السيادة مفعل</span>
           </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <Clock className="text-warning mb-4" size={32} />
          <h3 className="text-3xl font-black text-slate-900">14</h3>
          <p className="text-slate-500 font-bold text-sm">بانتظار المراجعة</p>
        </div>
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm text-success">
          <CheckCircle className="mb-4" size={32} />
          <h3 className="text-3xl font-black text-slate-900">1,284</h3>
          <p className="text-slate-500 font-bold text-sm">تاجر موثق</p>
        </div>
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <XCircle className="text-error mb-4" size={32} />
          <h3 className="text-3xl font-black text-slate-900">22</h3>
          <p className="text-slate-500 font-bold text-sm">طلبات مرفوضة</p>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <h3 className="text-xl font-black">طلبات الانضمام الجديدة</h3>
          <div className="relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input placeholder="بحث في السجلات..." className="pr-12 pl-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 w-64" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-5 text-xs font-black text-slate-400">اسم المتجر</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400">المالك</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400">النوع</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400">تاريخ الطلب</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400">الإجراء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {pendingMerchants.map((merchant) => (
                <tr key={merchant.id} className="hover:bg-slate-50/30 transition-all group">
                  <td className="px-8 py-6">
                    <p className="font-black text-slate-900">{merchant.name}</p>
                    <p className="text-[10px] text-primary font-bold uppercase flex items-center gap-1">
                      <ExternalLink size={10} /> عرض المستندات الثبوتية
                    </p>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold text-slate-600">{merchant.owner}</td>
                  <td className="px-8 py-6 italic text-xs font-black">{merchant.type}</td>
                  <td className="px-8 py-6 text-sm text-slate-400 font-bold">{merchant.date}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 bg-success text-white rounded-xl text-xs font-black hover:shadow-lg transition-all">موافقة</button>
                      <button className="px-4 py-2 bg-white text-error border border-error/20 rounded-xl text-xs font-black hover:bg-error/5 transition-all">رفض</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
