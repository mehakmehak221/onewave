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
    <div className="min-h-screen relative text-white">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgclaim.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <header className="relative z-10 border-b border-blue-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/onewave.png"
                alt="Wave Logo"
                width={100}
                height={100}
                className="h-24 w-auto"
              />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-[SF Pro Display] text-[#E2E8F0]">
                  TOKEN <span className="text-[#2171E6] font-[SF Pro Display]">CLAIM</span>
                </h1>
                <p className="text-sm font-[Space Grotesk] text-[#90A1B9] mt-1">
                 High-level overview of intended utility and network design principles.
                </p>
              </div>
            </div>
            <ConnectButton />
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur-sm border border-[#093851] p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2B7FFF] to-[#00B8DB] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.334 5.83301H18.334V10.833" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3327 5.83301L11.2493 12.9163L7.08268 8.74967L1.66602 14.1663" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </div>
                  <span className="text-[#90A1B9] font-medium">Total Raised</span>
                </div>
                <span className="text-xs text-[#90A1B9]">48.4% of goal</span>
              </div>
              <div className="mb-4">
                <div className="text-4xl font-bold mb-2">
                  {loadingRaised ? (
                    <span className="animate-pulse">Loading...</span>
                  ) : (
                    `$${parseFloat(totalRaised).toLocaleString()}`
                  )}
                </div>
                <p className="text-sm text-gray-400">of $1,000,000 target</p>
              </div>
              <div className="w-full bg-blue-950/50 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-500 shadow-lg shadow-blue-500/50"
                  style={{ width: `${(parseFloat(totalRaised) / 1000000) * 100}%` }}
                />
              </div>
            </div>

            
            <BuyTokens />

            
            <ClaimTokens userAddress={address} />
          </div>

         
          <div className="space-y-6">
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
