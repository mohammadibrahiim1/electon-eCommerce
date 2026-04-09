import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { Mail, Lock, Loader2, Eye, EyeOff, ArrowRight } from "lucide-react";
import { loginUser } from "../services/slice/authSlice";
import { Link } from "react-router-dom";

// ─── Zod Validation Schema ───────────────────────────────────────
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state?.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  // Handle Redux/Backend Errors
  useEffect(() => {
    if (error) {
      toast.error(error.message || "Login failed. Please try again.");
    }
  }, [error]);

  const onSubmit = async (data) => {
    try {
      // .unwrap() ব্যবহার করলে সাকসেস/এরর সরাসরি হ্যান্ডেল করা যায়
      const response = await dispatch(loginUser(data)).unwrap();
      toast.success(`Welcome back, ${response?.user?.name || "User"}!`);
    } catch (err) {
      // Error is handled by useEffect and Redux state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBFBFA] px-4 font-sans selection:bg-[#2EAADC]/30">
      <div className="w-full max-w-[400px]">

        {/* Logo or Icon (Optional) */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-[#37352F] rounded-xl flex items-center justify-center shadow-sm">
            <Lock className="text-white" size={24} />
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-[30px] font-bold text-[#37352F] tracking-tight leading-tight">
            Log in
          </h1>
          <p className="text-[#787774] mt-2 text-[14px]">
            Enter your credentials to access your account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-[#787774] uppercase tracking-wider ml-0.5">
              Email
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail size={16} className="text-[#ADADA7] group-focus-within:text-[#37352F] transition-colors" />
              </div>
              <input
                {...register("email")}
                type="email"
                placeholder="name@example.com"
                className={`w-full pl-10 pr-4 py-2 bg-white border ${
                  errors.email ? "border-red-500 focus:ring-red-100" : "border-[#E9E9E7] focus:ring-slate-200"
                } rounded-md text-[14px] text-[#37352F] placeholder-[#ADADA7] outline-none focus:ring-4 transition-all`}
              />
            </div>
            {errors.email && (
              <p className="text-[12px] text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-0.5">
              <label className="text-[12px] font-medium text-[#787774] uppercase tracking-wider">
                Password
              </label>
              <button type="button" className="text-[12px] text-[#37352F] hover:underline underline-offset-4 font-medium opacity-60 hover:opacity-100 transition-opacity">
                Forgot?
              </button>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock size={16} className="text-[#ADADA7] group-focus-within:text-[#37352F] transition-colors" />
              </div>
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full pl-10 pr-10 py-2 bg-white border ${
                  errors.password ? "border-red-500 focus:ring-red-100" : "border-[#E9E9E7] focus:ring-slate-200"
                } rounded-md text-[14px] text-[#37352F] placeholder-[#ADADA7] outline-none focus:ring-4 transition-all`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#ADADA7] hover:text-[#37352F]"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[12px] text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#37352F] hover:bg-[#2F2D28] text-white rounded-md text-[14px] font-semibold transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-sm border border-transparent"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Logging in...</span>
              </>
            ) : (
              <>
                <span>Continue</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 pt-6 border-t border-[#E9E9E7] text-center">
          <p className="text-[13px] text-[#787774]">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#37352F] font-semibold underline underline-offset-4 hover:text-[#2EAADC] transition-colors">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Extra Security Note */}
        <p className="text-center text-[11px] text-[#ADADA7] mt-10 max-w-[280px] mx-auto leading-relaxed">
          Secure login with industry-standard encryption. By continuing, you agree to our Terms.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
