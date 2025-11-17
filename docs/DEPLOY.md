# 🚀 Guia Completo: Deploy no GitHub + Vercel

Este guia ensina **TUDO** que você precisa fazer para colocar o Vascoverso online. Siga passo a passo!

---

## 📋 O que você vai fazer:
1. ✅ Subir o código para o GitHub (repositório online)
2. ✅ Conectar o Vercel ao GitHub
3. ✅ Configurar variáveis de ambiente (Supabase)
4. ✅ Fazer o deploy automático
5. ✅ Compartilhar o link com seu contratante

**Tempo estimado**: 15-20 minutos

---

## 🔧 Pré-requisitos

Antes de começar, você precisa:

### 1. **Git instalado**
Verificar se tem o Git:
```bash
git --version
```

Se não tiver, baixe em: https://git-scm.com/downloads

### 2. **Contas criadas**
- ✅ **GitHub**: https://github.com/signup (gratuito)
- ✅ **Vercel**: https://vercel.com/signup (gratuito)
  - **IMPORTANTE**: Crie a conta do Vercel usando **"Continue with GitHub"**

### 3. **Supabase configurado**
- Você já deve ter o Supabase configurado
- Vamos precisar das credenciais (URL e Anon Key)

---

## 📦 PARTE 1: Subir o Código para o GitHub

### **Passo 1.1: Criar repositório no GitHub**

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `vascoverso` (ou o nome que preferir)
   - **Description**: "Site de notícias do Vasco da Gama"
   - **Visibility**: **Private** (recomendado) ou Public
   - **NÃO** marque nenhuma das opções (README, .gitignore, license)
3. Clique em **"Create repository"**

### **Passo 1.2: Configurar Git local (apenas na primeira vez)**

Abra o terminal na **pasta raiz do projeto** (`/home/casinodino/Documentos/vascoverso`) e execute:

```bash
# Configurar nome e email (substitua pelos seus dados)
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

### **Passo 1.3: Inicializar repositório Git**

No terminal, na pasta raiz do projeto:

```bash
# Inicializar Git (se ainda não foi iniciado)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Primeiro commit: Vascoverso pronto para deploy"
```

### **Passo 1.4: Conectar ao GitHub e enviar código**

O GitHub vai mostrar comandos na página do repositório. Use estes:

```bash
# Adicionar origem remota (substitua USERNAME e REPO pelos seus)
git remote add origin https://github.com/SEU-USERNAME/vascoverso.git

# Enviar código para o GitHub
git branch -M main
git push -u origin main
```

**🎉 Pronto! Código está no GitHub agora!**

Acesse `https://github.com/SEU-USERNAME/vascoverso` para ver.

---

## 🌐 PARTE 2: Deploy no Vercel

### **Passo 2.1: Acessar Vercel**

1. Acesse: https://vercel.com/login
2. Clique em **"Continue with GitHub"**
3. Faça login com sua conta GitHub

### **Passo 2.2: Importar projeto do GitHub**

1. No dashboard da Vercel, clique em **"Add New"** → **"Project"**
2. Você verá uma lista dos seus repositórios do GitHub
3. Encontre **"vascoverso"** e clique em **"Import"**

### **Passo 2.3: Configurar o projeto**

Na tela de configuração:

#### **Framework Preset:**
- Vercel vai detectar automaticamente: **Next.js** ✅
- Deixe como está

#### **Build and Output Settings:**
- Deixe os padrões (auto-detectados):
  - Build Command: `npm run build`
  - Output Directory: `.next`
  - Install Command: `npm install`
- **Não precisa alterar nada!**

### **Passo 2.4: Adicionar variáveis de ambiente** 🔑

**MUITO IMPORTANTE!** Sem isso, o site não vai funcionar.

Clique em **"Environment Variables"** e adicione:

**Variável 1:**
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: (cole a URL do seu Supabase)
  - Encontre em: Supabase → Settings → API → Project URL
  - Exemplo: `https://xxxxxxxxxxxxx.supabase.co`

**Variável 2:**
- **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: (cole a chave anon do Supabase)
  - Encontre em: Supabase → Settings → API → anon/public
  - É uma chave **longa** começando com `eyJ...`

**Onde encontrar no Supabase:**
1. Abra seu projeto no Supabase
2. Vá em **Settings** (engrenagem) → **API**
3. Copie:
   - Project URL
   - anon public key

### **Passo 2.5: Deploy! 🚀**

1. Clique em **"Deploy"**
2. Aguarde 2-5 minutos (a Vercel vai construir o site)
3. Você verá um confete 🎉 quando terminar!

---

## ✅ PARTE 3: Acessar o Site

### **Seu site está no ar!**

A Vercel vai gerar uma URL tipo:
```
https://vascoverso.vercel.app
```
ou
```
https://vascoverso-xxxxx.vercel.app
```

**Clique no link e veja seu site funcionando!**

### **Compartilhar com o contratante:**

Copie o link e envie. Exemplo de mensagem:

```
Olá! O site Vascoverso está no ar em versão beta:
🔗 https://vascoverso.vercel.app

Funcionalidades disponíveis:
✅ Listagem de notícias
✅ Sistema de busca
✅ Tabela do campeonato (5 times ao redor do Vasco)
✅ Painel administrativo (/admin/login)
✅ Modo claro/escuro
✅ Design responsivo

Aguardo feedback! 🚀
```

---

## 🔄 PARTE 4: Atualizar o Site (Futuras Mudanças)

Sempre que fizer alterações no código:

### **No terminal, na pasta do projeto:**

```bash
# Adicionar alterações
git add .

# Fazer commit com mensagem descritiva
git commit -m "Descrição da mudança (ex: Corrigir bug da tabela)"

# Enviar para o GitHub
git push
```

**🎉 A Vercel detecta automaticamente e faz o deploy!** (2-3 minutos)

---

## ⚙️ PARTE 5: Configurações Avançadas (Opcional)

### **Adicionar domínio personalizado**

Quer usar `vascoverso.com.br` em vez de `.vercel.app`?

1. Compre um domínio (Registro.br, GoDaddy, etc)
2. No Vercel: **Settings** → **Domains**
3. Adicione seu domínio
4. Configure o DNS seguindo as instruções da Vercel

### **Configurar Supabase para produção**

No Supabase, adicione a URL da Vercel:
1. Vá em **Authentication** → **URL Configuration**
2. Adicione em **Site URL**: `https://seu-site.vercel.app`
3. Adicione em **Redirect URLs**: `https://seu-site.vercel.app/**`

### **Variáveis de ambiente adicionais**

Se no futuro adicionar mais variáveis:
1. Vercel → Project → **Settings** → **Environment Variables**
2. Adicione a nova variável
3. Clique em **"Redeploy"** para aplicar

---

## 🐛 Solução de Problemas Comuns

### **Erro: "Cannot find module" durante build**
**Solução**:
- Execute `npm install` localmente primeiro
- Verifique se o `package.json` está na raiz do projeto
- Limpe o cache: Vercel → Deployments → Redeploy

### **Erro: "Supabase client error"**
**Solução**: Confira se as variáveis de ambiente estão corretas:
- Nomes exatos (com `NEXT_PUBLIC_`)
- Valores sem espaços extras

### **Site demora para carregar**
**Solução**: Normal no primeiro acesso (cold start). Depois fica rápido!

### **Erro 404 em rotas**
**Solução**: Limpe o cache:
1. Vercel → Project → **Deployments**
2. Clique nos três pontos → **Redeploy**

### **Build falha com erro de TypeScript**
**Solução**: Execute localmente primeiro:
```bash
cd site
npm run build
```
Corrija os erros antes de fazer push.

---

## 📱 Testar Responsividade

Após o deploy, teste em:
- 📱 Mobile (Chrome DevTools: F12 → Toggle device toolbar)
- 💻 Desktop (diferentes resoluções)
- 🌐 Diferentes navegadores (Chrome, Firefox, Safari)

---

## 🔐 Segurança - Login Admin

**URL do painel**: `https://seu-site.vercel.app/admin/login`

**Credenciais padrão** (altere depois!):
- Email: (configurado no Supabase)
- Senha: (configurada no Supabase)

**Para adicionar novo admin:**
1. Supabase → **Authentication** → **Users**
2. Clique em **"Add user"**
3. Digite email e senha
4. Usuário pode fazer login em `/admin/login`

---

## 📊 Monitoramento

### **Ver acessos e erros:**
- Vercel → Project → **Analytics** (grátis até 100k pageviews/mês)
- Vercel → Project → **Logs** (ver erros em tempo real)

### **Performance:**
- Vercel → Project → **Speed Insights** (opcional, pago)
- Ou use: Google PageSpeed Insights (gratuito)

---

## 🎯 Checklist Final

Antes de enviar para o contratante:

- [ ] Site abre sem erros
- [ ] Notícias estão aparecendo
- [ ] Busca funciona
- [ ] Tabela do campeonato carrega
- [ ] Modo claro/escuro funciona
- [ ] Site é responsivo (mobile OK)
- [ ] Login admin funciona
- [ ] Consegue criar/editar notícias no admin

---

## 📞 Suporte

**Problemas com:**
- **GitHub**: https://docs.github.com
- **Vercel**: https://vercel.com/docs
- **Supabase**: https://supabase.com/docs

**Me avise se tiver dúvidas! Posso ajustar qualquer coisa. 🚀**

---

## 🎉 Parabéns!

Você acabou de fazer o deploy de um site Next.js completo com:
- ✅ Backend (Supabase)
- ✅ Frontend (Next.js + React)
- ✅ Deploy automático (Vercel + GitHub)
- ✅ Admin panel
- ✅ SEO otimizado

**Agora é só crescer! 📈**
