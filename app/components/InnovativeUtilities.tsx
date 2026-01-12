"use client";

import { motion, Variants } from "framer-motion";

// Utility to Feature index mapping (0-indexed)
const utilityFeatureMap: { [key: string]: number } = {
  "Wave Blockchain": 0,
  "Wave Crypto Exchange": 2,
  "Wave Payment Gateway": 3,
  "Crypto Gaming": 4,
  "AI Calling": 1,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function InnovativeUtilities({
  onFeatureClick,
}: {
  onFeatureClick: (featureIndex: number) => void;
}) {
  return (
    <motion.div
      id="utilities"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-4 justify-center items-center z-10"
    >
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full auto-rows-[minmax(180px,auto)]">
        {/* Left Column - Large on Desktop */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <motion.div
            variants={itemVariants}
            className="w-full flex-grow min-h-[250px] lg:h-[350px]"
          >
            <TextBuilder
              heading="Wave Blockchain"
              description="EVM-compatible blockchain driving the foundation for all DeFi systems."
              MainclassName="overflow-hidden h-full"
              className=""
              deepVideoClass="scale-[0.7] lg:scale-[1.3] tranform -translate-y-0 lg:-translate-y-8 2xl:-translate-y-10"
              video="/6.webm"
              onClick={() =>
                onFeatureClick(utilityFeatureMap["Wave Blockchain"])
              }
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full min-h-[160px] lg:flex-grow"
          >
            <TextBuilder
              heading="Wave Payment Gateway"
              description="Seamless blockchain gateway powering payments across every DeFi network."
              onClick={() =>
                onFeatureClick(utilityFeatureMap["Wave Payment Gateway"])
              }
              MainclassName="h-full"
            />
          </motion.div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <motion.div
              variants={itemVariants}
              className="w-full min-h-[160px] lg:flex-grow"
            >
              <TextBuilder
                heading="Wave Staking"
                description="Stake trusted tokens and expand your holdings with secure growth. Stake Crypto. Earn WAVE Tokens."
                MainclassName="h-full"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full min-h-[160px] lg:flex-grow"
            >
              <TextBuilder
                video="/4.webm"
                MainclassName="overflow-hidden h-full"
                heading="Wave FinLearn"
                description="From trading to tech, learn anytime with verified mentors. Courses that truly pay, literally."
              />
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-full min-h-[200px] lg:min-h-[280px] lg:flex-grow"
          >
            <TextBuilder
              MainclassName="overflow-hidden h-full"
              className=""
              deepVideoClass="scale-[0.7] tranform -translate-y-0 lg:-translate-y-3 2xl:-translate-y-5"
              video="/2.webm"
              heading="Wave Crypto Exchange"
              description="A complete trading experience for all users. Fast, secure, and low-cost — all in one place."
              onClick={() =>
                onFeatureClick(utilityFeatureMap["Wave Crypto Exchange"])
              }
            />
          </motion.div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <motion.div
            variants={itemVariants}
            className="w-full flex-grow min-h-[250px] lg:h-[350px]"
          >
            <TextBuilder
              deepVideoClass="scale-[0.7] lg:scale-[1.6] tranform -translate-y-0 lg:-translate-y-20 2xl:-translate-y-24"
              MainclassName="overflow-hidden p-3 sm:p-5 h-full"
              video="/3.webm"
              heading="Crypto Gaming"
              description="Gaming redefined. With Wave, your gameplay skills now bring real digital rewards."
              onClick={() => onFeatureClick(utilityFeatureMap["Crypto Gaming"])}
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full min-h-[160px] lg:flex-grow"
          >
            <TextBuilder
              heading="AI Calling"
              description="Make effortless, silent AI-powered calls no speaking needed."
              onClick={() => onFeatureClick(utilityFeatureMap["AI Calling"])}
              MainclassName="h-full"
            />
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4">
        <motion.div
          variants={itemVariants}
          className="w-full min-h-[180px] sm:min-h-[200px]"
        >
          <TextBuilder2
            heading="Wave Money"
            description="Carry blockchain in your pocket. Wave Money unites digital assets and everyday utilities seamlessly."
            MainclassName="h-full"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="w-full min-h-[180px] sm:min-h-[200px]"
        >
          <TextBuilder2
            heading="Wave Card"
            description="Turn your crypto into real-world power. Spend globally with one tap using Wave Card anywhere."
            video="/5-2.webm"
            MainclassName="h-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

const TextBuilder2 = ({
  heading,
  description,
  MainclassName,
  video,
  className,
  onClick,
}: {
  heading: string;
  description: string;
  MainclassName?: string;
  video?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 relative isolate overflow-hidden w-full h-full text-center justify-start bg-[#070d1e] border rounded-xl items-start sm:items-center p-4 transition-all duration-300 ${
        onClick
          ? "cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
          : ""
      } ${MainclassName || ""}`}
      onClick={onClick}
    >
      <div className="flex min-w-0 text-start flex-col justify-center h-full sm:pr-2 z-20 drop-shadow-md">
        <h2 className="text-lg sm:text-lg lg:text-xl font-bold text-white mb-2">
          {heading}
        </h2>
        <p className="text-white/70 text-sm break-words">{description}</p>
      </div>

      {video && (
        <>
          <div className="sm:hidden relative w-full mt-4 h-[140px] overflow-hidden rounded-xl pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/35 to-transparent z-10" />
            <video
              src={video}
              className={`w-full h-full object-contain mix-blend-screen opacity-80 ${
                className || ""
              }`}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="hidden sm:block relative w-full h-full overflow-hidden rounded-r-xl pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#070d1e]/10 to-[#070d1e]/60 z-10" />
            <video
              src={video}
              className={`w-full h-full object-contain mix-blend-screen opacity-80 ${
                className || ""
              }`}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </>
      )}
    </div>
  );
  // };
};

const TextBuilder = ({
  heading,
  description,
  MainclassName,
  video,
  className,
  deepVideoClass,
  onClick,
}: {
  heading: string;
  description: string;
  MainclassName?: string;
  video?: string;
  className?: string;
  deepVideoClass?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`flex relative isolate overflow-hidden flex-col min-h-0 w-full h-full text-center items-center justify-start bg-[#070d1e] border rounded-xl p-4 sm:p-5 transition-all duration-300 ${
        onClick
          ? "cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
          : ""
      } ${MainclassName || ""}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center z-20 w-full drop-shadow-md">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
          {heading}
        </h2>
        <p className="text-white/70 text-sm max-w-[90%]">{description}</p>
      </div>

      {video && (
        <div
          className={`relative mt-3 flex-1 min-h-[120px] sm:min-h-[140px] w-full overflow-hidden pointer-events-none ${
            className || ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/35 to-transparent z-10" />
          <video
            src={video}
            className={`w-full h-full object-contain object-bottom rounded-b-xl mix-blend-screen opacity-90 ${
              deepVideoClass || ""
            }`}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      )}
    </div>
  );
};
