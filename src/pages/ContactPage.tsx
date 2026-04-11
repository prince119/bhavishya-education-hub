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
        <h1 className="font-heading text-2xl sm:text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-sm sm:text-base text-white/70 mt-2">Get in touch with us for admissions, queries, or campus visits</p>
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

    {/* Google Maps */}
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="section-heading mb-6">Find Us On Map</h2>
        <div className="rounded-xl overflow-hidden border border-border shadow-md h-60 sm:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14584.123456!2d82.1123!3d23.5456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3987d2b58c8e8f05%3A0x7d2b5d0c5d5e5f5!2sKusmi%2C%20Chhattisgarh%20497224!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhavishya Computer Education Location"
          />
        </div>
      </div>
    </section>

    <FloatingButtons />
    <Footer />
  </div>
);

export default ContactPage;
