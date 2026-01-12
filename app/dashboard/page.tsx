'use client';

import { useState } from 'react';
import MainScreen from './components/MainScreen';
import StakingScreen from './components/StakingScreen';

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [stakingOpen, setStakingOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = (menu: string) => {
    if (menu === 'Staking') {
      setStakingOpen(!stakingOpen);
    } else {
      setActiveMenu(menu);
      setStakingOpen(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Blue glow - top left */}
      <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500/20 rounded-full blur-[100px] sm:blur-[150px]" />

      {/* Blue glow - bottom right */}
      <div className="absolute bottom-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-blue-600/20 rounded-full blur-[120px] sm:blur-[150px]" />

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-20 sm:w-40 h-20 sm:h-40 border-l-2 border-t-2 border-blue-500/20 z-10"></div>
      <div className="absolute bottom-0 right-0 w-20 sm:w-40 h-20 sm:h-40 border-r-2 border-b-2 border-blue-500/20 z-10"></div>
      <header className="w-full p-2 sm:p-4 sticky top-0 z-50">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 sm:p-2 hover:bg-gray-700/30 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <img src="/logo.png" alt="Wave Logo" className="h-6 sm:h-8 w-auto brightness-0 invert" />
          </div>

          {/* Right Side - Wallet & Profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base font-medium">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden lg:inline">Connect Wallet</span>
              <span className="lg:hidden">Wallet</span>
            </button>
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-400">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative">
        <aside className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-[#001428]/50 backdrop-blur-sm transition-all duration-300 overflow-hidden fixed lg:relative h-full z-40 lg:z-auto`}>
          <div className="p-4 sm:p-6 w-64">
            <nav className="flex-1 space-y-0">
              <button
                onClick={() => handleMenuClick('Dashboard')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-colors mb-5 text-sm ${
                  activeMenu === 'Dashboard' ? 'bg-blue-600' : 'bg-gray-700/30 hover:bg-gray-700/50'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Dashboard
              </button>

              <button
                onClick={() => handleMenuClick('Staking')}
                className={`w-full relative z-20 flex items-center gap-3 px-4 py-3 rounded-full transition-colors text-sm ${
                  activeMenu === 'Staking' || stakingOpen ? 'bg-blue-600' : 'bg-gray-700/30 hover:bg-gray-700/50'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Staking
                <svg
                  className={`w-4 h-4 ml-auto transition-transform ${stakingOpen ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {stakingOpen && (
                <div className="space-y-2 animate-in slide-in-from-top-0 bg-gray-300/10 p-3 w-full transform -translate-y-3 rounded-b-2xl">
                  <button
                    onClick={() => setActiveMenu('General Staking')}
                    className={`w-full mt-2 flex items-center gap-3 px-4 py-3 rounded-full transition-colors text-sm ${
                      activeMenu === 'General Staking' ? 'bg-gray-600/50' : 'bg-gray-700/20 hover:bg-gray-700/40'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    General Staking
                  </button>
                  <button
                    onClick={() => setActiveMenu('Insured Staking')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-colors text-sm ${
                      activeMenu === 'Insured Staking' ? 'bg-blue-600' : 'bg-gray-700/20 hover:bg-gray-700/40'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Insured Staking
                  </button>
                </div>
              )}

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-red-600/20 text-red-400 hover:bg-red-600/30 transition-colors mt-4 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Log out
              </button>
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto w-full">
          {activeMenu === 'Dashboard' && <MainScreen />}
          {(activeMenu === 'Insured Staking' || activeMenu === 'General Staking') && (
            <StakingScreen activeTab={activeMenu === 'Insured Staking' ? 'insured' : 'general'} />
          )}
        </main>
      </div>
    </div>
  );
}
