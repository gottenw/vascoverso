# 🌐 Guia para Hospedar seu Site Vascoverso

## 👋 Bem-vindo!

Este guia vai te ajudar a colocar seu site **Vascoverso** no ar, mesmo sem conhecimento técnico!

**Tempo estimado:** 30-45 minutos
**Custo:** Gratuito (exceto domínio ~R$ 40/ano)

---

## 📋 O que você vai precisar

- [ ] Conta no **GitHub** (gratuita)
- [ ] Conta na **Vercel** (gratuita)
- [ ] Conta no **Supabase** (gratuita)
- [ ] **Domínio** (opcional, mas recomendado)

---

## 🚀 Passo 1: Criar Conta no GitHub

O GitHub guarda o código do seu site.

1. Acesse [github.com](https://github.com)
2. Clique em **"Sign up"**
3. Preencha:
   - Email
   - Senha
   - Nome de usuário (ex: vascoverso)
4. Confirme seu email
5. **Pronto!** ✅

---

## 📦 Passo 2: Fazer Upload do Código

### Opção A: Usando GitHub Desktop (Mais Fácil)

1. **Baixe o GitHub Desktop:**
   - Acesse [desktop.github.com](https://desktop.github.com)
   - Instale o programa

2. **Faça login:**
   - Abra o GitHub Desktop
   - Clique em "Sign in to GitHub.com"
   - Faça login com sua conta

3. **Crie um repositório:**
   - Clique em **"File"** > **"Add Local Repository"**
   - Ou **"Create New Repository"**
   - Nome: `vascoverso-site`
   - Marque **"Initialize with README"**

4. **Adicione os arquivos:**
   - Descompacte o ZIP do site
   - Copie TODOS os arquivos para a pasta do repositório
   - No GitHub Desktop, verá todos os arquivos listados

5. **Faça o commit:**
   - Embaixo, escreva: "Site Vascoverso inicial"
   - Clique em **"Commit to main"**

6. **Publique:**
   - Clique em **"Publish repository"**
   - Desmarque **"Keep this code private"** (ou deixe marcado se quiser privado)
   - Clique em **"Publish repository"**

### Opção B: Upload Manual (Mais Simples, mas menos recomendado)

1. No GitHub, clique em **"New"** (novo repositório)
2. Nome: `vascoverso-site`
3. Marque **"Add a README file"**
4. Clique em **"Create repository"**
5. Clique em **"uploading an existing file"**
6. Arraste TODOS os arquivos do site
7. Escreva: "Site Vascoverso"
8. Clique em **"Commit changes"**

**✅ Código no GitHub!**

---

## 🔧 Passo 3: Configurar o Supabase (Banco de Dados)

O Supabase armazena as notícias e imagens.

### 3.1 Criar Conta

1. Acesse [supabase.com](https://supabase.com)
2. Clique em **"Start your project"**
3. Faça login com GitHub (mais fácil)
4. **Pronto!** ✅

### 3.2 Criar Projeto

1. Clique em **"New Project"**
2. Preencha:
   - **Name:** Vascoverso
   - **Database Password:** Crie uma senha forte (anote!)
   - **Region:** South America (São Paulo)
3. Clique em **"Create new project"**
4. Aguarde 2-3 minutos...

### 3.3 Executar o Schema SQL

1. No menu lateral, clique em **"SQL Editor"**
2. Clique em **"New query"**
3. Cole TODO o conteúdo do arquivo `schema.sql`
4. Clique em **"Run"** (ou pressione Ctrl+Enter)
5. Deve aparecer: "Success. No rows returned"

**✅ Banco criado!**

### 3.4 Criar Bucket de Imagens

1. No menu lateral, clique em **"Storage"**
2. Clique em **"Create a new bucket"**
3. Preencha:
   - **Name:** `news-images` (exatamente assim!)
   - **Public bucket:** ✅ **MARQUE ESTA OPÇÃO**
4. Clique em **"Create bucket"**

**✅ Storage criado!**

### 3.5 Configurar Permissões

1. Clique no bucket `news-images`
2. Vá na aba **"Policies"**
3. Clique em **"New Policy"**
4. Selecione **"For full customization"**

**Política 1: Upload (Insert)**
- Policy name: `Enable upload`
- Allowed operation: `INSERT`
- Target roles: `authenticated`
- WITH CHECK: `bucket_id = 'news-images'`
- Clique em **"Review"** > **"Save policy"**

**Política 2: Leitura (Select)**
- Clique em **"New Policy"** novamente
- Policy name: `Enable read`
- Allowed operation: `SELECT`
- Target roles: `public`
- USING: `bucket_id = 'news-images'`
- Clique em **"Review"** > **"Save policy"**

**✅ Permissões configuradas!**

### 3.6 Pegar as Credenciais

1. Vá em **"Settings"** (ícone de engrenagem)
2. Clique em **"API"**
3. **COPIE E ANOTE:**
   - **Project URL** (ex: `https://abcdef.supabase.co`)
   - **anon public** key (chave longa que começa com `eyJ...`)

**⚠️ IMPORTANTE: Guarde essas informações! Vai precisar no próximo passo.**

---

## 🌐 Passo 4: Deploy na Vercel

A Vercel hospeda seu site gratuitamente!

### 4.1 Criar Conta

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel no GitHub
5. **Pronto!** ✅

### 4.2 Importar Projeto

1. No dashboard da Vercel, clique em **"Add New..."**
2. Selecione **"Project"**
3. Escolha o repositório `vascoverso-site`
4. Clique em **"Import"**

### 4.3 Configurar Variáveis de Ambiente

**IMPORTANTE:** Antes de fazer deploy, adicione as variáveis!

1. Em **"Configure Project"**, encontre **"Environment Variables"**
2. Adicione as seguintes variáveis:

**Variável 1:**
- **NAME:** `NEXT_PUBLIC_SUPABASE_URL`
- **VALUE:** Cole a Project URL do Supabase (passo 3.6)
- Clique em **"Add"**

**Variável 2:**
- **NAME:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **VALUE:** Cole a anon public key do Supabase (passo 3.6)
- Clique em **"Add"**

### 4.4 Deploy!

1. Clique em **"Deploy"**
2. Aguarde 2-5 minutos...
3. 🎉 **Site no ar!**

Você verá:
- ✅ Confetes na tela
- ✅ Um link do tipo: `vascoverso-site.vercel.app`
- ✅ Screenshot do site

**Clique em "Visit"** para ver seu site online!

---

## 🌐 Passo 5: Conectar seu Domínio (Opcional)

Se você tem um domínio (ex: vascoverso.com.br):

### 5.1 Na Vercel

1. No projeto, clique em **"Settings"**
2. Vá em **"Domains"**
3. Digite seu domínio (ex: `vascoverso.com.br`)
4. Clique em **"Add"**
5. A Vercel vai mostrar as configurações de DNS

### 5.2 No Registrador do Domínio

Configure os DNS do seu domínio:

**Registro.br / GoDaddy / Hostinger:**
1. Faça login no painel
2. Vá em **"Gerenciar DNS"** ou **"DNS Settings"**
3. Adicione os registros que a Vercel mostrou:

**Exemplo:**
```
Tipo    Nome    Valor
A       @       76.76.19.19
CNAME   www     cname.vercel-dns.com
```

4. Salve as alterações
5. Aguarde 24-48h para propagar

**✅ Domínio conectado!**

---

## 👤 Passo 6: Criar Usuário Admin

Para acessar o painel de notícias:

### 6.1 Criar Usuário no Supabase

1. No Supabase, vá em **"Authentication"**
2. Clique em **"Users"**
3. Clique em **"Add user"**
4. Escolha **"Create new user"**
5. Preencha:
   - **Email:** seu-email@gmail.com
   - **Password:** Crie uma senha forte
   - **Auto Confirm User:** ✅ Marque
6. Clique em **"Create user"**

### 6.2 Acessar o Painel Admin

1. Acesse: `https://seu-site.vercel.app/admin/login`
2. Faça login com o email e senha criados
3. 🎉 **Bem-vindo ao painel!**

---

## 📝 Passo 7: Criar sua Primeira Notícia

1. No painel admin, clique em **"Gerenciar Notícias"**
2. Clique em **"Nova Notícia"**
3. Preencha:
   - **Título:** Digite o título da notícia
   - **Imagem Principal:** Clique e faça upload
   - **Conteúdo:** Use o editor para escrever

4. Use a barra de ferramentas:
   - **B** = Negrito
   - **I** = Itálico
   - **🖼️** = Adicionar imagem
   - E mais...

5. Clique em **"Publicar Notícia"**
6. 🎉 **Notícia publicada!**

---

## ✅ Checklist Final

Verifique se tudo está funcionando:

- [ ] Site abre no navegador
- [ ] Imagens carregam corretamente
- [ ] Consigo acessar `/admin/login`
- [ ] Consigo fazer login no admin
- [ ] Consigo criar uma notícia
- [ ] Upload de imagens funciona
- [ ] Notícia aparece na página principal
- [ ] (Se tiver) Domínio funciona

---

## 🆘 Problemas Comuns

### ❌ "Error: Invalid Supabase credentials"
**Solução:**
1. Verifique se copiou as variáveis corretas
2. Vá na Vercel > Settings > Environment Variables
3. Confira se as variáveis estão corretas
4. Se errou, edite e faça redeploy

### ❌ Upload de imagem não funciona
**Solução:**
1. Verifique se criou o bucket `news-images`
2. Verifique se marcou como **público**
3. Verifique se criou as políticas

### ❌ Site não abre
**Solução:**
1. Vá na Vercel > Deployments
2. Clique no último deploy
3. Veja se há erros
4. Se houver, envie print pro desenvolvedor

### ❌ Não consigo fazer login
**Solução:**
1. Verifique se criou o usuário no Supabase
2. Tente resetar a senha em Authentication > Users
3. Certifique-se de marcar **"Auto Confirm User"**

---

## 💰 Custos Mensais

### Plano Gratuito (Recomendado para início):
- ✅ **Vercel:** Gratuito (100GB bandwidth/mês)
- ✅ **Supabase:** Gratuito (500MB storage, 2GB transferência)
- 💰 **Domínio:** R$ 40-120/ano

**Total:** R$ 3-10/mês (só o domínio dividido)

### Se o site crescer muito:
- **Vercel Pro:** $20/mês (1TB bandwidth)
- **Supabase Pro:** $25/mês (8GB storage)

**Você vai saber quando precisar fazer upgrade** - eles avisam!

---

## 📞 Precisa de Ajuda?

1. **Releia este guia** - a solução pode estar aqui
2. **Verifique o checklist** - pode ter esquecido algo
3. **Entre em contato com o desenvolvedor**

---

## 🎉 Parabéns!

Seu site está no ar! 🚀

Agora você pode:
- ✅ Criar notícias
- ✅ Fazer upload de imagens
- ✅ Gerenciar o conteúdo
- ✅ Compartilhar com o mundo!

**Boa sorte com o Vascoverso!** 🔴⚪⚫

---

## 📚 Documentos Úteis

- `INSTRUCOES-EDITOR.md` - Como usar o editor de notícias
- `CONFIGURACAO-SUPABASE.md` - Detalhes técnicos do Supabase
- `CHECKLIST-DEPLOY.md` - Checklist técnico

---

**Desenvolvido com ❤️ para o Vascoverso**
