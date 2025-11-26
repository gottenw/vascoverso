import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getNewsBySlug, getRecentNews } from '@/lib/supabase';
import ArticleContent from '@/components/ArticleContent';
import WhatsAppShareButton from '@/components/WhatsAppShareButton';

// Revalidar a cada 1 hora (3600 segundos)
export const revalidate = 3600;

// Gera páginas estáticas para as notícias mais recentes
export async function generateStaticParams() {
  try {
    const news = await getRecentNews(100);
    return news.map((item) => ({
      slug: item.slug,
    }));
  } catch (error) {
    console.error('Erro ao gerar parâmetros estáticos:', error);
    return [];
  }
}

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  image_url: string | null;
  content: string;
  created_at: string;
}

const NewsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  // Next.js 15: params é uma Promise
  const { slug } = await params;
  let news: NewsItem | null = null;

  try {
    news = await getNewsBySlug(slug);
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
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold text-foreground flex-1">{news.title}</h1>
            <WhatsAppShareButton title={news.title} slug={slug} />
          </div>

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
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <Image
                src={news.image_url}
                alt={news.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                style={{ objectFit: 'cover' }}
                priority
                quality={85}
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
