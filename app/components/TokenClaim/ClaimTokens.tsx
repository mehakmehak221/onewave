"use client";

import { useClaimableTokens, useUserPurchaseInfo, useClaimTGE, useClaimVested, usePresaleRoundInfo } from "@/app/web3/hooks/usePresale";

interface ClaimTokensProps {
  userAddress: `0x${string}` | undefined;
}

export default function ClaimTokens({ userAddress }: ClaimTokensProps) {
  const { tgeClaimable, cliffClaimable } = useClaimableTokens(userAddress);
  const { totalTokens, tgeClaimed, cliffClaimed } = useUserPurchaseInfo(userAddress);
  const { claim: claimTGE, isPending: isClaimingTGE } = useClaimTGE();
  const { claim: claimVested, isPending: isClaimingVested } = useClaimVested();
  const { tgeTime, cliffDuration } = usePresaleRoundInfo();

  const availableTokens = parseFloat(tgeClaimable) + parseFloat(cliffClaimable);
  
  const now = Date.now() / 1000;
  let vestingStatus = "Loading...";
  
  if (tgeTime > 0) {
    if (now < tgeTime) {
      const diff = tgeTime - now;
      const days = Math.ceil(diff / (60 * 60 * 24));
      vestingStatus = `in ${days} days`;
    } else {
      const vestingEnd = tgeTime + cliffDuration;
      if (now < vestingEnd) {
         const diff = vestingEnd - now;
         const days = Math.ceil(diff / (60 * 60 * 24));
         vestingStatus = `in ${days} days`;
      } else {
         vestingStatus = "Completed";
      }
    }
  } else {
     vestingStatus = "Date TBA";
  }

  return (
    <div className="bg-[#0F172AB2]/80 to-[#00D2FF33] backdrop-blur-xl border border-[#00D2FF33] p-8  shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-[#2171E6] font-[Space Grotesk] tracking-wider uppercase">CLAIM YOUR TOKENS</h2>
      
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#151B28]/60 border border-[#3141584D] p-6">
            <div className="flex items-center gap-2 mb-4">
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2748 5.62779V3.21603C15.2748 3.00282 15.1901 2.79834 15.0394 2.64757C14.8886 2.49681 14.6841 2.41211 14.4709 2.41211H4.01995C3.59352 2.41211 3.18456 2.58151 2.88304 2.88304C2.58151 3.18456 2.41211 3.59352 2.41211 4.01995C2.41211 4.44638 2.58151 4.85534 2.88304 5.15687C3.18456 5.45839 3.59352 5.62779 4.01995 5.62779H16.0788C16.292 5.62779 16.4965 5.71249 16.6472 5.86325C16.798 6.01402 16.8827 6.2185 16.8827 6.43171V9.6474M16.8827 9.6474H14.4709C14.0445 9.6474 13.6355 9.81679 13.334 10.1183C13.0325 10.4198 12.8631 10.8288 12.8631 11.2552C12.8631 11.6817 13.0325 12.0906 13.334 12.3922C13.6355 12.6937 14.0445 12.8631 14.4709 12.8631H16.8827C17.0959 12.8631 17.3004 12.7784 17.4511 12.6276C17.6019 12.4769 17.6866 12.2724 17.6866 12.0592V10.4513C17.6866 10.2381 17.6019 10.0336 17.4511 9.88286C17.3004 9.73209 17.0959 9.6474 16.8827 9.6474Z" stroke="#90A1B9" stroke-width="1.60784" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.41211 4.01953V15.2744C2.41211 15.7008 2.58151 16.1098 2.88304 16.4113C3.18456 16.7129 3.59352 16.8823 4.01995 16.8823H16.0788C16.292 16.8823 16.4965 16.7976 16.6472 16.6468C16.798 16.496 16.8827 16.2916 16.8827 16.0783V12.8627" stroke="#90A1B9" stroke-width="1.60784" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <p className="text-[10px] font-bold text-[#90A1B9] font-[Arial] uppercase">Available to Claim</p>
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">
              {parseFloat(availableTokens.toFixed(2)).toLocaleString()}{" "}
              <span className="text-xs font-bold text-gray-600 tracking-widest uppercase">TOKENS</span>
            </p>
          </div>

          <div className="bg-[#151B28]/60 border border-[#3141584D]  p-6">
            <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.64844 4.82422V9.64774L12.8641 11.2556" stroke="#90A1B9" stroke-width="1.60784" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.64858 17.6858C14.0885 17.6858 17.6878 14.0866 17.6878 9.64663C17.6878 5.2067 14.0885 1.60742 9.64858 1.60742C5.20865 1.60742 1.60938 5.2067 1.60938 9.64663C1.60938 14.0866 5.20865 17.6858 9.64858 17.6858Z" stroke="#90A1B9" stroke-width="1.60784" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <p className="text-[10px] font-bold text-[#90A1B9] tracking-widest uppercase">Next Vesting</p>
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">
              {parseFloat(cliffClaimable).toLocaleString()}{" "}
              <span className="text-xs font-bold text-gray-600 tracking-widest uppercase">TOKENS</span>
            </p>
            <p className="text-[10px] text-[#90A1B9] mt-2 font-medium tracking-wide">in {vestingStatus}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <button
            onClick={() => claimTGE(1)}
            disabled={isClaimingTGE || parseFloat(tgeClaimable) <= 0 || !userAddress}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white  py-4 font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {isClaimingTGE ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.097 8.04004H4.01857C3.46358 8.04004 3.01367 8.48995 3.01367 9.04494V11.0547C3.01367 11.6097 3.46358 12.0596 4.01857 12.0596H20.097C20.652 12.0596 21.1019 11.6097 21.1019 11.0547V9.04494C21.1019 8.48995 20.652 8.04004 20.097 8.04004Z" stroke="white" stroke-width="2.0098" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0586 8.04004V21.1037" stroke="white" stroke-width="2.0098" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.092 12.0586V19.0929C19.092 19.6259 18.8803 20.1371 18.5034 20.514C18.1265 20.891 17.6153 21.1027 17.0822 21.1027H7.03324C6.50021 21.1027 5.98901 20.891 5.61209 20.514C5.23518 20.1371 5.02344 19.6259 5.02344 19.0929V12.0586" stroke="white" stroke-width="2.0098" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.53569 8.03959C6.8694 8.03959 6.2304 7.77491 5.75926 7.30377C5.28812 6.83263 5.02344 6.19363 5.02344 5.52734C5.02344 4.86105 5.28812 4.22205 5.75926 3.75091C6.2304 3.27977 6.8694 3.01509 7.53569 3.01509C8.5051 2.9982 9.45508 3.46856 10.2617 4.36483C11.0684 5.2611 11.6942 6.54169 12.0577 8.03959C12.4212 6.54169 13.0471 5.2611 13.8538 4.36483C14.6604 3.46856 15.6104 2.9982 16.5798 3.01509C17.2461 3.01509 17.8851 3.27977 18.3562 3.75091C18.8274 4.22205 19.092 4.86105 19.092 5.52734C19.092 6.19363 18.8274 6.83263 18.3562 7.30377C17.8851 7.77491 17.2461 8.03959 16.5798 8.03959" stroke="white" stroke-width="2.0098" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                TGE Claim
              </>
            )}
          </button>

          <button
            onClick={() => claimVested(1)}
            disabled={isClaimingVested || parseFloat(cliffClaimable) <= 0 || !userAddress}
            className="w-full bg-transparent border border-white/10 hover:bg-white/5 text-white py-4 font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0921 7.03425V4.01955C19.0921 3.75303 18.9862 3.49743 18.7978 3.30898C18.6093 3.12052 18.3537 3.01465 18.0872 3.01465H5.02347C4.49044 3.01465 3.97924 3.22639 3.60233 3.60331C3.22542 3.98022 3.01367 4.49142 3.01367 5.02445C3.01367 5.55748 3.22542 6.06868 3.60233 6.44559C3.97924 6.8225 4.49044 7.03425 5.02347 7.03425H20.097C20.3635 7.03425 20.6191 7.14012 20.8076 7.32858C20.996 7.51704 21.1019 7.77264 21.1019 8.03915V12.0588M21.1019 12.0588H18.0872C17.5541 12.0588 17.0429 12.2705 16.666 12.6474C16.2891 13.0243 16.0774 13.5355 16.0774 14.0686C16.0774 14.6016 16.2891 15.1128 16.666 15.4897C17.0429 15.8666 17.5541 16.0784 18.0872 16.0784H21.1019C21.3684 16.0784 21.624 15.9725 21.8125 15.784C22.0009 15.5956 22.1068 15.34 22.1068 15.0735V13.0637C22.1068 12.7971 22.0009 12.5415 21.8125 12.3531C21.624 12.1646 21.3684 12.0588 21.1019 12.0588Z" stroke="#CAD5E2" stroke-width="2.0098" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.01367 5.02539V19.094C3.01367 19.627 3.22542 20.1382 3.60233 20.5151C3.97924 20.8921 4.49044 21.1038 5.02347 21.1038H20.097C20.3635 21.1038 20.6191 20.9979 20.8076 20.8095C20.996 20.621 21.1019 20.3654 21.1019 20.0989V16.0793" stroke="#CAD5E2" stroke-width="2.0098" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            Claim Vested
          </button>
        </div>

        <div className="bg-[#2B7FFF0D]/40 border border-white/5  p-4 text-center">
          <p className="text-[12px] text-gray-500 font-medium tracking-wide leading-relaxed">
            <span className="text-blue-500 font-bold">Note:</span> Tokens are vested linearly over 6 months after TGE. You can claim available tokens anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
