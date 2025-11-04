import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anuncie | VascoVerso',
  description: 'Anuncie no VascoVerso e alcance milhares de torcedores apaixonados pelo Vasco da Gama.',
};

const AnunciePage = () => {
  return (
    <div className="max-w-prose mx-auto py-8">
      <h1 className="font-heading text-4xl font-bold mb-6 text-foreground">Anuncie no VascoVerso</h1>
      <p className="text-justify mb-4">
        O VascoVerso é a plataforma ideal para você conectar sua marca a milhares de torcedores apaixonados do Vasco da Gama. Oferecemos um público engajado e segmentado, perfeito para campanhas de marketing que buscam visibilidade e impacto.
      </p>
      <h2 className="font-heading text-2xl font-bold mt-8 mb-4 text-foreground">Por que anunciar conosco?</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li><strong>Público Segmentado:</strong> Fale diretamente com torcedores do Vasco, um dos clubes com a maior e mais engajada torcida do Brasil.</li>
        <li><strong>Alta Visibilidade:</strong> Nossas notícias e conteúdos geram alto tráfego e engajamento diário.</li>
        <li><strong>Formatos Flexíveis:</strong> Oferecemos diversos formatos de publicidade, desde banners tradicionais até conteúdo patrocinado e parcerias personalizadas.</li>
      </ul>
      <h2 className="font-heading text-2xl font-bold mt-8 mb-4 text-foreground">Entre em Contato</h2>
      <p className="text-justify mb-4">
        Para saber mais sobre nossas opções de publicidade e solicitar um orçamento, entre em contato conosco pelo e-mail:
      </p>
      <p>
        <a href="mailto:comercial@vascoverso.com.br" className="text-primary hover:underline">comercial@vascoverso.com.br</a>
      </p>
      <p className="mt-4">
        Estamos ansiosos para colaborar com o sucesso da sua marca!
      </p>
    </div>
  );
};

export default AnunciePage;