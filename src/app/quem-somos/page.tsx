import { Metadata } from 'next';
import { Target, Users, Heart, Newspaper } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Quem Somos | VascoVerso',
  description: 'Saiba mais sobre a equipe e a missão do VascoVerso.',
};

const QuemSomosPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-card-background p-8 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-gray-700/50">
        {/* Header */}
        <div className="flex items-center gap-6 mb-6">
          <Image
            src="/cruzdemalta.png"
            alt="Cruz de Malta"
            width={80}
            height={80}
            className="opacity-90"
          />
          <div>
            <h1 className="font-heading text-5xl font-bold mb-2 flex items-center gap-4">
              <span className="text-primary">Quem</span>
              <span className="text-gray-900 dark:text-white">Somos</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
          </div>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Bem-vindo ao <span className="text-primary font-semibold">VascoVerso</span>, sua fonte número um de notícias e análises sobre o
          <span className="text-primary font-semibold"> Club de Regatas Vasco da Gama</span>. Somos uma equipe de torcedores apaixonados
          e jornalistas dedicados a trazer as informações mais precisas e atualizadas sobre o
          <span className="text-primary font-semibold"> Gigante da Colina</span>.
        </p>

        {/* Cards de informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Nossa Missão */}
          <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-primary transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Target className="text-primary" size={28} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">Nossa Missão</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Criar uma comunidade vibrante e informada de torcedores do Vasco, oferecendo conteúdo de alta qualidade
              que vai desde notícias factuais e análises táticas até histórias emocionantes sobre o clube e seus ídolos.
            </p>
          </div>

          {/* Nossa Equipe */}
          <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-primary transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Users className="text-primary" size={28} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">Nossa Equipe</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Somos formados por jornalistas, analistas, editores e, acima de tudo, vascaínos. Cada membro contribui
              com paixão e conhecimento para garantir que o VascoVerso seja sua casa quando o assunto é Vasco da Gama.
            </p>
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Heart className="text-primary" size={28} />
            </div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">Nossos Valores</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Paixão:</strong> Somos vascaínos de coração e isso transparece em cada matéria.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Credibilidade:</strong> Notícias verificadas e análises fundamentadas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Comunidade:</strong> Valorizamos a voz de cada torcedor e criamos um espaço de união.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong className="text-gray-900 dark:text-white">Inovação:</strong> Sempre buscando novas formas de entregar o melhor conteúdo.</span>
            </li>
          </ul>
        </div>

        {/* O que oferecemos */}
        <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Newspaper className="text-primary" size={28} />
            </div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">O que Oferecemos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Notícias em tempo real</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Análises táticas profundas</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Cobertura completa dos jogos</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Entrevistas exclusivas</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>História e memórias do clube</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Conteúdo multimídia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomosPage;