"use client";

import Image from "next/image";
import Header from "../components/Header";
import CountdownTimer from "./CountdownTimer";
import ThreeAnimation from "./ThreeAnimation";

export default function ComingSoon() {
  return (
    <div className="relative w-full  flex flex-col overflow-x-hidden bg-black/40">
      <Header />

      <main className="flex-1">
        <div className="relative w-full min-h-[calc(100vh-4rem)] supports-[height:100svh]:min-h-[calc(100svh-4rem)] flex items-start lg:items-center justify-center overflow-hidden ">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_bg.png"
              alt="Background"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-24 relative z-10 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/50 backdrop-blur-sm w-fit mx-auto lg:mx-0">
                  <span className="bg-[#3073E7] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    New
                  </span>
                  <span className="text-white text-sm font-medium tracking-wide">
                    Join the Revolution Now
                  </span>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-white leading-tight">
                    Participate in the{" "}
                    <span className="block sm:inline">OneWave Fintech S.A. (in formation, Republic of Panama) Ecosystem</span>
                  </h1>

                  <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
                    Early access is subject to eligibility, verification, and
                    acceptance of applicable terms.
                  </p>

                  {/* <div className="pt-2 sm:pt-4">
                    <CountdownTimer />
                  </div> */}
                </div>
              </div>

              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[600px]">
                <ThreeAnimation />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
