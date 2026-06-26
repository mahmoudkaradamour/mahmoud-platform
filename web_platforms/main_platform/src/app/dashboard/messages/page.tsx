"use client";

import React from "react";
import { MessageSquare, Send, User, Search, Loader2 } from "lucide-react";

/**
 * Messages View - Real-time Chat Interface.
 * Designed for Negotiation during the Reverse Bidding process.
 */
export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-160px)] bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex">
      {/* Sidebar - Conversation List */}
      <div className="w-80 border-l border-slate-100 flex flex-col bg-slate-50/30">
        <div className="p-6 border-b border-slate-100">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="بحث في المحادثات..."
              className="w-full pr-10 pl-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 text-center pt-20">
          <MessageSquare className="mx-auto text-slate-200 mb-4" size={40} />
          <p className="text-slate-400 text-sm font-bold">لا توجد محادثات نشطة</p>
          <p className="text-slate-400 text-xs px-6 mt-2">المحادثات تبدأ تلقائياً عند قبولك لعرض مزايدة أو بدء مفاوضات مع تاجر.</p>
        </div>
      </div>

      {/* Main Chat Area - Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50/10 p-12 text-center">
        <div className="h-32 w-32 bg-primary/5 rounded-full flex items-center justify-center mb-8 border border-primary/10">
          <MessageSquare className="text-primary" size={48} />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3 italic">سيادة التواصل</h3>
        <p className="text-slate-500 max-w-md leading-relaxed font-medium">
          نظامنا يضمن تشفير المحادثات وحماية حقوق الطرفين أثناء عملية التفاوض والبيع.
          اختر محادثة من القائمة الجانبية لبدء التواصل.
        </p>
      </div>
    </div>
  );
}
