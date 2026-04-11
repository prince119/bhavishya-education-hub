import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg-1.jpg";

const CTABanner = () => (
  <section
    className="py-12 sm:py-16 relative overflow-hidden"
    style={{ backgroundImage: `url(${ctaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-secondary/85" />
    <div className="container mx-auto px-4 text-center space-y-4 sm:space-y-6 relative z-10 max-w-full">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        Are You Ready To Take The Next Step<br className="hidden md:block" /> In Your Career?
      </h2>
      <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
        Join thousands of successful students who started their journey with Bhavishya Computer Education.
      </p>
      <a href="#apply" className="btn-gold inline-flex items-center gap-2 text-sm sm:text-lg">
        Apply Now <ArrowRight size={18} />
      </a>
    </div>
  </section>
);

export default CTABanner;
