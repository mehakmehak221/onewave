"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const presaleImages = ["/presale11.png", "/presale12.png", "/presale13.png"];

export default function RWA() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const maxIndex = presaleImages.length - 2;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          setDirection(-1);
          return prev - 1;
        }

        if (prev <= 0) {
          setDirection(1);
          return prev + 1;
        }

        return prev + direction;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [direction, isPaused, maxIndex]);

  useEffect(() => {
    if (!isPaused) return;

    const timer = setTimeout(() => {
      setIsPaused(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isPaused]);

  const goToPrevious = () => {
    setIsPaused(true);
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setIsPaused(true);
    setDirection(1);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="w-full relative">
      <div className="relative lg:aspect-[1920/656] hidden lg:flex">
        <Image
          src="/bgRWAPresaleimg.png"
          alt="rwa bg"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center max-w-[96rem] mx-auto">
          <div className="w-full max-w-[90%] h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-[60%] xl:w-[50%] flex flex-col space-y-6 px-2"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-[37px] xl:text-5xl text-white leading-tight">
                Planned Utility-Driven Ecosystem Access
              </h2>
              <p className="text-base lg:text-base xl:text-base text-white/80 leading-relaxed ">
                OneWave Fintech S.A. (in formation, Republic of Panama) is developing a decentralized ecosystem designed to
                support future utility-driven participation. Token-related
                functionality, if introduced, will be enabled only following
                regulatory review, eligibility verification, and acceptance of
                applicable agreements, including SAFT where required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-[40%] xl:w-[50%] relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-4xl flex justify-end">
                <Image
                  src="/techwave.png"
                  alt="TechWave Logo"
                  width={320}
                  height={320}
                  className=" object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="relative aspect-[1058/656] flex lg:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/bgmobile.png)" }}
      ></div>
      <div className="w-full flex lg:hidden px-10 py-14 sm:my-16 md:py-20">
        <div className="w-full max-w-md md:max-w-2xl mx-auto relative">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/techwave.png"
              alt="TechWave Logo"
              width={250}
              height={250}
              className=" object-contain rounded-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
