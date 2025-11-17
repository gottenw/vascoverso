# Upgrade do Painel Administrativo - Vascoverso

## Novas Funcionalidades Implementadas

### 1. Gerenciamento de Redes Sociais
✅ Admin pode editar número de seguidores e URLs das redes sociais
✅ Interface intuitiva com salvamento individual por plataforma
✅ Componente do site atualizado automaticamente

### 2. Gerenciamento da Tabela do Campeonato
✅ Admin pode editar todas as estatísticas da tabela
✅ Vasco da Gama destacado automaticamente (background vermelho)
✅ Cálculo automático do saldo de gols
✅ Interface completa com posição, pontos, jogos, vitórias, empates, derrotas, gols

### 3. Dashboard Melhorado
✅ Cards com estatísticas em tempo real:
  - Total de notícias
  - Notícias em destaque
  - Quantidade de redes sociais
  - Posição atual do Vasco no campeonato

✅ Ações rápidas com links diretos
✅ Dicas úteis para administradores
✅ Design moderno e intuitivo com paleta de cores mantida

## Como Configurar

### Passo 1: Executar o SQL no Supabase

1. Acesse seu projeto no Supabase
2. Vá em **SQL Editor** (menu lateral)
3. Crie uma nova query
4. Copie e cole todo o conteúdo do arquivo `additional-tables.sql`
5. Execute o SQL

Isso criará:
- Tabela `social_media` - Para gerenciar redes sociais
- Tabela `league_standings` - Para gerenciar a tabela do campeonato
- Políticas de segurança RLS
- Dados iniciais para teste

### Passo 2: Explorar as Novas Páginas Admin

#### Redes Sociais (`/admin/social`)
- Edite o número de seguidores de cada plataforma
- Atualize as URLs das redes sociais
- Salve cada rede individualmente

#### Tabela do Campeonato (`/admin/table`)
- Edite posição, pontos, jogos de cada time
- Adicione vitórias, empates, derrotas
- Informe gols pró e contra (saldo calculado automaticamente)
- O Vasco aparece destacado em vermelho

#### Dashboard (`/admin/dashboard`)
- Veja estatísticas do site em tempo real
- Acesso rápido às principais funcionalidades
- Cards clicáveis que levam às respectivas páginas

## Estrutura de Tabelas

### social_media
```sql
- id: número único
- platform: nome da plataforma (Youtube, Facebook, etc.)
- follower_count: texto (ex: "1.5M", "850K")
- url: link da rede social
- display_order: ordem de exibição
- is_active: se está ativa ou não
```

### league_standings
```sql
- id: número único
- position: posição na tabela
- team_name: nome do time
- points: pontos
- played: jogos disputados
- wins: vitórias
- draws: empates
- losses: derrotas
- goals_for: gols marcados
- goals_against: gols sofridos
- goal_difference: saldo de gols (calculado automaticamente)
- is_vasco: boolean (true para Vasco, false para outros)
```

## Componentes Atualizados

### Frontend Público

**SocialFollowers** (`src/components/SocialFollowers.tsx`)
- Agora busca dados do Supabase
- Loading skeleton enquanto carrega
- Ordem automática por `display_order`

**LeagueTable** (`src/components/LeagueTable.tsx`)
- Busca dados do Supabase
- Vasco destacado automaticamente com `bg-primary`
- Mais informações (ainda mostra apenas Pos, Time, Pts, J na visualização pública)

### Painel Admin

**Dashboard** (`src/app/admin/dashboard/page.tsx`)
- 4 cards de estatísticas
- Ações rápidas
- Dicas para administradores

**Redes Sociais** (`src/app/admin/social/page.tsx`)
- Formulário para editar cada rede
- Salvamento individual
- Botão de atualizar

**Tabela do Campeonato** (`src/app/admin/table/page.tsx`)
- Cards expandidos por time
- Vasco destacado com ícone de troféu
- Todos os campos editáveis
- Saldo de gols calculado automaticamente

## Menu Atualizado

O menu lateral do admin agora possui:
- Dashboard
- Notícias
- Tabela do Campeonato
- **Redes Sociais** ← NOVO
- Jogos
- Sair

## Paleta de Cores Mantida

Todos os componentes seguem a paleta existente:
- **Primary (Vermelho)**: `bg-primary` para destaques e Vasco
- **Cinza**: `bg-gray-700`, `bg-gray-800` para backgrounds
- **Cards**: `bg-card-background` com bordas `border-gray-700`
- **Hover**: Transições suaves com `transition-colors`

## Recursos Inteligentes

### Tabela do Campeonato
- ✅ Vasco **sempre** destacado automaticamente (campo `is_vasco`)
- ✅ Saldo de gols calculado automaticamente
- ✅ Validação de dados numéricos

### Dashboard
- ✅ Estatísticas em tempo real
- ✅ Cards clicáveis que direcionam para as páginas
- ✅ Loading states bonitos

### Redes Sociais
- ✅ Ícones automáticos por plataforma
- ✅ Ordenação automática
- ✅ Apenas redes ativas são exibidas

## Segurança

✅ RLS habilitado em todas as tabelas
✅ Apenas usuários autenticados podem editar
✅ Leitura pública para exibição no site
✅ Políticas separadas para INSERT, UPDATE, DELETE

## Próximos Passos Sugeridos

1. Execute o SQL `additional-tables.sql`
2. Faça login no admin
3. Acesse `/admin/dashboard` para ver as estatísticas
4. Teste a edição de redes sociais em `/admin/social`
5. Atualize a tabela do campeonato em `/admin/table`
6. Verifique se as mudanças aparecem no site público

Tudo pronto! 🚀
