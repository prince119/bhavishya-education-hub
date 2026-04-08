import { ArrowRight, GraduationCap } from "lucide-react";
import ctaBg from "@/assets/cta-bg-2.jpg";

const CTABanner2 = () => (
  <section
    className="py-16 relative"
    style={{ backgroundImage: `url(${ctaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-primary/80" />
    <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
      <GraduationCap size={48} className="mx-auto text-primary-foreground opacity-80" />
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
        Start Your Journey Today
      </h2>
      <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
        Admissions Open for 2026 — Limited Seats Available. Don't miss your chance to build a future-ready career.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#apply" className="bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center gap-2 text-lg">
          Enroll Now <ArrowRight size={20} />
        </a>
        <a href="#courses" className="border-2 border-primary-foreground/60 text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300">
          Browse Courses
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner2;
