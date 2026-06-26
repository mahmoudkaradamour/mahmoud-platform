import React from "react";
import { TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react";

/**
 * Merchant Dashboard Main View.
 * Displays high-level KPIs and business metrics for the Seller.
 */
export default function DashboardPage() {
  const stats = [
    { label: "إجمالي المبيعات", value: "$12,450", icon: DollarSign, color: "text-success", bg: "bg-success/10" },
    { label: "الطلبات النشطة", value: "48", icon: ShoppingCart, color: "text-primary", bg: "bg-primary/10" },
    { label: "العملاء الجدد", value: "124", icon: Users, iconColor: "text-secondary", bg: "bg-secondary/10" },
    { label: "نسبة النمو", value: "+14%", icon: TrendingUp, color: "text-success", bg: "bg-success/10" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg}`}>
                  <Icon size={24} className={stat.color || stat.iconColor} />
                </div>
                <span className="text-xs font-bold text-slate-400">آخر 30 يوم</span>
              </div>
              <p className="text-slate-500 font-bold mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      {/* Placeholder for charts and recent activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[400px]">
          <h3 className="text-xl font-bold mb-6">مخطط النمو السنوي</h3>
          <div className="flex items-center justify-center h-[300px] border-2 border-dashed border-slate-100 rounded-2xl text-slate-300">
            [محاكاة المخطط البياني]
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold mb-6">أحدث الطلبات</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <ShoppingCart size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">طلب رقم #{id}284</p>
                    <p className="text-xs text-slate-500">منذ 10 دقائق</p>
                  </div>
                </div>
                <span className="text-sm font-black">$24.00</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
