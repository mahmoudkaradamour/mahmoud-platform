"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { Plus, Search, Filter, Loader2, Package, MoreVertical } from "lucide-react";

/**
 * Product Management Page.
 * Connects to MongoDB Catalog Service via v1 API.
 */
export default function ProductsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await apiClient.get("/catalog/products");
      return response.data.data;
    },
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900">إدارة المنتجات</h2>
          <p className="text-slate-500 font-medium">إدارة وتحرير منتجات متجرك في الكتالوج السحابي</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
          <Plus size={20} />
          إضافة منتج جديد
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="ابحث عن منتج بالاسم أو الـ SKU..."
            className="w-full pr-12 pl-4 py-3 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:border-primary transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-all">
          <Filter size={20} />
          تصفية
        </button>
      </div>

      {/* Content State */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 space-y-4">
          <Loader2 className="animate-spin text-primary" size={40} />
          <p className="text-slate-500 font-bold">جاري جلب الكتالوج من MongoDB...</p>
        </div>
      ) : data?.length > 0 ? (
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          <table className="w-full text-right">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-sm font-black text-slate-500">المنتج</th>
                <th className="px-6 py-4 text-sm font-black text-slate-500">الفئة</th>
                <th className="px-6 py-4 text-sm font-black text-slate-500">السعر</th>
                <th className="px-6 py-4 text-sm font-black text-slate-500">الحالة</th>
                <th className="px-6 py-4 text-sm font-black text-slate-500"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((product: any) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-all group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        <Package size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{product.name.ar || product.name.en}</p>
                        <p className="text-xs text-slate-400 font-medium">{product.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">
                      {product.category_path}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-black text-slate-900">
                    {product.base_price} {product.currency}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-success rounded-full" />
                      <span className="text-sm font-bold text-success">{product.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-left">
                    <button className="p-2 hover:bg-slate-200 rounded-xl transition-all">
                      <MoreVertical size={18} className="text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border-2 border-dashed border-slate-200 p-16 text-center">
          <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
            <Package size={40} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">لا يوجد منتجات بعد</h3>
          <p className="text-slate-500 max-w-sm mx-auto mb-8 font-medium">
            ابدأ ببناء كتالوجك السحابي وإضافة منتجاتك للوصول إلى آلاف العملاء.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all inline-flex items-center gap-2">
            <Plus size={20} />
            أضف أول منتج الآن
          </button>
        </div>
      )}
    </div>
  );
}
