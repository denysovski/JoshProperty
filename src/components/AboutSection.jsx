import { useEffect, useRef, useState } from "react";
import { Award, Users, Home, TrendingUp } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "15+", label: "Years Experience" },
  { icon: Award, value: "25+", label: "Awards Won" },
];

const images = [
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - rect.top) / (sectionHeight + viewportHeight)
      ));
      
      // Determine which image to show based on scroll progress
      const imageIndex = Math.min(images.length - 1, Math.floor(scrollProgress * images.length));
      setCurrentImageIndex(imageIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal relative">
            <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 mx-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Josh Hill - ${index + 1}`}
                  className={`absolute inset-0 w-full h-full rounded-3xl object-cover shadow-elevated transition-all duration-700 ease-in-out ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-y-0 scale-100 z-10'
                      : index < currentImageIndex
                      ? 'opacity-0 -translate-y-8 scale-95 z-0'
                      : 'opacity-0 translate-y-8 scale-95 z-0'
                  }`}
                  style={{ transitionDelay: index === currentImageIndex ? '0ms' : '0ms' }}
                />
              ))}
            </div>
            <div className="absolute top-6 left-1/2 -translate-x-[45%] w-80 h-80 md:w-96 md:h-96 rounded-3xl border-2 border-primary/20 -z-10" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-[55%] w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-accent -z-20" />
          </div>

          <div>
            <div className="reveal">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
                Meet Josh Hill
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over 15 years in high-performance real estate marketing, I help sellers and
                buyers cut through the noise with strategy, data, and confident positioning.
                My approach blends market intelligence with clear communication, so every client
                knows exactly what moves the needle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Real estate is more than a transaction. It is timing, presentation, and story.
                From first-time buyers to seasoned investors, I build tailored plans that protect
                value, create urgency, and deliver results without the stress.
              </p>
            </div>

            <div className="reveal grid grid-cols-2 gap-4">
              {["Integrity First", "Client-Focused", "Market Expert", "Results Driven"].map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-primary font-display">
                {stat.value}
              </div>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
