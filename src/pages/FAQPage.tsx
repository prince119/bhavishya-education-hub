import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FAQSection from "@/components/FAQSection";

const FAQPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-secondary-foreground">FAQ</h1>
        <p className="text-secondary-foreground/70 mt-2">Find answers to commonly asked questions</p>
      </div>
    </div>
    <FAQSection />
    <FloatingButtons />
    <Footer />
  </div>
);

export default FAQPage;
