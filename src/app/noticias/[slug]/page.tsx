import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getNewsBySlug } from '@/lib/supabase';
import ArticleContent from '@/components/ArticleContent';

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  image_url: string | null;
  content: string;
  created_at: string;
}

const NewsPage = async ({ params }: { params: { slug: string } }) => {
  let news: NewsItem | null = null;

  try {
    news = await getNewsBySlug(params.slug);
  } catch (error) {
    console.error('Erro ao buscar notícia:', error);
    notFound();
  }

  if (!news) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <article className="bg-card-background p-8 rounded-lg shadow-md">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{news.title}</h1>

          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>
              {new Date(news.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          {news.image_url && (
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src={news.image_url}
                alt={news.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
        </header>

        <ArticleContent content={news.content} />
      </article>
    </div>
  );
};

export default NewsPage;
