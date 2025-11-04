# 🏴 VascoVerso

Site de notícias do Vasco da Gama com sistema de gerenciamento completo.

## 🚀 Status do Projeto

**Versão Beta** - Pronto para deploy e testes

---

## ✨ Funcionalidades

### 👥 Área Pública
- ✅ Listagem de notícias em destaque
- ✅ Página individual de notícias com conteúdo completo
- ✅ Sistema de busca inteligente
- ✅ Tabela do campeonato (exibe 5 times ao redor do Vasco)
- ✅ Próximos jogos do Vasco
- ✅ Notícias recentes na sidebar
- ✅ Compartilhamento de notícias
- ✅ Modo claro/escuro
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Links para redes sociais
- ✅ Preparado para Google AdSense (placeholders ocultos)

### 🔐 Painel Administrativo (`/admin`)
- ✅ Login seguro com autenticação
- ✅ Dashboard com visão geral
- ✅ **Gerenciar Notícias**:
  - Criar notícias com editor de texto rico (TipTap)
  - Editar notícias existentes
  - Upload de imagens
  - Marcar como destaque
  - Sistema de slug automático
- ✅ **Gerenciar Tabela do Campeonato**:
  - Editar posição, pontos, jogos, vitórias, empates, derrotas
  - Editar gols a favor e contra
  - **Editar nome das equipes**
  - Sistema inteligente de troca de posições
  - Detecção automática do Vasco da Gama
- ✅ **Gerenciar Redes Sociais**:
  - Atualizar links das redes
  - Atualizar contagem de seguidores
- ✅ **Gerenciar Próximos Jogos**:
  - Adicionar/editar jogos do Vasco
  - Data, horário, adversário, local

---

## 🛠️ Tecnologias

### Frontend
- **Next.js 15** (React Server Components)
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**

### Backend
- **Supabase** (PostgreSQL + Auth + Storage)

### Editor
- **TipTap** (Editor WYSIWYG)

### Deploy
- **Vercel** (hosting + CI/CD)
- **GitHub** (controle de versão)

---

## 📁 Estrutura do Projeto

```
vascoverso/
├── src/                    # Código fonte Next.js
│   ├── app/               # Pages e layouts (App Router)
│   │   ├── admin/         # Painel administrativo
│   │   └── noticias/      # Páginas de notícias
│   ├── components/        # Componentes React
│   └── lib/               # Utilitários (Supabase client)
├── public/                # Arquivos estáticos
├── docs/                  # Documentação do projeto
│   ├── DEPLOY.md          # 🚀 Guia de deploy GitHub + Vercel
│   ├── Adsense.md         # 💰 Guia Google AdSense
│   ├── INSTRUCOES-EDITOR.md        # Como usar o editor
│   ├── CONFIGURACAO-SUPABASE.md    # Setup do banco
│   └── ...
├── package.json
├── next.config.mjs
└── README.md              # Este arquivo
```

---

## 🚀 Como Fazer Deploy

**📖 Leia o guia completo**: [`docs/DEPLOY.md`](./docs/DEPLOY.md)

### Resumo Rápido:

1. **Subir para GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit: VascoVerso"
   git remote add origin https://github.com/SEU-USERNAME/vascoverso.git
   git push -u origin main
   ```

2. **Deploy na Vercel:**
   - Acesse [vercel.com/login](https://vercel.com/login)
   - Importe o projeto do GitHub
   - Configure variáveis de ambiente (Supabase)
   - Deploy automático!

**Tempo estimado**: ~15 minutos

---

## 💰 Google AdSense

O site está **preparado para AdSense** com placeholders temporariamente ocultos.

**📖 Leia o guia completo**: [`docs/Adsense.md`](./docs/Adsense.md)

### Locais preparados:
- 4 cantos fixos do site
- Meio do conteúdo das notícias

### Como ativar:
1. Criar conta no Google AdSense
2. Obter aprovação
3. Copiar códigos fornecidos
4. Enviar para integração

---

## 🔐 Variáveis de Ambiente

Necessário configurar no Vercel (ou `.env.local` local):

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon
```

**Onde encontrar**: Supabase → Settings → API

---

## 💻 Desenvolvimento Local

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais Supabase

# 3. Executar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

---

## 📚 Documentação Completa

Todos os guias estão em [`docs/`](./docs/):

| Documento | Descrição |
|-----------|-----------|
| [**DEPLOY.md**](./docs/DEPLOY.md) | 🚀 Como fazer deploy (GitHub + Vercel) |
| [**Adsense.md**](./docs/Adsense.md) | 💰 Como ativar Google AdSense |
| [**INSTRUCOES-EDITOR.md**](./docs/INSTRUCOES-EDITOR.md) | ✏️ Como criar e editar notícias |
| [**CONFIGURACAO-SUPABASE.md**](./docs/CONFIGURACAO-SUPABASE.md) | 🗄️ Configurar banco de dados |
| [**CHECKLIST-DEPLOY.md**](./docs/CHECKLIST-DEPLOY.md) | ✅ Checklist antes de entregar |

---

## 🎨 Design

### Tema
- **Cores**: Vermelho/preto (identidade Vasco)
- **Fontes**:
  - Heading: Oswald
  - Body: Lato
- **Modo**: Claro/Escuro automático

### Responsividade
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🔐 Acesso Admin

**URL**: `https://seu-site.vercel.app/admin/login`

**Credenciais**: Configuradas no Supabase → Authentication → Users

---

## 📦 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificar código
```

---

## 🐛 Solução de Problemas

### Build falha?
- Verifique variáveis de ambiente
- Execute `npm run build` localmente primeiro

### Supabase não conecta?
- Confira credenciais no `.env.local`
- Verifique se Supabase está configurado corretamente

### Imagens não aparecem?
- Verifique políticas no Supabase Storage
- Bucket `news-images` deve ser público

**Mais soluções**: [`docs/DEPLOY.md`](./docs/DEPLOY.md#solução-de-problemas)

---

## 💡 Próximos Passos

- [ ] Fazer deploy no Vercel
- [ ] Obter aprovação Google AdSense
- [ ] Adicionar domínio personalizado
- [ ] Criar política de privacidade
- [ ] Adicionar Google Analytics

---

## 📞 Suporte

- **Issues**: Abra uma issue no GitHub
- **Docs**: Consulte [`docs/`](./docs/)
- **Next.js**: https://nextjs.org/docs
- **Supabase**: https://supabase.com/docs
- **Vercel**: https://vercel.com/docs

---

## 📝 Licença

Projeto desenvolvido para uso exclusivo.

---

**Desenvolvido com ⚫⚪ para o Gigante da Colina**

🚀 **Força, Vasco!**
