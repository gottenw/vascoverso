-- Tabelas adicionais para o Vascoverso
-- Execute este SQL no Supabase SQL Editor

-- Tabela para gerenciar redes sociais
CREATE TABLE IF NOT EXISTS social_media (
  id SERIAL PRIMARY KEY,
  platform TEXT NOT NULL UNIQUE,
  follower_count TEXT NOT NULL,
  url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Inserir dados iniciais para redes sociais
INSERT INTO social_media (platform, follower_count, url, display_order, is_active) VALUES
  ('Youtube', '1.5M', 'https://youtube.com/@vascodagama', 1, true),
  ('Facebook', '2.3M', 'https://facebook.com/vascodagama', 2, true),
  ('Instagram', '3.1M', 'https://instagram.com/vascodagama', 3, true),
  ('X', '1.8M', 'https://twitter.com/vascodagama', 4, true),
  ('TikTok', '2.5M', 'https://tiktok.com/@vascodagama', 5, true),
  ('Kwai', '800K', 'https://kwai.com/@vascodagama', 6, true)
ON CONFLICT (platform) DO NOTHING;

-- Tabela para o Campeonato Brasileiro
CREATE TABLE IF NOT EXISTS league_standings (
  id SERIAL PRIMARY KEY,
  position INTEGER NOT NULL,
  team_name TEXT NOT NULL,
  points INTEGER NOT NULL,
  played INTEGER NOT NULL,
  wins INTEGER DEFAULT 0,
  draws INTEGER DEFAULT 0,
  losses INTEGER DEFAULT 0,
  goals_for INTEGER DEFAULT 0,
  goals_against INTEGER DEFAULT 0,
  goal_difference INTEGER DEFAULT 0,
  is_vasco BOOLEAN DEFAULT false,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  UNIQUE(position)
);

-- Inserir dados iniciais para o Campeonato Brasileiro
INSERT INTO league_standings (position, team_name, points, played, wins, draws, losses, goals_for, goals_against, goal_difference, is_vasco) VALUES
  (1, 'Botafogo', 40, 20, 12, 4, 4, 35, 18, 17, false),
  (2, 'Palmeiras', 38, 20, 11, 5, 4, 33, 19, 14, false),
  (3, 'Flamengo', 35, 20, 10, 5, 5, 38, 22, 16, false),
  (4, 'Vasco da Gama', 34, 20, 10, 4, 6, 30, 24, 6, true),
  (5, 'Fluminense', 32, 20, 9, 5, 6, 28, 23, 5, false),
  (6, 'Grêmio', 30, 20, 8, 6, 6, 26, 22, 4, false),
  (7, 'São Paulo', 28, 20, 8, 4, 8, 24, 25, -1, false),
  (8, 'Internacional', 27, 20, 7, 6, 7, 25, 26, -1, false),
  (9, 'Athletico-PR', 25, 20, 7, 4, 9, 22, 28, -6, false),
  (10, 'Corinthians', 24, 20, 6, 6, 8, 21, 27, -6, false)
ON CONFLICT (position) DO NOTHING;

-- Habilitar RLS nas novas tabelas
ALTER TABLE social_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE league_standings ENABLE ROW LEVEL SECURITY;

-- Políticas para social_media
CREATE POLICY "Social media públicas para leitura"
  ON social_media FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Apenas autenticados podem atualizar social media"
  ON social_media FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Apenas autenticados podem inserir social media"
  ON social_media FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Políticas para league_standings
CREATE POLICY "Tabela pública para leitura"
  ON league_standings FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Apenas autenticados podem atualizar tabela"
  ON league_standings FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Apenas autenticados podem inserir na tabela"
  ON league_standings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Apenas autenticados podem deletar da tabela"
  ON league_standings FOR DELETE
  TO authenticated
  USING (true);
