import { Metadata } from 'next';
import Image from 'next/image';

// Revalidar a cada 24 horas (página estática)
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Quem Somos | Vascoverso',
  description: 'Conheça o Vascoverso: a voz independente e apaixonada do Vasco da Gama. Um projeto de torcedor para torcedor.',
};

const QuemSomosPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-card-background p-8 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-gray-700/50">
        {/* Header */}
        <div className="flex items-center gap-4 sm:gap-6 mb-6">
          <Image
            src="/cruzdemalta.webp"
            alt="Cruz de Malta"
            width={80}
            height={80}
            className="opacity-90 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h1 className="font-heading text-3xl sm:text-5xl font-bold mb-2 flex items-center gap-2 sm:gap-4 flex-wrap">
              <span className="text-primary">Quem</span>
              <span className="text-gray-900 dark:text-white">Somos</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Introdução */}
        <div className="mb-8">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">A Voz Independente do Vasco</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            O <span className="text-primary font-semibold">Vascoverso</span> nasceu da paixão incondicional de um único torcedor vascaíno.
            Este é um projeto totalmente independente, criado e mantido de torcedor para torcedor. Surgimos para ser uma voz autêntica
            e dedicada ao <span className="text-primary font-semibold">Club de Regatas Vasco da Gama</span>, focando em conteúdos que
            celebram a história, a luta e a grandeza do <span className="text-primary font-semibold">Gigante da Colina</span>,
            fora dos canais tradicionais da mídia.
          </p>
        </div>

        {/* Cards de informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Nossa Missão */}
          <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-primary transition-all group">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">Nossa Missão</h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                Transformar o Vascoverso em uma máquina de informação vascaína, produzindo conteúdo de qualidade
                diariamente sobre o nosso clube.
              </p>
              <p>
                <strong className="text-primary">Mais importante:</strong> levar a história real do Vasco às novas gerações.
                Queremos que as crianças conheçam a verdade sobre a luta do nosso clube e não sejam influenciadas a torcer
                por outros times devido a histórias omitidas ou distorcidas.
              </p>
            </div>
          </div>

          {/* Nossa Equipe */}
          <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-primary transition-all group">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">Um Projeto Independente</h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                O Vascoverso é mantido de forma independente por torcedores apaixonados. Da concepção do conteúdo à edição final,
                tudo é feito de forma artesanal, movido puramente pelo amor ao Vasco.
              </p>
              <p>
                <strong className="text-primary">Quem escreve:</strong> Ricardo Júnior e Mozar Vivas, estudiosos dedicados do clube,
                comprometidos em trazer informação de qualidade para a torcida vascaína.
              </p>
            </div>
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 mb-8">
          <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">Nossos Valores</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Paixão Inegociável:</strong> O amor pelo Vasco da Gama é o combustível de tudo o que fazemos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Independência e Autenticidade:</strong> Livres de grandes grupos de mídia, garantindo uma perspectiva genuína e sem filtros.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Defesa da História:</strong> Compromisso inabalável com a verdade e a divulgação da história gloriosa e pioneira do Vasco.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Formação de Base:</strong> Proteger e inspirar o futuro da torcida, garantindo que as crianças sejam herdeiras da nossa tradição.</span>
            </li>
          </ul>
        </div>

        {/* O que oferecemos */}
        <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
          <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">O que Oferecemos</h2>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
            <p>
              Oferecemos conteúdos de qualidade que unem paixão e informação. Você encontra notícias, análises e
              resgates históricos sobre o Vasco, tudo com o olhar de quem vive e respira o clube.
            </p>
            <p className="text-primary font-semibold">
              Nosso objetivo é evoluir para oferecer conteúdo diário e nos tornar a sua principal fonte de informação
              vascaína independente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Notícias em tempo real</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Análises e opiniões vascaínas</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Cobertura completa dos jogos</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>História e memórias do clube</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Perspectiva independente</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>De torcedor para torcedor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomosPage;
