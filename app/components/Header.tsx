/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-[3%] sm:px-[5%]">
      <div className="bg-[#0f1419]/70 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Wave Logo"
                className="h-6 sm:h-8 w-auto brightness-0 invert"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/#utilities"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Utilities
              </Link>
              <Link
                href="/#roadmap"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Roadmap
              </Link>
              <Link
                href="/presale"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Presale
              </Link>
              <Link
                href="https://one-wave.gitbook.io/one-wave-docs"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Whitepaper
              </Link>
            </nav>

            <Link
              href="https://dashboard.onewave.app/login"
              className="hidden md:block"
            >
              <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-medium transition-colors text-sm">
                Login
              </button>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-3">
              <Link
                href="/"
                className="block text-white/70 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#utilities"
                className="block text-white/70 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Utilities
              </Link>
              <Link
                href="/#roadmap"
                className="block text-white/70 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link
                href="/presale"
                className="block text-white/70 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Presale
              </Link>
              <Link
                href="https://one-wave.gitbook.io/one-wave-docs"
                className="block text-white/70 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Whitepaper
              </Link>
              <Link
                href="https://dashboard.onewave.app/login"
                className="block"
              >
                <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2.5 rounded-full font-medium transition-colors text-sm">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
