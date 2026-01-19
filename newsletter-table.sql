-- Tabela para armazenar emails da newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índice para busca rápida por email
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Índice para busca por status ativo
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscribers(is_active);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_newsletter_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER newsletter_updated_at_trigger
BEFORE UPDATE ON newsletter_subscribers
FOR EACH ROW
EXECUTE FUNCTION update_newsletter_updated_at();

-- Comentários para documentação
COMMENT ON TABLE newsletter_subscribers IS 'Tabela para armazenar emails de assinantes da newsletter do Vascoverso';
COMMENT ON COLUMN newsletter_subscribers.email IS 'Email do assinante (único)';
COMMENT ON COLUMN newsletter_subscribers.is_active IS 'Indica se o assinante está ativo ou cancelou a inscrição';
COMMENT ON COLUMN newsletter_subscribers.subscribed_at IS 'Data e hora da inscrição';
COMMENT ON COLUMN newsletter_subscribers.unsubscribed_at IS 'Data e hora do cancelamento (se aplicável)';
