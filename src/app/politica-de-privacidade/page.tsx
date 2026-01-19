import { Metadata } from 'next';
import { Shield, Eye, Cookie, Lock, Mail, FileText } from 'lucide-react';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Política de Privacidade | Vascoverso',
  description: 'Política de Privacidade do Vascoverso. Saiba como coletamos, usamos e protegemos suas informações pessoais.',
};

const PoliticaPrivacidadePage = () => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="bg-card-background p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-gray-700/50">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-primary/20 rounded-xl">
            <Shield className="text-primary" size={40} />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              <span className="text-primary">Política de</span>{' '}
              <span className="text-gray-900 dark:text-white">Privacidade</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full mb-8"></div>

        {/* Introdução */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            O <strong className="text-primary">Vascoverso</strong> valoriza e respeita a sua privacidade. Esta Política de Privacidade descreve como coletamos,
            usamos, armazenamos e protegemos suas informações pessoais quando você visita nosso site{' '}
            <strong className="text-primary">vascoverso.com.br</strong>.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ao utilizar nosso site, você concorda com as práticas descritas nesta política. Caso não concorde,
            recomendamos que não utilize nossos serviços.
          </p>
        </div>

        {/* Seções */}
        <div className="space-y-8">
          {/* 1. Informações Coletadas */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Eye className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                1. Informações que Coletamos
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1.1. Informações Fornecidas Voluntariamente</h3>
                <p>Coletamos informações que você nos fornece diretamente, como:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Newsletter:</strong> E-mail fornecido ao se inscrever na nossa newsletter</li>
                  <li><strong>Formulários de Contato:</strong> Nome, e-mail e mensagem enviados através da página de contato</li>
                  <li><strong>Comentários:</strong> Se implementado no futuro, nome e comentários em notícias</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1.2. Informações Coletadas Automaticamente</h3>
                <p>Quando você visita nosso site, coletamos automaticamente:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Dados de Navegação:</strong> Páginas visitadas, tempo de permanência, cliques</li>
                  <li><strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional, dispositivo</li>
                  <li><strong>Cookies:</strong> Pequenos arquivos armazenados no seu dispositivo (veja nossa <a href="/politica-de-cookies" className="text-primary hover:underline">Política de Cookies</a>)</li>
                  <li><strong>Dados de Localização:</strong> País e região aproximada (através do IP)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1.3. Informações de Terceiros</h3>
                <p>Utilizamos serviços de terceiros que podem coletar informações:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Google AdSense:</strong> Exibe anúncios personalizados baseados no seu histórico de navegação</li>
                  <li><strong>Vercel Analytics:</strong> Analisa estatísticas de tráfego do site</li>
                  <li><strong>Supabase:</strong> Armazena dados de newsletter e conteúdo do site</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Como Usamos suas Informações */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <FileText className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                2. Como Usamos suas Informações
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Melhorar o Site:</strong> Analisar o comportamento dos usuários para aprimorar a experiência</li>
                <li><strong>Enviar Newsletter:</strong> Notificações sobre novas notícias e conteúdos do Vasco (apenas se você se inscreveu)</li>
                <li><strong>Responder Contatos:</strong> Responder mensagens enviadas através do formulário de contato</li>
                <li><strong>Exibir Anúncios:</strong> Mostrar anúncios relevantes através do Google AdSense</li>
                <li><strong>Cumprir Obrigações Legais:</strong> Quando exigido por lei ou para proteger nossos direitos</li>
                <li><strong>Análise Estatística:</strong> Entender quais conteúdos são mais populares e relevantes</li>
              </ul>
            </div>
          </section>

          {/* 3. Cookies e Tecnologias Similares */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Cookie className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                3. Cookies e Tecnologias Similares
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência. Cookies são pequenos arquivos
                de texto armazenados no seu dispositivo que nos ajudam a lembrar suas preferências.
              </p>
              <p className="mb-3"><strong>Tipos de Cookies que Usamos:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site (tema claro/escuro)</li>
                <li><strong>Cookies de Análise:</strong> Para entender como você usa o site (Vercel Analytics)</li>
                <li><strong>Cookies de Publicidade:</strong> Utilizados pelo Google AdSense para exibir anúncios relevantes</li>
                <li><strong>Cookies de Terceiros:</strong> Provenientes de serviços externos como Google e Supabase</li>
              </ul>
              <p className="mt-4">
                Para mais detalhes, consulte nossa{' '}
                <a href="/politica-de-cookies" className="text-primary hover:underline font-semibold">Política de Cookies</a>.
              </p>
            </div>
          </section>

          {/* 4. Compartilhamento de Informações */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Lock className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                4. Compartilhamento de Informações
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">
                <strong className="text-primary">Não vendemos suas informações pessoais.</strong> Compartilhamos dados apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Prestadores de Serviços:</strong> Google (AdSense), Vercel (hospedagem), Supabase (banco de dados)</li>
                <li><strong>Obrigações Legais:</strong> Quando exigido por lei, ordem judicial ou autoridades competentes</li>
                <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança</li>
                <li><strong>Consentimento:</strong> Com seu consentimento explícito para outros fins</li>
              </ul>
              <p className="mt-4 text-sm italic">
                Esses terceiros possuem suas próprias políticas de privacidade e são responsáveis por suas práticas de dados.
              </p>
            </div>
          </section>

          {/* 5. Seus Direitos (LGPD) */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Shield className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                5. Seus Direitos (LGPD)
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">
                De acordo com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>, você possui os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acesso:</strong> Solicitar uma cópia dos dados pessoais que temos sobre você</li>
                <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados pessoais</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado e de uso comum</li>
                <li><strong>Revogação de Consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento de seus dados em determinadas situações</li>
                <li><strong>Informação:</strong> Saber com quem compartilhamos seus dados</li>
              </ul>
              <p className="mt-4">
                Para exercer qualquer desses direitos, entre em contato conosco através do e-mail{' '}
                <a href="mailto:vascoversocrvg@gmail.com" className="text-primary hover:underline font-semibold">
                  vascoversocrvg@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* 6. Segurança */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Lock className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                6. Segurança das Informações
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Criptografia:</strong> Conexão HTTPS segura em todo o site</li>
                <li><strong>Armazenamento Seguro:</strong> Dados armazenados em servidores seguros (Supabase/Vercel)</li>
                <li><strong>Acesso Restrito:</strong> Apenas pessoas autorizadas têm acesso aos dados</li>
                <li><strong>Monitoramento:</strong> Monitoramento contínuo de atividades suspeitas</li>
              </ul>
              <p className="mt-4 text-sm italic">
                Apesar de nossos esforços, nenhum sistema é 100% seguro. Não podemos garantir segurança absoluta contra acessos não autorizados.
              </p>
            </div>
          </section>

          {/* 7. Menores de Idade */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              7. Menores de Idade
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Nosso site não é direcionado a menores de 13 anos e não coletamos intencionalmente informações de crianças.
                Se você é pai/mãe ou responsável e acredita que seu filho forneceu informações pessoais, entre em contato conosco
                para que possamos remover essas informações.
              </p>
            </div>
          </section>

          {/* 8. Links Externos */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              8. Links para Sites Externos
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Nosso site pode conter links para sites de terceiros (redes sociais, parceiros, anunciantes).
                Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia
                as políticas de privacidade de cada site que visitar.
              </p>
            </div>
          </section>

          {/* 9. Alterações */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              9. Alterações nesta Política
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas
                ou por razões legais. A data de &ldquo;Última atualização&rdquo; no topo desta página será alterada quando houver mudanças.
              </p>
              <p>
                Recomendamos que você revise esta política periodicamente. Alterações significativas serão comunicadas
                através de um aviso destacado no site.
              </p>
            </div>
          </section>

          {/* 10. Contato */}
          <section className="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl border-2 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/30 rounded-lg">
                <Mail className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                10. Fale Conosco
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">
                Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade
                ou ao tratamento de seus dados pessoais, entre em contato:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="mb-2"><strong className="text-gray-900 dark:text-white">E-mail:</strong>{' '}
                  <a href="mailto:vascoversocrvg@gmail.com" className="text-primary hover:underline">
                    vascoversocrvg@gmail.com
                  </a>
                </p>
                <p className="mb-2"><strong className="text-gray-900 dark:text-white">Site:</strong>{' '}
                  <a href="https://vascoverso.com.br" className="text-primary hover:underline">
                    vascoverso.com.br
                  </a>
                </p>
                <p><strong className="text-gray-900 dark:text-white">Responsável:</strong> Equipe Vascoverso</p>
              </div>
              <p className="mt-4 text-sm italic">
                Responderemos sua solicitação em até <strong>15 dias úteis</strong>, conforme estabelecido pela LGPD.
              </p>
            </div>
          </section>
        </div>

        {/* Footer da Política */}
        <div className="mt-10 pt-8 border-t-2 border-gray-300 dark:border-gray-700">
          <div className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Esta Política de Privacidade é efetiva a partir de <strong>{new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</strong> e
              está em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong> e
              outras legislações aplicáveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidadePage;
