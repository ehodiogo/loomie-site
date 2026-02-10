import { Fingerprint, Settings2, LayoutGrid } from "lucide-react";

const columns = [
  {
    icon: Fingerprint,
    title: "Unique Processes",
    description:
      "Every business is different. Our platform adapts to your clients' unique workflows — never the other way around.",
  },
  {
    icon: Settings2,
    title: "Total Flexibility",
    description:
      "Configure pipelines, automations, and reporting to match any sales methodology or industry vertical.",
  },
  {
    icon: LayoutGrid,
    title: "Visual Organization",
    description:
      "Kanban boards, calendar views, and drag-and-drop workflows keep your clients' teams aligned and productive.",
  },
];

const VisualOrganization = () => {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="cyan-gradient-text">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A platform that grows with you and your clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {columns.map((col) => (
            <div key={col.title} className="glass-card-hover p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <col.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {col.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {col.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualOrganization;
