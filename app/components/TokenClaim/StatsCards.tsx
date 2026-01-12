"use client";

interface StatsCardsProps {
  maxSupply: string;
  tgePercent: number;
  loadingSupply: boolean;
  loadingTGE: boolean;
}

export default function StatsCards({ maxSupply, tgePercent, loadingSupply, loadingTGE }: StatsCardsProps) {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur-sm border border-[#00D2FF33]  p-8 shadow-xl">
        <div className="text-center">
          <p className="text-lg text-[#2171E6] font-medium mb-4 tracking-wider">MAX SUPPLY</p>
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-[#E2E8F0] mb-2">
            {loadingSupply ? (
              <span className="animate-pulse">...</span>
            ) : (
              `${parseFloat(parseFloat(maxSupply).toFixed(1)).toLocaleString()}M`
            )}
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-4" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur-sm border border-[#00D2FF33]  p-8 shadow-xl">
        <div className="text-center">
          <p className="text-lg text-[#2171E6] font-medium mb-4 tracking-wider">TGE UNLOCK</p>
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-[#2171E6] mb-2">
            {loadingTGE ? (
              <span className="animate-pulse">...</span>
            ) : (
              `${tgePercent}%`
            )}
          </div>
        
        </div>
      </div>

      
    </>
  );
}
