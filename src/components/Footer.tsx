import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-12 w-12 rounded" />
              <div>
                <p className="font-heading font-bold text-primary">Bhavishya</p>
                <p className="text-xs text-secondary-foreground/70">Computer Education</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/70">Building futures through quality computer education since establishment.</p>
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
