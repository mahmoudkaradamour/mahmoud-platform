"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { Store, Plus, ExternalLink, Settings, Users, Loader2, ShieldCheck } from "lucide-react";
import Link from "next/link";

/**
 * Merchant Multi-Store Management.
 * Implements the sovereign control for merchant brands.
 */
export default function MyStoresPage() {
  const { data: stores, isLoading } = useQuery({
    queryKey: ["my-stores"],
    queryFn: async () => {
      const response = await apiClient.get("/merchant/my-stores");
      return response.data.data;
    },
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900">متاجري السيادية</h2>
          <p className="text-slate-500 font-medium mt-1">إدارة الفروع والبراندات الخاصة بك من مكان واحد</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
          <Plus size={20} />
          إنشاء متجر جديد
        </button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <Loader2 className="animate-spin text-primary" size={40} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores?.map((store: any) => (
            <div key={store.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-16 w-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary border border-primary/20">
                    <Store size={32} />
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black ${
                    store.status === 'ACTIVE' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                  }`}>
                    {store.status}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">{store.name}</h3>
                <p className="text-slate-400 text-sm font-bold flex items-center gap-1 mb-6">
                  <ExternalLink size={14} />
                  mahmoud.com/{store.slug}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  <Link
                    href={`/dashboard/stores/${store.id}/staff`}
                    className="flex items-center justify-center gap-2 py-3 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all text-sm"
                  >
                    <Users size={18} />
                    الموظفين
                  </Link>
                  <Link
                    href={`/dashboard/stores/${store.id}/settings`}
                    className="flex items-center justify-center gap-2 py-3 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all text-sm"
                  >
                    <Settings size={18} />
                    الإعدادات
                  </Link>
                </div>
              </div>

              <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center gap-2">
                <ShieldCheck size={16} className="text-success" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">بيانات معزولة جنائياً عبر RLS</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
