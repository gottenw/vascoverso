import { Metadata } from 'next';

// Revalidar a cada 24 horas (página estática)
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Contato | Vascoverso',
  description: 'Entre em contato com o Vascoverso. Envie sugestões, dúvidas ou interesse em publicidade.',
};

const ContatoPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-card-background p-8 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-gray-700/50">
        <h1 className="font-heading text-5xl font-bold mb-4 flex items-center gap-4">
          <span className="text-primary">Contato</span>
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full mb-8"></div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Entre em contato com a equipe do <span className="text-primary font-semibold">Vascoverso</span>.
          Estamos prontos para ouvir suas sugestões, responder suas dúvidas ou discutir oportunidades de parceria.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Contato Geral */}
          <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-primary transition-all group">
            <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-foreground mb-4">Contato Geral</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Dúvidas, sugestões ou feedbacks sobre o portal.
            </p>
            <a
              href="mailto:vascoversocrvg@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              vascoversocrvg@gmail.com
            </a>
          </div>

          {/* Sugestões de Pauta */}
          <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-primary transition-all group">
            <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-foreground mb-4">Sugestões de Pauta</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Envie sugestões de notícias e informações sobre o Vasco.
            </p>
            <a
              href="mailto:vascoversocrvg@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              vascoversocrvg@gmail.com
            </a>
          </div>

          {/* Publicidade */}
          <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-primary transition-all group">
            <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-foreground mb-4">Publicidade</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Interessado em anunciar no Vascoverso? Fale conosco!
            </p>
            <a
              href="mailto:vascoversocrvg@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              vascoversocrvg@gmail.com
            </a>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-foreground">Por que anunciar no Vascoverso?</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Público Segmentado:</strong> Fale diretamente com torcedores do Vasco, um dos clubes com a maior e mais apaixonada torcida do Brasil.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Alta Visibilidade:</strong> Nossas notícias e conteúdos geram alto tráfego e engajamento diário.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Formatos Flexíveis:</strong> Oferecemos diversos formatos de publicidade personalizados para sua marca.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;