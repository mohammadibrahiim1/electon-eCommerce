import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { signupUser } from "../services/slice/authSlice";
import { ArrowRight, Loader2, Lock, Mail, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod"; // ✅ FIXED
import { z } from "zod";
import { Link } from "react-router-dom";

// ─── Zod Validation Schema ───────────────────────────────────────
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state?.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onBlur", // ইউজার ইনপুট দিয়ে বের হয়ে গেলেই ভ্যালিডেশন চেক হবে
  });

  // Handle Redux Errors via Toast
  useEffect(() => {
    if (error) {
      toast.error(error.message || "Something went wrong!");
    }
  }, [error]);

  const onSubmit = async (data) => {
    try {
      await dispatch(signupUser(data)).unwrap();
      toast.success("Account created successfully! Welcome.");
      reset();
    } catch (err) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBFBFA] px-4">
      {/* Notion-style Card */}
      <div className="w-full max-w-[400px] space-y-8">
        {/* Header Section */}
        <div className="text-center md:text-left">
          <h1 className="text-[32px] font-bold text-[#37352F] tracking-tight leading-tight">
            Create account
          </h1>
          <p className="text-[#787774] mt-2 text-sm">
            Join us and start organizing your work today.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name Field */}
          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-[#787774] uppercase tracking-wider ml-1">
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User
                  size={16}
                  className="text-[#ADADA7] group-focus-within:text-[#37352F] transition-colors"
                />
              </div>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your name"
                className={`w-full pl-10 pr-4 py-2 bg-white border ${
                  errors.name
                    ? "border-red-500 focus:ring-red-100"
                    : "border-[#E9E9E7] focus:ring-slate-200"
                } rounded-md text-[14px] text-[#37352F] placeholder-[#ADADA7] outline-none focus:ring-4 transition-all`}
              />
            </div>
            {errors.name && (
              <p className="text-[12px] text-red-500 mt-1 ml-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-[#787774] uppercase tracking-wider ml-1">
              Work Email
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail
                  size={16}
                  className="text-[#ADADA7] group-focus-within:text-[#37352F] transition-colors"
                />
              </div>
              <input
                {...register("email")}
                type="email"
                placeholder="name@company.com"
                className={`w-full pl-10 pr-4 py-2 bg-white border ${
                  errors.email
                    ? "border-red-500 focus:ring-red-100"
                    : "border-[#E9E9E7] focus:ring-slate-200"
                } rounded-md text-[14px] text-[#37352F] placeholder-[#ADADA7] outline-none focus:ring-4 transition-all`}
              />
            </div>
            {errors.email && (
              <p className="text-[12px] text-red-500 mt-1 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-[#787774] uppercase tracking-wider ml-1">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock
                  size={16}
                  className="text-[#ADADA7] group-focus-within:text-[#37352F] transition-colors"
                />
              </div>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-2 bg-white border ${
                  errors.password
                    ? "border-red-500 focus:ring-red-100"
                    : "border-[#E9E9E7] focus:ring-slate-200"
                } rounded-md text-[14px] text-[#37352F] placeholder-[#ADADA7] outline-none focus:ring-4 transition-all`}
              />
            </div>
            {errors.password && (
              <p className="text-[12px] text-red-500 mt-1 ml-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#37352F] hover:bg-[#2F2D28] text-white rounded-md text-[14px] font-semibold transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-black/10"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Creating account...</span>
              </>
            ) : (
              <>
                <span>Sign up</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-[13px] text-[#787774]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#37352F] font-medium underline underline-offset-4 hover:text-blue-600 transition-colors"
          >
            Log in
          </Link>
        </p>

        {/* Small Note */}
        <p className="text-center text-[11px] text-[#ADADA7] px-6">
          By clicking "Sign up", you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
