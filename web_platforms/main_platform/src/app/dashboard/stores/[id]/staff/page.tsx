"use client";

import React from "react";
import { Users, Shield, Plus, MoreVertical, Mail } from "lucide-react";

/**
 * Store Staff Management (RBAC).
 * Implements granular merchant-level permissions as documented.
 */
export default function StaffManagementPage({ params }: { params: { id: string } }) {
  // Static mock for enterprise structure demonstration
  const staff = [
    { id: 1, name: "أحمد محمد", role: "مدير متجر", email: "ahmad@store.com", permissions: ["ALL"] },
    { id: 2, name: "سارة علي", role: "محاسب", email: "sara@store.com", permissions: ["FINANCE_VIEW", "INVOICE_GENERATE"] },
    { id: 3, name: "خالد حسن", role: "مسؤول كتالوج", email: "khaled@store.com", permissions: ["CATALOG_EDIT", "MEDIA_UPLOAD"] },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <Users className="text-primary" size={32} />
            إدارة طاقم العمل
          </h2>
          <p className="text-slate-500 font-medium mt-1">تحديد الصلاحيات الحبيبية (Granular RBAC) لموظفي المتجر</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
          <Plus size={20} />
          إضافة موظف
        </button>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-right">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase">الموظف</th>
              <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase">الدور الوظيفي</th>
              <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase">الصلاحيات</th>
              <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {staff.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50/30 transition-all">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-black">
                      {member.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{member.name}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <Mail size={12} />
                        {member.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-sm font-bold text-slate-600">{member.role}</span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex flex-wrap gap-2">
                    {member.permissions.map((p, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black tracking-tighter">
                        {p}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-8 py-6 text-left">
                  <button className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                    <MoreVertical size={18} className="text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-8 bg-warning/5 border border-warning/20 rounded-[40px] flex items-start gap-4">
        <Shield className="text-warning mt-1" size={24} />
        <div>
          <h4 className="font-black text-warning mb-1">تنبيه أمني سيادي</h4>
          <p className="text-sm text-warning/80 leading-relaxed font-medium">
            جميع تغييرات الصلاحيات يتم تسجيلها في "سجل التدقيق الجنائي". يرجى التأكد من منح الحد الأدنى من الصلاحيات اللازمة (Principle of Least Privilege) لضمان سلامة بيانات المتجر.
          </p>
        </div>
      </div>
    </div>
  );
}
