import { BarChart3, Rocket, Headphones } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "Transparency for the Client",
    description:
      "Deliver ROI dashboards and qualified lead volume directly in the CRM. Show the real value of your marketing work with data your clients can trust.",
  },
  {
    icon: Rocket,
    title: "High-Ticket Focus",
    description:
      'Stop selling "features" and start selling "business growth strategy." Position yourself as a high-value consultant, not a tool reseller.',
  },
  {
    icon: Headphones,
    title: "Technical Advisory",
    description:
      "Loomie acts as your Level 2 support — handling bugs, updates, and infrastructure so you can focus entirely on strategy and sales.",
  },
];

const ValueProposition = () => {
  return (
    <section id="value" className="py-24 sm:py-32 section-gradient relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Become a <span className="cyan-gradient-text">Partner</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to deliver consulting excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`glass-card-hover p-8 flex flex-col items-start animate-fade-up-delay-${i + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
