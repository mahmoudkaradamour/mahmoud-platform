import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import { Bell, User as UserIcon } from "lucide-react";

/**
 * Dashboard Layout - Enterprise Shell.
 * Provides the core navigation and utility header for all internal pages.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Sidebar />

      <div className="pr-64"> {/* Offset for the right-side sidebar in RTL */}
        {/* Topbar */}
        <header className="h-20 bg-white/70 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-40">
          <h1 className="text-xl font-bold text-slate-800">لوحة التحكم</h1>

          <div className="flex items-center gap-4">
            <button className="p-3 bg-slate-100 rounded-2xl hover:bg-slate-200 transition-all relative">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute top-3 left-3 w-2 h-2 bg-error rounded-full" />
            </button>
            <div className="h-10 w-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
              <UserIcon size={20} />
            </div>
          </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
