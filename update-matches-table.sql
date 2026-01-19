-- Adicionar campo de data completa para ordenação correta
ALTER TABLE matches ADD COLUMN IF NOT EXISTS match_date_full DATE;

-- Atualizar o campo com o ano atual (2025) para os jogos existentes
-- Você precisará ajustar manualmente conforme o ano correto de cada jogo

-- Exemplo de atualização manual:
-- UPDATE matches SET match_date_full = '2024-11-23' WHERE match_date = '23/11';
-- UPDATE matches SET match_date_full = '2024-12-02' WHERE match_date = '02/12';

-- Criar uma função para converter DD/MM para data completa automaticamente
-- (assumindo ano atual ou próximo)
CREATE OR REPLACE FUNCTION update_match_date_full()
RETURNS TRIGGER AS $$
DECLARE
  day_part INTEGER;
  month_part INTEGER;
  current_year INTEGER;
  full_date DATE;
BEGIN
  -- Extrair dia e mês do formato DD/MM
  day_part := CAST(SPLIT_PART(NEW.match_date, '/', 1) AS INTEGER);
  month_part := CAST(SPLIT_PART(NEW.match_date, '/', 2) AS INTEGER);
  current_year := EXTRACT(YEAR FROM CURRENT_DATE);

  -- Construir data completa
  full_date := MAKE_DATE(current_year, month_part, day_part);

  -- Se a data for no passado, usar ano seguinte
  IF full_date < CURRENT_DATE THEN
    full_date := MAKE_DATE(current_year + 1, month_part, day_part);
  END IF;

  NEW.match_date_full := full_date;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar trigger para atualizar automaticamente
DROP TRIGGER IF EXISTS trigger_update_match_date_full ON matches;
CREATE TRIGGER trigger_update_match_date_full
  BEFORE INSERT OR UPDATE OF match_date ON matches
  FOR EACH ROW
  EXECUTE FUNCTION update_match_date_full();

-- Atualizar todos os jogos existentes
UPDATE matches SET match_date = match_date;
