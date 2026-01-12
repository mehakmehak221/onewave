import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bscTestnet } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "Wave Presale",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "ae8084487fd202b73e1787f79f5b9bf1",
  chains: [bscTestnet],
  ssr: true,
});
