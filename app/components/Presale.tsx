"use client";

import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const presalePhases = [
  {
    phase: 1,
    price: 0.25,
    cliff: "4 Months",
    vesting: "10% X 13 Months total",
  },
];

export default function Presale() {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push("/buy-now");
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24">
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
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16"
        >
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold text-white/60 tracking-wider uppercase mb-3 sm:mb-4">
              PLANNED ECOSYSTEM ACCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Planned Utility-Driven Ecosystem Access
            </h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
              OneWave Fintech S.A. (in formation, Republic of Panama) is developing a decentralized ecosystem designed to
              support future utility-driven participation. Token-related
              functionality, if introduced, will be enabled only following
              regulatory review, eligibility verification, and acceptance of
              applicable agreements, including SAFT where required.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 flex justify-center"
          >
            {presalePhases.map((phase) => (
              <motion.div
                key={phase.phase}
                variants={itemVariants}
                className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                style={{
                  boxShadow:
                    "0 8px 32px 0 rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.1)",
                }}
              >
                {/* Decorative blurs */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/20 rounded-full blur-[60px]" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                    Presale Phase {phase.phase}
                  </h3>

                  <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-white/80 text-sm sm:text-base whitespace-nowrap font-medium">
                        Price
                      </span>
                      <div className="flex-1 border-b border-dotted border-white/20" />
                      <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">
                        ${phase.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-white/80 text-sm sm:text-base whitespace-nowrap font-medium">
                        Cliff
                      </span>
                      <div className="flex-1 border-b border-dotted border-white/20" />
                      <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">
                        {phase.cliff}
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-white/80 text-sm sm:text-base whitespace-nowrap font-medium">
                        Vesting
                      </span>
                      <div className="flex-1 border-b border-dotted border-white/20" />
                      <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">
                        {phase.vesting}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 sm:py-4 px-4 text-lg sm:text-xl rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
