'use client';

import { useState, useEffect } from 'react';
import withAuth from '@/components/withAuth';
import { getNews, getFeaturedNews, getSocialMedia, getActiveSubscribers } from '@/lib/supabase';
import { Newspaper, Star, Users, TrendingUp, Mail } from 'lucide-react';
import Link from 'next/link';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalNews: 0,
    featuredNews: 0,
    socialMediaCount: 0,
    newsletterSubscribers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [news, featured, social, subscribers] = await Promise.all([
          getNews(),
          getFeaturedNews(100),
          getSocialMedia(),
          getActiveSubscribers(),
        ]);

        setStats({
          totalNews: news?.length || 0,
          featuredNews: featured?.length || 0,
          socialMediaCount: social?.length || 0,
          newsletterSubscribers: subscribers?.length || 0,
        });
      } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    {
      title: 'Total de Notícias',
      value: stats.totalNews,
      icon: <Newspaper size={32} />,
      color: 'bg-blue-600',
      link: '/admin/news',
    },
    {
      title: 'Notícias em Destaque',
      value: stats.featuredNews,
      icon: <Star size={32} />,
      color: 'bg-yellow-600',
      link: '/admin/news',
    },
    {
      title: 'Inscritos Newsletter',
      value: stats.newsletterSubscribers,
      icon: <Mail size={32} />,
      color: 'bg-green-600',
      link: '/admin/newsletter',
    },
    {
      title: 'Redes Sociais',
      value: stats.socialMediaCount,
      icon: <Users size={32} />,
      color: 'bg-purple-600',
      link: '/admin/social',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-gray-400">Bem-vindo ao painel de administração do Vascoverso</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-700 rounded-lg h-40"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="block bg-card-background p-6 rounded-lg shadow-lg border border-gray-700 hover:border-primary transition-all transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${card.color}`}>
                  {card.icon}
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">{card.title}</p>
                <p className="text-3xl font-bold text-foreground">{card.value}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card-background p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="text-primary" />
            Ações Rápidas
          </h2>
          <div className="space-y-3">
            <Link
              href="/admin/news/new"
              className="block p-4 bg-primary hover:bg-red-700 rounded-lg transition-colors text-white font-medium"
            >
              + Criar Nova Notícia
            </Link>
            <Link
              href="/admin/matches"
              className="block p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-white font-medium"
            >
              Atualizar Próximos Jogos
            </Link>
            <Link
              href="/admin/social"
              className="block p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-white font-medium"
            >
              Editar Redes Sociais
            </Link>
          </div>
        </div>

        <div className="bg-card-background p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-foreground mb-4">Dicas</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Marque notícias importantes como &quot;destaque&quot; para aparecerem na página inicial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Mantenha os próximos jogos sempre atualizados</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Atualize os números de seguidores das redes sociais regularmente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Use imagens de qualidade nas notícias para melhor engajamento</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withAuth(DashboardPage);
