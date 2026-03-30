import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseCarousel from "@/components/CourseCarousel";
import AffiliatedPartners from "@/components/AffiliatedPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CourseCarousel />
      <AffiliatedPartners />
      <WhyChooseUs />
      <CTABanner />
      <TestimonialsSection />
      <FAQSection />
      <ApplyForm />
      <Footer />
    </div>
  );
};

export default Index;
