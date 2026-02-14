import { useEffect, useRef } from "react";
import { Home, Search, TrendingUp, Key, Camera, Handshake } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Selling",
    description:
      "Strategic marketing, professional staging guidance, and expert negotiations to maximize your property's value and sell at the best price.",
  },
  {
    icon: Search,
    title: "Home Buying",
    description:
      "From discovery to closing, I'll help you find the perfect property that matches your lifestyle, needs, and budget.",
  },
  {
    icon: TrendingUp,
    title: "Property Valuation",
    description:
      "Get an accurate, data-driven assessment of your property's worth based on current market conditions and comparable sales.",
  },
  {
    icon: Key,
    title: "Investment Properties",
    description:
      "Identify high-potential investment opportunities and build a real estate portfolio that generates long-term wealth.",
  },
  {
    icon: Camera,
    title: "Staging & Photography",
    description:
      "Professional presentation services to showcase your property at its absolute best and attract premium buyers.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Closing",
    description:
      "Skilled negotiation tactics and seamless closing coordination to protect your interests and ensure smooth transactions.",
  },
];

export const ServicesSection = () => {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-accent/30" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From your first property search to the final closing, I provide end-to-end
            support tailored to your unique real estate goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal bg-card rounded-2xl p-8 text-center transition-all duration-500 ease-out border border-border/50 group cursor-pointer hover:shadow-elevated hover:-translate-y-2 hover:border-primary/20"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <service.icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
