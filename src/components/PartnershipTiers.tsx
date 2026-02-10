import { useState } from "react";
import { Users, Zap, Crown } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const tiers = [
  {
    name: "START",
    range: "0–10 active clients",
    commissionBlue: "3%",
    commissionGreen: "7%",
    icon: Users,
  },
  {
    name: "SCALE",
    range: "11–25 active clients",
    commissionBlue: "5%",
    commissionGreen: "12%",
    icon: Zap,
    popular: true,
  },
  {
    name: "PRO",
    range: "+26 active clients",
    commissionBlue: "6%",
    commissionGreen: "16%",
    icon: Crown,
  },
];

const loomiePlans = [
  { name: "Essencial", price: 169.9 },
  { name: "Scale", price: 299.9 },
  { name: "Pro", price: 599.9 },
];

const PartnershipTiers = () => {
  const [partnerManaged, setPartnerManaged] = useState(false);
  const [clients, setClients] = useState(15);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);

  const selectedPlan = loomiePlans[selectedPlanIndex];

  const getEstimatedEarnings = (numClients: number) => {
    const planPrice = selectedPlan.price;
    let commissionRate: number;
    if (partnerManaged) {
      if (numClients <= 10) commissionRate = 0.07;
      else if (numClients <= 25) commissionRate = 0.12;
      else commissionRate = 0.16;
    } else {
      if (numClients <= 10) commissionRate = 0.03;
      else if (numClients <= 25) commissionRate = 0.05;
      else commissionRate = 0.06;
    }
    return Math.round(numClients * planPrice * commissionRate);
  };

  const currentTier = clients <= 10 ? "START" : clients <= 25 ? "SCALE" : "PRO";

  return (
    <section id="tiers" className="py-24 sm:py-32 section-gradient relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Partnership <span className="cyan-gradient-text">Tiers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Grow your commission as you scale your client base.
          </p>
        </div>

        {/* Management switch */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="flex items-center gap-4">
            <span
              className={`text-sm font-medium transition-colors ${!partnerManaged ? "text-primary" : "text-muted-foreground"}`}
            >
              Loomie Managed
            </span>
            <Switch
              checked={partnerManaged}
              onCheckedChange={setPartnerManaged}
              className={
                partnerManaged ? "data-[state=checked]:bg-emerald-500" : ""
              }
            />
            <span
              className={`text-sm font-medium transition-colors ${partnerManaged ? "text-emerald-400" : "text-muted-foreground"}`}
            >
              Partner Managed
            </span>
          </div>
          <p className="text-muted-foreground text-sm text-center max-w-md transition-all">
            {partnerManaged
              ? "Client responsibility by partner (support tier 1 and training)"
              : "Client management by Loomie, includes support and training"}
          </p>
        </div>

        {/* Earnings calculator */}
        <div className="glass-card p-6 sm:p-8 max-w-xl mx-auto mb-16">
          <h3 className="font-display text-lg font-semibold mb-2 text-center">
            Earnings Calculator
          </h3>
          <p className="text-muted-foreground text-sm text-center mb-6">
            Select a plan and slide to estimate your monthly revenue
          </p>

          {/* Plan selector */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {loomiePlans.map((plan, index) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlanIndex(index)}
                className={`py-2 px-3 rounded-lg text-center transition-all duration-300 border ${
                  selectedPlanIndex === index
                    ? partnerManaged
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                      : "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card/40 text-muted-foreground hover:border-muted-foreground/30"
                }`}
              >
                <span className="block text-xs font-medium">{plan.name}</span>
                <span className="block text-sm font-bold mt-0.5">
                  R$ {plan.price.toFixed(2).replace(".", ",")}
                </span>
              </button>
            ))}
          </div>

          <Slider
            value={[clients]}
            onValueChange={(v) => setClients(v[0])}
            min={1}
            max={50}
            step={1}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground mb-4">
            <span>{clients} clients</span>
            <span
              className={`font-medium ${partnerManaged ? "text-emerald-400" : "text-primary"}`}
            >
              {currentTier} tier
            </span>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Estimated monthly earnings
            </p>
            <p
              className={`font-display text-4xl font-bold ${partnerManaged ? "text-emerald-400" : "cyan-gradient-text"}`}
            >
              R$ {getEstimatedEarnings(clients).toLocaleString("pt-BR")}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Based on {selectedPlan.name} plan (R${" "}
              {selectedPlan.price.toFixed(2).replace(".", ",")}/mês)
            </p>
          </div>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass-card p-8 flex flex-col relative transition-all duration-300 ${
                tier.popular
                  ? partnerManaged
                    ? "border-2 border-emerald-500/50"
                    : "tier-popular border-2"
                  : ""
              }`}
            >
              {tier.popular && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full transition-colors ${
                    partnerManaged
                      ? "bg-emerald-500 text-white"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  Most Popular
                </span>
              )}
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                  partnerManaged ? "bg-emerald-500/10" : "bg-primary/10"
                }`}
              >
                <tier.icon
                  className={`w-6 h-6 transition-colors ${partnerManaged ? "text-emerald-400" : "text-primary"}`}
                />
              </div>
              <h3 className="font-display text-2xl font-bold mb-1">
                {tier.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{tier.range}</p>
              <p
                className={`font-display text-3xl font-bold transition-colors ${
                  partnerManaged ? "text-emerald-400" : "cyan-gradient-text"
                }`}
              >
                {partnerManaged ? tier.commissionGreen : tier.commissionBlue}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * Infrastructure reservation fee of R$ 475,00 for partners with 0
          active clients.
        </p>
      </div>
    </section>
  );
};

export default PartnershipTiers;
