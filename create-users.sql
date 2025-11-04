-- Script para criar dois usuários operadores no Supabase Auth
-- IMPORTANTE: Execute este script no SQL Editor do Supabase

-- Criar primeiro operador
-- Email: operador1@vascoverso.com
-- Senha: Vasco2024!Op1
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'operador1@vascoverso.com',
  crypt('Vasco2024!Op1', gen_salt('bf')),
  now(),
  now(),
  now(),
  '',
  '',
  '',
  ''
);

-- Criar segundo operador
-- Email: operador2@vascoverso.com
-- Senha: Vasco2024!Op2
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'operador2@vascoverso.com',
  crypt('Vasco2024!Op2', gen_salt('bf')),
  now(),
  now(),
  now(),
  '',
  '',
  '',
  ''
);

-- Credenciais criadas:
-- Operador 1: operador1@vascoverso.com / Vasco2024!Op1
-- Operador 2: operador2@vascoverso.com / Vasco2024!Op2
