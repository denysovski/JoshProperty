import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import vfLogo from "@/assets/VF.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Home Selling", href: "#services" },
      { label: "Home Buying", href: "#services" },
      { label: "Property Valuation", href: "#services" },
      { label: "Investment Properties", href: "#services" },
    ],
  },
  { label: "Valuation", href: "#valuation" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Why Choose Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-2">
          <a
            href="#home"
            className="font-display font-bold tracking-tight transition-all duration-300"
          >
            {isScrolled ? (
              <img
                src={vfLogo}
                alt="Josh Realty"
                className="h-[30px] w-auto mx-auto fade-in-fast"
              />
            ) : (
              <span className="text-white text-2xl">
                JOSH<span className="text-purple-500 font-light ml-1">REALTY</span>
              </span>
            )}
          </a>

          <div
            className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 ${
              isScrolled
                ? "bg-background/80 backdrop-blur-xl shadow-elevated border border-border/50"
                : "glass"
            }`}
          >

            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isScrolled
                      ? "text-foreground/70 hover:text-foreground hover:bg-secondary"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </a>

                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in">
                    <div className="bg-background rounded-xl shadow-elevated border border-border py-2 min-w-[200px]">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-foreground/70 hover:bg-accent hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="w-px h-6 bg-border/50 mx-1" />

            <Button className="rounded-full text-sm px-5 bg-primary text-primary-foreground hover:shadow-glow transition-all duration-300">
              Book Consultation
            </Button>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${
            isScrolled ? "text-foreground bg-secondary" : "text-white glass"
          }`}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-0 bg-background backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="container mx-auto px-4 pt-24 pb-8"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="flex flex-col items-center gap-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    variants={mobileItemVariants}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-medium text-foreground/70 hover:text-primary transition-colors py-3"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div variants={mobileItemVariants} className="w-full max-w-xs">
                  <Button className="w-full rounded-full mt-6 px-8 py-6 text-base bg-primary text-primary-foreground">
                    Book Consultation
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-secondary text-foreground"
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
