"use client";

import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // const startDate = new Date('2025-12-21T00:00:00');
    const endDate = new Date("2026-01-21T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();

      const remaining = endDate.getTime() - now.getTime();

      if (remaining > 0) {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remaining / 1000 / 60) % 60);
        const seconds = Math.floor((remaining / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-full mx-auto lg:mx-0">
      <div
        className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2377F1] via-[#14458B] to-[#2377F1] p-[1.5px] shadow-xl"
        style={{
          boxShadow: "0 8px 32px rgba(35, 119, 241, 0.25)",
        }}
      >
        <div className="relative bg-black/20 backdrop-blur-md rounded-xl px-3 py-2 sm:px-8 sm:py-4 w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none rounded-xl" />

          <div className="relative z-10 flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-3 gap-y-2 sm:gap-12 text-white min-w-0">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-[0.08em] sm:tracking-widest leading-none drop-shadow-md">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-1.5 opacity-75 text-blue-100">
                DAYS
              </span>
            </div>

            <div className="flex flex-col gap-2 h-full justify-center pt-1 opacity-50">
              <div className="w-1 h-1 bg-white/90 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              <div className="w-1 h-1 bg-white/90 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-[0.08em] sm:tracking-widest leading-none drop-shadow-md">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-1.5 opacity-75 text-blue-100">
                HOURS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
