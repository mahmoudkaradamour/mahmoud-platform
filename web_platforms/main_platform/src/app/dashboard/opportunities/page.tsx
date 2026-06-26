"use client";

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { Gavel, DollarSign, Clock, CheckCircle2, Loader2, AlertCircle, Send } from "lucide-react";
import { useAuthStore } from "@/lib/store/auth-store";

/**
 * Opportunities Page (Reverse Bidding).
 * Allows merchants to discover and bid on consumer requests.
 */
export default function OpportunitiesPage() {
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [bidPrice, setBidPrice] = useState("");
  const [bidSpecs, setBidSpecs] = useState("");

  // Fetch open requests from the Bidding module
  const { data: requests, isLoading } = useQuery({
    queryKey: ["bidding-requests"],
    queryFn: async () => {
      const response = await apiClient.get("/bidding/requests");
      return response.data.data;
    },
  });

  // Mutation to submit a quote
  const submitBid = useMutation({
    mutationFn: async (bidData: any) => {
      return await apiClient.post("/bidding/quotes", bidData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bidding-requests"] });
      setSelectedRequest(null);
      setBidPrice("");
      setBidSpecs("");
      alert("تم تقديم عرضك بنجاح!");
    },
  });

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRequest || !user) return;

    submitBid.mutate({
      request_id: selectedRequest.id,
      store_id: user.store_id || "default-store-uuid", // Merchant's active store
      offered_price: parseFloat(bidPrice),
      offered_specs: bidSpecs,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <Gavel className="text-primary" size={32} />
          فرص المزايدة
        </h2>
        <p className="text-slate-500 font-medium mt-1">اكتشف طلبات العملاء وقدم أفضل عروضك للفوز بالصفقة</p>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <Loader2 className="animate-spin text-primary mb-4" size={40} />
          <p className="text-slate-500 font-bold">جاري البحث عن فرص جديدة...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {requests?.map((request: any) => (
            <div key={request.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group relative overflow-hidden">
              {/* Status Badge */}
              <div className="absolute top-0 left-0 bg-primary/10 text-primary px-4 py-1.5 rounded-br-2xl text-xs font-black">
                {request.status}
              </div>

              <div className="flex justify-between items-start mb-6 pt-2">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors italic">
                  {request.title}
                </h3>
                <div className="flex items-center gap-1 text-success font-black text-lg">
                  <DollarSign size={18} />
                  {request.budget_limit || "ميزانية مفتوحة"}
                </div>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3">
                {request.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock size={16} />
                    <span className="text-xs font-bold">منذ ساعتين</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-bold">{request.quotes_count || 0} عروض مقدمة</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRequest(request)}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary transition-all text-sm"
                >
                  تقديم عرض
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bid Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-xl rounded-[40px] p-10 shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-black mb-2">تقديم عرض سعر</h2>
            <p className="text-slate-500 mb-8">أنت تقوم بالمزايدة على: <span className="text-primary font-bold">{selectedRequest.title}</span></p>

            <form onSubmit={handleBidSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-black mb-2 mr-1">سعرك المعروض ($)</label>
                <div className="relative">
                  <DollarSign className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="number"
                    required
                    className="w-full pr-12 pl-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary transition-all font-black"
                    placeholder="0.00"
                    value={bidPrice}
                    onChange={(e) => setBidPrice(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black mb-2 mr-1">المواصفات والضمان</label>
                <textarea
                  required
                  rows={4}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary transition-all leading-relaxed"
                  placeholder="اشرح للعميل لماذا عرضك هو الأفضل (حالة المنتج، الضمان، سرعة التوصيل)..."
                  value={bidSpecs}
                  onChange={(e) => setBidSpecs(e.target.value)}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={submitBid.isPending}
                  className="flex-1 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  {submitBid.isPending ? <Loader2 className="animate-spin" /> : (
                    <>
                      إرسال العرض
                      <Send size={18} />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRequest(null)}
                  className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
