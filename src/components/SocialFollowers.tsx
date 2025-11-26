import React from 'react';
import { Youtube, Facebook, Instagram } from 'lucide-react';
import TiktokIcon from './icons/TiktokIcon';
import KwaiIcon from './icons/KwaiIcon';
import XIcon from './icons/XIcon';
import { getSocialMedia } from '@/lib/supabase';

interface SocialMedia {
  id: number;
  platform: string;
  follower_count: string;
  url: string;
  display_order: number;
}

const getIcon = (platform: string): React.ReactElement => {
  const iconMap: { [key: string]: React.ReactElement } = {
    Youtube: <Youtube />,
    Facebook: <Facebook />,
    Instagram: <Instagram />,
    X: <XIcon className="h-6 w-6" />,
    Twitter: <XIcon className="h-6 w-6" />,
    TikTok: <TiktokIcon className="h-6 w-6" />,
    Kwai: <KwaiIcon className="h-6 w-6" />,
  };
  return iconMap[platform] || <Youtube />;
};

const SocialFollowers = async () => {
  let socialMedia: SocialMedia[] = [];

  try {
    const data = await getSocialMedia();
    socialMedia = data || [];
  } catch (error) {
    console.error('Erro ao buscar redes sociais:', error);
  }

  return (
    <div className="bg-card-background p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-foreground">Nossas Redes</h3>
      <div className="grid grid-cols-2 gap-4">
        {socialMedia.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-background rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
          >
            <div className="mr-3 text-primary">{getIcon(social.platform)}</div>
            <div>
              <div className="font-bold text-foreground">{social.follower_count}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{social.platform}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialFollowers;
