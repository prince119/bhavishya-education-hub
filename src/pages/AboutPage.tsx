import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import WhyChooseUs from "@/components/WhyChooseUs";
import AffiliatedPartners from "@/components/AffiliatedPartners";
import headerImg from "@/assets/header-about.jpg";

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="relative py-16" style={{ backgroundImage: `url(${headerImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-secondary/85" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-heading text-4xl font-bold text-secondary-foreground">About Us</h1>
        <p className="text-secondary-foreground/70 mt-2">Learn about Bhavishya Computer Education's mission and values</p>
      </div>
    </div>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6 text-muted-foreground">
          <h2 className="section-heading text-center">Our Story</h2>
          <p>Bhavishya Computer Education was founded with a vision to empower students with future-ready digital skills. Over the years, we have trained 1500+ students and helped them build successful careers in IT, commerce, and professional services.</p>
          <p>Our institute offers a wide range of programs — from diploma and degree courses like DCA, BCA, PGDCA, MA, BA, and B.Com to professional certificate courses in Tally Prime, MS Office, Web Design, and Python Programming.</p>
          <p>We are committed to providing quality education with modern computer labs, experienced faculty, updated curriculum, and 100% placement support. Our students consistently achieve excellent results and secure positions at leading companies.</p>
        </div>
      </div>
    </section>
    <WhyChooseUs />
    <AffiliatedPartners />
    <FloatingButtons />
    <Footer />
  </div>
);

export default AboutPage;
