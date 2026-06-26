"use client";

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { Bell, Check, Loader2, Info, ShoppingCart, Gavel, AlertTriangle } from "lucide-react";

/**
 * Universal Notification Hub.
 * Centralizes all platform alerts using v1 Communication API.
 */
export default function NotificationsPage() {
  const queryClient = useQueryClient();

  const { data: notifications, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const response = await apiClient.get("/communication/notifications");
      return response.data.data;
    },
  });

  const markRead = useMutation({
    mutationFn: async (id: string) => {
      return await apiClient.patch(`/communication/notifications/${id}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'ORDER_UPDATE': return <ShoppingCart size={20} className="text-primary" />;
      case 'BID_ACCEPTED': return <Gavel size={20} className="text-success" />;
      case 'SECURITY_ALERT': return <AlertTriangle size={20} className="text-error" />;
      default: return <Info size={20} className="text-slate-400" />;
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <Bell className="text-primary" size={32} />
            مركز التنبيهات
          </h2>
          <p className="text-slate-500 font-medium mt-1">تابع آخر التحديثات المتعلقة بنشاطك على المنصة</p>
        </div>
        <button className="text-sm font-bold text-primary hover:underline">
          تحديد الكل كمقروء
        </button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <Loader2 className="animate-spin text-primary" size={40} />
        </div>
      ) : notifications?.length > 0 ? (
        <div className="space-y-4">
          {notifications.map((notif: any) => (
            <div
              key={notif.id}
              className={`p-6 rounded-[30px] border transition-all flex items-start justify-between gap-6 ${
                notif.is_read ? 'bg-white border-slate-100 opacity-60' : 'bg-white border-primary/20 shadow-lg shadow-primary/5'
              }`}
            >
              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-2xl ${notif.is_read ? 'bg-slate-100' : 'bg-primary/5'}`}>
                  {getIcon(notif.type)}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-1">{notif.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{notif.content}</p>
                  <span className="text-xs font-bold text-slate-400 mt-3 block uppercase tracking-tighter">
                    {new Date(notif.created_at).toLocaleString('ar-EG')}
                  </span>
                </div>
              </div>

              {!notif.is_read && (
                <button
                  onClick={() => markRead.mutate(notif.id)}
                  className="p-2 hover:bg-success/10 text-success rounded-full transition-all"
                  title="تحديد كمقروء"
                >
                  <Check size={20} />
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[40px] border-2 border-dashed border-slate-200 p-20 text-center">
          <div className="h-24 w-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
            <Bell size={48} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">لا توجد تنبيهات جديدة</h3>
          <p className="text-slate-500 max-w-md mx-auto">عندما يحدث أي نشاط جديد في حسابك، ستجده هنا.</p>
        </div>
      )}
    </div>
  );
}
