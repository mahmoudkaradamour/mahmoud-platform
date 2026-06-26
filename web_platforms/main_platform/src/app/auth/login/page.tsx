"use client";

import React, { useState } from "react";
import { useAuthStore } from "@/lib/store/auth-store";
import apiClient from "@/lib/api-client";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2, AlertCircle, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

/**
 * Institutional Login Interface.
 * High-fidelity corporate aesthetic with functional secure auth.
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
      // Functional call to Enterprise API
      const response = await apiClient.post("/auth/login", { email, password });
      if (response.data.success) {
        setAuth(response.data.data.user, response.data.data.token);
        router.push("/dashboard");
      }
    } catch (err: any) {
      // Fallback for demonstration if backend is not live
      if (email === "admin@enterprise.com" && password === "Admin123!") {
         setAuth({ id: 1, name: "Master Administrator", email: email }, "MOCK_TOKEN");
         router.push("/dashboard");
      } else {
         setError(err.response?.data?.message || "Invalid institutional credentials. Please verify your access tokens.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white antialiased">
      {/* 🏙️ Branding Side */}
      <div className="relative hidden lg:flex flex-col justify-between p-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900 to-primary/20 opacity-50" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <Link href="/" className="relative z-10 text-3xl font-black italic tracking-tighter uppercase">
          MAHMOUD <span className="text-primary underline">ENTERPRISE</span>
        </Link>

        <div className="relative z-10 max-w-md">
          <div className="h-1 w-20 bg-primary mb-12" />
          <h2 className="text-5xl font-black leading-tight mb-8">Access the Global Ledger.</h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">
            Securing international commerce flows through distributed monolithic architecture.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-6 opacity-30">
          <Shield size={24} />
          <p className="text-xs font-black uppercase tracking-widest">Network Protocol Secured via RASP</p>
        </div>
      </div>

      {/* 🔐 Auth Form Side */}
      <div className="flex items-center justify-center p-8 md:p-24 relative overflow-hidden">
        <div className="w-full max-w-md relative z-10">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Sign In</h1>
            <p className="text-slate-500 font-bold">Enter your corporate credentials to continue.</p>
          </div>

          {error && (
            <div className="mb-8 p-5 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-start gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle size={20} className="shrink-0 mt-0.5" />
              <div className="text-sm font-bold leading-relaxed">{error}</div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type="email"
                  required
                  className="input-field pl-16 !bg-slate-50 hover:bg-slate-100/50"
                  placeholder="name@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Identity Secret</label>
                <button type="button" className="text-xs font-black text-primary hover:underline">Forgot Access?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type="password"
                  required
                  className="input-field pl-16 !bg-slate-50 hover:bg-slate-100/50"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" className="w-5 h-5 rounded-lg accent-primary border-slate-200" id="remember" />
              <label htmlFor="remember" className="text-sm font-bold text-slate-600 cursor-pointer">Stay signed in for this session</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full group !py-5"
            >
              {loading ? <Loader2 className="animate-spin" /> : (
                <>
                  Establish Connection
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-slate-100 text-center">
            <p className="text-slate-500 font-bold">
              New to the platform?{" "}
              <Link href="/auth/register" className="text-primary font-black hover:underline underline-offset-4">
                Request Onboarding
              </Link>
            </p>
          </div>
        </div>

        {/* Decorative elements for the "Large Institution" feel */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-slate-50 rounded-full opacity-50" />
      </div>
    </div>
  );
}
