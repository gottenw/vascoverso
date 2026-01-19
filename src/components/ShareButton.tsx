'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  slug: string;
}

const ShareButton = ({ title, slug }: ShareButtonProps) => {
  const handleShare = async () => {
    const url = `${window.location.origin}/noticias/${slug}`;

    // Verifica se o navegador suporta Web Share API
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `${title} - Vascoverso`,
          url: url,
        });
      } catch (error) {
        // Usuário cancelou ou erro no compartilhamento
        if ((error as Error).name !== 'AbortError') {
          console.error('Erro ao compartilhar:', error);
          // Fallback: copiar para clipboard
          copyToClipboard(url);
        }
      }
    } else {
      // Fallback para navegadores sem suporte
      copyToClipboard(url);
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copiado para a área de transferência!');
    } catch (error) {
      console.error('Erro ao copiar link:', error);
      alert('Não foi possível copiar o link.');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 hover:scale-105 text-sm font-medium whitespace-nowrap"
      aria-label="Compartilhar notícia"
      title="Compartilhar notícia"
    >
      <Share2 size={18} />
      <span className="hidden sm:inline">Compartilhar</span>
    </button>
  );
};

export default ShareButton;
