"use client";

import React, { useState } from "react";
import { useAuthStore } from "@/lib/store/auth-store";
import apiClient from "@/lib/api-client";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2, AlertCircle } from "lucide-react";

/**
 * Login Page - Enterprise Authentication.
 * Optimized for ZCL (Zero Cognitive Load) and security.
 */
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setAuth = useAuthStore((state) => state.setAuth);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await apiClient.post("/auth/login", { email, password });
      if (response.data.success) {
        setAuth(response.data.data.user, response.data.data.token);
        router.push("/");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "فشل تسجيل الدخول. يرجى التحقق من البيانات.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md glass-effect p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">مرحباً بعودتك</h1>
          <p className="text-slate-500">سجل دخولك للوصول إلى لوحة التحكم السيادية</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 text-error rounded-2xl flex items-center gap-3">
            <AlertCircle size={20} />
            <span className="text-sm font-bold">{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 mr-1">البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                required
                className="w-full pr-12 pl-4 py-4 bg-background border border-slate-200 rounded-2xl focus:outline-none focus:border-primary transition-all"
                placeholder="example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : "تسجيل الدخول"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            ليس لديك حساب؟{" "}
            <button onClick={() => router.push("/auth/register")} className="text-primary font-bold hover:underline">
              أنشئ حساباً جديداً
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
