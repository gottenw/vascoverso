-- Adicionar coluna image_credit à tabela news
ALTER TABLE news ADD COLUMN IF NOT EXISTS image_credit TEXT;

-- Comentário explicativo
COMMENT ON COLUMN news.image_credit IS 'Créditos da imagem principal (ex: Foto: Nome do Fotógrafo, Reprodução: Instagram)';
