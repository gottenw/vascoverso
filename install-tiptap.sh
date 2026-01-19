#!/bin/bash
# Script para instalar o Tiptap e suas dependências

echo "Instalando Tiptap e extensões..."

npm install @tiptap/react @tiptap/pm @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link @tiptap/extension-underline @tiptap/extension-text-align @tiptap/extension-color @tiptap/extension-text-style

echo "✅ Tiptap instalado com sucesso!"
echo ""
echo "Extensões instaladas:"
echo "  - Editor base (React)"
echo "  - Starter Kit (negrito, itálico, listas, etc.)"
echo "  - Imagens"
echo "  - Links"
echo "  - Sublinhado"
echo "  - Alinhamento de texto"
echo "  - Cores"
echo "  - Estilos de texto"
