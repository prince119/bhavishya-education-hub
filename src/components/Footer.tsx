import logo from "@/assets/logo.jpeg";
import footerBg from "@/assets/footer-bg.jpg";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative text-secondary-foreground py-12 overflow-hidden"
      style={{ backgroundImage: `url(${footerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-secondary/95" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <img src={logo} alt="Logo" className="h-12 w-12 rounded" />
              <div>
                <p className="font-heading font-bold text-primary">Bhavishya</p>
                <p className="text-xs text-secondary-foreground/70">Computer Education</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/70">Building futures through quality computer education since establishment.</p>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
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
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary mb-3">Programs</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="/courses" className="hover:text-primary transition-colors">DCA</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">BCA</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">PGDCA</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">MA / BA / B.Com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary mb-3">Certificates</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="/courses" className="hover:text-primary transition-colors">Tally Prime</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">MS Office</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">Web Design</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">Python</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="/courses" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/50">© 2026 Bhavishya Computer Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
