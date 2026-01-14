"use client";

import React, { useState } from "react";
import Image from "next/image";

const WaveCommunity: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your submit logic here
  };

  return (
    <div className="relative py-14 md:py-[68px] lg:py-24 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      <div className="relative z-10 w-full max-w-[95%] sm:max-w-4xl">
        <div
          className="p-0.5 sm:p-[3px] rounded-3xl sm:rounded-4xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(147, 197, 253, 0.4))",
          }}
        >
          <div
            className="px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 rounded-[22px] sm:rounded-[30px]"
            style={{
              background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
            }}
          >
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 sm:mb-6 leading-tight">
              Join the Wave: Be Part of the Decentralized Revolution
            </h1>

            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-center mb-6 sm:mb-8 lg:mb-10 font-normal">
              The Wave community is at the heart of everything we do. Join us
              today and be part of the future of Web3.
            </p>

            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center sm:bg-white sm:rounded-full sm:shadow-2xl sm:overflow-hidden gap-3 sm:gap-0 p-0 sm:p-0"
                >
                  <input
                    type="email"
                    placeholder="Enter Your E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 w-full sm:w-auto px-6 py-4 text-sm sm:text-base text-gray-700 placeholder:text-gray-400 outline-none bg-white sm:bg-transparent rounded-full sm:rounded-none shadow-lg sm:shadow-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#0084FF] hover:bg-[#0066CC] text-white font-semibold text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-4 rounded-full transition-colors duration-200 whitespace-nowrap shadow-lg sm:shadow-none"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveCommunity;
