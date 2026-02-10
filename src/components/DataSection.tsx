import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const chartData = [
  { name: "Sales Productivity", before: 55, after: 87, unit: "%" },
  { name: "Lead Response", before: 100, after: 55, unit: "min" },
  { name: "Revenue Growth", before: 0, after: 20, unit: "%" },
];

const stats = [
  {
    icon: TrendingUp,
    value: "32%",
    label: "Increase in sales productivity",
  },
  {
    icon: Clock,
    value: "45%",
    label: "Reduction in lead response time",
  },
  {
    icon: DollarSign,
    value: "20%",
    label: "Average revenue growth in 6 months",
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 text-sm">
        <p className="font-display font-semibold mb-1">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DataSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="data" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Data-Driven <span className="cyan-gradient-text">Decisions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced metrics with Kanban vision and bottleneck detection.
            Decisions based on data, not guesses.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-display text-3xl font-bold cyan-gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="glass-card p-6 sm:p-8 max-w-3xl mx-auto">
          <h3 className="font-display text-lg font-semibold mb-6">
            Before vs. After CRM Implementation
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={chartData}
              onMouseMove={(state) => {
                if (state.isTooltipActive) {
                  setActiveIndex(state.activeTooltipIndex ?? null);
                } else {
                  setActiveIndex(null);
                }
              }}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsla(220, 20%, 18%, 0.8)"
              />
              <XAxis
                dataKey="name"
                tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }}
                axisLine={{ stroke: "hsl(220, 20%, 18%)" }}
              />
              <YAxis
                tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }}
                axisLine={{ stroke: "hsl(220, 20%, 18%)" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="before" name="Before" radius={[4, 4, 0, 0]}>
                {chartData.map((_, index) => (
                  <Cell
                    key={`before-${index}`}
                    fill={
                      activeIndex === index
                        ? "hsla(220, 20%, 40%, 0.9)"
                        : "hsla(220, 20%, 30%, 0.6)"
                    }
                  />
                ))}
              </Bar>
              <Bar dataKey="after" name="After" radius={[4, 4, 0, 0]}>
                {chartData.map((_, index) => (
                  <Cell
                    key={`after-${index}`}
                    fill={
                      activeIndex === index
                        ? "hsl(188, 100%, 55%)"
                        : "hsl(188, 100%, 45%)"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
