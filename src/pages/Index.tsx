import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseCarousel from "@/components/CourseCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CourseCarousel />
      <WhyChooseUs />
      <FAQSection />
      <ApplyForm />
      <Footer />
    </div>
  );
};

export default Index;
