'use client';

interface AdSpaceProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const AdSpace = ({ position }: AdSpaceProps) => {
  const positionClasses = {
    'top-left': 'top-20 left-4',
    'top-right': 'top-20 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} z-10 hidden xl:block`}
      style={{ width: '160px', height: '600px' }}
    >
      {/* Espaço reservado para AdSense */}
      <div
        className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs text-center p-2"
      >
        AdSense
        <br />
        Auto Ads
      </div>
    </div>
  );
};

export default AdSpace;
