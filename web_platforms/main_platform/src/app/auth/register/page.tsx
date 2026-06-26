"use client";

import React, { useState } from "react";
import apiClient from "@/lib/api-client";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Store, Loader2, AlertCircle } from "lucide-react";

/**
 * Register Page - Multi-vendor Onboarding.
 * Supports different account types (Customer/Seller).
 */
export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    account_type: "CUSTOMER",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await apiClient.post("/auth/register", formData);
      if (response.data.success) {
        router.push("/auth/login?registered=true");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "فشل إنشاء الحساب. يرجى التأكد من البيانات.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg glass-effect p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">انضم إلينا</h1>
          <p className="text-slate-500">أنشئ حسابك لبدء تجربة التجارة السيادية</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 text-error rounded-2xl flex items-center gap-3">
            <AlertCircle size={20} />
            <span className="text-sm font-bold">{error}</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-bold mb-2 mr-1">الاسم الكامل</label>
            <div className="relative">
              <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                required
                className="w-full pr-12 pl-4 py-4 bg-background border border-slate-200 rounded-2xl focus:outline-none focus:border-primary transition-all"
                placeholder="محمود كرام"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 mr-1">البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                required
                className="w-full pr-12 pl-4 py-4 bg-background border border-slate-200 rounded-2xl focus:outline-none focus:border-primary transition-all"
                placeholder="example@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setFormData({...formData, account_type: "CUSTOMER"})}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                formData.account_type === "CUSTOMER" ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"
              }`}
            >
              <User size={24} className={formData.account_type === "CUSTOMER" ? "text-primary" : "text-slate-400"} />
              <span className={`text-sm font-bold ${formData.account_type === "CUSTOMER" ? "text-primary" : "text-slate-600"}`}>مستهلك</span>
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, account_type: "SELLER"})}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                formData.account_type === "SELLER" ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"
              }`}
            >
              <Store size={24} className={formData.account_type === "SELLER" ? "text-primary" : "text-slate-400"} />
              <span className={`text-sm font-bold ${formData.account_type === "SELLER" ? "text-primary" : "text-slate-600"}`}>تاجر</span>
            </button>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 mr-1">كلمة المرور</label>
            <div className="relative">
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="password"
                required
                className="w-full pr-12 pl-4 py-4 bg-background border border-slate-200 rounded-2xl focus:outline-none focus:border-primary transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : "إنشاء الحساب"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            لديك حساب بالفعل؟{" "}
            <button onClick={() => router.push("/auth/login")} className="text-primary font-bold hover:underline">
              سجل دخولك
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
