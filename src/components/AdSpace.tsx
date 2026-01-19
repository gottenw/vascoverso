'use client';

import { useEffect } from 'react';

interface AdSpaceProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdSpace = ({ position }: AdSpaceProps) => {
  const positionClasses = {
    'top-left': 'top-20 left-4',
    'top-right': 'top-20 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div
      className={`fixed ${positionClasses[position]} z-10 hidden xl:block`}
      style={{ width: '160px', height: '600px' }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7612725155199707"
        data-ad-slot="auto"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSpace;
