import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ApplyForm from "@/components/ApplyForm";

const ContactPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-secondary-foreground">Contact Us</h1>
        <p className="text-secondary-foreground/70 mt-2">Get in touch with us for admissions, queries, or campus visits</p>
      </div>
    </div>
    <ApplyForm />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="section-heading mb-6">Find Us On Map</h2>
        <div className="rounded-xl overflow-hidden border border-border shadow-md h-80 bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Google Maps embed will be added here with your institute's location</p>
        </div>
      </div>
    </section>
    <FloatingButtons />
    <Footer />
  </div>
);

export default ContactPage;
