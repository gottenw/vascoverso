'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getRecentNews } from '@/lib/supabase';

interface RecentNewsItem {
  id: number;
  title: string;
  slug: string;
  created_at: string;
}

const RecentNews = () => {
  const [news, setNews] = useState<RecentNewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentNews = async () => {
      try {
        const data = await getRecentNews(20);
        setNews(data || []);
      } catch (error) {
        console.error('Erro ao buscar últimas notícias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentNews();
  }, []);

  return (
    <div className="bg-card-background p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-foreground border-b-4 border-primary pb-3">
        Últimas Notícias
      </h2>
      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : news.length > 0 ? (
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.slug} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
              <Link
                href={`/noticias/${item.slug}`}
                className="block p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-foreground hover:text-primary group"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-block w-3 h-3 mt-1.5 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                  <span className="text-lg font-medium leading-relaxed">{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center py-8">Nenhuma notícia publicada ainda.</p>
      )}
    </div>
  );
};

export default RecentNews;
