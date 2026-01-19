'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { createNews, updateNews, uploadImage } from '@/lib/supabase';
import { ImageIcon, X } from 'lucide-react';
import Image from 'next/image';

// Lazy load do editor rico para economizar bundle size
const RichTextEditor = dynamic(() => import('./RichTextEditor'), {
  loading: () => (
    <div className="w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
      <p className="text-gray-500 dark:text-gray-400">Carregando editor...</p>
    </div>
  ),
  ssr: false,
});

interface NewsData {
  id?: number;
  title: string;
  content: string;
  image_url?: string;
  image_credit?: string;
  is_important?: boolean;
  author?: string;
}

interface NewsFormProps {
  news?: NewsData;
}

// Função para criar um slug a partir do título
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/[^\w\-]+/g, '') // Remove caracteres não alfanuméricos
    .replace(/\-\-+/g, '-') // Substitui múltiplos hífens por um único
    .replace(/^-+/, '') // Remove hífens do início
    .replace(/-+$/, ''); // Remove hífens do fim
};

const NewsForm = ({ news }: NewsFormProps) => {
  const [title, setTitle] = useState(news?.title || '');
  const [content, setContent] = useState(news?.content || '');
  const [mainImage, setMainImage] = useState<string | null>(news?.image_url || null);
  const [imageCredit, setImageCredit] = useState(news?.image_credit || '');
  const [author, setAuthor] = useState(news?.author || '');
  const [isImportant, setIsImportant] = useState(news?.is_important || false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingMainImage, setIsUploadingMainImage] = useState(false);
  const router = useRouter();

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingMainImage(true);
    try {
      const imageUrl = await uploadImage(file);
      setMainImage(imageUrl);
    } catch (error) {
      console.error('Erro ao fazer upload da imagem principal:', error);
      alert('Erro ao fazer upload da imagem');
    } finally {
      setIsUploadingMainImage(false);
    }
  };

  const handleContentImageUpload = async (file: File): Promise<string> => {
    return await uploadImage(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (news?.id) {
        // Atualizar notícia existente
        const result = await updateNews(news.id, {
          title,
          content,
          image_url: mainImage || undefined,
          image_credit: imageCredit || undefined,
          author: author || undefined,
          is_important: isImportant
        });
        console.log('Resultado da atualização:', result);

        // Revalidar cache das páginas
        try {
          await fetch('/api/revalidate', { method: 'POST' });
          console.log('Cache revalidado com sucesso');
        } catch (revalidateError) {
          console.warn('Erro ao revalidar cache:', revalidateError);
        }

        alert('Notícia atualizada com sucesso!');
      } else {
        // Criar nova notícia
        const slug = slugify(title);
        await createNews({
          title,
          content,
          slug,
          image_url: mainImage || undefined,
          image_credit: imageCredit || undefined,
          author: author || undefined,
          is_important: isImportant
        });

        // Revalidar cache das páginas
        try {
          await fetch('/api/revalidate', { method: 'POST' });
        } catch (revalidateError) {
          console.warn('Erro ao revalidar cache:', revalidateError);
        }

        alert('Notícia criada com sucesso!');
      }
      router.push('/admin/news');
      router.refresh(); // Força a atualização dos dados na página de listagem
    } catch (error) {
      console.error("Erro ao salvar notícia:", error);
      alert(`Ocorreu um erro ao salvar a notícia: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Campo de Título */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-200">Título da Notícia</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg bg-gray-800 text-white border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Digite o título da notícia..."
          required
        />
      </div>

      {/* Campo de Autor */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-200">Autor da Notícia (opcional)</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg bg-gray-800 text-white border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Nome do autor (ex: Equipe Vascoverso, João Silva, etc.)"
        />
      </div>

      {/* Campo de Destaque */}
      <div className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg border border-gray-600">
        <input
          type="checkbox"
          id="is_important"
          checked={isImportant}
          onChange={(e) => setIsImportant(e.target.checked)}
          className="w-5 h-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary focus:ring-2"
        />
        <label htmlFor="is_important" className="text-sm font-medium text-gray-200 cursor-pointer">
          Marcar como notícia de destaque (aparecerá na seção &quot;Destaques&quot; da página inicial)
        </label>
      </div>

      {/* Campo de Imagem Principal */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-200">
          Imagem Principal da Notícia
        </label>
        <div className="space-y-4">
          {mainImage ? (
            <div className="relative w-full max-w-md">
              <Image
                src={mainImage}
                alt="Imagem principal"
                width={400}
                height={300}
                className="rounded-lg object-cover border-2 border-gray-600"
              />
              <button
                type="button"
                onClick={() => setMainImage(null)}
                className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
                title="Remover imagem"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full max-w-md h-64 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <ImageIcon className="w-12 h-12 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-400">
                  <span className="font-semibold">Clique para fazer upload</span>
                </p>
                <p className="text-xs text-gray-500">PNG, JPG ou WEBP (MAX. 5MB)</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleMainImageUpload}
                disabled={isUploadingMainImage}
              />
            </label>
          )}
          {isUploadingMainImage && (
            <p className="text-sm text-gray-400">Fazendo upload da imagem...</p>
          )}
        </div>

        {/* Campo de Crédito da Imagem */}
        {mainImage && (
          <div className="mt-3">
            <label className="block mb-2 text-sm font-medium text-gray-200">
              Crédito da Imagem (opcional)
            </label>
            <input
              type="text"
              value={imageCredit}
              onChange={(e) => setImageCredit(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-lg bg-gray-800 text-white border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none text-sm"
              placeholder="Ex: Foto: Nome do Fotógrafo, Reprodução: Instagram"
            />
            <p className="text-xs text-gray-500 mt-1">
              Este texto aparecerá abaixo da imagem principal da notícia
            </p>
          </div>
        )}
      </div>

      {/* Editor de Conteúdo Rico */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-200">
          Conteúdo da Notícia
        </label>
        <p className="text-xs text-gray-400 mb-3">
          Use a barra de ferramentas para formatar o texto, adicionar imagens e links.
        </p>
        <RichTextEditor
          content={content}
          onChange={setContent}
          onImageUpload={handleContentImageUpload}
        />
      </div>

      {/* Botão de Submit */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 text-white bg-primary rounded-lg hover:bg-opacity-90 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all font-medium"
        >
          {isSubmitting ? 'Salvando...' : news?.id ? 'Atualizar Notícia' : 'Publicar Notícia'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/news')}
          className="px-6 py-3 text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all font-medium"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default NewsForm;
