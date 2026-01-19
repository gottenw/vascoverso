-- Adicionar campos de autor (texto) e data de atualização na tabela news
ALTER TABLE news ADD COLUMN IF NOT EXISTS author TEXT;
ALTER TABLE news ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE;

-- Atualizar notícias existentes com data de atualização igual à criação
UPDATE news SET updated_at = created_at WHERE updated_at IS NULL;

-- Criar trigger para atualizar automaticamente updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Aplicar trigger na tabela news
DROP TRIGGER IF EXISTS update_news_updated_at ON news;
CREATE TRIGGER update_news_updated_at
    BEFORE UPDATE ON news
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Comentários para documentação
COMMENT ON COLUMN news.author IS 'Nome do autor da notícia (texto livre)';
COMMENT ON COLUMN news.updated_at IS 'Data e hora da última atualização da notícia';
