import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
      
      <div className="container mx-auto px-4 md:px-8 py-20 relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <a href="#home" className="font-display text-3xl font-bold mb-6 inline-block tracking-tight">
              JOSH<span className="text-primary font-light ml-1">HILL</span>
            </a>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Transforming real estate dreams into reality with expertise, integrity, and personalized service.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-lg font-semibold mb-6 text-gray-900">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-primary transition-all group-hover:w-4"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-lg font-semibold mb-6 text-gray-900">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-600 leading-relaxed pt-2">
                  123 Luxury Lane, Suite 500<br />Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href="tel:+13105550123" className="text-gray-600 hover:text-primary transition-colors">
                  (310) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:mike@hillrealty.com" className="text-gray-600 hover:text-primary transition-colors">
                  mike@hillrealty.com
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-lg font-semibold mb-6 text-gray-900">Newsletter</h4>
            <p className="text-gray-600 mb-6">
              Join our community for exclusive market insights and property listings.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 Josh Hill Realty. All rights reserved.</p>
            <div className="flex items-center gap-8 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all z-40 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};
