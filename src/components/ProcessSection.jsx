import { CalendarCheck, Search, ClipboardList, Handshake } from "lucide-react";
import SplitText from "@/components/SplitText";

const steps = [
  {
    icon: CalendarCheck,
    title: "Discovery Session",
    description: "We align on goals, timelines, and the lifestyle you want from your next property.",
  },
  {
    icon: Search,
    title: "Curated Strategy",
    description: "I build a tailored plan with data-backed pricing, marketing, and negotiation levers.",
  },
  {
    icon: ClipboardList,
    title: "Guided Execution",
    description: "Showings, offers, and inspections managed with clarity so nothing slips through.",
  },
  {
    icon: Handshake,
    title: "Seamless Close",
    description: "We close with confidence and I stay on as your long-term real estate partner.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SplitText
            tag="p"
            text="My Process"
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            splitType="chars"
            delay={25}
            duration={1.2}
            textAlign="center"
          />
          <SplitText
            tag="h2"
            text="A refined path from hello to handover"
            className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6"
            splitType="words"
            delay={35}
            duration={1.2}
            textAlign="center"
          />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughtful milestones that keep you informed, prepared, and excited at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-background rounded-2xl p-7 border border-border/40 shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
