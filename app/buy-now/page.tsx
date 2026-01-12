'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function BuyNowPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-black relative flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500/20 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-blue-600/20 rounded-full blur-[120px] sm:blur-[150px]" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20">

        <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 border border-white/80 scale-[1.01] rounded-full px-1.5 sm:px-2 py-1">
            <span className="bg-blue-500 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              New
            </span>
            <span className="text-white text-xs sm:text-sm pr-2 sm:pr-3">Join the Revolution Now</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
Invest Where Digital Innovation Meets Real Value
          </h1>

          <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
The first-ever token presale supported by gold, silver, diamonds, jewelry, and more.
          </p>
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="backdrop-blur-xl bg-black/20 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">

            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                <span className="text-[#3b82f6]">Be Part Of WAVE</span>
                <br />
                <span className="text-white">Stake Your Tokens Now</span>
              </h2>

              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3b82f6]"
                style={{
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)'
                }}
              >
                Live Now
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4 py-3 sm:py-4">
              <div className="flex-1 h-px bg-white/20"></div>
              <div className="text-white text-lg sm:text-xl font-semibold">1 WAVE = $1</div>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={() => router.push('/signin')}
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-base sm:text-lg py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#3b82f6]/50"
              >
                Sign In
              </button>

              <button
                onClick={() => router.push('/signup')}
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-base sm:text-lg py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#3b82f6]/50"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
