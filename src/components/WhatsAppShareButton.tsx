'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppShareButtonProps {
  title: string;
  slug: string;
}

const WhatsAppShareButton = ({ title, slug }: WhatsAppShareButtonProps) => {
  const handleShare = () => {
    const url = `${window.location.origin}/noticias/${slug}`;
    const text = `${title}\n\nLeia mais:`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 rounded-full bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400 transition-all duration-200 hover:scale-110"
      aria-label="Compartilhar no WhatsApp"
      title="Compartilhar no WhatsApp"
    >
      <MessageCircle size={20} />
    </button>
  );
};

export default WhatsAppShareButton;
