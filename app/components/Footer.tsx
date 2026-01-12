"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="relative py-14 md:py-[68px] lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/footerbg.png"
          alt="Background"
          fill
          style={{ opacity: 0.3 }}
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-sf-pro-display-regular mb-4 sm:mb-6 leading-tight">
          DECENTRALIZED ECOSYSTEMS, DESIGNED FOR THE FUTURE
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg mb-8 sm:mb-10 lg:mb-12 font-normal ">
          OneWave Fintech S.A. (in formation, Republic of Panama) Is Developing A Decentralized Ecosystem Focused On
          Utility-Driven Participation, Network Innovation, And Scalable Web3
          Infrastructure
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 font-inter">
              DISCOVER
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/#utilities"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-inter"
                >
                  UTILITIES
                </Link>
              </li>
              <li>
                <Link
                  href="/#roadmap"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-inter"
                >
                  ROADMAP
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
              LEGAL
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/terms"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-inter"
                >
                  TERMS OF USE
                </Link>
              </li>

              <li>
                <Link
                  href="/privacypolicy"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-inter"
                >
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-white/60 text-sm font-sf-pro-display-regular">
          Powered by OneWave Fintech S.A. (in formation, Republic of Panama)
        </p>
      </div>
    </div>
  );
};

export default Footer;
