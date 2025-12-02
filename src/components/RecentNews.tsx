'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getRecentNews } from '@/lib/supabase';
import { useSearch } from '@/components/SearchProvider';
import { Search } from 'lucide-react';

interface RecentNewsItem {
  id: number;
  title: string;
  slug: string;
  created_at: string;
}

// Função auxiliar para remover acentos (client-side)
const removeAccents = (str: string): string => {
  if (!str) return '';

  const accentMap: { [key: string]: string } = {
    'á': 'a', 'à': 'a', 'ã': 'a', 'â': 'a', 'ä': 'a',
    'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
    'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
    'ó': 'o', 'ò': 'o', 'õ': 'o', 'ô': 'o', 'ö': 'o',
    'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
    'ç': 'c',
    'ñ': 'n',
    'Á': 'a', 'À': 'a', 'Ã': 'a', 'Â': 'a', 'Ä': 'a',
    'É': 'e', 'È': 'e', 'Ê': 'e', 'Ë': 'e',
    'Í': 'i', 'Ì': 'i', 'Î': 'i', 'Ï': 'i',
    'Ó': 'o', 'Ò': 'o', 'Õ': 'o', 'Ô': 'o', 'Ö': 'o',
    'Ú': 'u', 'Ù': 'u', 'Û': 'u', 'Ü': 'u',
    'Ç': 'c',
    'Ñ': 'n'
  };

  let result = str.split('').map(char => accentMap[char] || char).join('');
  result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return result;
};

const RecentNews = () => {
  const [news, setNews] = useState<RecentNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useSearch();

  useEffect(() => {
    const fetchRecentNews = async () => {
      try {
        const data = await getRecentNews(30);
        setNews(data || []);
      } catch (error) {
        console.error('Erro ao buscar últimas notícias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentNews();
  }, []);

  // Filter news based on search query with accent removal
  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) {
      return news;
    }

    const normalizedQuery = removeAccents(searchQuery.toLowerCase().trim());

    return news.filter((item) => {
      const normalizedTitle = removeAccents(item.title.toLowerCase());
      return normalizedTitle.includes(normalizedQuery);
    });
  }, [news, searchQuery]);

  return (
    <div className="bg-gradient-to-br from-card-background via-card-background to-card-background p-4 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-gray-700/50">
      <div className="mb-4">
        <h2 className="text-2xl font-extrabold font-heading mb-2 flex items-center gap-2 flex-wrap">
          {searchQuery ? (
            <>
              <Search className="text-primary" size={24} />
              <span className="text-primary">Resultados</span>
              <span className="text-gray-800 dark:text-gray-300">para &ldquo;{searchQuery}&rdquo;</span>
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
        <ul className="space-y-0.5">
          {filteredNews.map((item) => (
            <li key={item.slug} className="group">
              <Link
                href={`/noticias/${item.slug}`}
                className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800/60 transition-all duration-300 border-l-4 border-transparent hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center justify-center mt-0.5">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-gray-900 dark:text-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-500 mt-0">
                    {new Date(item.created_at).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
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
              ? <>Nenhuma notícia encontrada para &ldquo;{searchQuery}&rdquo;.</>
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
