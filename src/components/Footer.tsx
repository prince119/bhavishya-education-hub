import logo from "@/assets/logo.jpeg";
import footerBg from "@/assets/footer-bg-new.jpg";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{ backgroundImage: `url(${footerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-secondary/95" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <img src={logo} alt="Logo" className="h-14 w-auto rounded" />
              <div>
                <p className="font-heading font-bold text-primary">Bhavishya</p>
                <p className="text-xs text-white/70">Computer Education</p>
              </div>
            </div>
            <p className="text-sm text-white/70">Building futures through quality computer education since establishment.</p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2 justify-center sm:justify-start">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>Balrampur - Samri - Kusmi Rd, Kusmi, Chhattisgarh 497224, India</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone size={14} className="flex-shrink-0 text-primary" />
                <a href="tel:+919171278014" className="hover:text-primary transition-colors">+91 91712 78014</a>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail size={14} className="flex-shrink-0 text-primary" />
                <a href="mailto:Office@bhavishyaedu.in" className="hover:text-primary transition-colors">Office@bhavishyaedu.in</a>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 justify-center sm:justify-start pt-1">
              <a href="https://www.instagram.com/bhavishyacomputereducation.hq/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-3">Programs</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/courses" className="hover:text-primary transition-colors">DCA</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">BCA</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">PGDCA</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">MA / BA / B.Com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-3">Certificates</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/courses" className="hover:text-primary transition-colors">Tally Prime</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">MS Office</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">Web Design</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">Python</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/courses" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-sm text-white/50">© 2026 Bhavishya Computer Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
