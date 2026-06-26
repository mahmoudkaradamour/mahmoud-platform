"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import { Video, Users, ShoppingCart, MessageCircle, Heart, Zap } from "lucide-react";

/**
 * Live Commerce Interface - The Future of Shopping.
 * Implements real-time stream viewer with interactive bidding and purchasing.
 */
export default function LiveCommercePage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="pt-24 h-screen flex flex-col md:flex-row">
        {/* Stream Area */}
        <div className="flex-1 relative bg-slate-900 overflow-hidden md:rounded-r-[50px]">
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center animate-pulse">
                 <Video size={80} className="text-white/20 mx-auto mb-4" />
                 <p className="text-white/40 font-black uppercase tracking-widest text-sm">بروتوكول البث السيادي نشط</p>
              </div>
           </div>

           {/* Overlay Info */}
           <div className="absolute top-8 left-8 flex items-center gap-4 z-20">
              <div className="bg-error px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-2 animate-pulse">
                 LIVE
              </div>
              <div className="bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                 <Users size={14} /> 1.4K مشاهد
              </div>
           </div>
        </div>

        {/* Interaction Sidebar */}
        <div className="w-full md:w-[450px] bg-white text-slate-900 flex flex-col shadow-2xl">
           <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black italic">مزاد مباشر: iPhone 15</h2>
                <p className="text-slate-400 text-xs font-bold uppercase mt-1">متجر التقنية الحديثة</p>
              </div>
              <button className="p-3 bg-slate-100 rounded-2xl text-slate-400 hover:text-error transition-all">
                <Heart size={20} />
              </button>
           </div>

           {/* Chat / Bidding Feed */}
           <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {[
                { user: "سامر", msg: "هل هذا اللون متوفر؟", time: "10:02" },
                { user: "لينا", msg: "سعر ممتاز جداً!", time: "10:03" },
                { user: "النظام", msg: "تم تقديم عرض جديد بقيمة $1150", type: "SYSTEM" },
              ].map((chat, i) => (
                <div key={i} className={`flex gap-4 ${chat.type === 'SYSTEM' ? 'bg-primary/5 p-4 rounded-2xl border border-primary/10' : ''}`}>
                   <div className="h-8 w-8 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center font-black text-[10px]">
                      {chat.user[0]}
                   </div>
                   <div>
                      <p className="text-xs font-black text-slate-400 mb-1">{chat.user}</p>
                      <p className={`text-sm ${chat.type === 'SYSTEM' ? 'text-primary font-black' : 'text-slate-700 font-medium'}`}>{chat.msg}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* Interaction Actions */}
           <div className="p-8 space-y-6 border-t border-slate-100">
              <div className="flex gap-4">
                 <input
                   placeholder="اكتب رسالة..."
                   className="flex-1 p-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20"
                 />
                 <button className="p-4 bg-primary text-white rounded-2xl hover:shadow-lg transition-all">
                    <Zap size={20} />
                 </button>
              </div>
              <button className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black text-lg hover:bg-primary transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200">
                 شراء المنتج الآن
                 <ShoppingCart size={22} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
