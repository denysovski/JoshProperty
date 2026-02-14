import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah & Michael Thompson",
    role: "First-Time Home Buyers",
    content:
      "Josh made our first home-buying experience truly unforgettable. His patience, expertise, and genuine care for finding us the perfect home exceeded all our expectations. We couldn't have done it without him!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Property Investor",
    content:
      "Working with Josh has been instrumental in building my real estate portfolio. His market insights are invaluable, and his negotiation skills have saved me hundreds of thousands. A true professional.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Home Seller",
    content:
      "Josh sold our home in just 10 days, above asking price! His marketing strategy and attention to detail were phenomenal. He truly goes above and beyond for his clients.",
    rating: 5,
  },
  {
    name: "James & Lisa Parker",
    role: "Luxury Home Buyers",
    content:
      "We've worked with many agents over the years, but Josh stands out. His discretion, market knowledge, and personalized service made finding our dream estate an absolute pleasure.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.span
              key="client-stories"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Client Stories
            </motion.span>
          </AnimatePresence>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            Trusted by Hundreds of Happy Clients
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say
            about their experience working with me.
          </p>
        </div>

        <div className="reveal max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 md:p-12 text-center shadow-soft border border-border/30 transition-all duration-300 hover:shadow-card min-h-[360px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent mb-6">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl font-display text-foreground leading-relaxed mb-8 min-h-[140px]">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </blockquote>

                  <div>
                    <p className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-11 h-11 rounded-full bg-background shadow-card flex items-center justify-center text-foreground hover:text-primary hover:shadow-elevated transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-11 h-11 rounded-full bg-background shadow-card flex items-center justify-center text-foreground hover:text-primary hover:shadow-elevated transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border w-2 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
