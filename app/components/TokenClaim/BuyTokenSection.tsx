"use client";

import { useState, useEffect } from "react";
import { useAccount, useBalance } from "wagmi";
import { useApproveToken, useBuyWithUSDT, useBuyWithUSDC, useBuyWithNative, usePresaleRoundInfo, useCalculateTokenAmount } from "@/app/web3/hooks/usePresale";
import { CONTRACTS } from "@/app/web3/contracts";

const CHAIN_DATA: Record<string, { tokens: string[] }> = {
  BSC: { tokens: ["BNB", "USDT", "USDC"] },
  Ethereum: { tokens: ["ETH", "USDT", "USDC"] },
  Polygon: { tokens: ["POL", "USDT", "USDC"] },
  Base: { tokens: ["ETH", "USDT", "USDC"] },
  Arbitrum: { tokens: ["ETH", "USDT", "USDC"] },
};

export default function BuyTokenSection() {
  const { address, isConnected } = useAccount();
  const [selectedChain, setSelectedChain] = useState("BSC");
  const [selectedToken, setSelectedToken] = useState("BNB");
  const [amount, setAmount] = useState("");
  const [tokensToReceive, setTokensToReceive] = useState("0");
  const [step, setStep] = useState<"approve" | "buy">("approve");

  const isNative = ["BNB", "ETH", "POL"].includes(selectedToken);
  const tokenAddress = selectedToken === "USDT" ? CONTRACTS.USDT : selectedToken === "USDC" ? CONTRACTS.USDC : undefined;

 
  const paymentType = selectedToken === "USDT" ? 1 : selectedToken === "USDC" ? 2 : 0;

  const { data: balanceData } = useBalance({
    address,
    token: isNative ? undefined : (tokenAddress as `0x${string}`),
  });

  const { approve, isPending: isApproving, isSuccess: approveSuccess } = useApproveToken(
    (tokenAddress || "0x") as `0x${string}`,
    selectedToken as "USDT" | "USDC"
  );

  const { tokenPrice, isLoading: loadingPrice } = usePresaleRoundInfo(1);

  
  const { tokenAmount: calculatedTokens, isLoading: isCalculating } = useCalculateTokenAmount(
    1, 
    paymentType as 0 | 1 | 2,
    amount || "0"
  );

  const { buy: buyWithUSDT, isPending: isBuyingUSDT, isSuccess: buySuccessUSDT } = useBuyWithUSDT();
  const { buy: buyWithUSDC, isPending: isBuyingUSDC, isSuccess: buySuccessUSDC } = useBuyWithUSDC();
  const { buy: buyWithNative, isPending: isBuyingNative, isSuccess: buySuccessNative } = useBuyWithNative();

  const isBuying = isBuyingUSDT || isBuyingUSDC || isBuyingNative;
  const buySuccess = buySuccessUSDT || buySuccessUSDC || buySuccessNative;

 
  useEffect(() => {
    if (calculatedTokens && parseFloat(calculatedTokens) > 0) {
      setTokensToReceive(parseFloat(calculatedTokens).toLocaleString(undefined, { maximumFractionDigits: 2 }));
    } else {
      setTokensToReceive("0");
    }
  }, [calculatedTokens]);

  useEffect(() => {
    if (approveSuccess) {
      setStep("buy");
    }
  }, [approveSuccess]);

  useEffect(() => {
    if (buySuccess) {
      setAmount("");
      setTokensToReceive("0");
      setStep("approve");
    }
  }, [buySuccess]);


  useEffect(() => {
    if (isNative) {
      setStep("buy");
    } else {
      setStep("approve");
    }
  }, [selectedToken, isNative]);

  const handleApprove = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    if (isNative) {
      setStep("buy");
      return;
    }
    approve(amount);
  };

  const handleBuy = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    if (selectedToken === "USDT") {
      buyWithUSDT(amount);
    } else if (selectedToken === "USDC") {
      buyWithUSDC(amount);
    } else {
      buyWithNative(amount);
    }
  };

  return (
    <div className="bg-[#0F172AB2]/80 to-[#00D2FF33] backdrop-blur-xl border border-[#00D2FF33] p-8  shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-[#2171E6] font-[Space Grotesk] uppercase">BUY TOKENS</h2>
        <div className="w-12 h-12 rounded-xl bg-[#00B8DB1A] flex items-center justify-center">
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.1361 6.30907C23.1361 5.75132 22.9146 5.21641 22.5202 4.82201C22.1258 4.42762 21.5909 4.20605 21.0331 4.20605C20.4754 4.20605 19.9405 4.42762 19.5461 4.82201C19.1517 5.21641 18.9301 5.75132 18.9301 6.30907V8.41209C18.9301 8.96984 19.1517 9.50476 19.5461 9.89915C19.9405 10.2935 20.4754 10.5151 21.0331 10.5151C21.5909 10.5151 22.1258 10.2935 22.5202 9.89915C22.9146 9.50476 23.1361 8.96984 23.1361 8.41209V6.30907ZM32.9299 12.0924C33.313 11.6957 33.5249 11.1645 33.5202 10.6131C33.5154 10.0617 33.2942 9.53424 32.9043 9.14432C32.5144 8.7544 31.9869 8.53323 31.4355 8.52844C30.8841 8.52365 30.3529 8.73562 29.9562 9.1187L28.4694 10.6055C28.0863 11.0022 27.8743 11.5334 27.8791 12.0848C27.8839 12.6362 28.1051 13.1637 28.495 13.5536C28.8849 13.9435 29.4124 14.1647 29.9638 14.1695C30.5152 14.1743 31.0464 13.9623 31.4431 13.5792L32.9299 12.0924ZM37.8573 21.0302C37.8573 21.5879 37.6357 22.1229 37.2413 22.5173C36.8469 22.9116 36.312 23.1332 35.7542 23.1332H33.6512C33.0935 23.1332 32.5586 22.9116 32.1642 22.5173C31.7698 22.1229 31.5482 21.5879 31.5482 21.0302C31.5482 20.4724 31.7698 19.9375 32.1642 19.5431C32.5586 19.1487 33.0935 18.9272 33.6512 18.9272H35.7542C36.312 18.9272 36.8469 19.1487 37.2413 19.5431C37.6357 19.9375 37.8573 20.4724 37.8573 21.0302ZM10.6232 13.5792C11.0063 13.1826 11.2182 12.6513 11.2135 12.0999C11.2087 11.5485 10.9875 11.0211 10.5976 10.6312C10.2077 10.2412 9.68019 10.0201 9.12879 10.0153C8.57738 10.0105 8.04615 10.2225 7.64952 10.6055L6.16269 12.0924C5.96183 12.2864 5.80162 12.5184 5.6914 12.775C5.58118 13.0316 5.52317 13.3075 5.52074 13.5868C5.51831 13.866 5.57152 14.1429 5.67727 14.4014C5.78301 14.6598 5.93916 14.8946 6.13662 15.0921C6.33408 15.2896 6.56888 15.4457 6.82734 15.5515C7.08579 15.6572 7.36272 15.7104 7.64195 15.708C7.92119 15.7056 8.19715 15.6475 8.45372 15.5373C8.7103 15.4271 8.94236 15.2669 9.13635 15.066L10.6232 13.5792ZM10.518 21.0302C10.518 21.5879 10.2965 22.1229 9.90208 22.5173C9.50768 22.9116 8.97277 23.1332 8.41502 23.1332H6.312C5.75425 23.1332 5.21934 22.9116 4.82494 22.5173C4.43055 22.1229 4.20898 21.5879 4.20898 21.0302C4.20898 20.4724 4.43055 19.9375 4.82494 19.5431C5.21934 19.1487 5.75425 18.9272 6.312 18.9272H8.41502C8.97277 18.9272 9.50768 19.1487 9.90208 19.5431C10.2965 19.9375 10.518 20.4724 10.518 21.0302ZM16.8271 33.6483V31.5453H25.2392V33.6483C25.2392 34.7638 24.796 35.8336 24.0072 36.6224C23.2185 37.4112 22.1486 37.8543 21.0331 37.8543C19.9176 37.8543 18.8478 37.4112 18.059 36.6224C17.2702 35.8336 16.8271 34.7638 16.8271 33.6483ZM25.2392 29.4423C25.2707 28.7272 25.6766 28.0837 26.2423 27.6358C27.6149 26.5533 28.6162 25.07 29.1069 23.3922C29.5977 21.7144 29.5535 19.9254 28.9806 18.2738C28.4077 16.6223 27.3345 15.1902 25.9102 14.1767C24.4859 13.1632 22.7812 12.6186 21.0331 12.6186C19.285 12.6186 17.5803 13.1632 16.156 14.1767C14.7317 15.1902 13.6585 16.6223 13.0856 18.2738C12.5127 19.9254 12.4686 21.7144 12.9593 23.3922C13.4501 25.07 14.4513 26.5533 15.8239 27.6358C16.3918 28.0837 16.7955 28.7272 16.8271 29.4423H25.2392Z" fill="#2171E6"/>
</svg>

        </div>
      </div>

      <div className="space-y-8">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="block text-md font-normal text-[#90A1B9] font-[Arial] tracking-[0.2em] uppercase">SELECT CHAIN</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                <div className="w-6 h-6 rounded-full bg-[#1D293D80] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                </div>
              </div>
              <select
                value={selectedChain}
                onChange={(e) => {
                  const newChain = e.target.value;
                  setSelectedChain(newChain);
                  setSelectedToken(CHAIN_DATA[newChain].tokens[0]);
                }}
                className="w-full bg-[#151B28] border border-[#31415880]  pl-12 pr-10 py-4 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all hover:bg-[#1A2232]"
              >
                {Object.keys(CHAIN_DATA).map((chain) => (
                  <option key={chain} value={chain}>{chain}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-md font-normal text-[#90A1B9] font-[Arial] tracking-[0.2em] uppercase">SELECT TOKEN</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <select
                value={selectedToken}
                onChange={(e) => setSelectedToken(e.target.value)}
                className="w-full bg-[#151B28] border border-[#31415880] pl-12 pr-10 py-4 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all hover:bg-[#1A2232]"
              >
                {CHAIN_DATA[selectedChain].tokens.map((token) => (
                  <option key={token} value={token}>{token}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

       
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="block text-md font-normal text-[#90A1B9] font-[Arial] tracking-[0.2em] uppercase">ENTER AMOUNT</label>
            {isConnected && balanceData && (
              <span className="text-md text-[#90A1B9] font-normal font-[Arial] lowercase tracking-wide">
                balance: {parseFloat(balanceData.formatted).toFixed(4)} {balanceData.symbol}
              </span>
            )}
          </div>
          <div className="relative group">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="w-full bg-[#151B28] border border-white/5  px-6 py-5 text-white text-2xl font-bold placeholder-[#90A1B9] transition-all focus:outline-none focus:border-blue-500/30 group-hover:bg-[#1A2232]"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#31415880]  px-4 py-2 flex items-center gap-2 shadow-lg">
              <div className="w-6 h-6  rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-bold text-white tracking-widest">{selectedToken}</span>
            </div>
          </div>
        </div>

        
        <div className="bg-gradient-to-r from-[#2B7FFF1A] to-[#AD46FF1A] bg-[#00B8DB1A] border border-white/[0.03]  p-4 shadow-inner">
          <p className="text-[10px] font-bold text-[#90A1B9] tracking-widest uppercase mb-2">You Will Receive</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white tracking-tight">{tokensToReceive}</span>
            <span className="text-xs font-bold text-[#90A1B9] tracking-[0.2em] uppercase">TOKENS</span>
          </div>
        </div>

      
        {!isConnected ? (
          <button
            disabled
            className="w-full bg-white/5 text-gray-600 py-5  font-bold tracking-[0.3em] uppercase cursor-not-allowed border border-white/5"
          >
            Connect Wallet First
          </button>
        ) : (
          <button
            onClick={step === "approve" ? handleApprove : handleBuy}
            disabled={isApproving || isBuying || !amount || parseFloat(amount) <= 0}
            className="w-full bg-gradient-to-r from-[#2171E6] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#60A5FA] text-white  py-5 font-extrabold tracking-[0.2em] uppercase transition-all duration-300 shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isApproving || isBuying ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white  animate-spin" />
                <span className="animate-pulse">{isApproving ? "Approving..." : "Buying..."}</span>
              </>
            ) : (
              <>
                <span>{step === "approve" ? `Approve ${selectedToken}` : "Buy Now"}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
