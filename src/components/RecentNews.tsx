'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getRecentNews } from '@/lib/supabase';
import { useSearch } from '@/components/SearchProvider';

interface RecentNewsItem {
  id: number;
  title: string;
  slug: string;
  created_at: string;
}

const RecentNews = () => {
  const [news, setNews] = useState<RecentNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useSearch();

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

  // Filter news based on search query
  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) {
      return news;
    }
    return news.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [news, searchQuery]);

  return (
    <div className="bg-gradient-to-br from-card-background via-card-background to-card-background p-8 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-gray-700/50">
      <div className="mb-8">
        <h2 className="text-4xl font-extrabold font-heading mb-2 flex items-center gap-3 flex-wrap">
          {searchQuery ? (
            <>
              <span className="text-primary">Resultados</span>
              <span className="text-gray-800 dark:text-gray-300">para "{searchQuery}"</span>
            </>
          ) : (
            <>
              <span className="text-primary">Últimas</span>
              <span className="text-gray-900 dark:text-gray-300">Notícias</span>
            </>
          )}
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        {searchQuery && filteredNews.length > 0 && (
          <p className="text-gray-600 dark:text-gray-400 mt-3">{filteredNews.length} notícia{filteredNews.length !== 1 ? 's' : ''} encontrada{filteredNews.length !== 1 ? 's' : ''}</p>
        )}
      </div>

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-xl w-3/4"></div>
            </div>
          ))}
        </div>
      ) : filteredNews.length > 0 ? (
        <ul className="space-y-3">
          {filteredNews.map((item) => (
            <li key={item.slug} className="group">
              <Link
                href={`/noticias/${item.slug}`}
                className="flex items-start gap-4 p-5 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800/60 transition-all duration-300 border-l-4 border-transparent hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground group-hover:text-primary transition-colors leading-relaxed">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-500 mt-1">
                    {new Date(item.created_at).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-16">
          <div className="mb-4">
            <div className="inline-block p-6 bg-gray-200 dark:bg-gray-800/50 rounded-full">
              <svg className="w-16 h-16 text-gray-500 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {searchQuery
              ? `Nenhuma notícia encontrada para "${searchQuery}".`
              : 'Nenhuma notícia publicada ainda.'}
          </p>
          {searchQuery && (
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              Tente buscar por outros termos
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentNews;
