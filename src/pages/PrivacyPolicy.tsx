import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Introdução
            </h2>
            <p>
              A Loomie está comprometida em proteger sua privacidade. Esta
              Política de Privacidade explica como coletamos, usamos, divulgamos
              e protegemos suas informações quando você usa nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Informações que Coletamos
            </h2>
            <p className="mb-4">
              Coletamos diferentes tipos de informações para fornecer e melhorar
              nossos serviços:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              2.1 Informações Fornecidas por Você
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Nome, e-mail e telefone ao criar uma conta</li>
              <li>
                Informações de contato de clientes que você adiciona ao CRM
              </li>
              <li>Dados de comunicação e interações</li>
              <li>
                Informações de pagamento (processadas por terceiros seguros)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              2.2 Informações Coletadas Automaticamente
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dados de uso e interação com a plataforma</li>
              <li>Informações de dispositivo e navegador</li>
              <li>Endereço IP e dados de localização</li>
              <li>Cookies e tecnologias similares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Como Usamos Suas Informações
            </h2>
            <p className="mb-4">Utilizamos as informações coletadas para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar transações e enviar notificações relacionadas</li>
              <li>Responder a solicitações, comentários e perguntas</li>
              <li>Enviar comunicações administrativas e atualizações</li>
              <li>Personalizar sua experiência</li>
              <li>Prevenir fraudes e garantir a segurança</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Compartilhamento de Informações
            </h2>
            <p className="mb-4">
              Não vendemos suas informações pessoais. Podemos compartilhar
              informações nas seguintes situações:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Prestadores de serviços:</strong> Com empresas que nos
                auxiliam na prestação de serviços
              </li>
              <li>
                <strong>Conformidade legal:</strong> Quando exigido por lei ou
                para proteger direitos
              </li>
              <li>
                <strong>Transferências comerciais:</strong> Em caso de fusão,
                aquisição ou venda de ativos
              </li>
              <li>
                <strong>Com seu consentimento:</strong> Em outras situações com
                sua autorização explícita
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Segurança de Dados
            </h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais
              apropriadas para proteger suas informações contra acesso não
              autorizado, alteração, divulgação ou destruição. Isso inclui:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Auditorias regulares de segurança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Seus Direitos
            </h2>
            <p className="mb-4">
              De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem os
              seguintes direitos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a eliminação de dados</li>
              <li>Revogar consentimento</li>
              <li>Solicitar portabilidade de dados</li>
              <li>Obter informações sobre compartilhamento de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Retenção de Dados
            </h2>
            <p>
              Mantemos suas informações pessoais apenas pelo tempo necessário
              para cumprir os propósitos descritos nesta Política de
              Privacidade, a menos que um período de retenção mais longo seja
              exigido ou permitido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Cookies
            </h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua
              experiência, analisar o uso do serviço e personalizar conteúdo.
              Você pode controlar o uso de cookies através das configurações do
              seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Alterações a Esta Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Notificaremos você sobre quaisquer alterações publicando a nova
              Política de Privacidade nesta página e atualizando a data de
              "Última atualização".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Contato
            </h2>
            <p>
              Se você tiver perguntas sobre esta Política de Privacidade ou
              sobre nossas práticas de privacidade, entre em contato conosco:
            </p>
            <ul className="list-none mt-4 space-y-2 ml-4">
              <li>
                <strong>WhatsApp:</strong> +55 55 99672-0480
              </li>
              <li>
                <strong>Email:</strong> contato@loomie.com.br
              </li>
            </ul>
          </section>

          <div className="pt-8 text-sm">
            <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
