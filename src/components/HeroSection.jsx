import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/SplitText";

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 plasma-bg" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-transparent pointer-events-none z-40" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={heroItem} className="mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass text-white/90 text-sm font-medium light-ring">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Customer" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Customer" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop" alt="Customer" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Partnered with 250+ Customers
              </div>
            </div>
          </motion.div>

          <motion.div variants={heroItem}>
            <SplitText
              tag="h1"
              text="Your Partner for Confident Real Estate Success"
              className="text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white leading-[1.05] mb-8 tracking-tight"
              splitType="words"
              delay={28}
              duration={1.2}
              textAlign="center"
            />
          </motion.div>

          <motion.div variants={heroItem}>
            <SplitText
              tag="p"
              text="Helping you buy, sell, and invest with clarity, care, and the personalized attention you deserve. Let's find your perfect property together."
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
              splitType="words"
              delay={40}
              duration={1.1}
              textAlign="center"
            />
          </motion.div>

          <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 group">
              Explore My Services
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white/20 text-white px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:text-white"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={heroItem} className="mt-20 flex items-center justify-center gap-12 md:gap-16" style={{ paddingLeft: "50px" }}>
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Properties Sold" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center wave-float"
                style={{ animationDelay: `${index * 0.35}s` }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
