"use client";

import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { parseUnits, formatUnits } from "viem";
import { CONTRACTS, DECIMALS } from "../contracts";
import WavePresaleABI from "../abis/WavePresale.json";
import WaveTokenABI from "../abis/WaveTokenV2.json";
import MockUSDTABI from "../abis/MockUSDT.json";
import MockUSDCABI from "../abis/MockUSDC.json";

export function useTotalRaised() {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACTS.PRESALE as `0x${string}`,
    abi: WavePresaleABI,
    functionName: "totalUSDRaised",
  });

  return {
    totalRaised: data ? formatUnits(data as bigint, 6) : "0",
    isLoading,
    error,
  };
}

export function useMaxSupply() {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACTS.WAVE as `0x${string}`,
    abi: WaveTokenABI,
    functionName: "maxSupply",
  });

  return {
    maxSupply: data ? formatUnits(data as bigint, DECIMALS.WAVE) : "0",
    isLoading,
    error,
  };
}

export function useTGEPercent() {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACTS.PRESALE as `0x${string}`,
    abi: WavePresaleABI,
    functionName: "tgePercent",
  });

  return {
    tgePercent: data ? Number(data) : 0,
    isLoading,
    error,
  };
}

export function useClaimableTokens(userAddress: `0x${string}` | undefined, round: number = 1) {
  const { data: tgeClaimable } = useReadContract({
    address: CONTRACTS.PRESALE as `0x${string}`,
    abi: WavePresaleABI,
    functionName: "viewTGEClaimable",
    args: [BigInt(round), userAddress],
    query: {
      enabled: !!userAddress,
    },
  });

  const { data: cliffClaimable } = useReadContract({
    address: CONTRACTS.PRESALE as `0x${string}`,
    abi: WavePresaleABI,
    functionName: "viewCliffClaimable",
    args: [BigInt(round), userAddress],
    query: {
      enabled: !!userAddress,
    },
  });

  return {
    tgeClaimable: tgeClaimable ? formatUnits(tgeClaimable as bigint, DECIMALS.WAVE) : "0",
    cliffClaimable: cliffClaimable ? formatUnits(cliffClaimable as bigint, DECIMALS.WAVE) : "0",
  };
}

export function useUserPurchaseInfo(userAddress: `0x${string}` | undefined, round: number = 1) {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACTS.PRESALE as `0x${string}`,
    abi: WavePresaleABI,
    functionName: "getUserPurchaseInfo",
    args: [BigInt(round), userAddress],
    query: {
      enabled: !!userAddress,
    },
  });

  if (!data) {
    return {
      totalTokens: "0",
      tgeClaimed: "0",
      cliffClaimed: "0",
      lastClaimTime: "0",
      remainingAmount: "0",
      customTGEPercent: "0",
      customCliffPercent: "0",
      isLoading,
      error,
    };
  }

  
  const [
    totalTokens, 
    tgeClaimed, 
    cliffClaimed, 
    lastClaimTime, 
    remainingAmount, 
    customTGEPercent, 
    customCliffPercent
  ] = data as [bigint, bigint, bigint, bigint, bigint, bigint, bigint];

  return {
    totalTokens: formatUnits(totalTokens, DECIMALS.WAVE),
    tgeClaimed: formatUnits(tgeClaimed, DECIMALS.WAVE),
    cliffClaimed: formatUnits(cliffClaimed, DECIMALS.WAVE), 
    lastClaimTime: Number(lastClaimTime),
    remainingAmount: formatUnits(remainingAmount, DECIMALS.WAVE),
    customTGEPercent: Number(customTGEPercent),
    customCliffPercent: Number(customCliffPercent),
    isLoading,
    error,
  };
}

export function usePresaleRoundInfo(round: number = 1) {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACTS.PRESALE as `0x${string}`,
    abi: WavePresaleABI,
    functionName: "getPresaleRoundInfo",
    args: [BigInt(round)],
  });

  if (!data) {
    return {
      startTime: 0,
      endTime: 0,
      tgeTime: 0,
      tgePercent: 0,
      cliffDuration: 0,
      tokenPrice: "0",
      isLoading,
      error,
    };
  }

  const [
    tokenPrice,
    totalAllocation,
    soldAmount,
    startTime,
    endTime,
    tgeTime,
    tgePercent,
    cliffDuration
  ] = data as [bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint];

  return {
    tokenPrice: formatUnits(tokenPrice, DECIMALS.USDT), 
    totalAllocation: formatUnits(totalAllocation, DECIMALS.WAVE),
    soldAmount: formatUnits(soldAmount, DECIMALS.WAVE),
    startTime: Number(startTime),
    endTime: Number(endTime),
    tgeTime: Number(tgeTime),
    tgePercent: Number(tgePercent),
    cliffDuration: Number(cliffDuration),
    isLoading,
    error,
  };
}

export function useApproveToken(tokenAddress: `0x${string}`, tokenType: "USDT" | "USDC") {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const approve = (amount: string) => {
    const decimals = DECIMALS[tokenType];
    const amountInWei = parseUnits(amount, decimals);

    writeContract({
      address: tokenAddress,
      abi: tokenType === "USDT" ? MockUSDTABI : MockUSDCABI,
      functionName: "approve",
      args: [CONTRACTS.PRESALE, amountInWei],
    });
  };

  return {
    approve,
    isPending: isPending || isConfirming,
    isSuccess,
    hash,
  };
}


export function useBuyWithNative() {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const buy = (amount: string, round: number = 1) => {
    const amountInWei = parseUnits(amount, 18); 

    writeContract({
      address: CONTRACTS.PRESALE as `0x${string}`,
      abi: WavePresaleABI,
      functionName: "buyWithBNB",
      args: [BigInt(round)],
      value: amountInWei,
    });
  };

  return {
    buy,
    isPending: isPending || isConfirming,
    isSuccess,
    hash,
  };
}

export function useBuyWithUSDT() {

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const buy = (amount: string, round: number = 1) => {
    const amountInWei = parseUnits(amount, DECIMALS.USDT);

    writeContract({
      address: CONTRACTS.PRESALE as `0x${string}`,
      abi: WavePresaleABI,
      functionName: "buyWithUSDT",
      args: [BigInt(round), amountInWei],
    });
  };

  return {
    buy,
    isPending: isPending || isConfirming,
    isSuccess,
    hash,
  };
}

export function useBuyWithUSDC() {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const buy = (amount: string, round: number = 1) => {
    const amountInWei = parseUnits(amount, DECIMALS.USDC);

    writeContract({
      address: CONTRACTS.PRESALE as `0x${string}`,
      abi: WavePresaleABI,
      functionName: "buyWithUSDC",
      args: [BigInt(round), amountInWei],
    });
  };

  return {
    buy,
    isPending: isPending || isConfirming,
    isSuccess,
    hash,
  };
}

export function useClaimTGE() {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const claim = (round: number = 1) => {
    writeContract({
      address: CONTRACTS.PRESALE as `0x${string}`,
      abi: WavePresaleABI,
      functionName: "tgeClaim",
      args: [BigInt(round)],
    });
  };

  return {
    claim,
    isPending: isPending || isConfirming,
    isSuccess,
    hash,
  };
}

export function useClaimVested() {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const claim = (round: number = 1) => {
    writeContract({
      address: CONTRACTS.PRESALE as `0x${string}`,
      abi: WavePresaleABI,
      functionName: "cliffClaim",
      args: [BigInt(round)],
    });
  };

  return {
    claim,
    isPending: isPending || isConfirming,
    isSuccess,
    hash,
  };
}

/**
 * Calculate the exact token amount for a given payment
 * @param round 
 * @param paymentType 
 * @param paymentAmount 
 */
export function useCalculateTokenAmount(
  round: number = 1,
  paymentType: 0 | 1 | 2,
  paymentAmount: string
) {
  const decimals = paymentType === 0 ? DECIMALS.BNB : paymentType === 1 ? DECIMALS.USDT : DECIMALS.USDC;
  const amountInWei = paymentAmount && parseFloat(paymentAmount) > 0 
    ? parseUnits(paymentAmount, decimals) 
    : BigInt(0);

  const { data, isLoading, error } = useReadContract({
    address: CONTRACTS.PRESALE as `0x${string}`,
    abi: WavePresaleABI,
    functionName: "calculateTokenAmount",
    args: [BigInt(round), BigInt(paymentType), amountInWei],
    query: {
      enabled: parseFloat(paymentAmount) > 0,
    },
  });

  return {
    tokenAmount: data ? formatUnits(data as bigint, DECIMALS.WAVE) : "0",
    isLoading,
    error,
  };
}
