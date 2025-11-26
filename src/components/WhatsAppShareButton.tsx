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
      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
      aria-label="Compartilhar no WhatsApp"
    >
      <MessageCircle size={20} />
      <span>Compartilhar no WhatsApp</span>
    </button>
  );
};

export default WhatsAppShareButton;
