"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { Wallet, ArrowUpCircle, ArrowDownCircle, FileText, CreditCard, Loader2, DollarSign } from "lucide-react";

/**
 * Wallet Page - Enterprise Financial Governance.
 * Displays balance, transaction ledger, and electronic invoices.
 */
export default function WalletPage() {
  // Fetch transaction history from the Financial module
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["financial-transactions"],
    queryFn: async () => {
      const response = await apiClient.get("/financial/transactions");
      return response.data.data;
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <Wallet className="text-primary" size={32} />
          المحفظة المالية
        </h2>
        <p className="text-slate-500 font-medium mt-1">أدِر أموالك، تتبع معاملاتك، واستخرج فواتيرك الرقمية</p>
      </div>

      {/* Balance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 text-white p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
          <p className="text-slate-400 font-bold mb-2">الرصيد المتاح</p>
          <h3 className="text-4xl font-black">$4,250.00</h3>
          <div className="mt-8 flex gap-3">
            <button className="flex-1 py-3 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all text-sm">
              شحن الرصيد
            </button>
            <button className="flex-1 py-3 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all text-sm">
              سحب
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="p-3 bg-success/10 rounded-2xl w-fit mb-6">
            <ArrowDownCircle className="text-success" size={24} />
          </div>
          <p className="text-slate-500 font-bold mb-1">إجمالي الوارد</p>
          <h3 className="text-3xl font-black text-slate-900">$12,840.00</h3>
        </div>

        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="p-3 bg-error/10 rounded-2xl w-fit mb-6">
            <ArrowUpCircle className="text-error" size={24} />
          </div>
          <p className="text-slate-500 font-bold mb-1">إجمالي الصادر</p>
          <h3 className="text-3xl font-black text-slate-900">$8,590.00</h3>
        </div>
      </div>

      {/* Transaction Ledger */}
      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <h3 className="text-xl font-black text-slate-900">سجل المعاملات الجنائي</h3>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline">
            <FileText size={18} />
            تصدير كـ PDF
          </button>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="animate-spin text-primary mb-4" size={40} />
            <p className="text-slate-500 font-bold">جاري مراجعة السجلات المالية...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">المعاملة</th>
                  <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">التاريخ</th>
                  <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">المرجع</th>
                  <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">المبلغ</th>
                  <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {transactions?.map((tx: any) => (
                  <tr key={tx.id} className="hover:bg-slate-50/30 transition-all">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl ${tx.amount > 0 ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
                          {tx.amount > 0 ? <ArrowDownCircle size={20} /> : <ArrowUpCircle size={20} />}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{tx.payment_method}</p>
                          <p className="text-xs text-slate-400">{tx.id.substring(0, 8)}...</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-slate-500 font-medium">
                      {new Date(tx.created_at).toLocaleDateString('ar-EG')}
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase">
                        {tx.reference_type}
                      </span>
                    </td>
                    <td className={`px-8 py-6 font-black ${tx.amount > 0 ? 'text-success' : 'text-slate-900'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount} {tx.currency}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${tx.status === 'COMPLETED' ? 'bg-success' : 'bg-warning'}`} />
                        <span className={`text-sm font-bold ${tx.status === 'COMPLETED' ? 'text-success' : 'text-warning'}`}>
                          {tx.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
