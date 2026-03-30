import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="py-16 bg-secondary">
    <div className="container mx-auto px-4 text-center space-y-6">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground">
        Are You Ready To Take The Next Step<br className="hidden md:block" /> In Your Career?
      </h2>
      <p className="text-secondary-foreground/80 max-w-xl mx-auto">
        Join thousands of successful students who started their journey with Bhavishya Computer Education.
      </p>
      <a href="#apply" className="btn-gold inline-flex items-center gap-2 text-lg">
        Apply Now <ArrowRight size={20} />
      </a>
    </div>
  </section>
);

export default CTABanner;
