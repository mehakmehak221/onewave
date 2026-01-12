'use client';

import { useState, useEffect } from 'react';

interface StakingScreenProps {
  activeTab: 'general' | 'insured';
}

export default function StakingScreen({ activeTab: initialTab }: StakingScreenProps) {
  const [activeTab, setActiveTab] = useState<'general' | 'insured'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  const [selectedFranchisee, setSelectedFranchisee] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto justify-center min-h-[calc(100vh-200px)]">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          {activeTab === 'insured' ? 'Insured Staking: 4%' : 'Staking'}
        </h1>
        <button className="flex items-center gap-2 bg-gray-600/50 hover:bg-gray-600/70 px-5 py-2.5 rounded-full transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01"
            />
          </svg>
          Transactions
        </button>
      </div>


      {/* Staking Form */}
      <div className="bg-gray-700/30 rounded-2xl p-8">
        {activeTab === 'insured' && (
          <>
            
            <div className="mb-6">
              <label className="block text-white text-lg font-medium mb-3">Select Franchisee</label>
              <div className="relative">
                <select
                  value={selectedFranchisee}
                  onChange={(e) => setSelectedFranchisee(e.target.value)}
                  className="w-full bg-gray-600/50 text-white px-5 py-4 rounded-2xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="franchisee1">Franchisee 1</option>
                  <option value="franchisee2">Franchisee 2</option>
                </select>
                <svg
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Select Product */}
            <div className="mb-6">
              <label className="block text-white text-lg font-medium mb-3">Select Product</label>
              <div className="relative">
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-gray-600/50 text-white px-5 py-4 rounded-2xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="product1">Product 1</option>
                  <option value="product2">Product 2</option>
                </select>
                <svg
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </>
        )}

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block text-white text-lg font-medium mb-3">
            {activeTab === 'insured' ? 'Payment Method' : 'Select Payment Method'}
          </label>
          <div className="relative">
            <select
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className="w-full bg-gray-600/50 text-white px-5 py-4 rounded-2xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="usdt">USDT</option>
              <option value="wave">WAVE</option>
            </select>
            <svg
              className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Description for Insured Staking */}
        {activeTab === 'insured' && (
          <div className="mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              Step into the future of staking with Wave&apos;s next-gen staking platform, offering not just
              crypto rewards, but also real-world security, transparency, and daily earnings. Insured
              Staking with RWA-Backed Assets such as Gold, Silver, Ruby, Emerald, Diamond (GIA Certified),
              High-value jewellery, This unique backing ensures that your funds are supported by tangible,
              real-world collateral, providing an additional layer of trust and safety.
            </p>
          </div>
        )}

        {/* Terms and Conditions */}
        <div className="mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="w-5 h-5 rounded border-gray-500 text-blue-600 focus:ring-blue-500 focus:ring-2 cursor-pointer"
            />
            <span className="text-gray-300 text-sm">
              I Accept Terms and Conditions
              <a href="#" className="text-blue-400 ml-1 hover:underline">
                <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </span>
          </label>
        </div>

        <button
          disabled={!acceptTerms}
          className={`w-full py-4 rounded-2xl text-lg font-semibold transition-colors ${
            acceptTerms
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-600/30 text-gray-500 cursor-not-allowed'
          }`}
        >
          STAKE
        </button>
      </div>
    </div>
  );
}
