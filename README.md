# ⚽ VascoVerso - Site de Notícias do Vasco da Gama

![Vasco da Gama](https://img.shields.io/badge/Vasco-da%20Gama-red?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0icmVkIi8+PC9zdmc+)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)

Site oficial de notícias do **VascoVerso** - seu portal de informações sobre o Gigante da Colina! 🔴⚪⚫

---

## 🚀 Início Rápido

### 📖 Para o Cliente (Não Técnico)

**Quer colocar o site no ar?**

👉 **Leia:** [`GUIA-CLIENTE-HOSPEDAR.md`](./GUIA-CLIENTE-HOSPEDAR.md)

Este guia explica tudo em linguagem simples, passo a passo!

---

### 💻 Para Desenvolvedores

#### Instalação Local

```bash
# 1. Clone o repositório
git clone https://github.com/usuario/vascoverso.git
cd vascoverso/site

# 2. Instale as dependências
npm install

# 3. Instale o editor Tiptap
bash install-tiptap.sh

# 4. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais do Supabase

# 5. Execute o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📚 Documentação Completa

### 🎯 Para o Cliente

| Documento | Descrição |
|-----------|-----------|
| [**DEPLOY.md**](./DEPLOY.md) | 🚀 Como hospedar o site (GitHub + Vercel) |
| [**Adsense.md**](./Adsense.md) | 💰 Como ativar Google AdSense no site |
| [**INSTRUCOES-EDITOR.md**](./site/INSTRUCOES-EDITOR.md) | Como criar e editar notícias |

### 🔧 Para Desenvolvedores

| Documento | Descrição |
|-----------|-----------|
| [**GUIA-DEPLOY-COMPLETO.md**](./GUIA-DEPLOY-COMPLETO.md) | Guia técnico completo de deploy |
| [**CHECKLIST-DEPLOY.md**](./CHECKLIST-DEPLOY.md) | Checklist antes de entregar |
| [**CONFIGURACAO-SUPABASE.md**](./site/CONFIGURACAO-SUPABASE.md) | Configurar banco de dados |
| [**NOVO-EDITOR-README.md**](./site/NOVO-EDITOR-README.md) | Documentação do editor Tiptap |

---

## ✨ Funcionalidades

### 🎨 Interface

- ✅ Design moderno e responsivo
- ✅ Dark mode / Light mode
- ✅ Cruz de Malta do Vasco
- ✅ Ícones sociais (YouTube, Instagram, Facebook, etc.)
- ✅ Preparado para Google AdSense (placeholders ocultos até ativação)

### 📝 Editor de Notícias

- ✅ Editor visual (WYSIWYG) super intuitivo
- ✅ Negrito, itálico, sublinhado, tachado
- ✅ Títulos (H1, H2, H3)
- ✅ Listas (marcadores e numeradas)
- ✅ Alinhamento de texto
- ✅ Upload de imagens (principal + no conteúdo)
- ✅ Inserção de links
- ✅ Desfazer/Refazer

### 🔐 Painel Administrativo

- ✅ Login seguro
- ✅ Criar, editar e deletar notícias
- ✅ Gerenciar tabelas e partidas
- ✅ Upload de imagens no Supabase Storage

---

## 🛠️ Tecnologias

### Frontend
- **Next.js 15.5** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Tiptap** - Editor de texto rico
- **Lucide React** - Ícones

### Backend
- **Supabase** - Banco de dados (PostgreSQL)
- **Supabase Storage** - Armazenamento de imagens
- **Supabase Auth** - Autenticação

### Deploy
- **Vercel** - Hospedagem (recomendado)
- **GitHub** - Controle de versão

---

## 📂 Estrutura do Projeto

```
vascoverso/
├── site/
│   ├── src/
│   │   ├── app/              # Pages e rotas
│   │   │   ├── admin/        # Painel administrativo
│   │   │   ├── noticias/     # Páginas de notícias
│   │   │   └── page.tsx      # Página inicial
│   │   ├── components/       # Componentes React
│   │   │   ├── admin/        # Componentes do admin
│   │   │   │   ├── RichTextEditor.tsx  # Editor Tiptap
│   │   │   │   └── NewsForm.tsx        # Formulário de notícias
│   │   │   ├── icons/        # Ícones customizados
│   │   │   ├── Header.tsx    # Cabeçalho
│   │   │   ├── Footer.tsx    # Rodapé
│   │   │   └── ...
│   │   └── lib/
│   │       └── supabase.ts   # Configuração Supabase
│   ├── public/               # Arquivos estáticos
│   │   └── cruzdemalta.png   # Logo do Vasco
│   ├── .env.example          # Modelo de variáveis
│   ├── package.json          # Dependências
│   └── ...
├── GUIA-CLIENTE-HOSPEDAR.md  # Guia para o cliente
├── GUIA-DEPLOY-COMPLETO.md   # Guia técnico de deploy
├── CHECKLIST-DEPLOY.md       # Checklist de entrega
└── README.md                 # Este arquivo
```

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env.local` na pasta `site/`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-key-aqui
```

**Onde encontrar:**
1. Acesse [app.supabase.com](https://app.supabase.com)
2. Selecione seu projeto
3. Vá em **Settings** > **API**
4. Copie **Project URL** e **anon public key**

---

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça fork ou clone este repositório
2. Importe no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy! 🎉

**Guia detalhado:** [`DEPLOY.md`](./DEPLOY.md)

---

## 💰 Google AdSense

O site está **pronto para AdSense**, mas os placeholders estão **temporariamente ocultos**.

**Locais preparados:**
- 4 cantos fixos do site
- Meio do conteúdo das notícias

**Como ativar:**
1. Crie conta no Google AdSense
2. Obtenha aprovação
3. Copie os códigos fornecidos pelo Google
4. Envie para o desenvolvedor integrar

**Guia completo:** [`Adsense.md`](./Adsense.md)

---

## 👤 Primeiro Acesso Admin

1. Crie um usuário no Supabase:
   - Authentication > Users > Add User
   - Marque "Auto Confirm User"

2. Acesse: `https://seu-site.com/admin/login`

3. Faça login com as credenciais criadas

---

## 📸 Screenshots

### Página Inicial
- Lista de notícias à esquerda (foco principal)
- Destaques e widgets à direita
- Cruz de Malta + Logo VascoVerso

### Editor de Notícias
- Interface intuitiva
- Barra de ferramentas visual
- Upload de imagens drag & drop
- Preview em tempo real

### Painel Admin
- Dashboard com estatísticas
- Gerenciar notícias, partidas, tabela
- Interface limpa e moderna

---

## 💰 Custos

### Gratuito:
- ✅ Hospedagem Vercel
- ✅ Banco Supabase (até 500MB)
- ✅ 100GB bandwidth/mês

### Pago:
- 💰 Domínio: ~R$ 40-120/ano
- 💰 Supabase Pro (se precisar): $25/mês
- 💰 Vercel Pro (se precisar): $20/mês

**Começe grátis e faça upgrade só se crescer muito!**

---

## 🆘 Suporte

### Para o Cliente

Se tiver dúvidas:
1. Leia [`GUIA-CLIENTE-HOSPEDAR.md`](./GUIA-CLIENTE-HOSPEDAR.md)
2. Leia [`INSTRUCOES-EDITOR.md`](./site/INSTRUCOES-EDITOR.md)
3. Entre em contato com o desenvolvedor

### Para Desenvolvedores

- **Issues:** Abra uma issue no GitHub
- **Docs:** Leia os guias técnicos
- **Contribuições:** Pull requests são bem-vindos!

---

## 📝 Licença

Este projeto foi desenvolvido para o cliente VascoVerso.

---

## 🙏 Créditos

- **Cliente:** VascoVerso
- **Desenvolvedor:** [Seu Nome]
- **Design:** [Designer]
- **Tecnologias:** Next.js, Supabase, Tiptap

---

## 🔴⚪⚫ Vasco da Gama

*Site desenvolvido com paixão pelo Gigante da Colina!*

**Força, Vasco!** ⚽

---

## 📧 Contato

- **Email:** contato@vascoverso.com.br
- **Instagram:** [@vascoverso](https://instagram.com/vascoverso)
- **Facebook:** [VascoVerso](https://facebook.com/vascoverso)
- **YouTube:** [VascoVerso](https://youtube.com/vascoverso)

---

**Última atualização:** Janeiro 2025

