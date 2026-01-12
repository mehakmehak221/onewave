"use client";

import Header from "./Header";
// import Link from 'next/link';
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <Header />

      <main className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div
                className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12"
                style={{
                  boxShadow:
                    "0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255,255,255,0.1)",
                }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white leading-tight flex flex-col">
                 OneWave Fintech S.A. (in formation, Republic of Panama)
                  <span className="text-white/90 mt-3 sm:mt-4">
                    Ride The Wave Of Web3
                  </span>
                  {/* <span className="text-white/90">Multi-Utility Platform</span>
                  <span className="text-white/90">For The Web3 World</span> */}
                </h1>

                <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed mt-2 mb-2">
                  A revolutionary multi-utility platform uniting blockchain
                  networks and empowering users with an integrated set of
                  decentralized tools and services.
                </p>

                <div className="flex sm:gap-4 pt-4">
                  <Link href="/presale" className="w-full">
                    <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 w-full">
                      Presale
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] hidden md:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-52">
                <Image
                  src="/card.png"
                  alt="Crypto Card"
                  fill
                  className="object-contain drop-shadow-2xl"
                  style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' }}
                />
              </div>

              <div className="absolute top-[15%] left-[15%] w-16 h-16 bg-[#4472a8]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-blue-700/40 animate-float border border-blue-400/30">
                <span className="text-white text-2xl font-bold">₿</span>
              </div>

              <div className="absolute top-[35%] left-[5%] w-14 h-14 bg-[#4d7fb8]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-blue-600/40 animate-float-delayed border border-blue-400/30">
                <span className="text-white text-xl font-bold">W</span>
              </div>

              <div className="absolute top-[25%] right-[20%] w-14 h-14 bg-[#5689c3]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 animate-float-slow border border-blue-400/30">
                <span className="text-white text-xl font-bold">W</span>
              </div>

              <div className="absolute bottom-[25%] left-[10%] w-16 h-16 bg-[#4472a8]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-blue-700/40 animate-float border border-blue-400/30">
                <span className="text-white text-2xl">◆</span>
              </div>

              <div className="absolute bottom-[35%] right-[15%] w-14 h-14 bg-[#4d7fb8]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-blue-600/40 animate-float-delayed border border-blue-400/30">
                <span className="text-white text-xl">◎</span>
              </div>

              <div className="absolute top-[20%] right-[10%] w-12 h-12 bg-[#5689c3]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 animate-float-slow border border-blue-400/30">
                <span className="text-white text-lg">◈</span>
              </div>

              <div className="absolute bottom-[15%] right-[25%] w-12 h-12 bg-[#4472a8]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-blue-700/40 animate-float border border-blue-400/30">
                <span className="text-white text-lg">◉</span>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#4472a8" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="80%" y1="25%" x2="50%" y2="50%" stroke="#4472a8" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="15%" y1="75%" x2="50%" y2="50%" stroke="#4472a8" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="85%" y1="80%" x2="50%" y2="50%" stroke="#4472a8" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
