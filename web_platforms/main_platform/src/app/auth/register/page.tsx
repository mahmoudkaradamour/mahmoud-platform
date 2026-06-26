"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Loader2, AlertCircle, ArrowRight, ShieldCheck, FileUp } from "lucide-react";
import Link from "next/link";
import apiClient from "@/lib/api-client";

/**
 * Institutional Onboarding Interface.
 * Modern registration with secure entity verification.
 */
export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    account_type: "CUSTOMER"
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
      setError(err.response?.data?.message || "Entity onboarding failed. Please verify your data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 antialiased">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-[60px] shadow-3xl overflow-hidden border border-slate-100">

        {/* 📋 Visual Context Side */}
        <div className="p-16 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden hidden lg:flex">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

          <Link href="/" className="relative z-10 text-2xl font-black italic tracking-tighter uppercase">
            MAHMOUD <span className="text-primary underline">ENTERPRISE</span>
          </Link>

          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-8 leading-tight">Institutional <br /> Onboarding.</h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Join the distributed commerce network. Secure your digital assets with bank-grade protocols.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-6 opacity-30">
            <ShieldCheck size={24} className="text-primary" />
            <p className="text-[10px] font-black uppercase tracking-widest">Protocol Compliant via ISO/IEC 2026</p>
          </div>
        </div>

        {/* 🖊️ Registration Form Side */}
        <div className="p-12 md:p-20 flex flex-col justify-center">
          <div className="mb-12">
            <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Onboard Entity</h1>
            <p className="text-slate-500 font-bold">Establish your presence in the global distribution hub.</p>
          </div>

          {error && (
            <div className="mb-8 p-5 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl flex items-start gap-4">
              <AlertCircle size={20} className="shrink-0 mt-0.5" />
              <div className="text-sm font-bold">{error}</div>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
               <button
                 type="button"
                 onClick={() => setFormData({...formData, account_type: 'CUSTOMER'})}
                 className={`py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border transition-all ${formData.account_type === 'CUSTOMER' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-400 border-slate-200'}`}
               >
                 Individual
               </button>
               <button
                 type="button"
                 onClick={() => setFormData({...formData, account_type: 'SELLER'})}
                 className={`py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border transition-all ${formData.account_type === 'SELLER' ? 'bg-primary text-white border-primary shadow-lg shadow-blue-500/20' : 'bg-white text-slate-400 border-slate-200'}`}
               >
                 Enterprise Partner
               </button>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Entity Name</label>
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  required
                  className="input-field pl-16 !bg-slate-50"
                  placeholder="Full Legal Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Communication Channel</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email"
                  required
                  className="input-field pl-16 !bg-slate-50"
                  placeholder="work@entity.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Access Protocol (Password)</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="password"
                  required
                  className="input-field pl-16 !bg-slate-50"
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full group !py-5 mt-6"
            >
              {loading ? <Loader2 className="animate-spin" /> : (
                <>
                  Initiate Onboarding
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-slate-500 font-bold">
              Already have an active node?{" "}
              <Link href="/auth/login" className="text-primary font-black hover:underline underline-offset-4">
                Establish Link
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
