import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Abordagem",
    traditional: "Plataforma rígida e engessada",
    loomie: "Ecossistema flexível que se adapta ao seu processo",
    loomieWins: true,
  },
  {
    feature: "Automação",
    traditional: "Conectores limitados e pagos",
    loomie: "Integração nativa com n8n para automação ilimitada",
    loomieWins: true,
  },
  {
    feature: "Inteligência",
    traditional: "Recursos básicos de relatórios",
    loomie: "Agentes de IA que qualificam leads e atendem 24/7",
    loomieWins: true,
  },
  {
    feature: "Evolução",
    traditional: "Atualizações lentas e features genéricas",
    loomie: "Plataforma em constante evolução com assessoria contínua",
    loomieWins: true,
  },
];

export const Comparison = () => {
  return (
    <section id="porque" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Por que a Loomie é{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              diferente?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um ecossistema completo de CRM, automação e IA que evolui com seu negócio
          </p>
        </div>

        <Card className="overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Aspecto</th>
                  <th className="px-6 py-4 text-left font-semibold">Abordagem Tradicional</th>
                  <th className="px-6 py-4 text-left font-semibold bg-gradient-cta/20">
                    Abordagem Loomie
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <X className="text-destructive mt-1 flex-shrink-0" size={16} />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 bg-gradient-cta/5">
                      <div className="flex items-start gap-2">
                        <Check className="text-success mt-1 flex-shrink-0" size={16} />
                        <span className="font-medium">{row.loomie}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card">
            <h3 className="text-2xl font-bold mb-4">A liberdade que a assinatura mensal oferece</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="text-success mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong>Liberdade da Infraestrutura:</strong> Não se preocupe com servidores, 
                  atualizações ou manutenção. Focamos na tecnologia para você focar no negócio.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-success mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong>Flexibilidade para Escalar:</strong> Sua empresa cresce, a Loomie cresce junto. 
                  Adicione usuários e capacidade de IA sem fricção.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-success mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong>Evolução Contínua:</strong> Sua assinatura garante acesso às últimas 
                  funcionalidades, atualizações de segurança e melhorias assim que são lançadas.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-success mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong>Assessoria Especializada:</strong> Nossa equipe está sempre disponível para 
                  ajustar rotas, implementar melhorias e garantir seu sucesso.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
