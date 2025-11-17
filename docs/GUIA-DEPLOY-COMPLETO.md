# 🚀 Guia Completo de Deploy - Vascoverso

## 📋 O que você precisa enviar para o cliente

### 1️⃣ Arquivos do Projeto

Comprima a pasta **completa** do projeto, **EXCETO**:
- ❌ `node_modules/` (muito pesada, será reinstalada)
- ❌ `.next/` (cache de build)
- ❌ `.env.local` (contém suas credenciais locais)
- ✅ Inclua `.env.example` (modelo de variáveis)

**Como fazer:**
```bash
cd /home/casinodino/Documentos/vascoverso

# Criar arquivo ZIP excluindo pastas desnecessárias
zip -r vascoverso-site.zip site/ \
  -x "site/node_modules/*" \
  -x "site/.next/*" \
  -x "site/.env.local"
```

Ou manualmente:
1. Copie a pasta `site/`
2. Delete `site/node_modules/`
3. Delete `site/.next/`
4. Delete `site/.env.local`
5. Comprima em ZIP

---

### 2️⃣ Banco de Dados Supabase

O cliente precisa ter:

#### Opção A: Usar o mesmo Supabase (Você gerencia)
- ✅ Mais simples
- ✅ Você mantém controle
- ❌ Cliente depende de você

**O que fazer:**
- Envie as credenciais atuais do Supabase
- Configure o bucket de imagens
- Dê acesso ao cliente para o painel admin

#### Opção B: Cliente cria próprio Supabase (Recomendado)
- ✅ Cliente tem controle total
- ✅ Independência
- ❌ Precisa configurar tudo novamente

**O que fazer:**
1. Cliente cria conta em [supabase.com](https://supabase.com)
2. Cliente cria novo projeto
3. Cliente executa o schema SQL
4. Cliente configura o storage
5. Cliente usa suas próprias credenciais

---

### 3️⃣ Credenciais e Variáveis de Ambiente

O cliente precisará configurar 2 variáveis obrigatórias:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Onde o cliente encontra essas informações:**
1. Acesse [app.supabase.com](https://app.supabase.com)
2. Selecione o projeto
3. Vá em **Settings** > **API**
4. Copie:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

### 4️⃣ Domínio

O cliente precisa ter um domínio registrado. Opções:

**Registradores populares no Brasil:**
- [Registro.br](https://registro.br) - .com.br (mais barato)
- [GoDaddy](https://godaddy.com) - .com
- [Hostinger](https://hostinger.com.br)
- [Locaweb](https://locaweb.com.br)

**Custo:** R$ 40-120/ano

---

### 5️⃣ Hospedagem

**Recomendação: Vercel** (melhor para Next.js)

#### Por que Vercel?
- ✅ **Gratuito** para projetos pessoais
- ✅ **Deploy automático** do GitHub
- ✅ **Super rápido** (CDN global)
- ✅ **SSL grátis** (HTTPS automático)
- ✅ **Fácil de usar**
- ✅ **Suporte a Next.js** nativo

#### Alternativas:
- **Netlify** - Similar ao Vercel
- **Railway** - Boa para projetos maiores
- **DigitalOcean** - Mais técnico, precisa configurar servidor

---

## 🎯 Passo a Passo para Entregar ao Cliente

### Preparação (O que VOCÊ faz)

#### 1. Testar o Build Local
```bash
cd site
npm run build
npm start
```
- Certifique-se de que não há erros
- Teste o site em `http://localhost:3000`

#### 2. Preparar Documentação
Arquivos que você já criou:
- ✅ `GUIA-DEPLOY-COMPLETO.md` (este arquivo)
- ✅ `GUIA-CLIENTE-HOSPEDAR.md` (próximo arquivo)
- ✅ `CHECKLIST-DEPLOY.md` (checklist)
- ✅ `INSTRUCOES-EDITOR.md` (como usar o editor)
- ✅ `CONFIGURACAO-SUPABASE.md` (configurar banco)
- ✅ `.env.example` (modelo de variáveis)

#### 3. Configurar Supabase (se o cliente for usar o dele)
O cliente precisará:
1. Criar projeto no Supabase
2. Executar `schema.sql` no SQL Editor
3. Criar bucket `news-images`
4. Configurar políticas de acesso
5. Criar usuário admin

#### 4. Comprimir o Projeto
```bash
# Na pasta vascoverso
zip -r vascoverso-site.zip site/ \
  -x "site/node_modules/*" \
  -x "site/.next/*" \
  -x "site/.env.local"
```

#### 5. Criar Repositório Git (Recomendado)

**Opção A: GitHub (Recomendado)**
```bash
cd site
git init
git add .
git commit -m "Initial commit - Vascoverso site"

# Criar repositório no GitHub e depois:
git remote add origin https://github.com/usuario/vascoverso.git
git push -u origin main
```

**Opção B: Enviar ZIP**
- Envie o arquivo ZIP + documentação
- Cliente descompacta e cria próprio repositório

---

### Configuração (O que o CLIENTE faz)

Envie o arquivo `GUIA-CLIENTE-HOSPEDAR.md` (próximo) para ele seguir.

---

## 📦 Checklist de Entrega

### Arquivos para Enviar:

- [ ] **Código do site** (ZIP ou repositório Git)
- [ ] **Documentações:**
  - [ ] `GUIA-CLIENTE-HOSPEDAR.md` - Como hospedar
  - [ ] `INSTRUCOES-EDITOR.md` - Como usar o editor
  - [ ] `CONFIGURACAO-SUPABASE.md` - Configurar banco
  - [ ] `CHECKLIST-DEPLOY.md` - Checklist de deploy
  - [ ] `.env.example` - Modelo de variáveis

### Credenciais para Enviar (se usar seu Supabase):

- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Usuário e senha do painel admin
- [ ] Link do painel Supabase (para gerenciar)

### Informações para o Cliente:

- [ ] Como acessar o painel admin (`/admin/login`)
- [ ] Credenciais do admin
- [ ] Como criar notícias
- [ ] Como fazer backup
- [ ] Seu contato para suporte

---

## 💰 Custos para o Cliente

### Gratuito:
- ✅ Hospedagem Vercel (plano gratuito)
- ✅ Supabase (500MB storage gratuito)
- ✅ SSL/HTTPS (incluído no Vercel)

### Pagos:
- 💰 Domínio: R$ 40-120/ano
- 💰 Se exceder limites do Supabase: ~$25/mês
- 💰 Se exceder limites do Vercel: ~$20/mês

**Total inicial:** ~R$ 40-120/ano (só o domínio)

---

## 🔧 Suporte Pós-Entrega

### O que o cliente pode fazer sozinho:
- Criar/editar/deletar notícias
- Fazer upload de imagens
- Gerenciar conteúdo

### O que pode precisar de você:
- Alterações no layout/design
- Adicionar novas funcionalidades
- Problemas técnicos com deploy
- Upgrades do código

---

## 📞 Modelo de Email para o Cliente

```
Olá [Nome do Cliente],

Segue o site Vascoverso completo e pronto para publicação! 🎉

📦 Arquivos enviados:
- Código do site (ZIP/link do GitHub)
- Guias de instalação e uso
- Documentação completa

🚀 Próximos passos:
1. Leia o arquivo "GUIA-CLIENTE-HOSPEDAR.md"
2. Crie conta na Vercel (gratuita)
3. Faça deploy do site
4. Configure seu domínio

📚 Documentos importantes:
- GUIA-CLIENTE-HOSPEDAR.md → Como hospedar o site
- INSTRUCOES-EDITOR.md → Como criar notícias
- CONFIGURACAO-SUPABASE.md → Configurar banco de dados

🔑 Credenciais:
[Se aplicável, envie as credenciais do Supabase e admin]

💡 Qualquer dúvida, estou à disposição!

Atenciosamente,
[Seu Nome]
```

---

## ⚠️ IMPORTANTE: Backup

Antes de entregar, faça backup de:
- [ ] Código completo (Git)
- [ ] Banco de dados (export do Supabase)
- [ ] Imagens do Storage
- [ ] Documentação

---

## ✅ Está Pronto para Entregar?

Verifique se:
- [ ] Site funciona localmente (`npm run build` e `npm start`)
- [ ] Não há erros no console
- [ ] Todas as funcionalidades testadas
- [ ] Editor funciona perfeitamente
- [ ] Upload de imagens funciona
- [ ] Documentação completa
- [ ] `.env.example` criado
- [ ] Supabase configurado
- [ ] Backup realizado

Se tudo ✅, está pronto! 🚀

---

**Boa sorte com a entrega!** 🎊
