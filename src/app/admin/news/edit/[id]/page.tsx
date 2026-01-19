'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import withAuth from '@/components/withAuth';
import NewsForm from '@/components/admin/NewsForm';
import { getNewsById } from '@/lib/supabase';

interface NewsData {
  id: number;
  title: string;
  content: string;
  image_url?: string;
  image_credit?: string;
  is_important?: boolean;
}

const EditNewsPage = () => {
  const [news, setNews] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    if (!id) return;

    const fetchNews = async () => {
      try {
        const newsData = await getNewsById(id);
        if (newsData) {
          setNews(newsData as NewsData);
        }
      } catch (error) {
        console.error("Erro ao buscar notícia:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!news) {
    return <div>Notícia não encontrada.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Editar Notícia</h1>
      <NewsForm news={news} />
    </div>
  );
};

export default withAuth(EditNewsPage);