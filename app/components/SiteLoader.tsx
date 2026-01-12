'use client';

import { useEffect, useState } from 'react';

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minDisplayTime = 3000; // 3 seconds minimum

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 500); // fade out duration
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-black transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <video
        src="/loading.webm"
        className="w-[50vw] h-[50vh] object-contain"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
