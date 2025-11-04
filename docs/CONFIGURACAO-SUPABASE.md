# 🔧 Configuração do Supabase Storage para Upload de Imagens

## 📋 Pré-requisitos

- Projeto Supabase configurado
- Variáveis de ambiente configuradas (`NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

## 🪣 Criar Bucket de Armazenamento

### 1. Acessar o Painel do Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Faça login no seu projeto
3. No menu lateral, clique em **Storage**

### 2. Criar Novo Bucket

1. Clique em **"New bucket"** ou **"Create bucket"**
2. Preencha os campos:
   - **Name**: `news-images` (exatamente esse nome!)
   - **Public bucket**: ✅ **MARQUE ESTA OPÇÃO** (importante para as imagens serem acessíveis publicamente)
   - **File size limit**: `5242880` (5MB em bytes) ou deixe o padrão
   - **Allowed MIME types**: `image/jpeg,image/png,image/webp,image/gif`
3. Clique em **"Create bucket"**

### 3. Configurar Políticas de Acesso (Policies)

Após criar o bucket, é necessário configurar as políticas de acesso:

#### Política para UPLOAD (Insert)

1. No bucket `news-images`, clique em **"Policies"** ou **"New policy"**
2. Selecione **"For full customization"**
3. Crie uma nova política com os seguintes dados:

**Nome**: `Enable upload for authenticated users`

**Policy definition**:
```sql
CREATE POLICY "Enable upload for authenticated users"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'news-images');
```

**Ou use o template visual:**
- Policy name: `Enable upload for authenticated users`
- Allowed operation: `INSERT`
- Target roles: `authenticated`
- WITH CHECK expression: `bucket_id = 'news-images'`

#### Política para LEITURA (Select)

1. Crie outra política para permitir que todos possam ver as imagens

**Nome**: `Enable public read access`

**Policy definition**:
```sql
CREATE POLICY "Enable public read access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'news-images');
```

**Ou use o template visual:**
- Policy name: `Enable public read access`
- Allowed operation: `SELECT`
- Target roles: `public`
- USING expression: `bucket_id = 'news-images'`

#### Política para DELETAR (Delete) - Opcional

Se você quiser permitir que usuários autenticados possam deletar imagens:

**Nome**: `Enable delete for authenticated users`

**Policy definition**:
```sql
CREATE POLICY "Enable delete for authenticated users"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'news-images');
```

## ✅ Verificar Configuração

### Teste as Permissões

1. Tente fazer login no painel admin
2. Crie uma nova notícia
3. Tente fazer upload de uma imagem
4. Se funcionar, está tudo OK! ✅

### Problemas Comuns

#### ❌ Erro: "new row violates row-level security policy"
**Solução**: Verifique se as políticas foram criadas corretamente

#### ❌ Erro: "bucket not found"
**Solução**: Verifique se o bucket se chama exatamente `news-images`

#### ❌ Imagem não carrega publicamente
**Solução**: Certifique-se de que marcou **"Public bucket"** ao criar o bucket

## 🔐 Segurança

### Recomendações:

1. **Tamanho máximo de arquivo**: Configure um limite (recomendo 5MB)
2. **Tipos de arquivo permitidos**: Apenas imagens (JPEG, PNG, WEBP, GIF)
3. **Autenticação**: Apenas usuários autenticados podem fazer upload
4. **Leitura pública**: Qualquer pessoa pode ver as imagens (necessário para o site funcionar)

## 📁 Estrutura de Armazenamento

As imagens serão salvas com nomes únicos:
- Formato: `{random-string}-{timestamp}.{extensão}`
- Exemplo: `a7d8g92-1705123456789.jpg`

Isso evita conflitos de nomes e garante que cada imagem tenha um nome único.

## 🚀 Instalação das Dependências

Antes de usar o novo editor, execute:

```bash
cd site
bash install-tiptap.sh
```

Ou instale manualmente:

```bash
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link @tiptap/extension-underline @tiptap/extension-text-align @tiptap/extension-color @tiptap/extension-text-style
```

## 📝 Variáveis de Ambiente

Certifique-se de que o arquivo `.env.local` está configurado:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

## 🎉 Pronto!

Após seguir estes passos, o sistema de upload de imagens estará funcionando perfeitamente!

O novo editor é:
- ✅ Mais rápido que o TinyMCE
- ✅ Não precisa de API Key
- ✅ Completamente gratuito
- ✅ Interface super intuitiva
- ✅ Totalmente integrado com Supabase

---

**Desenvolvido para VascoVerso** 🔴⚪⚫
