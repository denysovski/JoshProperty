import { useEffect, useRef, useState } from "react";
import { Bath, BedDouble, Square, MapPin, ArrowUpRight, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
    title: "Modern Glass Villa",
    location: "Beverly Hills, CA",
    price: "$4,250,000",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    tag: "For Sale",
    description: "An architectural masterpiece featuring floor-to-ceiling windows, infinity pool, and breathtaking city views. This stunning contemporary villa offers the ultimate in luxury living with smart home technology throughout.",
    features: ["Smart Home System", "Infinity Pool", "Home Theater", "Wine Cellar", "Gym", "Garden"],
    yearBuilt: "2022"
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
    title: "Oceanfront Paradise",
    location: "Malibu, CA",
    price: "$8,900,000",
    beds: 6,
    baths: 7,
    sqft: "8,500",
    tag: "Featured",
    description: "Wake up to panoramic ocean views in this beachfront estate. Direct beach access, expansive deck spaces, and luxurious finishes create an unparalleled coastal lifestyle experience.",
    features: ["Beach Access", "Ocean Views", "Guest House", "Outdoor Kitchen", "Spa", "Private Dock"],
    yearBuilt: "2021"
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$12,500,000",
    beds: 4,
    baths: 5,
    sqft: "5,800",
    tag: "Exclusive",
    description: "Crown jewel penthouse with 360-degree city views. Impeccable attention to detail with Italian marble, custom millwork, and a private rooftop terrace. The epitome of Manhattan luxury.",
    features: ["Rooftop Terrace", "Concierge Service", "Private Elevator", "Chef's Kitchen", "Library", "Sauna"],
    yearBuilt: "2023"
  },
];

export const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

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
    <section id="portfolio" className="py-20 md:py-28 lg:py-32 bg-accent/30" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Featured Properties
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            Exceptional Homes, Exceptional Results
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of premium properties I&apos;ve helped clients buy and sell.
            Each represents a story of trust, strategy, and success.
          </p>
        </div>

        <div className="space-y-8">
          <div className={`grid gap-8 ${
            expandedCard !== null ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {properties.map((property, index) => {
              const isExpanded = expandedCard === index;
              const shouldShowBelow = expandedCard !== null && !isExpanded;
              
              if (shouldShowBelow) return null;
              
              return (
                <div
                  key={index}
                  className={`group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated border border-border/30 ${
                    !isExpanded ? 'hover:-translate-y-2 transition-transform duration-300' : ''
                  }`}
                >
                  <div className={`${isExpanded ? 'grid md:grid-cols-2 gap-6 p-6' : ''}`}>
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {property.tag}
                      </span>

                      {isExpanded ? (
                        <button
                          onClick={() => setExpandedCard(null)}
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setExpandedCard(index)}
                          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </button>
                      )}
                    </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{property.title}</h3>

                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    {property.sqft} sqft
                  </div>
                </div>

                {expandedCard === index && (
                  <div className="mb-4">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {property.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {property.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Year Built:</span> {property.yearBuilt}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-display font-bold text-primary">{property.price}</span>
                  <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                    {expandedCard === index ? 'Schedule Viewing' : 'View Details'}
                  </Button>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Show other cards below when one is expanded */}
      {expandedCard !== null && (
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          {properties.map((property, index) => {
            if (expandedCard === index) return null;
            
            return (
              <div
                key={index}
                onClick={() => setExpandedCard(index)}
                className="group bg-background rounded-xl overflow-hidden shadow-soft hover:shadow-elevated border border-border/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {property.tag}
                  </span>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <h3 className="text-sm font-display font-semibold mb-1 line-clamp-1">{property.title}</h3>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="line-clamp-1">{property.location}</span>
                      </div>
                      <span className="font-bold">{property.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>

        <div className="reveal text-center mt-12">
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 text-base border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};
