import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o Loomie Cloud?",
    answer:
      "O Loomie Cloud é a nossa plataforma de CRM (Gestão de Relacionamento com o Cliente), 100% online. Ele é a 'base de operações' da sua empresa, onde você pode organizar seu funil de vendas, centralizar sua base de clientes e gerenciar todo o histórico de negociações. Nós cuidamos de toda a infraestrutura, segurança e atualizações. Você só precisa de um login e senha para ter uma visão clara de todo o seu processo comercial.",
  },
  {
    question: "Eu preciso de conhecimento técnico para usar o Loomie?",
    answer:
      " Absolutamente não! O Loomie Cloud foi desenhado para ser intuitivo e fácil de usar no dia a dia. Você poderá gerenciar seu funil de vendas, ver o perfil dos clientes e analisar relatórios com uma interface visual e amigável. Toda a parte complexa de configuração e manutenção é gerenciada pela nossa equipe de especialistas, que está incluída no seu plano.",
  },
  {
    question: "Qual a diferença do Loomie Cloud para um CRM tradicional como o Salesforce?",
    answer:
      "O Loomie Cloud é um CRM robusto e flexível, mas sua maior diferença está em fazer parte de um ecossistema. Enquanto CRMs tradicionais são 'caixas fechadas', o Loomie Cloud foi desenhado desde o início para se conectar perfeitamente ao nosso segundo produto, o Loomie Automações. Você pode começar apenas com o CRM (organizando a casa) e, quando estiver pronto, adicionar nosso módulo de automações e Agentes de IA sem nenhuma dor de cabeça, criando uma operação que nenhum CRM tradicional consegue oferecer de forma nativa.",
  },
  {
    question: "Eu preciso ter o Loomie Cloud (CRM) para contratar as Automações?",
    answer:
      "Sim, o Loomie Cloud é a base obrigatória. Nossos projetos de automação são desenhados para ler e escrever dados diretamente no Loomie Cloud. Essa integração nativa é o nosso grande diferencial. O CRM funciona como a 'memória' central, e as Automações consultam essa memória para tomar decisões inteligentes, garantindo que todo o seu histórico de cliente seja usado de forma produtiva.",
  },
];

export const FAQ = () => {
  return (
    <section id="duvidas" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Dúvidas{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre a Loomie
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
