import { useRef, useEffect, useState } from "react";
import { Monitor, Users, Award, Briefcase, BookOpen, Headphones, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  { icon: Monitor, title: "Modern Computer Labs", desc: "Fully equipped labs with latest hardware and software for hands-on learning." },
  { icon: Users, title: "Experienced Faculty", desc: "Learn from industry professionals with years of teaching and corporate experience." },
  { icon: Award, title: "Certified Courses", desc: "Government recognized and industry-certified programs with global validity." },
  { icon: Briefcase, title: "100% Placement Support", desc: "Dedicated placement cell for career guidance and job opportunities." },
  { icon: BookOpen, title: "Updated Curriculum", desc: "Regularly updated syllabus matching current industry demands and trends." },
  { icon: Headphones, title: "Student Support", desc: "Dedicated mentoring, doubt-clearing sessions, and career counseling." },
];

const WhyChooseUs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      if (paused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="why-us" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Bhavishya?</span>
          <h2 className="section-heading">Why Choose Bhavishya Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">What makes us the preferred choice for 5000+ students across the region.</p>
        </div>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <ChevronLeft size={20} className="text-foreground" />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
          >
            {features.map((f, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border group">
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <f.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <button onClick={() => scroll(1)} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
