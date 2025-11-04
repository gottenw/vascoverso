# Instruções de Autenticação - Vascoverso

## Sistema Implementado

Foi implementado um sistema de autenticação real usando **Supabase Auth**. Agora o painel administrativo possui autenticação segura com JWT tokens gerenciados pelo Supabase.

## Passos para Configurar

### 1. Criar Usuários Operadores no Supabase

Execute o arquivo `create-users.sql` no SQL Editor do Supabase:

1. Acesse seu projeto no Supabase
2. Vá em **SQL Editor** (menu lateral)
3. Crie uma nova query
4. Copie e cole o conteúdo do arquivo `create-users.sql`
5. Execute o SQL

Isso criará dois usuários operadores:

**Operador 1:**
- Email: `operador1@vascoverso.com`
- Senha: `Vasco2024!Op1`

**Operador 2:**
- Email: `operador2@vascoverso.com`
- Senha: `Vasco2024!Op2`

### 2. Atualizar Políticas de Storage

Execute o arquivo `storage-policies.sql` no SQL Editor do Supabase:

1. No SQL Editor do Supabase
2. Crie uma nova query
3. Copie e cole o conteúdo do arquivo `storage-policies.sql`
4. Execute o SQL

Isso configurará as políticas de segurança:
- Apenas usuários **autenticados** podem fazer upload de imagens
- As imagens são **publicamente visíveis** (para exibição no site)
- Apenas usuários **autenticados** podem atualizar/deletar imagens

## Como Usar

### Login

1. Acesse `/admin/login`
2. Digite o email e senha de um dos operadores
3. Clique em "Entrar"

### Logout

1. No painel administrativo, clique no botão **"Sair"** no rodapé da barra lateral
2. Você será redirecionado para a tela de login

## Recursos Implementados

✅ **Login com email e senha** (substituiu o antigo sistema de JWT manual)
✅ **Proteção de rotas** - apenas usuários autenticados acessam o admin
✅ **Sessão persistente** - você permanece logado mesmo ao recarregar a página
✅ **Botão de logout** - saia com segurança do sistema
✅ **Upload de imagens seguro** - apenas operadores autenticados podem fazer upload
✅ **Verificação automática de autenticação** - redirecionamento automático se não estiver logado

## Segurança

- Os tokens JWT são gerenciados automaticamente pelo Supabase
- As senhas são criptografadas com bcrypt
- Row Level Security (RLS) está ativado em todas as tabelas
- Apenas usuários autenticados podem fazer upload/modificar conteúdo
- As imagens são públicas apenas para leitura (necessário para exibição no site)

## Notas

- Os operadores são apenas para fins administrativos e não são creditados nas notícias
- Para adicionar mais operadores, use o mesmo padrão do arquivo `create-users.sql`
- Para redefinir senhas, use a interface do Supabase Auth ou crie um script SQL
