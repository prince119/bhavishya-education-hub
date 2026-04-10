import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", course: "BCA", batch: "2024", rating: 5, text: "Bhavishya Computer Education completely transformed my career. The faculty is excellent and the practical training helped me land my first IT job within 3 months of graduating." },
  { name: "Priya Patel", course: "DCA", batch: "2025", rating: 5, text: "Best computer coaching center in the city! The Tally and MS Office training was very thorough. I now work as an accountant at a reputed firm." },
  { name: "Amit Verma", course: "PGDCA", batch: "2024", rating: 4, text: "Great learning environment with modern computer labs. The teachers are patient and always ready to help. Highly recommend for anyone looking to build IT skills." },
  { name: "Sneha Gupta", course: "Web Design", batch: "2025", rating: 5, text: "I learned HTML, CSS, and JavaScript from scratch. Now I'm freelancing and earning well. The course content is up-to-date and industry relevant." },
  { name: "Vikash Kumar", course: "Python", batch: "2025", rating: 5, text: "Amazing experience! The Python programming course was very well structured. The projects we built during the course gave me real confidence." },
  { name: "Anita Singh", course: "B.Com", batch: "2024", rating: 4, text: "Affordable fees and quality education. The staff is very supportive and the placement assistance really helped me find the right opportunity." },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="text-center mb-8 sm:mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">Student Reviews</span>
          <h2 className="section-heading">What Our Students Say</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">Real stories from real students who built their careers with us.</p>
        </div>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card shadow-lg border border-border hidden sm:flex items-center justify-center hover:bg-muted transition-colors">
            <ChevronLeft size={18} className="text-foreground" />
          </button>

          <div ref={scrollRef} className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[270px] sm:w-[320px] bg-card rounded-xl border border-border p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow space-y-3 sm:space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className={s < t.rating ? "fill-primary text-primary" : "text-border"} />
                  ))}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-4">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xs sm:text-sm flex-shrink-0">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-foreground">{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{t.course} · Batch {t.batch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scroll(1)} className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card shadow-lg border border-border hidden sm:flex items-center justify-center hover:bg-muted transition-colors">
            <ChevronRight size={18} className="text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
