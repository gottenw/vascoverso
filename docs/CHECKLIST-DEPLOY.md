# ✅ Checklist de Deploy - Vascoverso

## 🎯 Use este checklist antes de entregar o site ao cliente

---

## 📦 PREPARAÇÃO DO PROJETO

### Código e Build

- [ ] **Instalar todas as dependências**
  ```bash
  cd site
  npm install
  ```

- [ ] **Instalar Tiptap (editor)**
  ```bash
  bash install-tiptap.sh
  ```

- [ ] **Testar build local**
  ```bash
  npm run build
  ```
  ✅ Sem erros de build

- [ ] **Testar servidor de produção**
  ```bash
  npm start
  ```
  ✅ Site abre em `http://localhost:3000`

- [ ] **Testar todas as páginas**
  - [ ] Página inicial (`/`)
  - [ ] Quem Somos (`/quem-somos`)
  - [ ] Anuncie (`/anuncie`)
  - [ ] Admin Login (`/admin/login`)
  - [ ] Admin Dashboard (`/admin/dashboard`)
  - [ ] Gerenciar Notícias (`/admin/news`)
  - [ ] Nova Notícia (`/admin/news/new`)

### Configuração

- [ ] **Arquivo `.env.example` existe**
  - [ ] Contém `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] Contém `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- [ ] **Next.config.mjs configurado**
  - [ ] Aceita imagens do Supabase (`*.supabase.co`)
  - [ ] Bundle analyzer configurado

- [ ] **GitIgnore correto**
  - [ ] Ignora `node_modules/`
  - [ ] Ignora `.next/`
  - [ ] Ignora `.env*`

---

## 🗄️ SUPABASE (BANCO DE DADOS)

### Configuração do Banco

- [ ] **Schema SQL aplicado**
  - [ ] Tabela `profiles` existe
  - [ ] Tabela `news` existe
  - [ ] Tabela `categories` existe
  - [ ] Tabela `tags` existe
  - [ ] Tabela `news_tags` existe
  - [ ] Categorias iniciais inseridas

### Storage (Armazenamento de Imagens)

- [ ] **Bucket `news-images` criado**
  - [ ] Marcado como **público**
  - [ ] Tamanho máximo configurado (5MB)

- [ ] **Políticas de acesso configuradas**
  - [ ] Política de **INSERT** (upload) para authenticated
  - [ ] Política de **SELECT** (leitura) para public
  - [ ] (Opcional) Política de **DELETE** para authenticated

### Autenticação

- [ ] **Usuário admin criado**
  - [ ] Email configurado
  - [ ] Senha forte definida
  - [ ] Usuário confirmado (Auto Confirm marcado)

### Testes no Supabase

- [ ] **SQL Editor funciona**
- [ ] **Storage aceita uploads**
- [ ] **Imagens ficam públicas**
- [ ] **Login funciona**

---

## 🧪 TESTES FUNCIONAIS

### Editor de Notícias

- [ ] **Novo editor (Tiptap) carrega**
  - [ ] Barra de ferramentas aparece
  - [ ] Botões funcionam
  - [ ] Sem erros no console

- [ ] **Formatação de texto funciona**
  - [ ] Negrito
  - [ ] Itálico
  - [ ] Sublinhado
  - [ ] Tachado
  - [ ] Títulos (H1, H2, H3)
  - [ ] Listas
  - [ ] Alinhamento

- [ ] **Upload de imagem principal funciona**
  - [ ] Clique para upload
  - [ ] Preview da imagem
  - [ ] Botão de remover funciona

- [ ] **Upload de imagem no conteúdo funciona**
  - [ ] Botão verde 🖼️ funciona
  - [ ] Imagem é inserida no editor
  - [ ] Imagem aparece no preview

- [ ] **Links funcionam**
  - [ ] Pode adicionar link
  - [ ] Pode editar link
  - [ ] Pode remover link

### CRUD de Notícias

- [ ] **Criar notícia funciona**
  - [ ] Preencher título
  - [ ] Upload imagem principal
  - [ ] Escrever conteúdo
  - [ ] Publicar com sucesso
  - [ ] Redireciona para lista

- [ ] **Editar notícia funciona**
  - [ ] Notícia carrega no editor
  - [ ] Pode alterar título
  - [ ] Pode alterar imagem
  - [ ] Pode alterar conteúdo
  - [ ] Salvar funciona

- [ ] **Deletar notícia funciona**
  - [ ] Confirmação aparece
  - [ ] Notícia é removida
  - [ ] Lista atualiza

- [ ] **Listar notícias funciona**
  - [ ] Notícias aparecem na lista
  - [ ] Data está correta
  - [ ] Botões Editar/Excluir funcionam

### Interface Pública

- [ ] **Página inicial carrega**
  - [ ] Lista de notícias aparece (esquerda)
  - [ ] Destaques aparecem (direita)
  - [ ] Cruz de Malta aparece
  - [ ] Ícones sociais aparecem

- [ ] **Notícia individual carrega**
  - [ ] Título aparece
  - [ ] Imagem principal aparece
  - [ ] Conteúdo formatado aparece
  - [ ] Imagens do conteúdo carregam

- [ ] **Responsivo funciona**
  - [ ] Mobile (< 768px)
  - [ ] Tablet (768px - 1024px)
  - [ ] Desktop (> 1024px)

- [ ] **Dark/Light mode funciona**
  - [ ] Toggle muda o tema
  - [ ] Tema persiste ao recarregar

---

## 📄 DOCUMENTAÇÃO

### Arquivos Criados

- [ ] **`GUIA-DEPLOY-COMPLETO.md`**
  - [ ] Instruções para você (desenvolvedor)
  - [ ] Lista de arquivos para enviar
  - [ ] Credenciais necessárias

- [ ] **`GUIA-CLIENTE-HOSPEDAR.md`**
  - [ ] Passo a passo para o cliente
  - [ ] Linguagem simples
  - [ ] Screenshots/exemplos

- [ ] **`CHECKLIST-DEPLOY.md`** (este arquivo)
  - [ ] Lista completa de verificação

- [ ] **`INSTRUCOES-EDITOR.md`**
  - [ ] Como usar o editor
  - [ ] Guia para não-técnicos

- [ ] **`CONFIGURACAO-SUPABASE.md`**
  - [ ] Configuração detalhada
  - [ ] Políticas e permissions

- [ ] **`.env.example`**
  - [ ] Todas as variáveis listadas
  - [ ] Comentários explicativos

### README Atualizado

- [ ] **Existe `README.md` na raiz**
  - [ ] Descrição do projeto
  - [ ] Como instalar
  - [ ] Como rodar
  - [ ] Tecnologias usadas

---

## 🚀 PREPARAÇÃO PARA ENTREGA

### Git e GitHub

- [ ] **Repositório Git inicializado**
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  ```

- [ ] **`.gitignore` correto**
  - [ ] Não inclui `node_modules/`
  - [ ] Não inclui `.next/`
  - [ ] Não inclui `.env.local`

- [ ] **(Opcional) Repositório no GitHub**
  - [ ] Repositório criado
  - [ ] Código enviado
  - [ ] README visível

### Arquivos para Comprimir

Se enviar ZIP ao invés de GitHub:

- [ ] **Deletar pastas desnecessárias**
  - [ ] `node_modules/` (será reinstalada)
  - [ ] `.next/` (cache de build)
  - [ ] `.env.local` (credenciais locais)

- [ ] **Manter arquivos essenciais**
  - [ ] Todo código fonte (`src/`)
  - [ ] Configurações (`*.config.*`)
  - [ ] `package.json`
  - [ ] `.env.example`
  - [ ] Documentação (`*.md`)

- [ ] **Criar arquivo ZIP**
  ```bash
  zip -r vascoverso-site.zip site/ \
    -x "site/node_modules/*" \
    -x "site/.next/*" \
    -x "site/.env.local"
  ```

---

## 📋 INFORMAÇÕES PARA O CLIENTE

### Credenciais para Enviar

- [ ] **Supabase**
  - [ ] URL do projeto (`NEXT_PUBLIC_SUPABASE_URL`)
  - [ ] Anon Key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`)
  - [ ] (Opcional) Link do painel

- [ ] **Admin do Site**
  - [ ] Email do admin
  - [ ] Senha do admin
  - [ ] URL do admin (`/admin/login`)

### Documentos para Enviar

- [ ] `GUIA-CLIENTE-HOSPEDAR.md` (PRINCIPAL!)
- [ ] `INSTRUCOES-EDITOR.md`
- [ ] `CONFIGURACAO-SUPABASE.md`
- [ ] `CHECKLIST-DEPLOY.md`
- [ ] `.env.example`

### Informações Adicionais

- [ ] **Como acessar o admin**
- [ ] **Como criar notícias**
- [ ] **Como fazer backup**
- [ ] **Custos estimados**
- [ ] **Seu contato para suporte**

---

## 🔒 SEGURANÇA

### Boas Práticas

- [ ] **Senhas fortes**
  - [ ] Admin tem senha forte
  - [ ] Supabase tem senha forte

- [ ] **Variáveis de ambiente seguras**
  - [ ] Não commitadas no Git
  - [ ] Configuradas apenas na Vercel

- [ ] **RLS (Row Level Security) ativo**
  - [ ] Políticas configuradas no Supabase
  - [ ] Apenas authenticated pode criar/editar

- [ ] **HTTPS automático**
  - [ ] Vercel fornece SSL grátis
  - [ ] Todas as URLs são https://

---

## 💾 BACKUP

### Antes de Entregar

- [ ] **Backup do código**
  - [ ] Git commit de tudo
  - [ ] (Opcional) Clone local do repositório

- [ ] **Backup do banco de dados**
  - [ ] Export SQL do Supabase
  - [ ] Salvo localmente

- [ ] **Backup das imagens**
  - [ ] Download de todas as imagens do Storage
  - [ ] Salvo localmente

---

## 📧 EMAIL PARA O CLIENTE

Antes de enviar, prepare um email com:

- [ ] **Saudação e introdução**
- [ ] **Link/anexo dos arquivos**
- [ ] **Lista dos documentos incluídos**
- [ ] **Credenciais (se aplicável)**
- [ ] **Próximos passos**
- [ ] **Seu contato para dúvidas**
- [ ] **Prazo de suporte (se houver)**

**Modelo em: `GUIA-DEPLOY-COMPLETO.md`**

---

## ✅ VERIFICAÇÃO FINAL

### Tudo Pronto?

- [ ] ✅ Site funciona 100% localmente
- [ ] ✅ Build funciona sem erros
- [ ] ✅ Todas as funcionalidades testadas
- [ ] ✅ Editor funciona perfeitamente
- [ ] ✅ Uploads funcionam
- [ ] ✅ Supabase configurado
- [ ] ✅ Documentação completa
- [ ] ✅ Backup realizado
- [ ] ✅ Arquivos organizados
- [ ] ✅ Email preparado

### Se TUDO está ✅:

🎉 **PRONTO PARA ENTREGAR!** 🎉

---

## 🎁 ENTREGA

### Opção 1: GitHub (Recomendado)

1. Envie o link do repositório
2. Anexe os documentos em PDF/Markdown
3. Envie as credenciais por email separado (mais seguro)

### Opção 2: ZIP

1. Envie o arquivo ZIP via:
   - WeTransfer (gratuito até 2GB)
   - Google Drive
   - Dropbox
2. Anexe documentação
3. Envie credenciais separadamente

---

## 💡 DICAS FINAIS

### Para o Cliente

- ✅ Enfatize que é **fácil de usar**
- ✅ Destaque a **documentação completa**
- ✅ Mostre que há **suporte** (seu contato)
- ✅ Explique os **custos** (transparência)

### Para Você

- ✅ Mantenha um backup sempre
- ✅ Documente qualquer customização
- ✅ Ofereça um período de suporte
- ✅ Peça feedback ao cliente

---

## 📞 SUPORTE PÓS-ENTREGA

### O que o cliente pode precisar:

- ❓ Dúvidas sobre o editor
- ❓ Problemas de login
- ❓ Upload não funciona
- ❓ Alterações de layout
- ❓ Novas funcionalidades

**Defina:**
- [ ] Quantas horas de suporte incluídas
- [ ] Valor de hora extra (se aplicável)
- [ ] Formas de contato (email, WhatsApp, etc.)

---

## 🎊 PARABÉNS!

Se chegou até aqui e tudo está ✅, você está pronto!

**O site Vascoverso está completo e profissional!** 🔴⚪⚫

Boa entrega e sucesso! 🚀

---

**Checklist criado para garantir qualidade e profissionalismo na entrega**

*Última atualização: 2025*
