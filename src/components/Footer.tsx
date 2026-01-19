import NewsletterSignup from './NewsletterSignup';
import { MapPin, Mail as MailIcon, Heart } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16 border-t-4 border-primary">
      <div className="container mx-auto px-4 2xl:px-56 xl:px-48 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          {/* Newsletter Section */}
          <NewsletterSignup />

          {/* Info Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/cruzdemalta.webp"
                alt="Cruz de Malta"
                width={50}
                height={50}
                className="opacity-90"
              />
              <div>
                <h3 className="text-3xl font-bold font-heading">
                  <span className="text-primary">vasco</span>
                  <span className="text-white">verso</span>
                </h3>
                <p className="text-gray-400 text-sm">Portal de Notícias</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              O seu portal de notícias do <span className="text-primary font-semibold">Vasco da Gama</span>.
              Fique por dentro de tudo sobre o <span className="text-primary font-semibold">Gigante da Colina</span>!
            </p>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3 group hover:text-primary transition-colors">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin size={20} className="text-primary" />
                </div>
                <span>Rio de Janeiro, Brasil</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-primary transition-colors">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MailIcon size={20} className="text-primary" />
                </div>
                <span>vascoversocrvg@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Legais */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/politica-de-privacidade" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="/politica-de-cookies" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Política de Cookies
            </a>
            <a href="/contato" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Contato
            </a>
            <a href="/quem-somos" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Quem Somos
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Vascoverso</span>. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              Feito com <Heart size={16} className="text-primary fill-primary animate-pulse" /> para a Nação Vascaína
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
