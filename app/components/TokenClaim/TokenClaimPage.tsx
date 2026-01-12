"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useTotalRaised, useMaxSupply, useTGEPercent } from "@/app/web3/hooks/usePresale";
import Image from "next/image";
import BuyTokens from "./BuyTokenSection";
import ClaimTokens from "./ClaimTokens";
import StatsCards from "./StatsCards";

export default function TokenClaimPage() {
  const { address, isConnected } = useAccount();
  const { totalRaised, isLoading: loadingRaised } = useTotalRaised();
  const { maxSupply, isLoading: loadingSupply } = useMaxSupply();
  const { tgePercent, isLoading: loadingTGE } = useTGEPercent();

  return (
    <div className="min-h-screen relative text-white font-sans selection:bg-blue-500/30 selection:text-white">
      
      <div className="fixed inset-0 z-0">
        <Image
          src="/bgclaim.png"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/80 to-[#020617]" />
      </div>

    
      <header className="relative z-10 p-6 sm:p-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all duration-500" />
              <Image
                src="/onewave.png"
                alt="Wave Logo"
                fill
                className="object-contain relative z-10"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-[#E2E8F0] font-[SF Pro Display] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                TOKEN <span className="text-[#2171E6] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] font-[SF Pro Display]">CLAIM</span>
              </h1>
              <p className="text-sm font-medium text-gray-500 mt-1 font-[SF Pro Display] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] max-w-xs sm:max-w-sm">
                High-level overview of intended utility and network design principles.
              </p>
            </div>
          </div>
          <div className="scale-100 sm:scale-110">
            <ConnectButton />
          </div>
        </div>
      </header>

     
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-20">

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          
        
          <div className="space-y-10">
           
            <div className="bg-[#0F172AB2]/80 to-[#00D2FF33] backdrop-blur-xl border border-[#093851] p-6 shadow-2xl relative overflow-hidden group">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] flex items-center justify-center ">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.334 5.83301H18.334V10.833" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3327 5.83301L11.2493 12.9163L7.08268 8.74967L1.66602 14.1663" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  

                </div>
                <span className="text-sm font-normal font-[Space Grotesk] text-[#90A1B9] uppercase">Total Raised</span>
              </div>

              <div className="mb-10">
                <div className="text-4xl font-black text-white tracking-tighter mb-4">
                  {loadingRaised ? (
                    <span className="animate-pulse opacity-50">...</span>
                  ) : (
                    `$${parseFloat(totalRaised).toLocaleString()}`
                  )}
                </div>
                <p className="text-sm font-normal font-[Space Grotesk] text-[#E2E8F0] uppercase">of $1,000,000 target</p>
              </div>

              <div className="relative w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                  style={{ width: `${(parseFloat(totalRaised) / 1000000) * 100}%` }}
                />
              </div>
            </div>

           
            <BuyTokens />

            
            <ClaimTokens userAddress={address} />
          </div>

         
          <div className="sticky top-10">
            <StatsCards 
              maxSupply={maxSupply}
              tgePercent={tgePercent}
              loadingSupply={loadingSupply}
              loadingTGE={loadingTGE}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
