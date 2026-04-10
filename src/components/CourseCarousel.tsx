import { useRef, useState, useEffect, memo } from "react";
import { Clock, BookOpen, Search, ChevronLeft, ChevronRight } from "lucide-react";
import courseDca from "@/assets/course-dca.jpg";
import courseBca from "@/assets/course-bca.jpg";
import coursePgdca from "@/assets/course-pgdca.jpg";
import courseTally from "@/assets/course-tally.jpg";
import coursePython from "@/assets/course-python.jpg";
import courseWebdesign from "@/assets/course-webdesign.jpg";
import courseMsoffice from "@/assets/course-msoffice.jpg";
import courseBcom from "@/assets/course-bcom.jpg";
import courseMa from "@/assets/course-ma.jpg";
import courseBa from "@/assets/course-ba.jpg";

const courses = [
  { name: "DCA", full: "Diploma in Computer Applications", duration: "1 Year", type: "Diploma", category: "ug", tags: ["trending", "it"], img: courseDca },
  { name: "BCA", full: "Bachelor of Computer Applications", duration: "3 Years", type: "Degree", category: "ug", tags: ["trending", "it"], img: courseBca },
  { name: "PGDCA", full: "Post Graduate Diploma in Computer Applications", duration: "1 Year", type: "PG Diploma", category: "pg", tags: ["trending", "it"], img: coursePgdca },
  { name: "MA", full: "Master of Arts (Computer Science)", duration: "2 Years", type: "Post Graduate", category: "pg", tags: ["arts"], img: courseMa },
  { name: "BA", full: "Bachelor of Arts", duration: "3 Years", type: "Degree", category: "ug", tags: ["arts"], img: courseBa },
  { name: "B.Com", full: "Bachelor of Commerce", duration: "3 Years", type: "Degree", category: "ug", tags: ["commerce"], img: courseBcom },
  { name: "Tally Prime", full: "Tally Prime with GST", duration: "3 Months", type: "Certificate", category: "cert", tags: ["trending", "commerce"], img: courseTally },
  { name: "MS Office", full: "Microsoft Office Complete", duration: "3 Months", type: "Certificate", category: "cert", tags: ["trending", "it"], img: courseMsoffice },
  { name: "Web Design", full: "HTML, CSS & JavaScript", duration: "6 Months", type: "Certificate", category: "cert", tags: ["it"], img: courseWebdesign },
  { name: "Python", full: "Python Programming", duration: "4 Months", type: "Certificate", category: "cert", tags: ["trending", "it"], img: coursePython },
];

const categories = [
  { key: "all", label: "All Courses" },
  { key: "ug", label: "UG Courses" },
  { key: "pg", label: "PG Courses" },
  { key: "cert", label: "Certificates" },
];

const searchPlaceholders = ["Search DCA...", "Search BCA...", "Search Tally Prime...", "Search Python...", "Search Web Design...", "Search MS Office..."];

const CourseCard = memo(({ course, fullWidth }: { course: typeof courses[0]; fullWidth: boolean }) => (
  <div className={`${fullWidth ? "" : "flex-shrink-0 w-[240px] sm:w-[260px]"} bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
    <div className="relative h-32 sm:h-36 overflow-hidden">
      <img src={course.img} alt={course.name} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute bottom-2 left-3 font-heading text-lg sm:text-xl font-bold text-white">{course.name}</span>
      <span className="absolute top-2 right-2 bg-primary/90 text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full">{course.type}</span>
    </div>
    <div className="p-3 sm:p-4 space-y-2">
      <h3 className="font-heading text-xs sm:text-sm font-semibold text-foreground leading-snug">{course.full}</h3>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
        <span className="flex items-center gap-1"><BookOpen size={12} /> Full-time</span>
      </div>
      <a href="#apply" className="btn-navy text-xs py-2 px-4 w-full block text-center mt-2">Explore More</a>
    </div>
  </div>
));

CourseCard.displayName = "CourseCard";

interface CourseCarouselProps {
  showAll?: boolean;
}

const CourseCarousel = ({ showAll: forceShowAll = false }: CourseCarouselProps) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(forceShowAll);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % searchPlaceholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const filtered = courses.filter((c) => {
    if (activeCategory !== "all" && c.category !== activeCategory) return false;
    if (search && !c.full.toLowerCase().includes(search.toLowerCase()) && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-12 sm:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">Our Programs</span>
          <h2 className="section-heading">Explore Our Courses</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            From diploma to degree programs and professional certificates — find the right path for your career.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-6 sm:mb-8 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={searchPlaceholders[placeholderIdx]}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key); if (!forceShowAll) setShowAll(false); }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {!showAll && !forceShowAll && (
          <div className="relative">
            <button onClick={() => scroll(-1)} className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card shadow-lg border border-border hidden sm:flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <div ref={scrollRef} className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2">
              {filtered.map((course) => (
                <CourseCard key={course.name} course={course} fullWidth={false} />
              ))}
            </div>
            <button onClick={() => scroll(1)} className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card shadow-lg border border-border hidden sm:flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>
        )}

        {(showAll || forceShowAll) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.name} course={course} fullWidth={true} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12 text-sm">No courses found. Try a different search or category.</p>
        )}

        {!forceShowAll && (
          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={() => { setShowAll(!showAll); setActiveCategory("all"); }}
              className="btn-gold text-sm"
            >
              {showAll ? "Show Less" : "View All Courses"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseCarousel;
