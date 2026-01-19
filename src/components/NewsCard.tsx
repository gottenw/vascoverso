'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Share2, Clock } from 'lucide-react';

interface NewsCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  category: string;
  readingTime: number;
}

const NewsCard = ({ title, slug, imageUrl, category, readingTime }: NewsCardProps) => {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const shareData = {
      title: title,
      url: `${window.location.origin}/noticias/${slug}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Erro ao compartilhar:", err);
      }
    } else {
      // Fallback para copiar para a área de transferência
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link da notícia copiado para a área de transferência!");
      } catch (err) {
        console.error("Erro ao copiar link:", err);
      }
    }
  };

  return (
    <div className="group bg-card-background rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 border border-gray-200 dark:border-gray-800">
      <Link href={`/noticias/${slug}`} className="relative block">
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
            quality={75}
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-primary px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded">{category}</span>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Clock size={14} className="mr-1" />
              <span>{`Leitura de ${readingTime} min`}</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <button
          onClick={handleShare}
          className="absolute top-2 right-2 bg-black/70 p-2 rounded-full text-white hover:bg-black/90 transition-colors z-10"
          aria-label="Compartilhar notícia"
        >
          <Share2 size={18} />
        </button>
      </Link>
    </div>
  );
};

export default NewsCard;
