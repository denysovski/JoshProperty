import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "@/components/SplitText";

const faqs = [
  {
    question: "How do you price a home in today's market?",
    answer:
      "I use live neighborhood data, recent comps, buyer demand, and upgrade impact to land on a price band that attracts top offers without leaving money on the table.",
  },
  {
    question: "Do you work with buyers and sellers at the same time?",
    answer:
      "Yes. I coordinate timelines so your purchase and sale align smoothly, and I build contingency strategies to protect your leverage.",
  },
  {
    question: "What makes your marketing different?",
    answer:
      "Every listing gets a custom launch plan: cinematic visuals, targeted outreach, and strategic pricing to drive urgency from qualified buyers.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most clients are ready to list or begin touring within 7 days. I handle prep, staging guidance, and vendor coordination.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.6 },
  }),
};

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <SplitText
              tag="p"
              text="FAQ"
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
              splitType="chars"
              delay={26}
              duration={1.1}
              textAlign="left"
            />
            <SplitText
              tag="h2"
              text="Answers that keep you in control"
              className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6"
              splitType="words"
              delay={30}
              duration={1.1}
              textAlign="left"
            />
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Clear guidance on pricing, timing, and strategy so you always know what comes next.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={hasAnimated ? "show" : "hidden"}
                  onViewportEnter={() => setHasAnimated(true)}
                  viewport={{ amount: 0.2 }}
                  className="faq-card"
                >
                  <button
                    className="w-full text-left flex items-center justify-between gap-4"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-lg font-display font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <span className="text-primary text-2xl">{isOpen ? "-" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground mt-4 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
