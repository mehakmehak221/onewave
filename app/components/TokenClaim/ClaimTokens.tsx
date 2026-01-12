"use client";

import { useClaimableTokens, useUserPurchaseInfo, useClaimTGE, useClaimVested, usePresaleRoundInfo } from "@/app/web3/hooks/usePresale";

interface ClaimTokensProps {
  userAddress: `0x${string}` | undefined;
}

export default function ClaimTokens({ userAddress }: ClaimTokensProps) {
  const { tgeClaimable, cliffClaimable } = useClaimableTokens(userAddress);
  const { totalTokens, tgeClaimed, cliffClaimed } = useUserPurchaseInfo(userAddress);
  const { claim: claimTGE, isPending: isClaimingTGE, isSuccess: tgeSuccess } = useClaimTGE();
  const { claim: claimVested, isPending: isClaimingVested, isSuccess: vestedSuccess } = useClaimVested();
  const { tgeTime, cliffDuration } = usePresaleRoundInfo();

  const availableTokens = parseFloat(tgeClaimable) + parseFloat(cliffClaimable);
  
  const now = Date.now() / 1000;
  let vestingStatus = "Loading...";
  
  if (tgeTime > 0) {
    if (now < tgeTime) {
      const diff = tgeTime - now;
      const days = Math.ceil(diff / (60 * 60 * 24));
      vestingStatus = `TGE in ${days} days`;
    } else {
      const vestingEnd = tgeTime + cliffDuration;
      if (now < vestingEnd) {
         const diff = vestingEnd - now;
         const days = Math.ceil(diff / (60 * 60 * 24));
         vestingStatus = `Vesting ends in ${days} days`;
      } else {
         vestingStatus = "Vesting Completed";
      }
    }
  } else {
     vestingStatus = "Date TBA";
  }

  return (
    <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur-sm border border-[#00D2FF33] p-6 shadow-xl relative overflow-hidden">
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#2171E6] font-[Space Grotesk] tracking-wide">CLAIM YOUR TOKENS</h2>
        <div className="w-12 h-12 rounded-lg bg-[#00B8DB1A] flex items-center justify-center">
           <span className="text-[#2171E6] font-bold text-lg">L1</span>
        </div>
      </div>

      <div className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#03091466] rounded-xl p-6 border border-[#2B7FFF1A]">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-[#90A1B9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <p className="text-sm text-[#90A1B9] font-[Arial]">Available to Claim</p>
            </div>
            <p className="text-2xl font-bold text-white font-[Space Grotesk]">
              {parseFloat(availableTokens.toFixed(2)).toLocaleString()}{" "}
              <span className="text-base text-[#90A1B9] font-normal">TOKENS</span>
            </p>
          </div>

          <div className="bg-[#03091466] rounded-xl p-6 border border-[#2B7FFF1A]">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-[#90A1B9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-[#90A1B9] font-[Arial]">Next Vesting</p>
            </div>
            <p className="text-2xl font-bold text-white font-[Space Grotesk]">
              {parseFloat(cliffClaimable).toLocaleString()}{" "}
              <span className="text-base text-[#90A1B9] font-normal">TOKENS</span>
            </p>
            <p className="text-xs text-[#586883] mt-2 font-[Arial]">{vestingStatus}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => claimTGE(1)}
            disabled={isClaimingTGE || parseFloat(tgeClaimable) <= 0 || !userAddress}
            className="group relative w-full bg-gradient-to-r from-[#2171E6] to-[#00B8DB] hover:from-[#1a65d6] hover:to-[#00a3c2] text-white rounded-xl py-4 font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-transparent"
          >
            {isClaimingTGE ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Claiming...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                TGE Claim
              </>
            )}
          </button>

          <button
            onClick={() => claimVested(1)}
            disabled={isClaimingVested || parseFloat(cliffClaimable) <= 0 || !userAddress}
            className="group w-full bg-transparent border border-[#2B7FFF33] hover:bg-[#2B7FFF1A] text-white rounded-xl py-4 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isClaimingVested ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Claiming...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-[#90A1B9] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Claim Vested
              </>
            )}
          </button>
        </div>

       
        <div className="bg-[#03091466] border border-[#2B7FFF1A] rounded-xl p-4">
          <div className="flex justify-center text-center">
            <p className="text-sm text-[#90A1B9] leading-relaxed font-[Arial]">
              <span className="text-[#2171E6] font-semibold">Note:</span> Tokens are vested linearly over 6 months after TGE. You can claim available tokens anytime.
            </p>
          </div>
        </div>

        {userAddress && parseFloat(totalTokens) > 0 && (
          <div className="bg-[#03091466] border border-[#2B7FFF1A] rounded-xl p-4">
            <h3 className="text-sm font-semibold text-[#2171E6] mb-3 font-[Space Grotesk]">Your Purchase Summary</h3>
            <div className="space-y-2 text-sm font-[Arial]">
              <div className="flex justify-between">
                <span className="text-[#90A1B9]">Total Purchased:</span>
                <span className="text-white font-medium">{parseFloat(totalTokens).toLocaleString()} WAVE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#90A1B9]">TGE Claimed:</span>
                <span className="text-white font-medium">{parseFloat(tgeClaimed).toLocaleString()} WAVE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#90A1B9]">Vested Claimed:</span>
                <span className="text-white font-medium">{parseFloat(cliffClaimed).toLocaleString()} WAVE</span>
              </div>
              <div className="border-t border-[#2B7FFF1A] pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-[#2171E6] font-semibold">Remaining:</span>
                  <span className="text-[#2171E6] font-semibold">
                    {(parseFloat(totalTokens) - parseFloat(tgeClaimed) - parseFloat(cliffClaimed)).toLocaleString()} WAVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
