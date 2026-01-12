"use client";

interface StatsCardsProps {
  maxSupply: string;
  tgePercent: number;
  loadingSupply: boolean;
  loadingTGE: boolean;
}

export default function StatsCards({ maxSupply, tgePercent, loadingSupply, loadingTGE }: StatsCardsProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#0F172AB2]/80 to-[#00D2FF33] backdrop-blur-xl border border-blue-500/20 p-10  shadow-2xl transition-all hover:border-blue-500/40">
        <div className="text-center">
          <p className="text-lg text-[#2171E6] font-bold mb-6 tracking-[0.2em] uppercase">MAX SUPPLY</p>
          <div className="text-5xl font-bold text-white font-[JetBrains Mono] text-[#2171E6] tracking-tighter">
            {loadingSupply ? (
              <span className="animate-pulse">...</span>
            ) : (
              `${parseFloat(parseFloat(maxSupply).toFixed(1)).toLocaleString()}M`
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#0F172AB2]/80 to-[#00D2FF33] backdrop-blur-xl border border-blue-500/20 p-10  shadow-2xl transition-all hover:border-blue-500/40">
        <div className="text-center">
          <p className="text-lg text-[#2171E6] font-bold mb-6 tracking-[0.2em] uppercase">TGE UNLOCK</p>
          <div className="text-5xl font-bold font-[JetBrains Mono] text-[#2171E6] tracking-tighter">
            {loadingTGE ? (
              <span className="animate-pulse">...</span>
            ) : (
              `${tgePercent}.0%`
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
