import { ArrowRight, GraduationCap } from "lucide-react";
import ctaBg from "@/assets/cta-bg-2.jpg";

const CTABanner2 = () => (
  <section
    className="py-12 sm:py-16 relative overflow-hidden"
    style={{ backgroundImage: `url(${ctaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-primary/80" />
    <div className="container mx-auto px-4 text-center space-y-4 sm:space-y-6 relative z-10 max-w-full">
      <GraduationCap size={40} className="mx-auto text-white opacity-80 sm:w-12 sm:h-12" />
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        Start Your Journey Today
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto">
        Admissions Open for 2026 — Limited Seats Available. Don't miss your chance to build a future-ready career.
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
        <a href="#apply" className="bg-secondary text-white font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-lg w-full sm:w-auto">
          Enroll Now <ArrowRight size={18} />
        </a>
        <a href="#courses" className="border-2 border-white/60 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 text-center w-full sm:w-auto text-sm sm:text-base">
          Browse Courses
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner2;
