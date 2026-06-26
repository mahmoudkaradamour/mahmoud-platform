"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Globe, MapPin, Menu, X, ChevronDown, Shield, Bell } from "lucide-react";
import { useAuthStore } from "@/lib/store/auth-store";

/**
 * Institutional Navbar Component.
 * High-fidelity corporate header with integrated command protocols.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-2xl border-b border-slate-100">
      {/* 🏛️ Institutional Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-10 hidden md:block border-b border-white/5">
        <div className="container mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
               <Shield size={12} />
               <span>Network Protocol v1.0</span>
            </div>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Globe size={12} />
              ENG (Global)
            </button>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/governance" className="hover:text-primary transition-colors">Governance</Link>
            <Link href="/seller-portal" className="text-primary hover:text-white transition-colors">Enterprise Partnering</Link>
          </div>
        </div>
      </div>

      {/* 🚀 Main Branding & Action Bar */}
      <div className="container mx-auto px-10 py-5 flex items-center justify-between gap-12">
        {/* Elite Branding */}
        <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter italic shrink-0 group">
          MAHMOUD <span className="text-primary underline group-hover:no-underline transition-all">ENTERPRISE</span>
        </Link>

        {/* Global Command Search */}
        <div className="hidden lg:flex flex-1 max-w-2xl relative group">
          <input
            type="text"
            placeholder="Search Global Inventory (UPC, SKU, Brand)..."
            className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:bg-white focus:border-primary/20 transition-all text-sm font-bold placeholder:text-slate-400 shadow-inner"
          />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
        </div>

        {/* Action Hub */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <button className="p-3.5 hover:bg-slate-50 rounded-2xl transition-all relative text-slate-500 hover:text-primary group">
              <Bell size={22} className="group-hover:rotate-12 transition-transform" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <button className="p-3.5 hover:bg-slate-50 rounded-2xl transition-all relative text-slate-500 hover:text-primary group">
              <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="h-8 w-px bg-slate-100 hidden md:block" />

          {/* User Execution Logic */}
          {isAuthenticated ? (
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="text-right hidden xl:block">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Active session</p>
                <p className="text-sm font-black text-slate-900">{user?.name}</p>
              </div>
              <Link href="/dashboard" className="h-12 w-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-xl shadow-slate-200/50 hover:border-primary/40 transition-all">
                <User size={22} />
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/auth/login"
                className="px-8 py-3.5 text-slate-600 font-black hover:text-primary transition-all text-xs uppercase tracking-widest"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="btn-primary !px-8 !py-3.5 !text-xs !rounded-xl tracking-widest uppercase shadow-xl shadow-blue-500/20"
              >
                Onboard
              </Link>
            </div>
          )}

          {/* Mobile Overlay Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Institutional Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 shadow-3xl animate-in slide-in-from-top duration-500">
          <div className="space-y-6 font-black text-slate-700 uppercase tracking-widest text-xs">
            <Link href="/catalog" className="block p-4 hover:bg-slate-50 rounded-2xl transition-colors">Distribution Catalog</Link>
            <Link href="/bidding" className="block p-4 hover:bg-slate-50 rounded-2xl transition-colors">Market Auction</Link>
            <Link href="/merchants" className="block p-4 hover:bg-slate-50 rounded-2xl transition-colors">Institutional Partners</Link>
            <div className="pt-8 border-t border-slate-100 flex flex-col gap-4">
               <button className="flex items-center gap-3 text-slate-500">
                 <Globe size={20} className="text-primary" /> Switch Protocol (AR)
               </button>
               <button
                 onClick={() => logout()}
                 className="flex items-center gap-3 text-rose-500"
               >
                 <X size={20} /> Terminate Session
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
