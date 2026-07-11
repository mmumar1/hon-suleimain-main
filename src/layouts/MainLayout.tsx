import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/siteConfig";
import { cn } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "nav-blur bg-background/85 border-b shadow-sm py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-md">
              SU
            </div>
            <div className={cn(
              "font-extrabold tracking-tight transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white drop-shadow-md"
            )}>
              <div className="text-lg leading-none">Hon. Suleiman</div>
              <div className="text-xs text-primary font-bold uppercase tracking-widest mt-0.5">
                For Zamfara
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navLinks.slice(0, 7).map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300",
                  location === link.href 
                    ? (isScrolled ? "text-primary after:w-full" : "text-white after:w-full after:bg-white")
                    : (isScrolled ? "text-foreground/80" : "text-white/90 drop-shadow-sm hover:text-white")
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/volunteer" className={cn(
              "px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-white text-primary hover:bg-white/90"
            )}>
              Volunteer
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className={cn("w-7 h-7", isScrolled ? "text-foreground" : "text-white drop-shadow-md")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary/95 nav-blur flex flex-col justify-center items-center p-6"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {siteConfig.navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link 
                    href={link.href}
                    className={cn(
                      "text-2xl font-bold block py-2 transition-colors",
                      location === link.href ? "text-white" : "text-white/70"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#051336] text-white pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center font-bold text-xl">
                  SU
                </div>
                <div className="font-extrabold tracking-tight">
                  <div className="text-lg leading-none">Hon. Suleiman</div>
                  <div className="text-xs text-white/70 uppercase tracking-widest mt-0.5">
                    For Zamfara
                  </div>
                </div>
              </Link>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Leadership rooted in service. Building opportunities for every community in Zamfara State under the Nigeria Democratic Congress (NDC).
              </p>
              <div className="flex items-center gap-4">
                <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">Biography</Link></li>
                <li><Link href="/vision" className="hover:text-white transition-colors">Vision & Policy</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">Empowerment Programs</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">Latest News</Link></li>
                <li><Link href="/volunteer" className="hover:text-white transition-colors text-primary font-semibold">Volunteer</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li>{siteConfig.contact.address}</li>
                <li>{siteConfig.contact.email}</li>
                <li>{siteConfig.contact.phone}</li>
                <li className="text-white/50">{siteConfig.contact.officeHours}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-white/70 text-sm mb-4">Stay updated with our latest community programs and initiatives.</p>
              <form className="flex gap-2" data-netlify="true" name="newsletter">
                <input type="hidden" name="form-name" value="newsletter" />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email address" 
                  required
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />
                <button type="submit" className="bg-primary hover:bg-primary/80 text-white rounded-lg px-4 py-2.5 transition-colors flex items-center justify-center shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="font-semibold text-white/70 border-r border-white/20 pr-6">Nigeria Democratic Congress</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
