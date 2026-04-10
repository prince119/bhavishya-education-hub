import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ApplyForm from "@/components/ApplyForm";
import { Phone, Mail, MapPin } from "lucide-react";
import headerImg from "@/assets/header-contact.jpg";

const ContactPage = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />
    <div className="relative py-12 sm:py-16" style={{ backgroundImage: `url(${headerImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-secondary/85" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-heading text-2xl sm:text-4xl font-bold text-secondary-foreground">Contact Us</h1>
        <p className="text-sm sm:text-base text-secondary-foreground/70 mt-2">Get in touch with us for admissions, queries, or campus visits</p>
      </div>
    </div>

    {/* Contact info cards */}
    <section className="py-10 sm:py-12 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-card rounded-xl border border-border p-5 text-center space-y-2">
            <Phone size={24} className="mx-auto text-primary" />
            <h3 className="font-heading font-semibold text-foreground">Call Us</h3>
            <a href="tel:+919171278014" className="text-sm text-muted-foreground hover:text-primary transition-colors block">+91 91712 78014</a>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 text-center space-y-2">
            <Mail size={24} className="mx-auto text-primary" />
            <h3 className="font-heading font-semibold text-foreground">Email</h3>
            <a href="mailto:Office@bhavishyaedu.in" className="text-sm text-muted-foreground hover:text-primary transition-colors block">Office@bhavishyaedu.in</a>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 text-center space-y-2">
            <MapPin size={24} className="mx-auto text-primary" />
            <h3 className="font-heading font-semibold text-foreground">Address</h3>
            <p className="text-sm text-muted-foreground">Balrampur - Samri - Kusmi Rd, Kusmi, Chhattisgarh 497224, India</p>
          </div>
        </div>
      </div>
    </section>

    <ApplyForm />
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="section-heading mb-6">Find Us On Map</h2>
        <div className="rounded-xl overflow-hidden border border-border shadow-md h-60 sm:h-80 bg-muted flex items-center justify-center">
          <p className="text-sm text-muted-foreground px-4">Google Maps embed will be added here with your institute's location</p>
        </div>
      </div>
    </section>
    <FloatingButtons />
    <Footer />
  </div>
);

export default ContactPage;
