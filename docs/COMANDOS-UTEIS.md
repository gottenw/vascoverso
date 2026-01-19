# 🔧 Comandos Úteis - Vascoverso

## 📦 Preparação para Entrega

### Comprimir o Projeto (sem node_modules e .next)

```bash
# Na pasta vascoverso
cd /home/casinodino/Documentos/vascoverso

# Criar ZIP excluindo pastas desnecessárias
zip -r vascoverso-site.zip site/ \
  -x "site/node_modules/*" \
  -x "site/.next/*" \
  -x "site/.env.local"

# Verificar tamanho do arquivo
ls -lh vascoverso-site.zip
```

### Limpar o Projeto

```bash
cd site

# Deletar node_modules
rm -rf node_modules

# Deletar .next (cache)
rm -rf .next

# Deletar .env.local (seus dados locais)
rm .env.local
```

---

## 🧪 Testes Locais

### Desenvolvimento

```bash
cd site

# Instalar dependências
npm install

# Instalar Tiptap
bash install-tiptap.sh

# Rodar servidor de desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:3000
```

### Build de Produção

```bash
cd site

# Fazer build
npm run build

# Testar build local
npm start

# Analisar tamanho do bundle
ANALYZE=true npm run build
```

---

## 🔄 Git e GitHub

### Inicializar Repositório

```bash
cd site

# Iniciar git
git init

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "Initial commit - Vascoverso site"
```

### Conectar ao GitHub

```bash
# Adicionar remote (substitua com seu repositório)
git remote add origin https://github.com/usuario/vascoverso.git

# Verificar remote
git remote -v

# Push para GitHub
git push -u origin main

# Se der erro de branch, tente:
git branch -M main
git push -u origin main
```

### Atualizar Código

```bash
# Ver status
git status

# Adicionar mudanças
git add .

# Commit com mensagem
git commit -m "Descrição das mudanças"

# Push para GitHub
git push
```

---

## 🗄️ Supabase - Comandos SQL

### Criar Usuário Admin

```sql
-- No SQL Editor do Supabase

-- Criar usuário (substitua email e senha)
INSERT INTO auth.users (
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at
) VALUES (
  'admin@vascoverso.com',
  crypt('SuaSenhaForteAqui', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW()
);
```

### Ver Todas as Notícias

```sql
SELECT
  id,
  title,
  slug,
  created_at,
  image_url
FROM news
ORDER BY created_at DESC;
```

### Deletar Notícia

```sql
-- Substitua X pelo ID da notícia
DELETE FROM news WHERE id = X;
```

### Ver Usuários Admin

```sql
SELECT
  id,
  email,
  created_at,
  last_sign_in_at
FROM auth.users;
```

### Limpar Todas as Notícias (CUIDADO!)

```sql
-- ATENÇÃO: Isso deleta TODAS as notícias!
TRUNCATE TABLE news CASCADE;
```

---

## 🖼️ Supabase Storage

### Listar Imagens (via psql ou SQL Editor)

```sql
SELECT
  name,
  created_at,
  metadata
FROM storage.objects
WHERE bucket_id = 'news-images'
ORDER BY created_at DESC;
```

### Deletar Imagem Específica

```sql
-- Substitua 'nome-arquivo.jpg' pelo nome da imagem
DELETE FROM storage.objects
WHERE bucket_id = 'news-images'
AND name = 'nome-arquivo.jpg';
```

---

## 📊 Backup e Restore

### Backup do Banco de Dados

No painel do Supabase:
1. Settings > Database
2. Clique em "Backup"
3. Ou use pg_dump:

```bash
# Substitua com suas credenciais
pg_dump -h db.xxxx.supabase.co \
        -U postgres \
        -d postgres \
        -f backup-vascoverso-$(date +%Y%m%d).sql
```

### Backup de Imagens

```bash
# Usando Supabase CLI (se instalado)
supabase storage download \
  news-images \
  backup-images/ \
  --all

# Ou manualmente: Download via painel do Supabase
```

### Restore do Banco

```bash
# Restaurar de um backup SQL
psql -h db.xxxx.supabase.co \
     -U postgres \
     -d postgres \
     -f backup-vascoverso-20250103.sql
```

---

## 🌐 Vercel

### Comandos via Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy do projeto
cd site
vercel

# Deploy para produção
vercel --prod

# Ver logs
vercel logs

# Ver domínios
vercel domains ls

# Adicionar domínio
vercel domains add vascoverso.com.br
```

---

## 🔍 Debug e Troubleshooting

### Ver Logs do Next.js

```bash
# Durante desenvolvimento
npm run dev

# Durante build
npm run build 2>&1 | tee build.log

# Ver erros específicos
npm run build | grep -i error
```

### Limpar Cache do Next.js

```bash
cd site

# Deletar .next
rm -rf .next

# Deletar node_modules e reinstalar
rm -rf node_modules
npm install
```

### Ver Tamanho dos Pacotes

```bash
cd site

# Analisar bundle
ANALYZE=true npm run build

# Ver dependências pesadas
npm ls --depth=0
```

### Verificar Portas em Uso

```bash
# Ver o que está rodando na porta 3000
lsof -i :3000

# Matar processo na porta 3000
kill -9 $(lsof -t -i:3000)
```

---

## 📝 Utilitários

### Contar Linhas de Código

```bash
cd site/src

# Total de linhas
find . -name "*.tsx" -o -name "*.ts" | xargs wc -l

# Por extensão
cloc .
```

### Buscar em Arquivos

```bash
cd site

# Buscar texto em arquivos
grep -r "NEXT_PUBLIC_SUPABASE" .

# Buscar e mostrar linha
grep -rn "supabase" src/
```

### Listar Arquivos por Tamanho

```bash
cd site

# Maiores arquivos
du -ah . | sort -rh | head -20

# Tamanho de cada pasta
du -sh *
```

---

## 🔐 Variáveis de Ambiente

### Criar .env.local

```bash
cd site

# Copiar do exemplo
cp .env.example .env.local

# Editar
nano .env.local
# ou
code .env.local
```

### Verificar Variáveis

```bash
# Ver todas as variáveis NEXT_PUBLIC
printenv | grep NEXT_PUBLIC
```

---

## 📦 NPM

### Atualizar Dependências

```bash
cd site

# Ver pacotes desatualizados
npm outdated

# Atualizar todos (cuidado!)
npm update

# Atualizar um específico
npm update next
```

### Limpar Cache do NPM

```bash
npm cache clean --force
```

### Reinstalar Tudo

```bash
cd site

# Deletar node_modules e lock
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

---

## 🎨 Tailwind

### Gerar Classes CSS

```bash
cd site

# Build do Tailwind
npx tailwindcss -i ./src/app/globals.css -o ./output.css

# Watch mode
npx tailwindcss -i ./src/app/globals.css -o ./output.css --watch
```

---

## 📱 Testar Responsivo

### Abrir em Diferentes Dispositivos

```bash
# Descobrir IP local
hostname -I | awk '{print $1}'

# Acessar de outro dispositivo na mesma rede
# http://SEU-IP:3000
```

---

## 🚀 Performance

### Lighthouse (Google Chrome)

```bash
# Instalar CLI
npm install -g lighthouse

# Rodar teste
lighthouse http://localhost:3000 --view

# Gerar relatório
lighthouse http://localhost:3000 \
  --output html \
  --output-path ./lighthouse-report.html
```

---

## 📧 Envio de Arquivos

### Via WeTransfer (Navegador)

1. Acesse [wetransfer.com](https://wetransfer.com)
2. Arraste o ZIP
3. Preencha emails
4. Envie (até 2GB grátis)

### Via Google Drive/Dropbox

```bash
# Upload via CLI do Google Drive (se tiver configurado)
gdrive upload vascoverso-site.zip

# Ou use a interface web
```

---

## 🔧 Manutenção

### Atualizar Next.js

```bash
cd site

# Atualizar Next.js
npm install next@latest react@latest react-dom@latest

# Testar
npm run dev
```

### Atualizar Tiptap

```bash
cd site

# Atualizar todos os pacotes do Tiptap
npm update @tiptap/react @tiptap/starter-kit @tiptap/extension-image
```

---

## ✅ Verificações Finais

### Checklist Rápido via Comandos

```bash
cd site

# 1. Dependências instaladas?
ls node_modules | wc -l  # Deve ter várias

# 2. Build funciona?
npm run build  # Sem erros

# 3. Variáveis configuradas?
cat .env.local  # Deve ter as 2 variáveis

# 4. Sem arquivos sensíveis?
git status  # .env.local não deve aparecer

# 5. Tamanho OK?
du -sh .  # Deve ser razoável
```

---

## 📞 Ajuda Rápida

### Documentação Oficial

- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **Supabase:** [supabase.com/docs](https://supabase.com/docs)
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Tiptap:** [tiptap.dev/docs](https://tiptap.dev/docs)

### Comandos de Ajuda

```bash
# Next.js
npm run --help

# Vercel CLI
vercel --help

# Git
git --help
```

---

**Mantenha este arquivo salvo para consultas rápidas!** 📋

