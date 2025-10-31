import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { TrendingUp } from "lucide-react";

export const ROICalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState([15]);
  const [costPerHour, setCostPerHour] = useState([50]);
  const [leads, setLeads] = useState([100]);

  const monthlyTimeSavings = hoursPerWeek[0] * 4;
  const monthlyCostSavings = monthlyTimeSavings * costPerHour[0];
  const yearlyTimeSavings = monthlyTimeSavings * 12;
  const yearlyCostSavings = monthlyCostSavings * 12;
  
  const increasedLeads = leads[0] * 0.4; // 40% mais leads qualificados
  const conversionImprovement = leads[0] * 0.15; // 15% mais conversões

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Calcule o{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              potencial de economia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja quanto tempo e dinheiro você pode economizar com nossas automações
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-8">
            <h3 className="text-2xl font-bold mb-6">Seus Números</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Horas gastas por semana em tarefas manuais: <strong>{hoursPerWeek[0]}h</strong>
              </label>
              <Slider
                value={hoursPerWeek}
                onValueChange={setHoursPerWeek}
                min={5}
                max={40}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Custo por hora (time): <strong>R$ {costPerHour[0]}</strong>
              </label>
              <Slider
                value={costPerHour}
                onValueChange={setCostPerHour}
                min={20}
                max={200}
                step={10}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Leads recebidos por mês: <strong>{leads[0]}</strong>
              </label>
              <Slider
                value={leads}
                onValueChange={setLeads}
                min={50}
                max={1000}
                step={50}
              />
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-success" size={32} />
              <h3 className="text-2xl font-bold">Economia Potencial Anual</h3>
            </div>

            <div className="space-y-6">
              <div className="border-b border-border pb-4">
                <p className="text-sm text-muted-foreground mb-1">Economia de Tempo Anual</p>
                <p className="text-3xl font-bold text-primary">{yearlyTimeSavings}h</p>
              </div>

              <div className="border-b border-border pb-4">
                <p className="text-sm text-muted-foreground mb-1">Economia de Custo Anual</p>
                <p className="text-3xl font-bold text-success">R$ {yearlyCostSavings.toLocaleString('pt-BR')}</p>
              </div>

              <div className="border-b border-border pb-4">
                <p className="text-sm text-muted-foreground mb-1">Leads Adicionais Qualificados/Mês</p>
                <p className="text-3xl font-bold text-secondary">+{Math.round(increasedLeads)}</p>
              </div>

              <div className="pb-4">
                <p className="text-sm text-muted-foreground mb-1">Conversões Adicionais/Mês</p>
                <p className="text-3xl font-bold text-accent">+{Math.round(conversionImprovement)}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
