import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quem Somos | VascoVerso',
  description: 'Saiba mais sobre a equipe e a missão do VascoVerso.',
};

const QuemSomosPage = () => {
  return (
    <div className="max-w-prose mx-auto py-8">
      <h1 className="font-heading text-4xl font-bold mb-6 text-foreground">Sobre o VascoVerso</h1>
      <p className="text-justify mb-4">
        Bem-vindo ao VascoVerso, sua fonte número um de notícias e análises sobre o Club de Regatas Vasco da Gama. Somos uma equipe de torcedores apaixonados e jornalistas dedicados a trazer a você as informações mais precisas e atualizadas sobre o Gigante da Colina.
      </p>
      <h2 className="font-heading text-2xl font-bold mt-8 mb-4 text-foreground">Nossa Missão</h2>
      <p className="text-justify mb-4">
        Nossa missão é criar uma comunidade vibrante e informada de torcedores do Vasco, oferecendo conteúdo de alta qualidade que vai desde notícias factuais e análises táticas até histórias emocionantes sobre o clube e seus ídolos.
      </p>
      <h2 className="font-heading text-2xl font-bold mt-8 mb-4 text-foreground">Nossa Equipe</h2>
      <p className="text-justify mb-4">
        Somos formados por jornalistas, analistas, editores e, acima de tudo, vascaínos. Cada membro da nossa equipe contribui com sua paixão e conhecimento para garantir que o VascoVerso seja a sua casa quando o assunto é Vasco da Gama.
      </p>
    </div>
  );
};

export default QuemSomosPage;