/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const roadmapData = [
  {
    quarter: "Q1",
    year: "2026",
    items: [
      "India recharge & bill payments (Live)",
      "Crypto deposit & withdrawal (Live)",
      "Buy, Sell & Swap functionality (Live)",
      "Wave Money platform partnership (1st January 2026)",
      "Recharge & bill payments for 90+ countries (by 15th January 2026)",
      "Wave Gaming launch (End of January 2026)",
      "International Forex platform launch (End of January 2026)",
    ],
  },
  {
    quarter: "Q2",
    year: "2026",
    items: [
      "Physical Wave Card launch (1st week of April 2026)",
      "OneWave Blockchain Mainnet launch",
    ],
  },
  {
    quarter: "Q3",
    year: "2026",
    items: [
      "Merchant crypto payment gateway launch",
      "AI-powered calling and voice-based transactions",
    ],
  },
  {
    quarter: "Q4",
    year: "2026",
    items: ["Finlearn platform launch"],
  },
];
const RoadmapCard = ({
  quarter,
  year,
  items,
}: {
  quarter: string;
  year: string;
  items: string[];
}) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/2 border border-blue-500/50 rounded-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden min-h-[320px] h-full w-full"
      style={{
        boxShadow:
          "0 0 60px rgba(59, 130, 246, 0.3), inset 0 1px 0 0 rgba(255,255,255,0.05)",
      }}
    >
      <div className="absolute top-0 left-0 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-blue-500/30 rounded-full blur-[60px] sm:blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-blue-600/20 rounded-full blur-[80px] sm:blur-[100px]" />
      <div className="absolute inset-0 items-center justify-end pr-4 sm:pr-6 pointer-events-none hidden sm:flex">
        <span className="text-[120px] sm:text-[160px] lg:text-[200px] xl:text-[240px] leading-none scale-x-[1.15] blur-sm text-[#3d75e9] font-bold opacity-30">
          {year}
        </span>
      </div>
      <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 h-full">
        <div className="w-full sm:w-1/3 flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-4">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
            {quarter}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3d75e9]">
            {year}
          </h3>
        </div>
        <div className="w-full sm:w-2/3 backdrop-blur-sm bg-black/40 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 h-full overflow-y-auto">
          <ul className="space-y-2 sm:space-y-3 w-full">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 sm:gap-3 w-full"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#3d75e9] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-white text-xs sm:text-sm lg:text-base flex-1">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default function Roadmap() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roadmapData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isDragging]);
  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (Math.abs(velocity) > 500 || Math.abs(offset) > 100) {
      if (offset > 0) {
        setCurrentIndex(
          (prev) => (prev - 1 + roadmapData.length) % roadmapData.length
        );
      } else {
        setCurrentIndex((prev) => (prev + 1) % roadmapData.length);
      }
    }
  };
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-blue-400/30 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-400/30 rounded-full blur-[100px] sm:blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="w-full"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold text-white/60 tracking-wider uppercase mb-3 sm:mb-4">
              ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Milestones And Future Plans
            </h2>
          </motion.div>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <RoadmapCard
              quarter={roadmapData[currentIndex].quarter}
              year={roadmapData[currentIndex].year}
              items={roadmapData[currentIndex].items}
            />
          </motion.div>
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {roadmapData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#3d75e9] w-8 sm:w-10"
                    : "bg-white/30 hover:bg-white/50 w-4 sm:w-5"
                }`}
                aria-label={`Go to ${roadmapData[index].quarter} ${roadmapData[index].year}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
