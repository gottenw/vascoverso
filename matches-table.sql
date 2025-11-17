-- Tabela para armazenar os próximos jogos do Vasco
CREATE TABLE IF NOT EXISTS matches (
  id SERIAL PRIMARY KEY,
  match_date TEXT NOT NULL,           -- Data do jogo (formato: DD/MM)
  opponent TEXT NOT NULL,             -- Nome do adversário
  championship TEXT NOT NULL,         -- Nome do campeonato (ex: Brasileirão, Copa do Brasil)
  location TEXT NOT NULL,             -- Local do jogo (ex: São Januário, Maracanã)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Inserir 3 jogos iniciais (dados de exemplo)
INSERT INTO matches (match_date, opponent, championship, location) VALUES
  ('20/10', 'Corinthians', 'Brasileirão', 'São Januário'),
  ('27/10', 'Flamengo', 'Brasileirão', 'Maracanã'),
  ('03/11', 'Fluminense', 'Copa do Brasil', 'São Januário')
ON CONFLICT DO NOTHING;

-- Habilitar Row Level Security
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública (qualquer usuário pode visualizar os jogos)
CREATE POLICY "Permitir leitura pública dos jogos"
  ON matches
  FOR SELECT
  USING (true);

-- Política para inserção/atualização/exclusão apenas por usuários autenticados
CREATE POLICY "Permitir atualização apenas para usuários autenticados"
  ON matches
  FOR ALL
  USING (auth.uid() IS NOT NULL);
