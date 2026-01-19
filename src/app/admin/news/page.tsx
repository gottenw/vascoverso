'use client';

import { useState, useEffect } from 'react';
import withAuth from '@/components/withAuth';
import Link from 'next/link';
import { getNews, deleteNews } from '@/lib/supabase';

interface NewsArticle {
  id: number;
  title: string;
  created_at: string;
}

const NewsAdminPage = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        if (newsData) {
          setNews(newsData as NewsArticle[]);
        }
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir esta notícia?")) {
      try {
        await deleteNews(id);
        setNews(news.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Erro ao excluir notícia:", error);
        alert("Falha ao excluir a notícia.");
      }
    }
  };

  if (loading) {
    return <div>Carregando notícias...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gerenciar Notícias</h1>
        <Link href="/admin/news/new" className="bg-primary text-white px-4 py-2 rounded-lg">
          Nova Notícia
        </Link>
      </div>
      <div className="bg-card-background p-4 rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Título</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr key={item.id} className="border-b border-gray-700">
                <td className="py-2">{item.title}</td>
                <td>{new Date(item.created_at).toLocaleDateString()}</td>
                <td>
                  <Link href={`/admin/news/edit/${item.id}`} className="text-blue-400 hover:text-blue-300 mr-4">
                    Editar
                  </Link>
                  <button onClick={() => handleDelete(item.id)} className="text-primary hover:text-red-400">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withAuth(NewsAdminPage);
