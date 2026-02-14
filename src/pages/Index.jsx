import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoLoopSection } from "@/components/LogoLoopSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { InsightsSection } from "@/components/InsightsSection";
import { ValuationSection } from "@/components/ValuationSection";
import { WhyChooseMeSection } from "@/components/WhyChooseMeSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SectionReveal = ({ children }) => (
  <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionReveal>
        <LogoLoopSection />
      </SectionReveal>
      <SectionReveal>
        <AboutSection />
      </SectionReveal>
      <SectionReveal>
        <ServicesSection />
      </SectionReveal>
      <SectionReveal>
        <InsightsSection />
      </SectionReveal>
      <SectionReveal>
        <ValuationSection />
      </SectionReveal>
      <SectionReveal>
        <WhyChooseMeSection />
      </SectionReveal>
      <SectionReveal>
        <ProcessSection />
      </SectionReveal>
      <SectionReveal>
        <PortfolioSection />
      </SectionReveal>
      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>
      <SectionReveal>
        <AwardsSection />
      </SectionReveal>
      <SectionReveal>
        <FaqSection />
      </SectionReveal>
      <SectionReveal>
        <ContactSection />
      </SectionReveal>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </div>
  );
};

export default Index;
