import NewsFeed from '@/components/NewsFeed';
import RecentNews from '@/components/RecentNews';
import SocialFollowers from '@/components/SocialFollowers';
import LeagueTable from '@/components/LeagueTable';
import UpcomingMatches from '@/components/UpcomingMatches';

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
        <SocialFollowers />
        <LeagueTable />
        <UpcomingMatches />
      </div>
    </div>
  );
}
