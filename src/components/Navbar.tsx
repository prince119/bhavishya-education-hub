import { useState, useEffect, useRef } from "react";
import { Menu, X, User, Search, ChevronUp } from "lucide-react";
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
      <div className="bg-secondary py-2 text-center">
        <p className="text-sm font-medium text-primary">
          🎓 New Batch Starting Soon — Admissions Open for July 2026!
        </p>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-card shadow-sm sticky top-0 z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Bhavishya Computer Education" className="h-14 w-14 object-contain rounded" />
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg font-bold leading-tight text-charcoal">Bhavishya</h1>
              <p className="text-xs text-muted-foreground">Computer Education</p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Programs</a>
            <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* CTA buttons + search */}
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

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar (collapsible) */}
        {searchOpen && (
          <div className="border-t border-border px-4 py-3 bg-card">
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
            <a href="/courses" className="block text-sm font-medium text-foreground">Programs</a>
            <a href="/about" className="block text-sm font-medium text-foreground">About Us</a>
            <a href="/blog" className="block text-sm font-medium text-foreground">Blog</a>
            <a href="/faq" className="block text-sm font-medium text-foreground">FAQ</a>
            <a href="/contact" className="block text-sm font-medium text-foreground">Contact</a>
            <a href="/student-login" className="block text-sm font-medium text-foreground">Student Login</a>
            <a href="/contact" className="btn-gold text-sm py-2 px-5 inline-block">Apply Now</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
