'use client';

import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import NewsCardSkeleton from './NewsCardSkeleton';
import { getFeaturedNews } from '@/lib/supabase';

interface News {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  category_id: number | null;
  is_important: boolean;
}

function calculateReadingTime(text: string) {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

const NewsFeed = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchFeaturedNews = async () => {
      try {
        const data = await getFeaturedNews(2);
        setNews(data || []);
      } catch (error) {
        console.error('Erro ao buscar notícias em destaque:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedNews();
  }, []);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-foreground">Destaques</h3>
      {loading ? (
        Array.from({ length: 2 }).map((_, index) => <NewsCardSkeleton key={index} />)
      ) : news.length > 0 ? (
        news.map((item) => (
          <NewsCard
            key={item.slug}
            title={item.title}
            slug={item.slug}
            imageUrl={item.image_url || 'https://placehold.co/600x400'}
            category="Vasco"
            readingTime={calculateReadingTime(item.content)}
          />
        ))
      ) : (
        <p className="text-gray-400 text-sm">Nenhuma notícia em destaque no momento.</p>
      )}
    </div>
  );
};

export default NewsFeed;
