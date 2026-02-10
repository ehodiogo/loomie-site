import { Check, Star, Rocket } from "lucide-react";

const plans = [
  {
    name: "Essential",
    description: "For small teams and businesses in validation",
    price: 169.9,
    icon: Check,
    features: [
      "5 Included Users",
      "10,000 Contacts",
      "10 Pipelines",
      "Open API (100k req/day)",
      "Native n8n Node",
      "Daily Backup (30-day Retention)",
    ],
  },
  {
    name: "Scale",
    description: "The engine for scaling companies and agencies",
    price: 299.9,
    icon: Star,
    popular: true,
    features: [
      "10 Included Users",
      "50,000 Contacts",
      "20 Pipelines",
      "Open API (250k req/day)",
      "Native n8n Node",
      "Daily Backup (60-day Retention)",
    ],
  },
  {
    name: "Pro",
    description: "For high-performance operations",
    price: 599.9,
    icon: Rocket,
    features: [
      "25 Included Users",
      "300,000 Contacts",
      "Unlimited Pipelines",
      "Open API (500k req/day)",
      "Native n8n Node",
      "Daily Backup (180-day Retention)",
    ],
  },
];

const LoomiePlans = () => {
  return (
    <section id="plans" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Loomie <span className="cyan-gradient-text">Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the plans your customers will subscribe to. The higher the
            plan, the greater the value and your commission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-8 flex flex-col relative transition-all duration-300 ${
                plan.popular ? "tier-popular border-2" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                  Most Popular
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <plan.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-1">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {plan.description}
              </p>
              <p className="font-display text-3xl sm:text-4xl font-bold cyan-gradient-text mb-1">
                R${plan.price.toFixed(2)}
              </p>
              <span className="text-muted-foreground text-sm mb-6">/month</span>

              <div className="border-t border-muted/20 pt-6 mt-auto">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoomiePlans;
