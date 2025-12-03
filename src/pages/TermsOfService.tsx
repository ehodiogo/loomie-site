import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">
          Termos de Uso da Plataforma Loomie Cloud
        </h1>
        <p className="text-muted-foreground mb-8">
          Versão: 2.0 | Última atualização: Novembro de 2025
        </p>

        <div className="space-y-8 text-muted-foreground">
          <p className="text-sm bg-secondary/30 p-4 rounded-lg border border-border">
            Estes Termos de Uso ("ToU") constituem o contrato-mestre que rege o
            relacionamento comercial entre LOOMIE TECNOLOGIA DA INFORMAÇÃO LTDA,
            pessoa jurídica de direito privado, inscrita no CNPJ sob o nº
            63.101.386/0001-48, com sede em Rua Pais Leme, 215, São Paulo,
            doravante denominada "PROVEDORA", e o CLIENTE, qualificado no
            Formulário de Contratação.
          </p>

          <p className="font-semibold text-foreground bg-primary/10 p-4 rounded-lg">
            ATENÇÃO: AO MARCAR A CAIXA DE SELEÇÃO NÃO PRÉ-MARCADA DECLARANDO "EU
            LI E ACEITO OS TERMOS DE USO, A POLÍTICA DE PRIVACIDADE E O ACORDO
            DE PROCESSAMENTO DE DADOS", O CLIENTE MANIFESTA SEU ACEITE LIVRE,
            INFORMADO E INEQUÍVOCO A ESTES TERMOS E AOS DOCUMENTOS INCORPORADOS.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Arquitetura de Documentos e Definições
            </h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              1.1. Arquitetura Contratual:
            </h3>
            <p className="mb-4">
              A prestação dos Serviços é regida por uma "pilha" de documentos
              legais interdependentes. Estes ToU são o contrato comercial
              principal e incorporam por referência, como se aqui estivessem
              integralmente transcritos, os seguintes documentos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong>Política de Privacidade ("PP"):</strong> Governa como a
                PROVEDORA, atuando como Controladora de Dados, coleta e usa os
                dados de cadastro e faturamento do CLIENTE.
              </li>
              <li>
                <strong>Acordo de Processamento de Dados ("DPA"):</strong>{" "}
                Apresentado como Anexo I a estes ToU, governa como a PROVEDORA,
                atuando como Operadora de Dados, processa os "Dados do Cliente"
                inseridos na Plataforma.
              </li>
              <li>
                <strong>Acordo de Nível de Serviço ("SLA"):</strong> Apresentado
                como Anexo II, define as garantias técnicas e operacionais da
                Plataforma.
              </li>
              <li>
                <strong>Formulário de Contratação:</strong> Detalha o plano
                específico, funcionalidades, limitações, preços e volume
                contratados pelo CLIENTE.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              1.2. Definições:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Plataforma:</strong> O software como serviço (SaaS) de
                CRM denominado LOOMIE CLOUD.
              </li>
              <li>
                <strong>Dados do Cliente:</strong> Todos os dados, informações e
                conteúdos que o CLIENTE ou seus usuários inserem, processam ou
                armazenam na Plataforma.
              </li>
              <li>
                <strong>Usuário:</strong> O indivíduo autorizado pelo CLIENTE a
                acessar a plataforma.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Objeto e Escopo da Licença de Uso
            </h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              2.1. Objeto:
            </h3>
            <p className="mb-4">
              O objeto deste ToU é a concessão de uma assinatura para acesso e
              uso da Plataforma.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              2.2. Escopo do Serviço:
            </h3>
            <p className="mb-4">
              A PROVEDORA detalhará as funcionalidades, o escopo de utilização e
              as limitações conforme o plano contratado.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              2.3. Natureza da Licença:
            </h3>
            <p className="mb-4">
              A PROVEDORA concede ao CLIENTE uma licença de uso limitada, não
              exclusiva, intransferível e revogável para acessar e usar a
              Plataforma, estritamente para os fins de negócio internos do
              CLIENTE.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              2.4. Restrições:
            </h3>
            <p className="mb-4">
              O CLIENTE não está adquirindo o software. É vedado ao CLIENTE
              revender o acesso, sublicenciar, fazer engenharia reversa ou
              tentar obter acesso ao código-fonte da Plataforma.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              2.5. Isenção de Responsabilidade por Bloqueios em Plataformas
              Terceiras:
            </h3>
            <p className="mb-2">
              O CLIENTE reconhece que a utilização de automações, chatbots e
              disparos em massa depende de plataformas de terceiros (ex:
              WhatsApp/Meta, Instagram, Telegram) que possuem políticas rígidas
              anti-spam. A PROVEDORA fornece a ferramenta, mas não gerencia a
              estratégia de uso do CLIENTE.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                A PROVEDORA não se responsabiliza, em nenhuma hipótese, por
                bloqueios, banimentos, suspensões ou perda de números
                telefônicos ou contas de redes sociais do CLIENTE decorrentes do
                uso da Plataforma.
              </li>
              <li>
                O CLIENTE é o único responsável por garantir que suas campanhas
                e automações estejam em conformidade com os Termos de Uso do
                WhatsApp Business e demais plataformas integradas.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Obrigações Comerciais e Financeiras
            </h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              3.1. Remuneração:
            </h3>
            <p className="mb-4">
              O CLIENTE pagará à PROVEDORA os valores conforme o modelo de
              precificação mensal e as formas de pagamento definidas no
              Formulário de Contratação.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              3.2. Reajuste:
            </h3>
            <p className="mb-4">
              Os valores dos planos serão reajustados anualmente pela variação
              positiva do IPCA.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              3.3. Inadimplência:
            </h3>
            <p className="mb-2">
              Em caso de atraso no pagamento, incidirão multa e juros. A
              PROVEDORA se reserva o direito de, mediante notificação:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                Suspender o acesso à Plataforma após 15 (quinze) dias de
                inadimplência.
              </li>
              <li>
                Rescindir o contrato e excluir permanentemente os Dados do
                Cliente após 60 (sessenta) dias de inadimplência, conforme
                procedimento de exclusão definido no DPA.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              3.4. Custos Variáveis e Consumo de API:
            </h3>
            <p className="mb-2">
              Salvo se estipulado de outra forma no Plano, os custos de APIs de
              terceiros (ex: OpenAI, WhatsApp Business API/BSP, SMS) integradas
              à conta do CLIENTE são de responsabilidade exclusiva do CLIENTE.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                O CLIENTE é responsável por configurar limites de uso (billing
                limits) diretamente nas plataformas terceiras. A PROVEDORA não
                se responsabiliza por cobranças excessivas decorrentes de
                "loops" de automação configurados erroneamente pelo CLIENTE ou
                alto volume de requisições.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Acordo de Nível de Serviço (SLA)
            </h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              4.1. Garantia de Desempenho:
            </h3>
            <p className="mb-4">
              A PROVEDORA prestará os Serviços em conformidade com o Acordo de
              Nível de Serviço (SLA) detalhado no Anexo II.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              4.2. Exclusões de Uptime:
            </h3>
            <p className="mb-4">
              A fórmula de cálculo do Uptime excluirá explicitamente qualquer
              indisponibilidade resultante de manutenções programadas e falhas
              de infraestrutura de terceiros, conforme detalhado no Anexo II.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              4.3. Penalidade (Créditos de Serviço):
            </h3>
            <p>
              Em caso de falha da PROVEDORA em atingir o Uptime, a única e
              exclusiva reparação do CLIENTE será o recebimento de créditos de
              serviço (desconto na fatura subsequente). Fica expressamente
              afastado o direito a indenização por perdas e danos ou lucros
              cessantes decorrentes de falha de SLA, transformando um risco
              ilimitado em um custo operacional previsível.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Propriedade Intelectual (PI)
            </h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              5.1. PI da PROVEDORA:
            </h3>
            <p className="mb-4">
              A PROVEDORA retém 100% da titularidade e propriedade de todo o
              software, plataforma, código-fonte, know-how, design e todos os
              trabalhos derivados.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              5.2. PI do CLIENTE:
            </h3>
            <p className="mb-4">
              O CLIENTE retém 100% da titularidade e propriedade de todos os
              "Dados do Cliente" que ele insere na plataforma.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              5.3. Customizações:
            </h3>
            <p className="mb-4">
              Todo e qualquer desenvolvimento ou customização realizado pela
              PROVEDORA, mesmo que a pedido ou com custo para o CLIENTE, será
              considerado um "trabalho derivado" e sua PI será de propriedade
              exclusiva da PROVEDORA. A PROVEDORA concederá ao CLIENTE uma
              licença de uso para tal customização.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              5.4. Direito de Uso de Dados Agregados:
            </h3>
            <p>
              O CLIENTE concede expressamente à PROVEDORA o direito de usar os
              "Dados do Cliente" de forma agregada e permanentemente anonimizada
              (impossibilitando a reidentificação) para fins estratégicos, como
              benchmarking, analytics de indústria e treinamento de modelos de
              inteligência artificial (IA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Proteção de Dados (LGPD/GDPR)
            </h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              6.1. Distinção de Papéis:
            </h3>
            <p className="mb-4">
              As Partes reconhecem a "dupla personalidade" legal da PROVEDORA.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              6.2. PROVEDORA como Controladora:
            </h3>
            <p className="mb-4">
              Para os dados de cadastro, faturamento e marketing do CLIENTE, a
              PROVEDORA atua como Controladora. O tratamento desses dados é
              regido pela Política de Privacidade (PP).
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              6.3. PROVEDORA como Operadora:
            </h3>
            <p>
              Para os "Dados do Cliente", a PROVEDORA atua como Operadora,
              processando dados apenas em nome e conforme as instruções do
              CLIENTE (Controlador). Esta relação é regida pelo Acordo de
              Processamento de Dados (DPA) (Anexo I).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Limitação de Responsabilidade
            </h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              7.1. Risco CDC (Teoria Finalista Mitigada):
            </h3>
            <p className="mb-4">
              Esta cláusula é redigida ciente da jurisprudência brasileira (STJ)
              sobre a teoria finalista mitigada, que pode anular cláusulas de
              exoneração total de responsabilidade se o CLIENTE B2B demonstrar
              vulnerabilidade. Portanto, estabelecemos limites (Caps) em vez de
              exoneração total.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              7.2. Exclusão de Danos Indiretos:
            </h3>
            <p className="mb-4">
              Em nenhuma hipótese a PROVEDORA será responsável por danos
              indiretos, lucros cessantes, perda de receita, interrupção de
              negócios ou perda de dados.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              7.3. Limite ("Cap") de Responsabilidade Contratual Geral:
            </h3>
            <p className="mb-4">
              Para todas as reivindicações decorrentes de violação contratual
              geral, a responsabilidade total e agregada da PROVEDORA limita-se
              ao valor total pago pelo CLIENTE nos 12 (doze) meses anteriores ao
              evento que deu causa à responsabilidade.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              7.4. "Super Cap" (Violação de Dados e Confidencialidade):
            </h3>
            <p className="mb-4">
              Reconhecendo o risco elevado, a responsabilidade total e agregada
              da PROVEDORA por danos diretos comprovados decorrentes de (a)
              violação de obrigações de proteção de dados (LGPD/GDPR) ou (b)
              quebra de confidencialidade, será limitada a um "Super Cap" de 2x
              (duas vezes) o valor do "Cap" Geral (totalizando 24 meses de taxas
              pagas).
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              7.5. Exceções ao Limite ("Uncapped"):
            </h3>
            <p className="mb-4">
              Os limites acima não se aplicarão em casos de: (a) Fraude ou Dolo
              (má-fé intencional) comprovados da PROVEDORA; ou (b) Morte ou
              danos pessoais causados por negligência.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              7.6. Limitação Específica para Inteligência Artificial:
            </h3>
            <p className="mb-2">
              A Plataforma utiliza modelos de Inteligência Artificial (LLMs) de
              natureza probabilística e não determinística. O CLIENTE reconhece
              que:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                A PROVEDORA não garante precisão absoluta nas respostas geradas
                por IA. Podem ocorrer "alucinações", erros factuais ou
                interpretações equivocadas.
              </li>
              <li>
                O CLIENTE deve manter supervisão humana sobre automações
                críticas. A PROVEDORA não será responsabilizada por prejuízos
                comerciais, danos à reputação ou erros operacionais causados por
                conteúdo gerado automaticamente pela IA.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Vigência, Rescisão e Atualizações
            </h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              8.1. Vigência:
            </h3>
            <p className="mb-4">
              Este contrato entra em vigor na data do Aceite (Clickwrap) e
              permanece válido pelo prazo do plano contratado, renovando-se
              automaticamente.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              8.2. Atualização dos Termos:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Mudanças Menores:</strong> Correções ou esclarecimentos
                serão notificados por e-mail.
              </li>
              <li>
                <strong>Mudanças Materiais:</strong> Alterações que afetem
                direitos e obrigações serão notificadas ao CLIENTE com 30
                (trinta) dias de antecedência.
              </li>
              <li>
                <strong>Novo Aceite:</strong> Para que Mudanças Materiais entrem
                em vigor, o CLIENTE deverá realizar um novo aceite "clickwrap".
                A PROVEDORA deve manter o log de auditoria deste novo aceite. A
                não aceitação dos novos termos resultará na rescisão do contrato
                ao final do ciclo de faturamento vigente.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Lei Aplicável e Foro
            </h2>
            <p className="mb-4">
              9.1. Este contrato será regido e interpretado pelas leis da
              República Federativa do Brasil, notadamente a Lei nº 13.709/2018
              (LGPD), a Lei nº 8.078/1990 (CDC) e o Marco Civil da Internet.
            </p>
            <p>
              9.2. Fica eleito o Foro da Comarca de Santa Maria, com exclusão de
              qualquer outro.
            </p>
          </section>

          {/* ANEXO I */}
          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Anexo I: Acordo de Processamento de Dados (DPA)
            </h2>
            <p className="mb-6">
              Este Acordo de Processamento de Dados ("DPA") é um anexo e parte
              integrante dos Termos de Uso ("ToU") celebrados entre a PROVEDORA
              (aqui atuando como Operadora de Dados) e o CLIENTE (aqui atuando
              como Controlador de Dados). Este DPA é mandatório para cumprir as
              obrigações da LGPD (Art. 39) e do GDPR (Art. 28).
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              1. Objeto e Natureza do Tratamento
            </h3>
            <p className="mb-2">
              <strong>1.1. Objeto:</strong> A PROVEDORA processará os "Dados do
              Cliente" em nome do CLIENTE.
            </p>
            <p className="mb-4">
              <strong>1.2. Natureza:</strong> O tratamento inclui a hospedagem,
              armazenamento, processamento e disponibilização dos "Dados do
              Cliente" dentro da Plataforma de CRM, para as finalidades de
              gestão comercial e relacionamento, conforme determinado pelo
              CLIENTE.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              2. Obrigações da PROVEDORA (Operadora)
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong>2.1. Seguir Instruções:</strong> A PROVEDORA só pode
                processar os "Dados do Cliente" conforme as instruções
                documentadas do CLIENTE (Controlador).
              </li>
              <li>
                <strong>2.2. Confidencialidade:</strong> A PROVEDORA garante que
                todo pessoal autorizado a tratar os "Dados do Cliente" está
                sujeito a obrigações contratuais de confidencialidade.
              </li>
              <li>
                <strong>2.3. Medidas de Segurança (Art. 46 LGPD):</strong> A
                PROVEDORA implementará medidas técnicas (criptografia, RBAC,
                backups) e organizacionais adequadas para proteger os "Dados do
                Cliente".
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              3. Suboperadores (Subprocessadores)
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong>3.1. Responsabilidade:</strong> A PROVEDORA é 100%
                responsável por seus Suboperadores.
              </li>
              <li>
                <strong>3.2. Autorização e Objeção:</strong> O CLIENTE concede
                autorização geral para contratação. A PROVEDORA notificará sobre
                novos suboperadores, garantindo ao CLIENTE o direito de objetar.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              4. Resposta a Incidentes de Segurança
            </h3>
            <p className="mb-4">
              <strong>4.1. Notificação:</strong> A PROVEDORA deverá notificar o
              CLIENTE sobre qualquer incidente de segurança confirmado que afete
              os "Dados do Cliente" sem demora injustificada (máximo 24 horas
              após a confirmação), para que o CLIENTE possa cumprir sua
              obrigação legal de notificar a ANPD.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              5. Cooperação e Auditoria
            </h3>
            <p className="mb-4">
              5.1. A PROVEDORA auxiliará o CLIENTE a responder a solicitações de
              titulares e disponibilizará relatórios de certificação para
              demonstrar conformidade.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              6. Término e Exclusão
            </h3>
            <p>
              Ao término do contrato, a PROVEDORA disponibilizará os dados para
              exportação e, após 60 dias, excluirá de forma permanente os "Dados
              do Cliente".
            </p>
          </section>

          {/* ANEXO II */}
          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Anexo II: Acordo de Nível de Serviço (SLA)
            </h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              1. Definições
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong>1.1. "Disponibilidade (Uptime)":</strong> O percentual
                de tempo em um mês calendário em que a Plataforma esteve
                acessível e operacional.
              </li>
              <li>
                <strong>1.2. "Minutos Totais no Mês":</strong> Número total de
                minutos no mês calendário.
              </li>
              <li>
                <strong>1.3. "Tempo de Inatividade (Downtime)":</strong> Minutos
                em que a Plataforma esteve indisponível, excluindo o "Tempo de
                Inatividade Excluído".
              </li>
              <li>
                <strong>1.4. "Tempo de Inatividade Excluído":</strong> Qualquer
                indisponibilidade resultante de:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Manutenções Programadas (aviso prévio de 48h).</li>
                  <li>
                    Falhas de Terceiros: Falhas de infraestrutura de nuvem
                    (AWS/Google Cloud), links de internet ou dispositivos do
                    CLIENTE.
                  </li>
                  <li>Atos do Cliente: Má configuração ou negligência.</li>
                  <li>Eventos de Força Maior.</li>
                  <li>
                    Bloqueios de API: Falhas, bloqueios, instabilidade ou
                    suspensões de APIs de terceiros (ex: queda da API do
                    WhatsApp ou OpenAI) que impeçam o funcionamento da
                    automação, mas não o acesso à Plataforma Loomie em si.
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              2. Compromisso de Disponibilidade (Uptime)
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong>2.1. Meta (SLO):</strong> 98,5% ao mês.
              </li>
              <li>
                <strong>2.2. Fórmula:</strong> Uptime % = ((Minutos Totais -
                Tempo de Inatividade) / Minutos Totais) * 100.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              3. Garantias de Assessoria (Tempo de Resposta)
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong>Crítico (Nível 1):</strong> Resposta em 1 hora útil
                (Falha total).
              </li>
              <li>
                <strong>Alto (Nível 2):</strong> Resposta em 4 horas úteis
                (Funcionalidade principal inoperante).
              </li>
              <li>
                <strong>Normal (Nível 3):</strong> Resposta em 8 horas úteis
                (Dúvidas/Baixa prioridade).
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              4. Penalidades (Créditos de Serviço)
            </h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-secondary/30">
                    <th className="border border-border p-3 text-left text-foreground">
                      Disponibilidade
                    </th>
                    <th className="border border-border p-3 text-left text-foreground">
                      Crédito
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">&gt;= 98,5%</td>
                    <td className="border border-border p-3">0% de crédito</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">
                      &lt; 98,5% a 98,0%
                    </td>
                    <td className="border border-border p-3">10% de crédito</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">
                      &lt; 98,0% a 97,0%
                    </td>
                    <td className="border border-border p-3">15% de crédito</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">&lt; 97,0%</td>
                    <td className="border border-border p-3">25% de crédito</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Procedimento:</strong> Solicitação formal em até 5 dias
              úteis após o mês da falha.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
