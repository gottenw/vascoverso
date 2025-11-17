# ✅ Checklist de Configuração - Novo Editor

## 📋 Antes de Usar o Novo Editor

Siga este checklist para garantir que tudo está funcionando:

### 1️⃣ Instalação das Dependências

- [ ] Executei `bash install-tiptap.sh` ou instalei manualmente via npm
- [ ] Não há erros no terminal após a instalação
- [ ] O arquivo `package.json` foi atualizado com as novas dependências

**Como verificar:**
```bash
cd site
cat package.json | grep "@tiptap"
```

Deve aparecer algo como:
```
"@tiptap/react": "^2.x.x",
"@tiptap/starter-kit": "^2.x.x",
...
```

---

### 2️⃣ Configuração do Supabase

- [ ] Criei o bucket `news-images` no Supabase Storage
- [ ] Marquei o bucket como **público** (Public bucket)
- [ ] Criei a política de **INSERT** para usuários autenticados
- [ ] Criei a política de **SELECT** para acesso público
- [ ] (Opcional) Criei a política de **DELETE** para usuários autenticados

**Como verificar:**
1. Acesse o painel do Supabase
2. Vá em Storage → `news-images`
3. Clique em "Policies"
4. Deve ver pelo menos 2 políticas criadas

---

### 3️⃣ Variáveis de Ambiente

- [ ] O arquivo `.env.local` existe na pasta `site/`
- [ ] `NEXT_PUBLIC_SUPABASE_URL` está configurado
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` está configurado

**Como verificar:**
```bash
cd site
cat .env.local
```

Deve ter:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-aqui
```

---

### 4️⃣ Arquivos Criados

- [ ] Existe `src/components/admin/RichTextEditor.tsx`
- [ ] O arquivo `src/components/admin/NewsForm.tsx` foi atualizado
- [ ] O arquivo `src/lib/supabase.ts` foi atualizado
- [ ] O arquivo `install-tiptap.sh` existe

**Como verificar:**
```bash
cd site
ls -la src/components/admin/RichTextEditor.tsx
ls -la src/lib/supabase.ts
```

---

### 5️⃣ Testar o Editor

- [ ] Iniciei o servidor de desenvolvimento (`npm run dev`)
- [ ] Acessei o painel admin (`/admin/login`)
- [ ] Fiz login com sucesso
- [ ] Acessei "Nova Notícia"
- [ ] O editor carrega corretamente (sem erros no console)
- [ ] A barra de ferramentas aparece
- [ ] Consigo digitar no editor

**Como testar:**
1. Abra o terminal:
   ```bash
   cd site
   npm run dev
   ```
2. Abra o navegador: `http://localhost:3000/admin/login`
3. Faça login
4. Vá em "Nova Notícia"
5. Pressione F12 para abrir o console
6. Verifique se não há erros em vermelho

---

### 6️⃣ Testar Upload de Imagem Principal

- [ ] Cliquei na área tracejada "Clique para fazer upload"
- [ ] Selecionei uma imagem
- [ ] A imagem foi carregada (aparece uma mensagem de "Fazendo upload...")
- [ ] A imagem aparece depois do upload
- [ ] Consigo remover a imagem clicando no X vermelho

**Como testar:**
1. Na página "Nova Notícia"
2. Clique na área de upload de imagem principal
3. Selecione uma imagem JPG ou PNG
4. Aguarde o upload
5. Verifique se a imagem aparece

---

### 7️⃣ Testar Upload de Imagem no Conteúdo

- [ ] Cliquei no botão verde 🖼️ na barra de ferramentas
- [ ] Selecionei uma imagem
- [ ] A imagem foi inserida no editor
- [ ] A imagem aparece no conteúdo

**Como testar:**
1. Na página "Nova Notícia"
2. Digite algum texto no editor
3. Clique no botão verde com ícone de imagem
4. Selecione uma imagem
5. Verifique se ela aparece no editor

---

### 8️⃣ Testar Formatação de Texto

- [ ] Negrito funciona (botão **B**)
- [ ] Itálico funciona (botão *I*)
- [ ] Sublinhado funciona (botão U)
- [ ] Tachado funciona (botão S)
- [ ] Listas funcionam (botões • e 1.)
- [ ] Alinhamento funciona (⬅ ⬌ ➡)
- [ ] Títulos funcionam (H1, H2, H3)

**Como testar:**
1. Digite algum texto
2. Selecione o texto
3. Clique em cada botão da barra
4. Verifique se a formatação é aplicada

---

### 9️⃣ Testar Criação de Notícia

- [ ] Preenchi o título
- [ ] Adicionei uma imagem principal
- [ ] Escrevi conteúdo no editor
- [ ] Cliquei em "Publicar Notícia"
- [ ] Recebi mensagem de sucesso
- [ ] Fui redirecionado para a lista de notícias
- [ ] A notícia aparece na lista

**Como testar:**
1. Crie uma notícia de teste
2. Preencha todos os campos
3. Clique em "Publicar Notícia"
4. Verifique se foi criada com sucesso

---

### 🔟 Testar Edição de Notícia

- [ ] Consegui clicar em "Editar" em uma notícia existente
- [ ] A notícia carrega corretamente no editor
- [ ] O título aparece preenchido
- [ ] A imagem principal aparece (se tinha)
- [ ] O conteúdo aparece no editor
- [ ] Consegui editar e salvar

**Como testar:**
1. Na lista de notícias, clique em "Editar"
2. Faça alguma alteração
3. Clique em "Atualizar Notícia"
4. Verifique se foi atualizada

---

## 🚨 Se Algo Não Funcionar

### ❌ Editor não carrega
**Solução:**
1. Verifique se instalou as dependências
2. Limpe o cache: `rm -rf .next` e depois `npm run dev`
3. Verifique o console do navegador (F12)

### ❌ Upload não funciona
**Solução:**
1. Verifique a configuração do Supabase Storage (passo 2️⃣)
2. Verifique as políticas de acesso
3. Verifique as variáveis de ambiente (passo 3️⃣)

### ❌ Imagem não aparece
**Solução:**
1. Verifique se o bucket é público
2. Teste abrindo a URL da imagem diretamente no navegador
3. Verifique a política de SELECT no Supabase

### ❌ Erro de autenticação
**Solução:**
1. Verifique se está logado no painel admin
2. Verifique as credenciais de login
3. Limpe os cookies do navegador

---

## ✅ Tudo Funcionando?

Se todos os itens estão marcados ✅, parabéns! 🎉

O editor está pronto para ser usado pelo seu cliente!

### 📚 Próximos Passos

1. **Treine o cliente**: Mostre o arquivo `INSTRUCOES-EDITOR.md` para ele
2. **Crie uma notícia de teste**: Peça para ele criar uma notícia de teste
3. **Documente**: Deixe os guias acessíveis para ele

---

## 📞 Suporte

Se ainda houver problemas após seguir este checklist:

1. Verifique o console do navegador (F12) para erros
2. Verifique o terminal do servidor para erros
3. Releia os guias de configuração
4. Entre em contato com o desenvolvedor

---

**Checklist criado para Vascoverso** 🔴⚪⚫

*Última atualização: 2025*
