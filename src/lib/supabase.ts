import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or anon key')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Funções CRUD para Notícias

export const getNews = async () => {
  const { data, error } = await supabase
    .from('news')
    .select('id, title, slug, image_url, created_at, is_important')
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export const getFeaturedNews = async (limit: number = 2) => {
  const { data, error } = await supabase
    .from('news')
    .select('id, title, slug, image_url, created_at')
    .eq('is_important', true)
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw new Error(error.message);
  return data;
};

export const getRecentNews = async (limit: number = 20) => {
  const { data, error } = await supabase
    .from('news')
    .select('id, title, slug, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw new Error(error.message);
  return data;
};

export const getNewsById = async (id: number) => {
  const { data, error } = await supabase.from('news').select('*').eq('id', id).single();
  if (error) throw new Error(error.message);
  return data;
};

export const getNewsBySlug = async (slug: string) => {
  const { data, error } = await supabase.from('news').select('*').eq('slug', slug).single();
  if (error) throw new Error(error.message);
  return data;
};

export const createNews = async (newsData: { title: string; content: string; slug: string; image_url?: string; image_credit?: string; is_important?: boolean; author?: string; }) => {
  const { data, error } = await supabase.from('news').insert([newsData]);
  if (error) throw new Error(error.message);
  return data;
};

export const updateNews = async (id: number, newsData: { title: string; content: string; image_url?: string; image_credit?: string; is_important?: boolean; author?: string; }) => {
  const { data, error } = await supabase
    .from('news')
    .update(newsData)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Erro ao atualizar notícia:', error);
    throw new Error(error.message);
  }

  console.log('Notícia atualizada com sucesso:', data);
  return data;
};

export const deleteNews = async (id: number) => {
  const { data, error } = await supabase.from('news').delete().eq('id', id);
  if (error) throw new Error(error.message);
  return data;
};

// Funções para Upload de Imagens

export const uploadImage = async (file: File, bucket: string = 'news-images'): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    throw new Error(`Erro no upload: ${error.message}`);
  }

  // Retorna a URL pública da imagem
  const { data: publicUrlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
};

export const deleteImage = async (imageUrl: string, bucket: string = 'news-images'): Promise<void> => {
  // Extrai o nome do arquivo da URL
  const fileName = imageUrl.split('/').pop();
  if (!fileName) return;

  const { error } = await supabase.storage
    .from(bucket)
    .remove([fileName]);

  if (error) {
    console.error('Erro ao deletar imagem:', error);
  }
};

// Funções para Redes Sociais

export const getSocialMedia = async () => {
  const { data, error } = await supabase
    .from('social_media')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

export const updateSocialMedia = async (id: number, updates: { follower_count?: string; url?: string }) => {
  const { data, error } = await supabase
    .from('social_media')
    .update(updates)
    .eq('id', id);
  if (error) throw new Error(error.message);
  return data;
};

// Funções para Próximos Jogos

export const getMatches = async () => {
  const { data, error } = await supabase
    .from('matches')
    .select('*')
    .order('match_date_full', { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

export const updateMatch = async (
  id: number,
  updates: {
    match_date?: string;
    opponent?: string;
    championship?: string;
    location?: string;
  }
) => {
  const { data, error } = await supabase
    .from('matches')
    .update(updates)
    .eq('id', id);
  if (error) throw new Error(error.message);
  return data;
};

// Funções para Newsletter

export const subscribeToNewsletter = async (email: string) => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }]);
  if (error) throw new Error(error.message);
  return data;
};

export const getNewsletterSubscribers = async () => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .select('*')
    .order('subscribed_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export const getActiveSubscribers = async () => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .select('*')
    .eq('is_active', true)
    .order('subscribed_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export const unsubscribeFromNewsletter = async (id: string) => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .update({
      is_active: false,
      unsubscribed_at: new Date().toISOString()
    })
    .eq('id', id);
  if (error) throw new Error(error.message);
  return data;
};

export const deleteNewsletterSubscriber = async (id: string) => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .delete()
    .eq('id', id);
  if (error) throw new Error(error.message);
  return data;
};

// Funções para Busca de Notícias

// Função auxiliar para remover acentos e normalizar texto
const removeAccents = (str: string): string => {
  if (!str) return '';

  // Mapeamento completo de caracteres acentuados (aplicado ANTES do NFD)
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

  // Primeiro aplica o mapeamento direto
  let result = str.split('').map(char => accentMap[char] || char).join('');

  // Depois normaliza usando NFD para pegar qualquer acento remanescente
  result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return result;
};

export const searchNews = async (query: string) => {
  // Se query está vazia, retorna vazio
  if (!query || query.trim().length === 0) {
    return [];
  }

  // Normaliza a query removendo acentos
  const normalizedQuery = removeAccents(query.toLowerCase().trim());

  // Busca apenas títulos das últimas 50 notícias (SEM content) para reduzir dados
  const { data, error } = await supabase
    .from('news')
    .select('id, title, slug, created_at, image_url')
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) throw new Error(error.message);

  // Filtra client-side para busca sem acentos APENAS no título
  const filtered = data?.filter(news => {
    const normalizedTitle = removeAccents(news.title.toLowerCase());
    return normalizedTitle.includes(normalizedQuery);
  }) || [];

  // Retorna no máximo 15 resultados
  return filtered.slice(0, 15);
};
