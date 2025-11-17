# Como Fazer Deploy das Alterações via GitHub

Este guia explica como fazer as alterações feitas no código local vigorarem no site que está no ar.

## Pré-requisitos

- Git instalado no computador
- Conta GitHub configurada
- Repositório do projeto já criado no GitHub
- Site já hospedado (Vercel, Hostinger, etc.)

---

## Passo 1: Executar o Script SQL no Supabase

**IMPORTANTE:** Antes de fazer o deploy, você precisa criar a tabela `matches` no banco de dados.

1. Acesse o Supabase Dashboard: https://app.supabase.com
2. Selecione seu projeto
3. Vá em **SQL Editor** (no menu lateral esquerdo)
4. Clique em **New Query**
5. Copie todo o conteúdo do arquivo `matches-table.sql` (na raiz do projeto)
6. Cole no editor SQL
7. Clique em **Run** (ou pressione Ctrl+Enter)
8. Verifique se apareceu a mensagem de sucesso

Isso criará:
- A tabela `matches` com 3 jogos iniciais
- As políticas de segurança (RLS) necessárias

---

## Passo 2: Commit das Alterações Locais

Abra o terminal na pasta do projeto e execute:

```bash
# Verificar quais arquivos foram alterados
git status

# Adicionar todos os arquivos modificados
git add .

# Criar um commit com mensagem descritiva
git commit -m "Remover tabela do campeonato e corrigir seção de jogos

- Removido componente LeagueTable.tsx e todas as referências
- Removida página admin de edição da tabela (/admin/table)
- Criada nova tabela 'matches' no banco de dados
- Corrigida seção de Jogos para salvar no banco via admin
- Atualizado dashboard para refletir as mudanças"
```

---

## Passo 3: Enviar para o GitHub

```bash
# Enviar as alterações para o repositório remoto
git push origin main
```

Se você estiver em outra branch, substitua `main` pelo nome da sua branch.

---

## Passo 4: Deploy Automático (Vercel)

Se você está usando a **Vercel** (recomendado para Next.js):

1. **Deploy automático:** A Vercel detectará automaticamente o push no GitHub e iniciará o build
2. Acompanhe o progresso em: https://vercel.com/dashboard
3. Você receberá notificações sobre o status do deploy
4. Quando concluído, as alterações estarão no ar automaticamente

**Tempo estimado:** 2-5 minutos

---

## Passo 5: Deploy Manual (VPS/Hostinger)

Se você está usando um **VPS** ou **hospedagem compartilhada**:

### Opção A: SSH + Git Pull

1. Conecte-se ao servidor via SSH:
```bash
ssh usuario@seu-dominio.com
```

2. Navegue até a pasta do projeto:
```bash
cd /caminho/do/projeto
```

3. Atualize o código:
```bash
git pull origin main
```

4. Instale dependências (se houver novas):
```bash
npm install
```

5. Faça o build:
```bash
npm run build
```

6. Reinicie o servidor Node.js:
```bash
pm2 restart vascoverso
# OU
systemctl restart vascoverso
# OU conforme sua configuração
```

### Opção B: FTP/Upload Manual

1. Faça o build localmente:
```bash
npm run build
```

2. Compacte os arquivos necessários:
   - Pasta `.next/` (build)
   - `package.json`
   - `package-lock.json`
   - `next.config.mjs`
   - Arquivos `.env` (se aplicável)

3. Envie via FTP/SFTP para o servidor
4. Reinstale dependências e reinicie o servidor

---

## Verificação Pós-Deploy

Após o deploy, verifique:

1. **Site público:**
   - [ ] A página inicial não mostra mais a tabela do campeonato
   - [ ] A seção "Próximos Jogos" está visível
   - [ ] Não há erros no console do navegador (F12)

2. **Painel admin:**
   - [ ] O menu não mostra mais "Tabela do Campeonato"
   - [ ] O link "Jogos" está presente no menu
   - [ ] Ao clicar em "Jogos", a página carrega os 3 jogos
   - [ ] É possível editar e salvar os jogos
   - [ ] Após salvar, aparece a mensagem de sucesso
   - [ ] O dashboard mostra 4 cards (removido "Posição do Vasco")

3. **Funcionalidade:**
   - [ ] Fazer login no admin
   - [ ] Ir em "Jogos"
   - [ ] Editar um jogo (ex: mudar adversário para "Palmeiras")
   - [ ] Clicar em "Salvar Jogos"
   - [ ] Voltar à página inicial do site
   - [ ] Verificar se o jogo foi atualizado na seção "Próximos Jogos"

---

## Resolução de Problemas

### Erro: "Could not find the table 'public.matches'"

**Causa:** O script SQL não foi executado no Supabase.

**Solução:**
1. Execute o arquivo `matches-table.sql` no Supabase SQL Editor
2. Aguarde alguns segundos para o cache do Supabase atualizar
3. Recarregue a página

### Erro: "Failed to load matches"

**Causa:** Problemas de permissão ou configuração do Supabase.

**Solução:**
1. Verifique as políticas RLS no Supabase:
   - Vá em **Authentication** > **Policies**
   - Verifique se a tabela `matches` tem políticas criadas
2. Verifique se as variáveis de ambiente estão corretas:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Deploy não está atualizando

**Vercel:**
1. Force um novo deploy:
   - Vá em **Deployments**
   - Clique nos 3 pontos do último deploy
   - Selecione **Redeploy**

**VPS:**
1. Limpe o cache do build:
```bash
rm -rf .next
npm run build
pm2 restart vascoverso
```

---

## Fluxo Completo de Trabalho

Para futuras alterações, siga este fluxo:

```
1. Fazer alterações no código local
   ↓
2. Testar localmente (npm run dev)
   ↓
3. Fazer build (npm run build) para verificar erros
   ↓
4. Commit das alterações (git add . && git commit -m "...")
   ↓
5. Push para GitHub (git push origin main)
   ↓
6. Deploy automático (Vercel) OU manual (VPS)
   ↓
7. Verificar se tudo está funcionando no site ao vivo
```

---

## Resumo das Alterações Feitas

### Arquivos Removidos:
- `src/components/LeagueTable.tsx`
- `src/app/admin/table/page.tsx`

### Arquivos Criados:
- `matches-table.sql` - Script para criar tabela de jogos

### Arquivos Modificados:
- `src/app/page.tsx` - Removido LeagueTable
- `src/app/admin/layout.tsx` - Removido link "Tabela do Campeonato"
- `src/app/admin/dashboard/page.tsx` - Removidas referências à tabela
- `src/lib/supabase.ts` - Substituídas funções de league_standings por matches
- `src/components/UpcomingMatches.tsx` - Agora busca dados reais do BD
- `src/app/admin/matches/page.tsx` - Agora salva no BD corretamente

### No Banco de Dados:
- Nova tabela: `matches` (data, adversário, campeonato, local)

---

## Suporte

Se encontrar problemas:
1. Verifique os logs do servidor
2. Abra o console do navegador (F12) e veja se há erros
3. Verifique o Supabase Dashboard para problemas de API
4. Confira se todas as variáveis de ambiente estão configuradas

---

**Data da documentação:** $(date +%Y-%m-%d)
**Versão do Next.js:** 15.5.6
**Versão do Node.js recomendada:** 18.x ou superior
