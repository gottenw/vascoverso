'use client';

import { useEffect, useRef } from 'react';

interface ArticleContentProps {
  content: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Aguardar um pequeno delay para garantir que o DOM está pronto
    const timer = setTimeout(() => {
      if (!contentRef.current) return;

      // Verificar se já existe um anúncio para evitar duplicação
      const existingAd = contentRef.current.querySelector('.adsbygoogle');
      if (existingAd) return;

      // Criar o elemento de AdSense
      const adContainer = document.createElement('div');
      adContainer.className = 'my-8';

      const adElement = document.createElement('ins');
      adElement.className = 'adsbygoogle';
      adElement.style.display = 'block';
      adElement.setAttribute('data-ad-client', 'ca-pub-7612725155199707');
      adElement.setAttribute('data-ad-slot', 'auto');
      adElement.setAttribute('data-ad-format', 'auto');
      adElement.setAttribute('data-full-width-responsive', 'true');

      adContainer.appendChild(adElement);

      // Encontrar todos os parágrafos
      const paragraphs = contentRef.current?.querySelectorAll('p');

      if (paragraphs && paragraphs.length >= 3) {
        // Inserir o AdSense após o terceiro parágrafo (ou no meio)
        const middleIndex = Math.floor(paragraphs.length / 2);
        const insertAfter = paragraphs[middleIndex];

        if (insertAfter?.parentNode) {
          insertAfter.parentNode.insertBefore(adContainer, insertAfter.nextSibling);

          // Inicializar o AdSense
          try {
            if (typeof window !== 'undefined' && window.adsbygoogle) {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
          } catch (err) {
            console.error('AdSense error:', err);
          }
        }
      }
    }, 100);

    return () => clearTimeout(timer);
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
