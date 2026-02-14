import { motion } from "framer-motion";
import { useState } from "react";
import { Home, TrendingUp, MapPin, Calculator, ChevronDown } from "lucide-react";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";

const valuationPoints = [
  {
    icon: Home,
    title: "Property Snapshot",
    detail: "Tell me the address, size, and upgrades so I can match it to recent comps.",
  },
  {
    icon: TrendingUp,
    title: "Market Signal",
    detail: "Live pricing trends and buyer demand by neighborhood, not just zip code.",
  },
  {
    icon: MapPin,
    title: "Opportunity Map",
    detail: "Identify the best timing and positioning to maximize your return.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.7, ease: "easeOut" },
  }),
};

export const ValuationSection = () => {
  const [propertySize, setPropertySize] = useState("2000");
  const [bedrooms, setBedrooms] = useState("3");
  const [bathrooms, setBathrooms] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [estimatedValue, setEstimatedValue] = useState(null);
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [sizeUnit, setSizeUnit] = useState("sqft");

  const toSqm = (sqft) => sqft * 0.092903;
  const toSqft = (sqm) => sqm / 0.092903;
  const sizeSqft = parseFloat(propertySize) || 2000;
  const sizeDisplay = sizeUnit === "sqm" ? Math.round(toSqm(sizeSqft)) : Math.round(sizeSqft);
  const minSqft = 500;
  const maxSqft = 10000;
  const minDisplay = sizeUnit === "sqm" ? Math.round(toSqm(minSqft)) : minSqft;
  const maxDisplay = sizeUnit === "sqm" ? Math.round(toSqm(maxSqft)) : maxSqft;

  const areaOptions = [
    { value: "downtown", label: "Downtown Core", detail: "High demand, fast absorption" },
    { value: "suburb", label: "Suburban Comfort", detail: "Strong family-driven comps" },
    { value: "rural", label: "Rural Retreat", detail: "Land value weighted pricing" },
    { value: "waterfront", label: "Waterfront", detail: "Premium view-driven pricing" },
  ];

  const calculateValue = () => {
    const size = parseFloat(propertySize) || 2000;
    const beds = bedrooms === '4+' ? 4 : parseFloat(bedrooms) || 0;
    const baths = bathrooms === '4+' ? 4 : parseFloat(bathrooms) || 0;

    // Base price per sqft
    const basePricePerSqft = 250;

    // Area multipliers
    const areaMultipliers = {
      downtown: 1.4,
      suburb: 1.0,
      rural: 0.75,
      waterfront: 1.6,
    };

    const multiplier = areaMultipliers[area?.toLowerCase()] || 1.0;

    // Calculate base value
    let value = size * basePricePerSqft * multiplier;

    // Add bedroom premium
    value += beds * 25000;

    // Add bathroom premium
    value += baths * 15000;

    setEstimatedValue(value);
  };

  return (
    <section id="valuation" className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative overflow-visible rounded-3xl px-8 py-12 md:px-12 md:py-16 bg-gradient-to-br from-white to-purple-50 border border-purple-100 shadow-xl">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px)', backgroundSize: '80px 80px'}} />
          <div className="relative">
            <div className="max-w-3xl">
              <SplitText
                tag="p"
                text="Instant Valuation"
                className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
                splitType="chars"
                delay={24}
                duration={1.1}
                textAlign="left"
              />
              <SplitText
                tag="h2"
                text="Know your home's true market power"
                className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-gray-900"
                splitType="words"
                delay={28}
                duration={1.1}
                textAlign="left"
              />
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl">
                Get a data-backed valuation with zero pressure. I blend hyper-local insights,
                buyer intent, and upgrade impact to give you a confident pricing range.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {valuationPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-2xl bg-white/60 border border-purple-200 p-6 backdrop-blur shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2 text-gray-900">{point.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{point.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6">
              <div className="rounded-2xl bg-white/60 border border-purple-200 p-6 backdrop-blur shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                  <Calculator className="w-5 h-5 text-primary" />
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-600">
                    Property Calculator
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                      Property Size: {sizeDisplay} {sizeUnit === "sqm" ? "sqm" : "sqft"}
                    </label>
                    <div className="flex items-center gap-2 mb-2">
                      {["sqft", "sqm"].map((unit) => (
                        <button
                          key={unit}
                          type="button"
                          onClick={() => setSizeUnit(unit)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border transition-all duration-200 ${
                            sizeUnit === unit
                              ? "border-primary bg-primary text-white"
                              : "border-purple-200 bg-white text-gray-700 hover:border-primary/50"
                          }`}
                        >
                          {unit === "sqft" ? "SQFT" : "SQM"}
                        </button>
                      ))}
                    </div>
                    <input
                      type="range"
                      min={minDisplay}
                      max={maxDisplay}
                      step="100"
                      value={sizeDisplay}
                      onChange={(e) => {
                        const rawValue = parseFloat(e.target.value) || 0;
                        const nextSqft = sizeUnit === "sqm" ? toSqft(rawValue) : rawValue;
                        setPropertySize(String(Math.round(nextSqft)));
                      }}
                      className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer mb-2"
                      style={{
                        background: `linear-gradient(to right, hsl(270 60% 55%) 0%, hsl(270 60% 55%) ${((sizeSqft - minSqft) / (maxSqft - minSqft)) * 100}%, rgb(221, 214, 254) ${((sizeSqft - minSqft) / (maxSqft - minSqft)) * 100}%, rgb(221, 214, 254) 100%)`
                      }}
                    />
                    <input
                      type="number"
                      value={sizeDisplay}
                      onChange={(e) => {
                        const rawValue = parseFloat(e.target.value) || 0;
                        const nextSqft = sizeUnit === "sqm" ? toSqft(rawValue) : rawValue;
                        setPropertySize(String(Math.round(nextSqft)));
                      }}
                      className="w-full rounded-xl bg-white border border-purple-200 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary text-sm"
                      placeholder={`Or type exact size in ${sizeUnit === "sqm" ? "sqm" : "sqft"}`}
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                      Bedrooms: {bedrooms || 0}
                    </label>
                    <div className="flex gap-2">
                      {['0', '1', '2', '3', '4+'].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setBedrooms(num)}
                          className={`flex-1 py-3 rounded-xl border-2 transition-all duration-200 ${
                            bedrooms === num
                              ? 'border-primary bg-primary text-white shadow-lg'
                              : 'border-purple-200 bg-white text-gray-700 hover:border-primary/50'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                      Bathrooms: {bathrooms || 0}
                    </label>
                    <div className="flex gap-2">
                      {['0', '1', '2', '3', '4+'].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setBathrooms(num)}
                          className={`flex-1 py-3 rounded-xl border-2 transition-all duration-200 ${
                            bathrooms === num
                              ? 'border-primary bg-primary text-white shadow-lg'
                              : 'border-purple-200 bg-white text-gray-700 hover:border-primary/50'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                      Location Type
                    </label>
                    <div className="relative z-[45]">
                      <button
                        type="button"
                        onClick={() => setIsAreaOpen((prev) => !prev)}
                        className="w-full rounded-xl bg-white border border-purple-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-primary flex items-center justify-between transition-all duration-200"
                        aria-haspopup="listbox"
                        aria-expanded={isAreaOpen}
                      >
                        <span className={area ? "text-gray-900" : "text-gray-400"}>
                          {areaOptions.find((option) => option.value === area)?.label || "Select area"}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isAreaOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div
                        role="listbox"
                        className={`absolute left-0 right-0 mt-2 rounded-2xl border border-purple-200 bg-white shadow-xl overflow-hidden transition-all duration-200 origin-top z-[45] ${isAreaOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}
                      >
                        {areaOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setArea(option.value);
                              setIsAreaOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${area === option.value ? "bg-purple-50" : "hover:bg-purple-50"}`}
                          >
                            <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                            <span>
                              <span className="block text-sm font-semibold text-gray-900">{option.label}</span>
                              <span className="block text-xs text-gray-600">{option.detail}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
                    Email for Report
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-white border border-purple-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <Button
                  onClick={calculateValue}
                  className="w-full rounded-full bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-6 text-base font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Calculate Estimated Value
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </div>
              <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6 flex flex-col gap-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage: "linear-gradient(160deg, rgba(14, 8, 32, 0.85), rgba(88, 28, 135, 0.85)), url('https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 text-white">
                {estimatedValue ? (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-3">
                      Estimated Market Value
                    </p>
                    <div className="text-5xl font-display font-bold text-white mb-4">
                      ${estimatedValue.toLocaleString()}
                    </div>
                    <div className="w-full bg-white/10 rounded-xl p-4 mt-4 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-white/70">Range</span>
                      </div>
                      <div className="h-2 bg-white/15 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-white rounded-full" style={{ width: '65%' }} />
                      </div>
                      <div className="flex justify-between text-xs text-white/70">
                        <span>${(estimatedValue * 0.9).toLocaleString()}</span>
                        <span>${(estimatedValue * 1.1).toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 mt-4 text-center">
                      This is an estimate. I'll send a detailed analysis to your email within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-white/90">
                      Fill in your property details to get an instant estimated value range based on current market data.
                    </p>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <span>Real-time market analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <span>Detailed PDF report via email</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <span>No obligation consultation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <span>Pricing strategy with 48-hour turnaround</span>
                      </div>
                    </div>
                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-2">Market Pulse</p>
                      <p className="text-lg font-display font-semibold">Strong buyer intent in premium corridors</p>
                      <p className="text-sm text-white/70 mt-2">Average days on market: 18 | List-to-close: 29</p>
                    </div>
                  </>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
