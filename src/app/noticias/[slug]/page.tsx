import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getNewsBySlug, getRecentNews } from '@/lib/supabase';
import ArticleContent from '@/components/ArticleContent';
import ShareButton from '@/components/ShareButton';
import type { Metadata } from 'next';

// Revalidar a cada 2 horas (7200 segundos)
export const revalidate = 7200;

// Gera metadata dinâmica para SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const news = await getNewsBySlug(slug);

    if (!news) {
      return {
        title: 'Notícia não encontrada | Vascoverso',
      };
    }

    // Extrair descrição do conteúdo (primeiros 160 caracteres sem HTML)
    const description = news.content
      .replace(/<[^>]*>/g, '') // Remove tags HTML
      .substring(0, 160)
      .trim() + '...';

    const publishedTime = new Date(news.created_at).toISOString();
    const modifiedTime = news.updated_at ? new Date(news.updated_at).toISOString() : publishedTime;

    return {
      title: `${news.title} | Vascoverso`,
      description,
      keywords: ['Vasco da Gama', 'Vasco', 'notícias', 'futebol', 'Gigante da Colina', news.title],
      authors: news.author ? [{ name: news.author }] : [{ name: 'Equipe Vascoverso' }],
      openGraph: {
        title: news.title,
        description,
        type: 'article',
        publishedTime,
        modifiedTime,
        authors: news.author ? [news.author] : ['Equipe Vascoverso'],
        images: news.image_url ? [
          {
            url: news.image_url,
            width: 1200,
            height: 630,
            alt: news.title,
          }
        ] : [],
        siteName: 'Vascoverso',
        locale: 'pt_BR',
      },
      twitter: {
        card: 'summary_large_image',
        title: news.title,
        description,
        images: news.image_url ? [news.image_url] : [],
      },
      alternates: {
        canonical: `https://vascoverso.com.br/noticias/${slug}`,
      },
    };
  } catch (error) {
    console.error('Erro ao gerar metadata:', error);
    return {
      title: 'Vascoverso - Notícias do Vasco da Gama',
    };
  }
}

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
  image_credit: string | null;
  content: string;
  created_at: string;
  updated_at: string | null;
  author: string | null;
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

  // Gerar JSON-LD para SEO (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: news.title,
    image: news.image_url || '',
    datePublished: new Date(news.created_at).toISOString(),
    dateModified: news.updated_at ? new Date(news.updated_at).toISOString() : new Date(news.created_at).toISOString(),
    author: {
      '@type': 'Person',
      name: news.author || 'Equipe Vascoverso',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vascoverso',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vascoverso.com.br/cruzdemalta.webp',
      },
    },
    description: news.content.replace(/<[^>]*>/g, '').substring(0, 160),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://vascoverso.com.br/noticias/${slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        <article className="bg-card-background p-8 rounded-lg shadow-md">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{news.title}</h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex flex-col gap-1">
              {news.author && (
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Por:</strong> {news.author}
                </span>
              )}
              <span>
                <strong>Publicado em:</strong>{' '}
                {new Date(news.created_at).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              {news.updated_at && news.updated_at !== news.created_at && (
                <span className="text-xs italic">
                  Atualizado em:{' '}
                  {new Date(news.updated_at).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}{' '}
                  às{' '}
                  {new Date(news.updated_at).toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              )}
            </div>
            <ShareButton title={news.title} slug={slug} />
          </div>

          {news.image_url && (
            <div className="mb-6">
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
              {news.image_credit && (
                <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-2 text-right">
                  {news.image_credit}
                </p>
              )}
            </div>
          )}
        </header>

        <ArticleContent content={news.content} />
      </article>
    </div>
    </>
  );
};

export default NewsPage;
