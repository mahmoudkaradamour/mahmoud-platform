"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Globe, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useAuthStore } from "@/lib/store/auth-store";

/**
 * Enterprise Navbar Component.
 * Features: Language Switcher, Location Picker, Real-time Search, and Auth Controls.
 * RTL Optimized for MENA markets.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-white py-2 px-6 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Globe size={12} />
              العربية (سوريا)
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <MapPin size={12} />
              دمشق، المزة
            </button>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/help" className="hover:text-primary transition-colors">مركز المساعدة</Link>
            <Link href="/seller-portal" className="text-primary hover:text-white transition-colors">بع معنا الآن</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-primary italic shrink-0">
          MAHMOUD
        </Link>

        {/* Search Bar - Enterprise DX */}
        <div className="hidden lg:flex flex-1 max-w-2xl relative">
          <input
            type="text"
            placeholder="عن ماذا تبحث اليوم؟ (أجهزة، أزياء، عقارات...)"
            className="w-full pr-12 pl-4 py-3 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm font-medium"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-5">
          {/* Cart */}
          <button className="p-3 hover:bg-slate-50 rounded-2xl transition-all relative">
            <ShoppingCart size={22} className="text-slate-700" />
            <span className="absolute top-2 left-2 w-4 h-4 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center">0</span>
          </button>

          {/* User Auth Section */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3 pr-4 border-r border-slate-100">
              <Link href="/dashboard" className="hidden md:block">
                <p className="text-xs text-slate-400 font-black uppercase tracking-tighter">مرحباً بك</p>
                <p className="text-sm font-bold text-slate-900 line-clamp-1">{user?.name}</p>
              </Link>
              <div className="h-10 w-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
                <User size={20} />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/auth/login"
                className="px-6 py-3 text-slate-600 font-bold hover:text-primary transition-all text-sm"
              >
                دخول
              </Link>
              <Link
                href="/auth/register"
                className="px-6 py-3 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all text-sm"
              >
                انضم الآن
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 animate-in slide-in-from-top duration-300">
          <div className="space-y-4 font-bold text-slate-700">
            <Link href="/catalog" className="block p-3 hover:bg-slate-50 rounded-xl">المنتجات</Link>
            <Link href="/categories" className="block p-3 hover:bg-slate-50 rounded-xl">الفئات</Link>
            <Link href="/deals" className="block p-3 hover:bg-slate-50 rounded-xl text-error">العروض الحصرية</Link>
            <div className="pt-4 border-t border-slate-50">
               <button className="flex items-center gap-2 text-sm">
                 <Globe size={18} /> تغيير اللغة
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
