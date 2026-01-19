# 🎉 Novo Editor de Notícias - Vascoverso

## 🚀 O que mudou?

Substituímos o **TinyMCE** por um editor moderno chamado **Tiptap**!

### ✨ Vantagens do Novo Editor

| Antes (TinyMCE) | Agora (Tiptap) |
|-----------------|----------------|
| ❌ Precisa de API Key | ✅ Totalmente gratuito |
| ❌ Carregamento lento | ✅ Super rápido |
| ❌ Interface complexa | ✅ Interface intuitiva |
| ❌ Pouca personalização | ✅ Totalmente personalizável |
| ❌ Dependência externa | ✅ Open source |

## 📦 Instalação

### 1. Instalar Dependências do Tiptap

```bash
cd site
bash install-tiptap.sh
```

### 2. Configurar Supabase Storage

Siga as instruções em: **`CONFIGURACAO-SUPABASE.md`**

Resumo rápido:
1. Acesse o painel do Supabase
2. Vá em **Storage**
3. Crie um bucket chamado `news-images` (público)
4. Configure as políticas de acesso

### 3. Iniciar o Servidor

```bash
npm run dev
```

## 🎯 Funcionalidades do Novo Editor

### Para o Cliente (Não Técnico)

O editor é **100% visual** e intuitivo:

- ✍️ **Formatação básica**: Negrito, itálico, sublinhado, tachado
- 📄 **Títulos**: H1, H2, H3
- 📐 **Alinhamento**: Esquerda, centro, direita
- 📋 **Listas**: Com marcadores e numeradas
- 🖼️ **Imagens**: Upload direto no conteúdo
- 🔗 **Links**: Adicionar links em qualquer texto
- 📸 **Imagem principal**: Campo separado para a imagem de destaque
- ↶↷ **Desfazer/Refazer**: Controle total sobre as ações

### Para Desenvolvedores

Arquivos criados/modificados:

```
site/
├── src/
│   ├── components/
│   │   └── admin/
│   │       ├── RichTextEditor.tsx     ← NOVO editor
│   │       └── NewsForm.tsx           ← ATUALIZADO
│   └── lib/
│       └── supabase.ts                ← ATUALIZADO (funções de upload)
├── install-tiptap.sh                  ← Script de instalação
├── INSTRUCOES-EDITOR.md               ← Guia para o cliente
├── CONFIGURACAO-SUPABASE.md           ← Guia de configuração
└── NOVO-EDITOR-README.md              ← Este arquivo
```

## 📸 Como Funciona o Upload de Imagens

### Imagem Principal
- Campo visual com drag & drop
- Preview instantâneo
- Botão para remover
- Upload automático para Supabase Storage

### Imagens no Conteúdo
- Botão verde 🖼️ na barra de ferramentas
- Seleção de arquivo
- Upload automático
- Inserção direta no texto

## 🔧 Estrutura Técnica

### RichTextEditor Component

```typescript
<RichTextEditor
  content={content}              // HTML content
  onChange={setContent}          // Callback quando muda
  onImageUpload={uploadFunction} // Função de upload customizada
/>
```

### Extensões Incluídas

- ✅ **StarterKit**: Base do editor (negrito, itálico, listas, etc.)
- ✅ **Image**: Suporte a imagens
- ✅ **Link**: Suporte a links
- ✅ **Underline**: Sublinhado
- ✅ **TextAlign**: Alinhamento de texto

### Funções de Supabase

```typescript
// Upload de imagem
uploadImage(file: File): Promise<string>

// Deletar imagem
deleteImage(imageUrl: string): Promise<void>

// Criar notícia (agora com image_url)
createNews({ title, content, slug, image_url })

// Atualizar notícia (agora com image_url)
updateNews(id, { title, content, image_url })
```

## 📖 Guias de Uso

### Para o Cliente
📄 **Leia**: `INSTRUCOES-EDITOR.md`
- Guia completo de como usar o editor
- Passo a passo com exemplos
- Dicas e boas práticas

### Para Configuração
🔧 **Leia**: `CONFIGURACAO-SUPABASE.md`
- Como configurar o Supabase Storage
- Políticas de acesso
- Troubleshooting

## 🐛 Troubleshooting

### Erro: Módulo não encontrado
```bash
# Solução: Instalar as dependências
bash install-tiptap.sh
```

### Erro: Upload não funciona
- Verifique se criou o bucket `news-images` no Supabase
- Verifique se o bucket está **público**
- Verifique as políticas de acesso (veja CONFIGURACAO-SUPABASE.md)

### Editor não carrega
- Limpe o cache do navegador
- Verifique o console do navegador (F12)
- Verifique se todas as dependências foram instaladas

## 🎨 Personalização

### Adicionar Mais Extensões

Edite `RichTextEditor.tsx` e adicione extensões:

```typescript
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';

const editor = useEditor({
  extensions: [
    StarterKit,
    Image,
    Link,
    Color,      // ← Nova extensão
    Highlight,  // ← Nova extensão
    // ...
  ],
});
```

### Customizar Barra de Ferramentas

Edite o componente `MenuBar` em `RichTextEditor.tsx`

## 🔄 Migração do TinyMCE

### O que foi removido:
- ❌ `@tinymce/tinymce-react`
- ❌ Configuração de API Key
- ❌ Componente `<Editor />` do TinyMCE

### O que foi adicionado:
- ✅ Tiptap e extensões
- ✅ Componente `RichTextEditor`
- ✅ Upload integrado com Supabase
- ✅ Campo de imagem principal

### Dados Mantidos:
- ✅ Todas as notícias antigas continuam funcionando
- ✅ O conteúdo HTML é compatível
- ✅ Nenhuma perda de dados

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Leia os guias (`INSTRUCOES-EDITOR.md` e `CONFIGURACAO-SUPABASE.md`)
2. Verifique o troubleshooting acima
3. Entre em contato com o desenvolvedor

## 🎉 Conclusão

O novo editor é:
- 🚀 **Mais rápido**
- 💰 **Gratuito**
- 🎨 **Mais bonito**
- 👥 **Mais fácil de usar**
- 🔧 **Mais personalizável**

Perfeito para seu cliente criar notícias sem precisar de conhecimento técnico!

---

**Desenvolvido com ❤️ para Vascoverso** 🔴⚪⚫
