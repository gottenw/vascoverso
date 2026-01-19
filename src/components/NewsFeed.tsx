import NewsCard from './NewsCard';
import { getFeaturedNews } from '@/lib/supabase';

interface News {
  id: number;
  title: string;
  slug: string;
  image_url: string | null;
  created_at: string;
}

function calculateReadingTime(wordCount: number = 500) {
  const wordsPerMinute = 200;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

const NewsFeed = async () => {
  let news: News[] = [];

  try {
    const data = await getFeaturedNews(3);
    news = data || [];
  } catch (error) {
    console.error('Erro ao buscar notícias em destaque:', error);
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-foreground">Destaques</h3>
      {news.length > 0 ? (
        news.map((item) => (
          <NewsCard
            key={item.slug}
            title={item.title}
            slug={item.slug}
            imageUrl={item.image_url || 'https://placehold.co/600x400'}
            category="Vasco"
            readingTime={calculateReadingTime(500)}
          />
        ))
      ) : (
        <p className="text-gray-400 text-sm">Nenhuma notícia em destaque no momento.</p>
      )}
    </div>
  );
};

export default NewsFeed;
