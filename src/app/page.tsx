import NewsFeed from '@/components/NewsFeed';
import RecentNews from '@/components/RecentNews';

// Revalidar a cada 15 minutos (900 segundos)
export const revalidate = 900;

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Lista de Notícias - Foco Principal à Esquerda */}
      <div className="lg:col-span-2">
        <RecentNews />
      </div>
      {/* Barra Lateral Direita */}
      <div className="space-y-8">
        <NewsFeed />
      </div>
    </div>
  );
}
