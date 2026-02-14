import { useEffect, useRef } from "react";
import { Shield, Users, MessageCircle, MapPin, Trophy, Heart } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Personalized Approach",
    description:
      "Every client receives tailored attention and strategies designed specifically for their unique situation and goals.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "500+ successful transactions and a 98% client satisfaction rate speak to consistent, exceptional results.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Stay informed at every stage with transparent updates, honest advice, and responsive availability.",
  },
  {
    icon: MapPin,
    title: "Local Market Expert",
    description: "Deep knowledge of neighborhoods, trends, and hidden gems gives you a competitive advantage.",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description: "No hidden fees, no surprises. I believe in honest, straightforward dealings you can trust.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "I build lasting relationships, serving as your real estate advisor for life, not just one transaction.",
  },
];

export const WhyChooseMeSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-me" className="py-20 md:py-28 lg:py-32 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="reveal">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Why Work With Me
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
                The Difference Is in the Details
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Choosing the right real estate partner makes all the difference. I bring
                not just expertise and experience, but genuine dedication to your success.
                Here&apos;s what sets my approach apart.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2">
                <p className="text-xl font-display italic text-foreground mb-4">
                  "Real estate is about relationships, not transactions. I succeed when you succeed."
                </p>
                <cite className="text-muted-foreground text-sm not-italic">— Josh Hill</cite>
              </blockquote>
            </div>
          </div>

          <div className="grid gap-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="reveal bg-card rounded-xl p-7 transition-all duration-300 ease-out border border-border/50 hover:shadow-card hover:-translate-y-0.5 flex gap-5 group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent flex items-center justify-center transition-colors group-hover:bg-primary">
                  <reason.icon className="w-5 h-5 text-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
