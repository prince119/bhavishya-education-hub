import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CourseCarousel from "@/components/CourseCarousel";
import headerImg from "@/assets/header-courses.jpg";

const CoursesPage = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />
    <div className="relative py-12 sm:py-16" style={{ backgroundImage: `url(${headerImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-secondary/85" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-heading text-2xl sm:text-4xl font-bold text-secondary-foreground">Our Courses</h1>
        <p className="text-sm sm:text-base text-secondary-foreground/70 mt-2">Explore all programs and certifications offered at Bhavishya Education</p>
      </div>
    </div>
    <CourseCarousel showAll />
    <FloatingButtons />
    <Footer />
  </div>
);

export default CoursesPage;
