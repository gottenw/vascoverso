'use client';

import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import {
  Bold,
  Italic,
  Strikethrough,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ImageIcon,
  Link as LinkIcon,
  Undo,
  Redo
} from 'lucide-react';
import { useCallback } from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
}

const MenuBar = ({ editor, onImageUpload }: { editor: Editor | null; onImageUpload?: (file: File) => Promise<string> }) => {
  const addImage = useCallback(() => {
    if (!editor) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && onImageUpload) {
        try {
          const url = await onImageUpload(file);
          editor.chain().focus().setImage({ src: url }).run();
        } catch (error) {
          console.error('Erro ao fazer upload da imagem:', error);
          alert('Erro ao fazer upload da imagem');
        }
      } else if (file) {
        // Se não houver função de upload, usa URL temporária
        const url = URL.createObjectURL(file);
        editor.chain().focus().setImage({ src: url }).run();
      }
    };
    input.click();
  }, [editor, onImageUpload]);

  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL do link:', previousUrl);

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1 p-2 border-b border-gray-600 bg-gray-800 rounded-t-lg">
      {/* Desfazer/Refazer */}
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className="p-2 rounded hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
        title="Desfazer"
      >
        <Undo size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className="p-2 rounded hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
        title="Refazer"
      >
        <Redo size={18} />
      </button>

      <div className="w-px h-6 bg-gray-600 mx-1"></div>

      {/* Títulos */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-3 py-2 rounded hover:bg-gray-700 font-bold ${
          editor.isActive('heading', { level: 1 }) ? 'bg-primary text-white' : ''
        }`}
        title="Título 1"
      >
        H1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-3 py-2 rounded hover:bg-gray-700 font-bold ${
          editor.isActive('heading', { level: 2 }) ? 'bg-primary text-white' : ''
        }`}
        title="Título 2"
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-3 py-2 rounded hover:bg-gray-700 font-bold ${
          editor.isActive('heading', { level: 3 }) ? 'bg-primary text-white' : ''
        }`}
        title="Título 3"
      >
        H3
      </button>

      <div className="w-px h-6 bg-gray-600 mx-1"></div>

      {/* Formatação de texto */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive('bold') ? 'bg-primary text-white' : ''
        }`}
        title="Negrito"
      >
        <Bold size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive('italic') ? 'bg-primary text-white' : ''
        }`}
        title="Itálico"
      >
        <Italic size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive('underline') ? 'bg-primary text-white' : ''
        }`}
        title="Sublinhado"
      >
        <UnderlineIcon size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive('strike') ? 'bg-primary text-white' : ''
        }`}
        title="Tachado"
      >
        <Strikethrough size={18} />
      </button>

      <div className="w-px h-6 bg-gray-600 mx-1"></div>

      {/* Alinhamento */}
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive({ textAlign: 'left' }) ? 'bg-primary text-white' : ''
        }`}
        title="Alinhar à esquerda"
      >
        <AlignLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive({ textAlign: 'center' }) ? 'bg-primary text-white' : ''
        }`}
        title="Centralizar"
      >
        <AlignCenter size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive({ textAlign: 'right' }) ? 'bg-primary text-white' : ''
        }`}
        title="Alinhar à direita"
      >
        <AlignRight size={18} />
      </button>

      <div className="w-px h-6 bg-gray-600 mx-1"></div>

      {/* Listas */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive('bulletList') ? 'bg-primary text-white' : ''
        }`}
        title="Lista com marcadores"
      >
        <List size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive('orderedList') ? 'bg-primary text-white' : ''
        }`}
        title="Lista numerada"
      >
        <ListOrdered size={18} />
      </button>

      <div className="w-px h-6 bg-gray-600 mx-1"></div>

      {/* Imagem e Link */}
      <button
        type="button"
        onClick={addImage}
        className="p-2 rounded hover:bg-gray-700 bg-green-700 hover:bg-green-600"
        title="Inserir imagem"
      >
        <ImageIcon size={18} />
      </button>
      <button
        type="button"
        onClick={setLink}
        className={`p-2 rounded hover:bg-gray-700 ${
          editor.isActive('link') ? 'bg-primary text-white' : ''
        }`}
        title="Inserir link"
      >
        <LinkIcon size={18} />
      </button>
    </div>
  );
};

const RichTextEditor = ({ content, onChange, onImageUpload }: RichTextEditorProps) => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none p-4 min-h-[400px] focus:outline-none bg-gray-900 text-white',
      },
    },
  });

  return (
    <div className="border border-gray-600 rounded-lg overflow-hidden">
      <MenuBar editor={editor} onImageUpload={onImageUpload} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
