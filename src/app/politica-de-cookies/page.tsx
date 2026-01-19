import { Metadata } from 'next';
import { Cookie, Settings, Shield, Eye, ToggleLeft } from 'lucide-react';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Política de Cookies | Vascoverso',
  description: 'Entenda como o Vascoverso utiliza cookies e tecnologias similares para melhorar sua experiência de navegação.',
};

const PoliticaCookiesPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="bg-card-background p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-gray-700/50">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-primary/20 rounded-xl">
            <Cookie className="text-primary" size={40} />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              <span className="text-primary">Política de</span>{' '}
              <span className="text-gray-900 dark:text-white">Cookies</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full mb-8"></div>

        {/* Introdução */}
        <div className="mb-10 bg-primary/10 dark:bg-primary/20 p-6 rounded-xl border-2 border-primary">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            O <strong className="text-primary">Vascoverso</strong> utiliza cookies e tecnologias similares para melhorar sua experiência
            de navegação, personalizar conteúdo e anúncios, fornecer recursos de redes sociais e analisar nosso tráfego.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Esta política explica o que são cookies, como os utilizamos, quais tipos de cookies empregamos e como você pode
            gerenciar suas preferências.
          </p>
        </div>

        {/* Seções */}
        <div className="space-y-8">
          {/* 1. O que são Cookies? */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Cookie className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                1. O que são Cookies?
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou smartphone)
                quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre de informações sobre
                sua visita.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Cookies podem armazenar informações como:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Suas preferências de navegação (tema claro/escuro)</li>
                  <li>Itens no carrinho de compras (em e-commerces)</li>
                  <li>Páginas visitadas anteriormente</li>
                  <li>Idioma preferido</li>
                  <li>Histórico de busca no site</li>
                </ul>
              </div>
              <p className="mt-4">
                <strong className="text-primary">Importante:</strong> Cookies geralmente não contêm informações pessoais que possam
                identificá-lo diretamente. Eles contêm principalmente identificadores únicos.
              </p>
            </div>
          </section>

          {/* 2. Por que usamos Cookies? */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Eye className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                2. Por que Usamos Cookies?
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">Utilizamos cookies para diversos propósitos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Melhorar a Funcionalidade:</strong> Lembrar suas preferências (tema, idioma)</li>
                <li><strong>Analisar o Tráfego:</strong> Entender como você usa o site para melhorar o conteúdo</li>
                <li><strong>Personalizar Anúncios:</strong> Exibir anúncios relevantes aos seus interesses (Google AdSense)</li>
                <li><strong>Segurança:</strong> Proteger contra fraudes e garantir a segurança do site</li>
                <li><strong>Desempenho:</strong> Melhorar a velocidade e eficiência do carregamento de páginas</li>
              </ul>
            </div>
          </section>

          {/* 3. Tipos de Cookies */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Settings className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                3. Tipos de Cookies que Utilizamos
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              {/* 3.1 Cookies Essenciais */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">Essenciais</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">(Sempre Ativos)</span>
                </div>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">Necessários para o funcionamento básico do site.</strong>
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Exemplos:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Preferência de Tema:</strong> Lembrar se você escolheu modo claro ou escuro</li>
                    <li><strong>Sessão:</strong> Manter você conectado enquanto navega pelo site</li>
                    <li><strong>Segurança:</strong> Proteger contra ataques CSRF (Cross-Site Request Forgery)</li>
                  </ul>
                  <p className="mt-3 text-sm italic">
                    <strong>Você não pode desativar esses cookies</strong> sem comprometer a funcionalidade do site.
                  </p>
                </div>
              </div>

              {/* 3.2 Cookies de Desempenho */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">Desempenho</span>
                </div>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">Coletam informações sobre como você usa o site.</strong>
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">O que coletam:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Páginas mais visitadas</li>
                    <li>Tempo médio de permanência</li>
                    <li>Taxa de rejeição (bounce rate)</li>
                    <li>Erros encontrados</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    <strong>Serviços usados:</strong> Vercel Analytics
                  </p>
                  <p className="mt-2 text-sm italic">
                    Esses dados são agregados e anônimos - não identificam você pessoalmente.
                  </p>
                </div>
              </div>

              {/* 3.3 Cookies de Funcionalidade */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">Funcionalidade</span>
                </div>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">Melhoram a experiência do usuário lembrando suas escolhas.</strong>
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Exemplos:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lembrar seu nome de usuário (se implementado)</li>
                    <li>Preferências de layout ou tamanho de fonte</li>
                    <li>Região ou idioma selecionado</li>
                  </ul>
                </div>
              </div>

              {/* 3.4 Cookies de Publicidade */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-semibold">Publicidade</span>
                </div>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">Utilizados para exibir anúncios relevantes aos seus interesses.</strong>
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Como funcionam:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Rastreiam seu histórico de navegação em sites participantes</li>
                    <li>Criam um perfil dos seus interesses</li>
                    <li>Exibem anúncios personalizados com base nesse perfil</li>
                    <li>Limitam quantas vezes você vê o mesmo anúncio</li>
                    <li>Medem a eficácia das campanhas publicitárias</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    <strong>Serviços usados:</strong> Google AdSense, DoubleClick (Google)
                  </p>
                  <p className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-600">
                    <strong className="text-yellow-700 dark:text-yellow-300">⚠️ Nota:</strong> Esses cookies podem rastrear sua
                    atividade em diferentes sites. Você pode desativá-los nas configurações do navegador ou através dos links abaixo.
                  </p>
                </div>
              </div>

              {/* 3.5 Cookies de Terceiros */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-700 dark:text-red-300 rounded-full text-sm font-semibold">Terceiros</span>
                </div>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">Instalados por serviços externos que utilizamos.</strong>
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Quem instala cookies de terceiros:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Google (AdSense):</strong> Para publicidade personalizada</li>
                    <li><strong>Vercel:</strong> Para hospedagem e análise de performance</li>
                    <li><strong>Supabase:</strong> Para gerenciamento de banco de dados</li>
                  </ul>
                  <p className="mt-3 text-sm italic">
                    Esses terceiros possuem suas próprias políticas de cookies. Recomendamos que você as leia.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Cookies por Duração */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              4. Classificação por Duração
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">4.1. Cookies de Sessão (Session Cookies)</h3>
                <p>
                  Temporários, expiram quando você fecha o navegador. Usados para manter sua sessão ativa enquanto navega.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">4.2. Cookies Persistentes (Persistent Cookies)</h3>
                <p>
                  Permanecem no seu dispositivo por um período específico (dias, meses ou anos) ou até você os deletar manualmente.
                  Usados para lembrar preferências entre visitas.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Como Gerenciar Cookies */}
          <section className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-6 rounded-xl border-2 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/30 rounded-lg">
                <ToggleLeft className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                5. Como Gerenciar e Desativar Cookies
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                Você tem o direito de aceitar ou recusar cookies. Você pode exercer suas preferências de cookies de várias maneiras:
              </p>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">5.1. Configurações do Navegador</h3>
                <p className="mb-3">A maioria dos navegadores permite que você:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Visualize quais cookies estão armazenados</li>
                  <li>Delete cookies individuais ou todos de uma vez</li>
                  <li>Bloqueie cookies de sites específicos ou de todos os sites</li>
                  <li>Bloqueie cookies de terceiros</li>
                  <li>Delete todos os cookies ao fechar o navegador</li>
                </ul>

                <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Guias por Navegador:</p>
                  <ul className="space-y-2">
                    <li>
                      <strong>Google Chrome:</strong>{' '}
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Configurações de Cookies no Chrome
                      </a>
                    </li>
                    <li>
                      <strong>Mozilla Firefox:</strong>{' '}
                      <a href="https://support.mozilla.org/pt-BR/kb/desative-cookies-terceiros-impedir-rastreamento" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Configurações de Cookies no Firefox
                      </a>
                    </li>
                    <li>
                      <strong>Safari:</strong>{' '}
                      <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Configurações de Cookies no Safari
                      </a>
                    </li>
                    <li>
                      <strong>Microsoft Edge:</strong>{' '}
                      <a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Configurações de Cookies no Edge
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">5.2. Desativar Cookies de Publicidade</h3>
                <p className="mb-3">Para desativar anúncios personalizados do Google:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                      Google Ad Settings
                    </a> - Gerencie preferências de anúncios
                  </li>
                  <li>
                    <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                      Your Ad Choices
                    </a> - Desative cookies de publicidade
                  </li>
                  <li>
                    <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                      Your Online Choices (Europa)
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg border border-yellow-400 dark:border-yellow-600">
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>⚠️ Importante:</strong> Desativar cookies pode afetar a funcionalidade do site. Alguns recursos
                  podem não funcionar corretamente, e você pode ter uma experiência de navegação menos personalizada.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Tecnologias Similares */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              6. Outras Tecnologias de Rastreamento
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>Além de cookies, utilizamos outras tecnologias:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Local Storage:</strong> Armazena dados localmente no navegador (preferências de tema)
                </li>
                <li>
                  <strong>Session Storage:</strong> Armazena dados temporariamente durante a sessão
                </li>
                <li>
                  <strong>Web Beacons (Pixels):</strong> Pequenas imagens invisíveis usadas para rastrear visualizações de página
                </li>
                <li>
                  <strong>Fingerprinting:</strong> Técnica que identifica dispositivos com base em características únicas
                </li>
              </ul>
            </div>
          </section>

          {/* 7. Atualizações */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Shield className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                7. Alterações nesta Política
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou
                por razões operacionais, legais ou regulamentares. A data de &ldquo;Última atualização&rdquo; no topo será modificada.
              </p>
              <p className="mt-3">
                Recomendamos que você revise esta política regularmente para se manter informado sobre como usamos cookies.
              </p>
            </div>
          </section>

          {/* 8. Contato */}
          <section className="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl border-2 border-primary">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              8. Dúvidas sobre Cookies?
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">
                Se você tiver perguntas sobre como usamos cookies, entre em contato:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">E-mail:</strong>{' '}
                  <a href="mailto:vascoversocrvg@gmail.com" className="text-primary hover:underline">
                    vascoversocrvg@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">Política de Privacidade:</strong>{' '}
                  <a href="/politica-de-privacidade" className="text-primary hover:underline">
                    vascoverso.com.br/politica-de-privacidade
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer da Política */}
        <div className="mt-10 pt-8 border-t-2 border-gray-300 dark:border-gray-700">
          <div className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Esta Política de Cookies é efetiva a partir de <strong>{new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</strong>.<br />
              Ao continuar usando o Vascoverso, você concorda com o uso de cookies conforme descrito nesta política.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookiesPage;
