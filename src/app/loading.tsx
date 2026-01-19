import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700/8 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Cruz de Malta with animations */}
        <div className="relative mb-8">
          {/* Outer ring pulse */}
          <div className="absolute inset-0 -m-8 rounded-full border-4 border-red-600/30 animate-ping"></div>
          <div className="absolute inset-0 -m-6 rounded-full border-2 border-red-600/20 animate-pulse"></div>

          {/* Main logo container */}
          <div className="relative w-32 h-32 animate-float">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>

            {/* Logo */}
            <div className="relative w-full h-full animate-spin-slow">
              <Image
                src="/cruzdemalta.webp"
                alt="Cruz de Malta - Vasco da Gama"
                width={128}
                height={128}
                className="drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold font-heading mb-3">
            <span className="text-primary animate-pulse">vasco</span>
            <span className="text-white">verso</span>
          </h2>

          {/* Loading dots animation */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-400 text-sm">Carregando</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 w-64 h-1 bg-gray-900 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-600 to-red-700 animate-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
