"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Store, Package, MessageSquare, Settings, LogOut } from "lucide-react";
import { useAuthStore } from "@/lib/store/auth-store";

const menuItems = [
  { name: "الرئيسية", icon: LayoutDashboard, href: "/dashboard" },
  { name: "متاجري", icon: Store, href: "/dashboard/stores" },
  { name: "المنتجات", icon: Package, href: "/dashboard/products" },
  { name: "المحادثات", icon: MessageSquare, href: "/dashboard/messages" },
  { name: "الإعدادات", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const logout = useAuthStore((state) => state.logout);

  return (
    <aside className="w-64 h-screen bg-white border-l border-slate-100 flex flex-col fixed right-0 top-0 z-50">
      <div className="p-8">
        <h2 className="text-2xl font-black text-primary italic">MAHMOUD</h2>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
                isActive ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button
          onClick={() => logout()}
          className="w-full flex items-center gap-3 px-4 py-3 text-error font-bold hover:bg-error/5 rounded-2xl transition-all"
        >
          <LogOut size={20} />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
}
