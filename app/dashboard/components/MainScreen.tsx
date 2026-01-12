export default function MainScreen() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Salary Rank Card */}
      <div className="w-full shrink-0">
        <div className="bg-[#001a3d]/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-900/50">
          <h3 className="text-sm sm:text-base mb-4 sm:mb-6">
            Salary Rank: <span className="text-white font-semibold">Not Qualified</span>
          </h3>

          <div className="bg-[#002855]/60 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between w-full items-center gap-4">
            <div className="w-full sm:w-auto">
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-1">Grow Your Network</h4>
              <p className="text-xs text-gray-300 mb-3 sm:mb-4">
                Refer and Earn WAVE Tokens
                <br className="hidden sm:inline" />
                <span className="sm:inline"> </span>Share your link to build steady passive rewards
              </p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 mt-3 sm:mt-4">
                <button className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gray-600/50 hover:bg-gray-600/70 rounded-full text-xs sm:text-sm font-medium transition-colors">
                  Get Referral Link
                </button>
                <button className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gray-600/50 hover:bg-gray-600/70 rounded-full text-xs sm:text-sm font-medium transition-colors">
                  Airdrop
                </button>
                <button className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gray-600/50 hover:bg-gray-600/70 rounded-full text-xs sm:text-sm font-medium transition-colors">
                  LinkTree
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="#"
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                    <path fill="#fff" d="M9.545 15.568V8.432L15.818 12z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="h-[150px] sm:h-[200px] scale-[1.1] transform sm:-translate-y-7 hidden sm:block">
              <img src="/hboy.png" alt="User avatar" className="mx-auto max-h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Balance Cards and Stats */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Balance Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Self Staking */}
          <div className="bg-[#001a3d]/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-blue-900/50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
              <span className="text-lg sm:text-xl font-bold">W</span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 mb-1 sm:mb-2">Self Staking</p>
            <p className="text-base sm:text-lg font-bold">
              0.00 <span className="text-[10px] sm:text-xs text-gray-400">WAVE</span>
            </p>
          </div>

          {/* Self Staking 2 */}
          <div className="bg-[#001a3d]/60 backdrop-blur-sm rounded-xl p-4 border border-blue-900/50">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-3">
              <span className="text-xl font-bold">₮</span>
            </div>
            <p className="text-xs text-gray-400 mb-2">Self Staking</p>
            <p className="text-lg font-bold">$ 0.00</p>
          </div>

          {/* Total ROI WAVE */}
          <div className="bg-[#001a3d]/60 backdrop-blur-sm rounded-xl p-4 border border-blue-900/50">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-3">
              <span className="text-xl font-bold">W</span>
            </div>
            <p className="text-xs text-gray-400 mb-2">Total ROI ( WAVE )</p>
            <p className="text-lg font-bold">
              0.00 <span className="text-xs text-gray-400">WAVE</span>
            </p>
          </div>

          {/* Total ROI USDT */}
          <div className="bg-[#001a3d]/60 backdrop-blur-sm rounded-xl p-4 border border-blue-900/50">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-3">
              <span className="text-xl font-bold">₮</span>
            </div>
            <p className="text-xs text-gray-400 mb-2">Total ROI ( USDT )</p>
            <p className="text-lg font-bold">$ 0.00</p>
          </div>
        </div>

        {/* Income Overview and Total Earnings Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* My Income Overview */}
          <div className="bg-[#001a3d]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-900/50">
            <h3 className="text-sm sm:text-base font-semibold mb-4 sm:mb-6">My Income Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0"></div>
                <span className="text-sm text-gray-300">Self ROI</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shrink-0"></div>
                <span className="text-sm text-gray-300">Direct Referral</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center shrink-0"></div>
                <span className="text-sm text-gray-300">Referral on ROI</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center shrink-0"></div>
                <span className="text-sm text-gray-300">Rewards</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center shrink-0"></div>
                <span className="text-sm text-gray-300">Monthly Salary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center shrink-0"></div>
                <span className="text-sm text-gray-300">Monthly Royalty</span>
              </div>
            </div>
          </div>

          {/* My Total Earnings */}
          <div className="bg-[#001a3d]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-900/50">
            <h3 className="text-sm sm:text-base font-semibold mb-4 sm:mb-6">My Total Earnings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Self ROI</span>
                <span className="text-sm font-medium">$ 0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Direct Referral</span>
                <span className="text-sm font-medium">$ 0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Referral on ROI</span>
                <span className="text-sm font-medium">$ 0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Rewards</span>
                <span className="text-sm font-medium">$ 0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Monthly Salary</span>
                <span className="text-sm font-medium">$ 0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Monthly Royalty</span>
                <span className="text-sm font-medium">$ 0.00</span>
              </div>
              <div className="border-t border-gray-700 pt-3 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-white">Total</span>
                  <span className="text-sm font-bold text-white">$ 0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
