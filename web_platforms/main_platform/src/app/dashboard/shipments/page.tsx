"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { Truck, Package, MapPin, Calendar, Clock, Loader2, CheckCircle2 } from "lucide-react";

/**
 * Shipments Page - Enterprise Logistics Management.
 * Provides real-time visibility into the fulfillment lifecycle.
 */
export default function ShipmentsPage() {
  // Fetch shipments from the Logistics module
  const { data: shipments, isLoading } = useQuery({
    queryKey: ["logistics-shipments"],
    queryFn: async () => {
      const response = await apiClient.get("/logistics/my-shipments");
      return response.data.data;
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <Truck className="text-primary" size={32} />
          تتبع الشحنات
        </h2>
        <p className="text-slate-500 font-medium mt-1">راقب مسار طلباتك من المستودع وحتى باب منزلك بلحظة بلحظة</p>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <Loader2 className="animate-spin text-primary mb-4" size={40} />
          <p className="text-slate-500 font-bold">جاري تحديث المسارات اللوجستية...</p>
        </div>
      ) : shipments?.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {shipments.map((shipment: any) => (
            <div key={shipment.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all group">
              <div className="p-8 md:flex items-center justify-between gap-8">
                {/* Shipment Info */}
                <div className="flex items-center gap-6 mb-6 md:mb-0">
                  <div className="h-16 w-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary border border-primary/20">
                    <Package size={30} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{shipment.tracking_number}</h3>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{shipment.carrier}</p>
                  </div>
                </div>

                {/* Tracking Stepper (Simplified for ZCL) */}
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center justify-between relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-success transition-all duration-1000 z-0"
                        style={{ width: shipment.status === 'DELIVERED' ? '100%' : '50%' }}
                    />

                    {[
                      { label: "تم التجهيز", active: true },
                      { label: "قيد الشحن", active: shipment.status !== 'PENDING' },
                      { label: "تم التسليم", active: shipment.status === 'DELIVERED' },
                    ].map((step, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                        <div className={`h-4 w-4 rounded-full border-4 ${step.active ? 'bg-success border-success/30' : 'bg-white border-slate-200'}`} />
                        <span className={`text-xs font-black ${step.active ? 'text-slate-900' : 'text-slate-300'}`}>{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-6 md:mt-0">
                  <div className={`px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 ${
                    shipment.status === 'DELIVERED' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
                  }`}>
                    {shipment.status === 'DELIVERED' ? <CheckCircle2 size={18} /> : <Clock size={18} />}
                    {shipment.status}
                  </div>
                </div>
              </div>

              {/* Bottom Details Panel */}
              <div className="bg-slate-50/50 p-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-slate-400 mt-1" size={20} />
                  <div>
                    <p className="text-xs font-black text-slate-400 mb-1">وجهة التسليم</p>
                    <p className="text-sm font-bold text-slate-700">{shipment.destination.city}, {shipment.destination.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="text-slate-400 mt-1" size={20} />
                  <div>
                    <p className="text-xs font-black text-slate-400 mb-1">التسليم المتوقع</p>
                    <p className="text-sm font-bold text-slate-700">
                      {shipment.estimated_delivery ? new Date(shipment.estimated_delivery).toLocaleDateString('ar-EG') : 'قيد التحديد'}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black hover:bg-slate-100 transition-all text-sm">
                    تفاصيل التتبع الكاملة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[40px] border-2 border-dashed border-slate-200 p-20 text-center">
          <div className="h-24 w-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
            <Truck size={48} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">لا توجد شحنات نشطة حالياً</h3>
          <p className="text-slate-500 max-w-md mx-auto font-medium">
            بمجرد قيامك بعملية شراء أو قبول عرض مزايدة، ستظهر شحناتك هنا لتتمكن من تتبعها لحظة بلحظة.
          </p>
        </div>
      )}
    </div>
  );
}
