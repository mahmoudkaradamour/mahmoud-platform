"use client";

import React from "react";
import { Users, UserPlus, ShieldCheck, Mail, Phone, MoreHorizontal, Filter, Search } from "lucide-react";

/**
 * Universal User Management - Admin Master Control.
 * Allows oversight and management of Consumers, Merchants, and Staff.
 */
export default function UserManagementPage() {
  const users = [
    { id: 1, name: "محمود كرام", email: "mahmoud@dev.com", type: "ADMIN", status: "ACTIVE", joinDate: "2026-01-01" },
    { id: 2, name: "سامر حسن", email: "samer@tech.com", type: "SELLER", status: "ACTIVE", joinDate: "2026-05-12" },
    { id: 3, name: "لينا علي", email: "lina@customer.net", type: "CUSTOMER", status: "ACTIVE", joinDate: "2026-06-20" },
    { id: 4, name: "خالد منصور", email: "khaled@fraud.com", type: "CUSTOMER", status: "SUSPENDED", joinDate: "2026-06-22" },
  ];

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'ADMIN': return 'bg-slate-900 text-white border-slate-900';
      case 'SELLER': return 'bg-primary/10 text-primary border-primary/20';
      case 'CUSTOMER': return 'bg-slate-100 text-slate-600 border-slate-200';
      default: return 'bg-slate-50 text-slate-400';
    }
  };

  return (
    <div className="p-8 space-y-10 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 italic">إدارة النفوس الرقمية</h1>
          <p className="text-slate-500 font-bold mt-1">التحكم المركزي في كافة أدوار مستخدمي المنصة</p>
        </div>
        <button className="px-8 py-3 bg-primary text-white rounded-2xl font-black flex items-center gap-2 hover:shadow-lg transition-all">
          <UserPlus size={20} />
          إضافة مستخدم نظام
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="ابحث بالاسم، البريد، أو المعرف الرقمي..."
            className="w-full pr-12 pl-4 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:border-primary transition-all font-bold shadow-sm"
          />
        </div>
        <button className="px-8 py-4 bg-white border border-slate-100 text-slate-600 rounded-2xl font-black hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
          <Filter size={20} />
          تصفية متقدمة
        </button>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-right">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase">المستخدم</th>
              <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase">نوع الحساب</th>
              <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase">تاريخ الانضمام</th>
              <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase">الحالة</th>
              <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/50 transition-all group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-400 font-bold">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-tighter ${getTypeStyle(user.type)}`}>
                    {user.type}
                  </span>
                </td>
                <td className="px-8 py-6 text-sm text-slate-500 font-bold">{user.joinDate}</td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${user.status === 'ACTIVE' ? 'bg-success' : 'bg-error'}`} />
                    <span className={`text-sm font-black ${user.status === 'ACTIVE' ? 'text-success' : 'text-error'}`}>{user.status}</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-left">
                  <button className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                    <MoreHorizontal size={20} className="text-slate-300" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
