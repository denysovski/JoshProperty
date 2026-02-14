const logos = [
  "Horizon Estates",
  "LuxeStone",
  "Atria Homes",
  "Skyline Capital",
  "Serene Living",
  "Meridian Realty",
  "Northbridge",
  "Vantage",
];

export const LogoLoopSection = () => {
  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Trusted by leading partners
          </p>
        </div>
      </div>
      <div className="logo-marquee">
        <div className="logo-marquee__track">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo}-${index}`} className="logo-marquee__item">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
