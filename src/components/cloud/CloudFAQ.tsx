import { motion } from "framer-motion";
import { blurUp, viewport } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O Loomie funciona com a API Oficial da Meta?",
    answer: "Sim, temos suporte total para WhatsApp Business API (API Oficial da Meta), além de integração com API não-oficial para máxima flexibilidade.",
  },
  {
    question: "Posso gerenciar mais de uma empresa?",
    answer: "Sim, o sistema é multi-canal e multi-equipe. Você pode gerenciar diferentes operações, equipes e canais dentro de uma única plataforma.",
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Utilizamos infraestrutura 100% Cloud com criptografia de ponta a ponta. Seus dados são protegidos com os mais altos padrões de segurança do mercado.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer: "Nosso processo de implementação é rápido e guiado. Em média, equipes estão operando 100% em menos de uma semana, com treinamento incluso.",
  },
  {
    question: "Posso integrar com ferramentas que já uso?",
    answer: "Sim. O Loomie Cloud possui API aberta e nó nativo n8n, permitindo integrações com praticamente qualquer ferramenta do mercado.",
  },
];

const CloudFAQ = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="relative container mx-auto px-6">
        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <span className="section-badge mb-4 inline-block">FAQ</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 mt-4">
            Perguntas <span className="text-gradient-primary">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(({ question, answer }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-panel px-6 border-none"
              >
                <AccordionTrigger className="text-foreground font-display font-semibold text-left hover:no-underline py-5">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudFAQ;
