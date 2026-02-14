import { useEffect, useRef } from "react";
import { Award, Star, Medal, Trophy } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Top 1% Producer",
    org: "National Association of Realtors",
    year: "2023",
    details: "Recognized at the 2023 NAR Leadership Summit in Chicago for top-tier sales volume and client retention.",
    location: "Chicago, IL",
    timeframe: "June 2023",
  },
  {
    icon: Award,
    title: "Platinum Excellence Award",
    org: "Luxury Portfolio International",
    year: "2022–2023",
    details: "Awarded for premium listing performance and brand storytelling across high-value properties.",
    location: "New York, NY",
    timeframe: "December 2023",
  },
  {
    icon: Star,
    title: "Best Agent — Reader's Choice",
    org: "Los Angeles Magazine",
    year: "2023",
    details: "Voted #1 by readers for standout marketing, responsiveness, and transaction clarity.",
    location: "Los Angeles, CA",
    timeframe: "August 2023",
  },
  {
    icon: Medal,
    title: "Five Star Professional",
    org: "Real Estate Industry",
    year: "2019–2023",
    details: "Five-year streak for client satisfaction, service consistency, and ethical practice.",
    location: "Beverly Hills, CA",
    timeframe: "2019-2023",
  },
];

const certifications = [
  "Certified Luxury Home Marketing Specialist (CLHMS)",
  "Accredited Buyer's Representative (ABR)",
  "Seller Representative Specialist (SRS)",
  "Graduate, REALTOR® Institute (GRI)",
];

export const AwardsSection = () => {
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
    <section className="py-20 md:py-28 lg:py-32 bg-foreground text-background" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">Awards & Certifications</h2>
          <p className="text-lg text-background/60 max-w-2xl mx-auto">
            Industry recognition reflecting my commitment to excellence
            and dedication to exceptional client service.
          </p>
        </div>

        <div className="reveal mb-20">
          <div className="grid md:grid-cols-2 gap-px bg-background/10 rounded-2xl overflow-visible group/awards">
            {awards.map((award, index) => (
              <div
                key={index}
                className="relative group flex items-start gap-5 p-8 md:p-10 bg-foreground hover:bg-background/5 transition-colors duration-300"
              >
                <div className="award-dim flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center transition-all duration-300 group-hover/awards:blur-[6px] group-hover:!blur-0">
                  <award.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="award-dim transition-all duration-300 group-hover/awards:blur-[6px] group-hover:!blur-0">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {award.year}
                  </span>
                  <h3 className="text-lg font-display font-semibold mt-1 mb-1">{award.title}</h3>
                  <p className="text-background/50 text-sm">{award.org}</p>
                </div>
                <div className="absolute left-8 right-8 top-full mt-4 rounded-2xl bg-white text-gray-900 shadow-elevated border border-gray-200 p-4 opacity-0 translate-y-2 transition-all duration-200 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto z-30">
                  <p className="text-sm font-semibold mb-1">{award.title}</p>
                  <p className="text-xs text-gray-600 mb-2">{award.details}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{award.location}</span>
                    <span>{award.timeframe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal max-w-4xl mx-auto text-center">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-background/40 mb-8">
            Professional Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full border border-background/15 text-sm text-background/70 hover:border-primary hover:text-primary transition-colors duration-300"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
