'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureSectionProps {
  badge?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  rightContent?: ReactNode;
  mediaUrl?: string;
  mediaType?: 'video' | 'image';
  mediaClassName?: string;
  fullBackground?: boolean;
  leftOverflowWidth?: string;
  reverse?: boolean;
}

export default function FeatureSection({
  badge = 'New',
  title,
  description,
  buttonText = 'Learn More',
  buttonHref,
  onButtonClick,
  rightContent,
  mediaUrl,
  mediaType = 'video',
  mediaClassName = '',
  fullBackground = false,
  leftOverflowWidth = '180%',
  reverse = false
}: FeatureSectionProps) {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonHref) {
      window.location.href = buttonHref;
    }
  };

  const renderMedia = () => {
    if (!mediaUrl) return null;

    const defaultClassName = "w-full h-full object-cover";
    const combinedClassName = mediaClassName ? `${defaultClassName} ${mediaClassName}` : defaultClassName;

    if (mediaType === 'video') {
      return (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={combinedClassName}
          style={{ 
            mixBlendMode: 'screen',
            filter: 'contrast(1.2) brightness(1.2)',
            opacity: 0.95
          }}
        >
          <source src={mediaUrl} type="video/webm" />
        </video>
      );
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={mediaUrl}
        alt="Feature"
        className={combinedClassName}
        style={{ 
          mixBlendMode: 'screen',
          filter: 'contrast(1.2) brightness(1.2)',
          opacity: 0.95
        }}
      />
    );
  };

  const leftContent = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-10 lg:py-12"
    >
      <div className="inline-flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6 w-fit border border-white p-1 sm:p-1.5 px-1.5 sm:px-2 rounded-full">
        <span className="bg-[#3d75e9] text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
          {badge}
        </span>
        <span className="text-white text-xs sm:text-sm font-medium pr-1 sm:pr-0">
          Join the Revolution Now
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
        {title}
      </h1>

      <p className="text-white/80 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl">
        {description}
      </p>

      {/* <button
        onClick={handleButtonClick}
        className="group bg-[#3d75e9] hover:bg-[#2d5fcf] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-fit shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105"
      >
        <span className="text-base sm:text-lg">{buttonText}</span>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button> */}
    </motion.div>
  );

  const rightContentArea = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="flex items-center justify-center h-full relative overflow-hidden"
    >
      {mediaUrl && !fullBackground ? (
        <div className="w-full h-full relative overflow-hidden bg-linear-to-br from-blue-900/20 to-purple-900/20">
          <div className="absolute inset-0 w-[150%] h-full">
            {renderMedia()}
          </div>
          {rightContent && (
            <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16 z-10">
              {rightContent}
            </div>
          )}
        </div>
      ) : rightContent ? (
        <div className="w-full h-full flex items-center justify-center p-8 lg:p-16 bg-linear-to-br from-[#1e3a5f] to-[#2d4a6f]">
          {rightContent}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center p-8 lg:p-16 bg-linear-to-br from-[#1e3a5f] to-[#2d4a6f]">
          <div className="text-white/20 text-center">
            <p className="text-sm">Content Area</p>
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <section className="min-h-[500px] sm:min-h-[600px] lg:min-h-screen w-full flex items-center justify-center py-6 sm:py-8 lg:py-12 xl:py-0">
      <div className="w-full max-w-[98%] sm:max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto">
        <div
          className="backdrop-blur-xl bg-linear-to-b from-white/5 via-white/3 to-white/2 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
          style={{
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.1)'
          }}
        >
          {fullBackground && mediaUrl && (
            <div className="absolute inset-0 z-0">
              {renderMedia()}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}

          <div className={`relative min-h-[450px] sm:min-h-[500px] lg:min-h-[600px] ${reverse ? '' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px] sm:min-h-[500px] lg:min-h-[600px]">
              <div className={`${reverse ? 'lg:col-start-2 lg:order-2' : 'lg:order-1'} relative z-20`}>
                {!fullBackground && (
                  <>
                    <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/40 to-transparent pointer-events-none z-0" />
                    <div className="absolute top-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-500/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
                  </>
                )}
                
                <div className="relative z-10 w-full lg:w-[130%] lg:max-w-none">
                  {leftContent}
                </div>
              </div>

              <div className={`${reverse ? 'lg:col-start-1 lg:order-1' : 'lg:order-2'} relative z-10 overflow-hidden min-h-[200px] sm:min-h-[250px] lg:min-h-auto`}>
                {fullBackground ? (
                  <div className="flex items-center justify-center h-full p-4 sm:p-6 lg:p-8 xl:p-16">
                    {rightContent}
                  </div>
                ) : (
                  rightContentArea
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
