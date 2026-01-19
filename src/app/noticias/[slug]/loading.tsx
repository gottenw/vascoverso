import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center">
        {/* Cruz de Malta with animations */}
        <div className="relative mb-8">
          {/* Outer ring pulse */}
          <div className="absolute inset-0 -m-8 rounded-full border-4 border-red-600/30 animate-ping"></div>
          <div className="absolute inset-0 -m-6 rounded-full border-2 border-red-600/20 animate-pulse"></div>

          {/* Main logo container */}
          <div className="relative w-24 h-24 animate-float">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>

            {/* Logo */}
            <div className="relative w-full h-full animate-spin-slow">
              <Image
                src="/cruzdemalta.webp"
                alt="Cruz de Malta - Vasco da Gama"
                width={96}
                height={96}
                className="drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Carregando notícia
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-red-600 rounded-full animate-bounce"></span>
              <span className="w-1 h-1 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
              <span className="w-1 h-1 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
