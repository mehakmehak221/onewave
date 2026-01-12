'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    emailOrId: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in data:', formData);
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500/20 rounded-full blur-[100px] sm:blur-[150px]" /> */}

      <div className="absolute bottom-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-blue-600/20 rounded-full blur-[120px] sm:blur-[150px]" />

      <div className="absolute top-0 left-0 w-20 sm:w-40 h-20 sm:h-40 border-l-2 border-t-2 border-blue-500/20 z-10"></div>
      <div className="absolute bottom-0 right-0 w-20 sm:w-40 h-20 sm:h-40 border-r-2 border-b-2 border-blue-500/20 z-10"></div>

      <div className="w-full bg-black/40 backdrop-blur-sm border-b border-white/10 py-2 sm:py-3 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-2 text-white text-xs sm:text-base font-semibold">
          <span className="text-center">Join World&apos;s First RWA Backed Presale</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between relative z-20">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Wave Logo" className="h-6 sm:h-8 w-auto brightness-0 invert" />
        </Link>
        <Link href="/signup">
          <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full transition-all duration-300">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center min-h-[calc(100vh-150px)] sm:min-h-[calc(100vh-200px)] gap-12 relative z-20">
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <video
            src="/signin-signup.webm"
            className="w-full h-full object-contain rounded-xl mix-blend-screen"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="flex-1 max-w-md w-full">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Sign in to <span className="text-[#3b82f6]">Wave</span>
              </h1>
              <p className="text-white/60 text-xs sm:text-sm">Fill your email and password to sign in</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-white text-sm mb-2 block">Email / Unique ID</label>
                <input
                  type="text"
                  name="emailOrId"
                  value={formData.emailOrId}
                  onChange={handleInputChange}
                  className="w-full bg-[#1a1f3a]/60 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3b82f6] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-[#1a1f3a]/60 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3b82f6] transition-colors pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-white/20 bg-[#1a1f3a]/60 text-[#3b82f6] focus:ring-[#3b82f6]"
                  />
                  <label htmlFor="rememberMe" className="text-white/60 text-sm">
                    Remember Me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-[#3b82f6] hover:underline text-sm">
                  Forgot your password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3.5 rounded-lg transition-all duration-300"
              >
                Sign In
              </button>

              <div className="text-center">
                <span className="text-white/60 text-sm">
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" className="text-[#3b82f6] hover:underline">
                    Sign Up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
