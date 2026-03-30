import { useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary py-2 text-center">
        <p className="text-sm font-medium text-primary">
          🎓 New Batch Starting Soon — Admissions Open for July 2026!
        </p>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Bhavishya Computer Education" className="h-14 w-14 object-contain rounded" />
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg font-bold leading-tight text-charcoal">
                Bhavishya
              </h1>
              <p className="text-xs text-muted-foreground">Computer Education</p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Programs</a>
            <a href="#why-us" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#apply" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#apply" className="btn-navy text-sm py-2 px-5">Enquire Now</a>
            <a href="#apply" className="btn-gold text-sm py-2 px-5">Apply Now</a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3">
            <a href="#courses" className="block text-sm font-medium text-foreground">Programs</a>
            <a href="#why-us" className="block text-sm font-medium text-foreground">Why Us</a>
            <a href="#faq" className="block text-sm font-medium text-foreground">FAQ</a>
            <a href="#apply" className="block text-sm font-medium text-foreground">Contact</a>
            <a href="#apply" className="btn-gold text-sm py-2 px-5 inline-block">Apply Now</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
