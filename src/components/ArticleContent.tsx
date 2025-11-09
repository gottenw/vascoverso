'use client';

import { useEffect, useRef } from 'react';

interface ArticleContentProps {
  content: string;
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // ADSENSE OCULTO - Descomente quando ativar o AdSense
    /*
    // Criar o elemento de AdSense
    const adElement = document.createElement('div');
    adElement.className = 'my-8 py-6 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 text-sm';
    adElement.style.minHeight = '250px';
    adElement.innerHTML = `
      <div class="text-center">
        <p class="font-semibold mb-2">AdSense</p>
        <p class="text-xs">Display Ad (Responsivo)</p>
      </div>
    `;

    // Encontrar todos os parágrafos
    const paragraphs = contentRef.current.querySelectorAll('p');

    if (paragraphs.length >= 3) {
      // Inserir o AdSense após o terceiro parágrafo (ou no meio)
      const middleIndex = Math.floor(paragraphs.length / 2);
      const insertAfter = paragraphs[middleIndex];

      if (insertAfter && insertAfter.parentNode) {
        insertAfter.parentNode.insertBefore(adElement, insertAfter.nextSibling);
      }
    }
    */
  }, [content]);

  return (
    <div
      ref={contentRef}
      className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-p:mb-6 prose-p:leading-relaxed prose-strong:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-a:text-primary article-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default ArticleContent;
