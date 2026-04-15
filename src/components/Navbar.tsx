import { useState, useEffect, useRef } from "react";
import { Menu, X, User, Search, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const searchSuggestions = ["DCA", "BCA", "PGDCA", "Tally Prime", "Python", "Web Design", "MS Office", "B.Com"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastScrollY.current || currentY < 80);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % searchSuggestions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary py-1.5 sm:py-2 text-center px-4 overflow-hidden">
        <p className="text-xs sm:text-sm font-medium text-primary truncate">
          🎓 New Batch Starting Soon — Admissions Open for July 2026!
        </p>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-card shadow-sm sticky top-0 z-50 transition-transform duration-300 w-full max-w-full ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-2 sm:py-3 px-4 max-w-full">
          {/* Mobile: Hamburger + Logo */}
          <div className="flex items-center gap-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-1 md:hidden">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <img src={logo} alt="Bhavishya Computer Education" className="h-10 w-10 sm:h-14 sm:w-14 object-contain rounded" />
              <div className="hidden sm:block">
                <h1 className="font-heading text-base sm:text-lg font-bold leading-tight text-charcoal">Bhavishya</h1>
                <p className="text-xs text-muted-foreground">Computer Education</p>
              </div>
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Programs</a>
            <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
            <a href="/franchise" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Franchise</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
            <a href="/student-login" className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium py-2 px-4 rounded-lg hover:bg-muted transition-colors">
              <User size={16} /> Student Login
            </a>
            <a href="/contact" className="btn-navy text-sm py-2 px-5">Enquire Now</a>
            <a href="/contact" className="btn-gold text-sm py-2 px-5">Apply Now</a>
          </div>

          {/* Mobile: Apply Now + Call */}
          <div className="flex items-center gap-2 md:hidden">
            <a href="/contact" className="btn-gold text-xs py-2 px-3 rounded-md">Apply Now</a>
            <a
              href="tel:+919171278014"
              className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center"
              aria-label="Call Us"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Mobile search bar — always visible on mobile */}
        <div className="md:hidden border-t border-border px-4 py-2 bg-card">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${searchSuggestions[placeholderIdx]}...`}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Desktop search bar (collapsible) */}
        {searchOpen && (
          <div className="hidden md:block border-t border-border px-4 py-3 bg-card">
            <div className="max-w-lg mx-auto relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${searchSuggestions[placeholderIdx]}...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3">
            <a href="/courses" className="block text-sm font-medium text-foreground py-1">Programs</a>
            <a href="/about" className="block text-sm font-medium text-foreground py-1">About Us</a>
            <a href="/blog" className="block text-sm font-medium text-foreground py-1">Blog</a>
            <a href="/faq" className="block text-sm font-medium text-foreground py-1">FAQ</a>
            <a href="/contact" className="block text-sm font-medium text-foreground py-1">Contact</a>
            <a href="/franchise" className="block text-sm font-medium text-foreground py-1">Franchise</a>
            <a href="/student-login" className="block text-sm font-medium text-foreground py-1">Student Login</a>
            <div className="border-t border-border pt-3 mt-2">
              <p className="text-xs text-muted-foreground mb-2">Follow Us</p>
              <a
                href="https://www.instagram.com/bhavishyacomputereducation.hq/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
