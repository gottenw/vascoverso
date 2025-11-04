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
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export const getFeaturedNews = async (limit: number = 2) => {
  const { data, error } = await supabase
    .from('news')
    .select('*')
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

export const createNews = async (newsData: { title: string; content: string; slug: string; image_url?: string; is_important?: boolean; }) => {
  const { data, error } = await supabase.from('news').insert([newsData]);
  if (error) throw new Error(error.message);
  return data;
};

export const updateNews = async (id: number, newsData: { title: string; content: string; image_url?: string; is_important?: boolean; }) => {
  const { data, error } = await supabase.from('news').update(newsData).eq('id', id);
  if (error) throw new Error(error.message);
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

  const { data, error } = await supabase.storage
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

// Funções para Tabela do Campeonato

export const getLeagueStandings = async () => {
  const { data, error } = await supabase
    .from('league_standings')
    .select('*')
    .order('position', { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

// Buscar 5 times centrados no Vasco
export const getLeagueStandingsForDisplay = async () => {
  // Primeiro, buscar todos os times
  const { data: allStandings, error } = await supabase
    .from('league_standings')
    .select('*')
    .order('position', { ascending: true });

  if (error) throw new Error(error.message);
  if (!allStandings || allStandings.length === 0) return [];

  // Encontrar a posição do Vasco
  const vascoIndex = allStandings.findIndex((team) => team.is_vasco);
  if (vascoIndex === -1) {
    // Se não encontrar o Vasco, retorna os 5 primeiros
    return allStandings.slice(0, 5);
  }

  const vascoPosition = allStandings[vascoIndex].position;
  const totalTeams = allStandings.length;

  let startPos: number;
  let endPos: number;

  // Lógica para centralizar o Vasco
  if (vascoPosition <= 3) {
    // Vasco está entre 1º e 3º: mostrar posições 1-5
    startPos = 1;
    endPos = 5;
  } else if (vascoPosition >= totalTeams - 2) {
    // Vasco está entre as últimas 3 posições: mostrar últimas 5
    startPos = totalTeams - 4;
    endPos = totalTeams;
  } else {
    // Vasco no meio: mostrar 2 antes e 2 depois
    startPos = vascoPosition - 2;
    endPos = vascoPosition + 2;
  }

  // Filtrar times dentro do intervalo
  return allStandings.filter(
    (team) => team.position >= startPos && team.position <= endPos
  );
};

export const updateLeagueStanding = async (
  id: number,
  updates: {
    position?: number;
    team_name?: string;
    points?: number;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    is_vasco?: boolean;
  }
) => {
  const { data, error } = await supabase
    .from('league_standings')
    .update(updates)
    .eq('id', id);
  if (error) throw new Error(error.message);
  return data;
};

export const createLeagueStanding = async (standing: {
  position: number;
  team_name: string;
  points: number;
  played: number;
  wins?: number;
  draws?: number;
  losses?: number;
  goals_for?: number;
  goals_against?: number;
  goal_difference?: number;
  is_vasco?: boolean;
}) => {
  const { data, error } = await supabase
    .from('league_standings')
    .insert([standing]);
  if (error) throw new Error(error.message);
  return data;
};

export const deleteLeagueStanding = async (id: number) => {
  const { data, error } = await supabase
    .from('league_standings')
    .delete()
    .eq('id', id);
  if (error) throw new Error(error.message);
  return data;
};
