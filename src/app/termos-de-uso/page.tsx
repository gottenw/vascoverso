import { Metadata } from 'next';
import { FileText, AlertTriangle, CheckCircle, XCircle, Scale } from 'lucide-react';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Termos de Uso | Vascoverso',
  description: 'Termos e Condições de Uso do Vascoverso. Leia as regras e diretrizes para utilização do nosso portal.',
};

const TermosUsoPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="bg-card-background p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-gray-700/50">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-primary/20 rounded-xl">
            <FileText className="text-primary" size={40} />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              <span className="text-primary">Termos de</span>{' '}
              <span className="text-gray-900 dark:text-white">Uso</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full mb-8"></div>

        {/* Introdução */}
        <div className="mb-10 bg-primary/10 dark:bg-primary/20 p-6 rounded-xl border-2 border-primary">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Bem-vindo ao <strong className="text-primary">Vascoverso</strong>! Estes Termos de Uso regulam o acesso e a utilização
            do nosso portal de notícias, disponível em{' '}
            <a href="https://vascoverso.com.br" className="text-primary hover:underline font-semibold">vascoverso.com.br</a>.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong className="text-primary">Ao acessar ou usar este site, você concorda com estes termos.</strong> Se não concordar,
            por favor, não utilize nossos serviços.
          </p>
        </div>

        {/* Seções */}
        <div className="space-y-8">
          {/* 1. Aceitação dos Termos */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                1. Aceitação dos Termos
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                Ao acessar e utilizar o <strong>Vascoverso</strong>, você confirma que:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Leu, compreendeu e aceita estes Termos de Uso integralmente</li>
                <li>Concorda com nossa <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a> e <a href="/politica-de-cookies" className="text-primary hover:underline">Política de Cookies</a></li>
                <li>Tem capacidade legal para aceitar estes termos (maior de 18 anos ou com autorização de responsável)</li>
                <li>Usará o site de forma legal e em conformidade com as leis brasileiras</li>
              </ul>
            </div>
          </section>

          {/* 2. Descrição do Serviço */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <FileText className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                2. Descrição do Serviço
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                O <strong className="text-primary">Vascoverso</strong> é um portal de notícias independente dedicado ao
                Club de Regatas Vasco da Gama, oferecendo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Notícias atualizadas sobre o clube</li>
                <li>Análises, opiniões e comentários</li>
                <li>Conteúdo histórico e cultural sobre o Vasco</li>
                <li>Informações sobre jogos, tabelas e estatísticas</li>
                <li>Newsletter por e-mail (mediante inscrição voluntária)</li>
              </ul>
              <p className="mt-4">
                <strong className="text-gray-900 dark:text-white">Importante:</strong> O Vascoverso é um projeto independente e
                <strong className="text-primary"> não possui vínculo oficial</strong> com o Club de Regatas Vasco da Gama.
              </p>
            </div>
          </section>

          {/* 3. Uso Aceitável */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                3. Uso Aceitável do Site
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>Você pode usar nosso site para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ler e compartilhar notícias sobre o Vasco da Gama</li>
                <li>Inscrever-se na newsletter para receber atualizações</li>
                <li>Navegar pelo conteúdo histórico e análises</li>
                <li>Visualizar informações sobre jogos e tabelas</li>
                <li>Entrar em contato conosco através dos canais oficiais</li>
              </ul>
            </div>
          </section>

          {/* 4. Uso Proibido */}
          <section className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-300 dark:border-red-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <XCircle className="text-red-600 dark:text-red-400" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                4. Condutas Proibidas
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p className="font-semibold text-red-600 dark:text-red-400">É EXPRESSAMENTE PROIBIDO:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Copiar ou Reproduzir Conteúdo:</strong> Sem autorização prévia e por escrito</li>
                <li><strong>Uso Comercial Não Autorizado:</strong> Explorar o conteúdo do site para fins comerciais</li>
                <li><strong>Ataques Cibernéticos:</strong> Tentar hackear, sobrecarregar ou comprometer o site</li>
                <li><strong>Disseminação de Malware:</strong> Enviar vírus, trojans ou qualquer código malicioso</li>
                <li><strong>Coleta de Dados:</strong> Usar bots, scrapers ou ferramentas automatizadas para extrair dados</li>
                <li><strong>Falsificação:</strong> Se passar pelo Vascoverso ou seus representantes</li>
                <li><strong>Spam:</strong> Enviar mensagens não solicitadas através dos nossos formulários</li>
                <li><strong>Conteúdo Ilegal:</strong> Publicar ou transmitir conteúdo que viole leis brasileiras</li>
                <li><strong>Discurso de Ódio:</strong> Publicar conteúdo ofensivo, discriminatório ou que incite violência</li>
                <li><strong>Violação de Propriedade Intelectual:</strong> Usar marcas, logos ou conteúdo protegido sem permissão</li>
              </ul>
              <p className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg border border-red-400 dark:border-red-600">
                <strong className="text-red-700 dark:text-red-300">Violações podem resultar em:</strong> Suspensão de acesso,
                ações legais e responsabilização civil e criminal conforme as leis brasileiras.
              </p>
            </div>
          </section>

          {/* 5. Propriedade Intelectual */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Scale className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                5. Propriedade Intelectual
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">5.1. Nosso Conteúdo</h3>
                <p>
                  Todo o conteúdo do site (textos, imagens, logos, design, código-fonte) é de propriedade do <strong>Vascoverso</strong> ou
                  licenciado de terceiros, protegido por direitos autorais e leis de propriedade intelectual.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">5.2. Uso Permitido</h3>
                <p>Você pode:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Compartilhar links das notícias nas redes sociais</li>
                  <li>Citar trechos pequenos com atribuição e link para a fonte original</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">5.3. Uso Não Permitido</h3>
                <p>Você NÃO pode:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Copiar integralmente artigos para outros sites sem autorização</li>
                  <li>Usar nosso logo, identidade visual ou nome comercial sem permissão</li>
                  <li>Remover créditos ou atribuições de autoria</li>
                </ul>
              </div>

              <p className="mt-4 text-sm italic">
                Para solicitar permissões especiais de uso, entre em contato: <a href="mailto:vascoversocrvg@gmail.com" className="text-primary hover:underline">vascoversocrvg@gmail.com</a>
              </p>
            </div>
          </section>

          {/* 6. Conteúdo de Terceiros */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              6. Conteúdo de Terceiros e Links Externos
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                Nosso site pode conter links para sites externos (redes sociais, fontes de notícias, parceiros).
                <strong className="text-primary"> Não somos responsáveis</strong> pelo conteúdo, políticas ou práticas desses sites.
              </p>
              <p>
                O acesso a sites de terceiros é por sua conta e risco. Recomendamos que você leia os termos e políticas de cada site visitado.
              </p>
            </div>
          </section>

          {/* 7. Publicidade */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              7. Publicidade (Google AdSense)
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                Nosso site exibe anúncios através do <strong>Google AdSense</strong> para gerar receita e manter o portal funcionando.
                Esses anúncios são selecionados automaticamente pelo Google com base no seu histórico de navegação.
              </p>
              <p><strong className="text-gray-900 dark:text-white">Importante:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Não controlamos o conteúdo dos anúncios exibidos</li>
                <li>Não endossamos produtos ou serviços anunciados</li>
                <li>Não somos responsáveis por transações realizadas através dos anúncios</li>
                <li>O Google pode coletar dados para personalizar anúncios (veja nossa <a href="/politica-de-cookies" className="text-primary hover:underline">Política de Cookies</a>)</li>
              </ul>
              <p className="mt-3">
                Para mais informações sobre como o Google usa dados: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Policies</a>
              </p>
            </div>
          </section>

          {/* 8. Isenção de Responsabilidade */}
          <section className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-400" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                8. Isenção de Responsabilidade
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p className="font-semibold text-yellow-700 dark:text-yellow-300">
                O VASCOVERSO FORNECE O SERVIÇO &ldquo;COMO ESTÁ&rdquo; E &ldquo;CONFORME DISPONÍVEL&rdquo;, SEM GARANTIAS DE QUALQUER TIPO.
              </p>
              <p>Não garantimos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Que o site estará sempre disponível, sem interrupções ou erros</li>
                <li>Que as informações publicadas são 100% precisas, completas ou atualizadas</li>
                <li>Que o site estará livre de vírus ou outros componentes prejudiciais</li>
                <li>Resultados específicos do uso do nosso conteúdo</li>
              </ul>
              <p className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg border border-yellow-400 dark:border-yellow-600">
                <strong className="text-yellow-700 dark:text-yellow-300">⚠️ Importante:</strong> Somos um portal de notícias independente.
                Nossas análises e opiniões refletem a visão dos autores e não devem ser consideradas como aconselhamento profissional.
              </p>
            </div>
          </section>

          {/* 9. Limitação de Responsabilidade */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              9. Limitação de Responsabilidade
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                Na máxima extensão permitida por lei, o <strong>Vascoverso</strong>, seus fundadores, colaboradores e parceiros
                <strong className="text-primary"> não serão responsáveis</strong> por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Danos diretos, indiretos, acidentais ou consequenciais resultantes do uso ou impossibilidade de uso do site</li>
                <li>Erros ou omissões no conteúdo publicado</li>
                <li>Perda de dados ou interrupção de negócios</li>
                <li>Ações de terceiros (comentários, links externos, anúncios)</li>
                <li>Decisões tomadas com base nas informações do site</li>
              </ul>
            </div>
          </section>

          {/* 10. Modificações */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              10. Modificações no Serviço e nos Termos
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                Reservamo-nos o direito de, a qualquer momento e sem aviso prévio:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modificar, suspender ou descontinuar qualquer parte do site</li>
                <li>Alterar estes Termos de Uso (a data de atualização será modificada)</li>
                <li>Adicionar ou remover funcionalidades</li>
                <li>Estabelecer limites de uso</li>
              </ul>
              <p className="mt-3">
                <strong className="text-primary">Seu uso continuado do site após alterações constitui aceitação dos novos termos.</strong>
              </p>
            </div>
          </section>

          {/* 11. Rescisão */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              11. Rescisão de Acesso
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Podemos, a nosso exclusivo critério, encerrar ou suspender seu acesso ao site, total ou parcialmente,
                sem aviso prévio, por qualquer motivo, incluindo violação destes Termos de Uso.
              </p>
            </div>
          </section>

          {/* 12. Lei Aplicável */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Scale className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                12. Lei Aplicável e Jurisdição
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">
                Estes Termos de Uso são regidos pelas leis da <strong className="text-primary">República Federativa do Brasil</strong>,
                incluindo mas não limitado a:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</li>
                <li>Marco Civil da Internet (Lei 12.965/2014)</li>
                <li>Código de Defesa do Consumidor (Lei 8.078/1990)</li>
                <li>Código Civil Brasileiro (Lei 10.406/2002)</li>
              </ul>
              <p className="mt-4">
                Fica eleito o foro da comarca do <strong>Rio de Janeiro/RJ</strong> para dirimir quaisquer controvérsias decorrentes destes termos,
                com exclusão de qualquer outro, por mais privilegiado que seja.
              </p>
            </div>
          </section>

          {/* 13. Disposições Gerais */}
          <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
              13. Disposições Gerais
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                <strong>Integralidade:</strong> Estes Termos constituem o acordo completo entre você e o Vascoverso.
              </p>
              <p>
                <strong>Independência das Cláusulas:</strong> Se qualquer disposição destes Termos for considerada inválida ou inexequível,
                as demais disposições permanecerão em pleno vigor.
              </p>
              <p>
                <strong>Não Renúncia:</strong> Nossa falha em exercer qualquer direito não constitui renúncia a esse direito.
              </p>
              <p>
                <strong>Idioma:</strong> Em caso de tradução destes termos, a versão em português prevalecerá.
              </p>
            </div>
          </section>

          {/* 14. Contato */}
          <section className="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl border-2 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/30 rounded-lg">
                <FileText className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-foreground">
                14. Dúvidas sobre os Termos?
              </h2>
            </div>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-3">
                Se você tiver dúvidas, sugestões ou preocupações sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">E-mail:</strong>{' '}
                  <a href="mailto:vascoversocrvg@gmail.com" className="text-primary hover:underline">
                    vascoversocrvg@gmail.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong className="text-gray-900 dark:text-white">Site:</strong>{' '}
                  <a href="https://vascoverso.com.br" className="text-primary hover:underline">
                    vascoverso.com.br
                  </a>
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">Página de Contato:</strong>{' '}
                  <a href="/contato" className="text-primary hover:underline">
                    vascoverso.com.br/contato
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer dos Termos */}
        <div className="mt-10 pt-8 border-t-2 border-gray-300 dark:border-gray-700">
          <div className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              Estes Termos de Uso são efetivos a partir de <strong>{new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</strong>.<br />
              Ao usar o Vascoverso, você declara ter lido, compreendido e concordado com estes termos na íntegra.
            </p>
            <p className="text-center mt-4 text-primary font-semibold">
              Força, Vasco!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosUsoPage;
