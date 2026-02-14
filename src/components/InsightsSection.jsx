import SplitText from "@/components/SplitText";

const insights = [
  {
    title: "Market Pulse",
    stat: "$1.2M",
    label: "Average Sale Price",
    detail: "Rising 4.8% quarter-over-quarter with demand concentrated in walkable neighborhoods.",
  },
  {
    title: "Buyer Momentum",
    stat: "21",
    label: "Days on Market",
    detail: "Well-staged listings are moving 28% faster compared to the regional average.",
  },
  {
    title: "Investment Lens",
    stat: "7.4%",
    label: "Rental Yield",
    detail: "Select pockets in Beverly Hills and West LA are outpacing national rental growth.",
  },
];

export const InsightsSection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SplitText
            tag="p"
            text="Market Intelligence"
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            splitType="chars"
            delay={30}
            duration={1.1}
            textAlign="center"
          />
          <SplitText
            tag="h2"
            text="Insights that move with the market"
            className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6"
            splitType="words"
            delay={35}
            duration={1.1}
            textAlign="center"
          />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Weekly trend snapshots, pricing intelligence, and buyer behavior signals to keep
            your decisions one step ahead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {insight.title}
              </p>
              <div className="text-4xl font-display font-bold text-primary mb-2">{insight.stat}</div>
              <p className="text-sm font-semibold text-foreground mb-4">{insight.label}</p>
              <p className="text-muted-foreground leading-relaxed">{insight.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
