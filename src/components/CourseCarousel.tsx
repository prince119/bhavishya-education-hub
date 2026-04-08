import { useRef, useState } from "react";
import { Clock, BookOpen, Search, ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  { name: "DCA", full: "Diploma in Computer Applications", duration: "1 Year", type: "Diploma", category: "ug", tags: ["trending", "it"] },
  { name: "BCA", full: "Bachelor of Computer Applications", duration: "3 Years", type: "Degree", category: "ug", tags: ["trending", "it"] },
  { name: "PGDCA", full: "Post Graduate Diploma in Computer Applications", duration: "1 Year", type: "PG Diploma", category: "pg", tags: ["trending", "it"] },
  { name: "MA", full: "Master of Arts (Computer Science)", duration: "2 Years", type: "Post Graduate", category: "pg", tags: ["arts"] },
  { name: "BA", full: "Bachelor of Arts", duration: "3 Years", type: "Degree", category: "ug", tags: ["arts"] },
  { name: "B.Com", full: "Bachelor of Commerce", duration: "3 Years", type: "Degree", category: "ug", tags: ["commerce"] },
  { name: "Tally Prime", full: "Tally Prime with GST", duration: "3 Months", type: "Certificate", category: "cert", tags: ["trending", "commerce"] },
  { name: "MS Office", full: "Microsoft Office Complete", duration: "3 Months", type: "Certificate", category: "cert", tags: ["trending", "it"] },
  { name: "Web Design", full: "HTML, CSS & JavaScript", duration: "6 Months", type: "Certificate", category: "cert", tags: ["it"] },
  { name: "Python", full: "Python Programming", duration: "4 Months", type: "Certificate", category: "cert", tags: ["trending", "it"] },
];

const categories = [
  { key: "all", label: "All Courses" },
  { key: "ug", label: "UG Courses" },
  { key: "pg", label: "PG Courses" },
  { key: "cert", label: "Certificates" },
];

const gradients = [
  "from-secondary to-secondary/80",
  "from-secondary/90 to-accent",
  "from-accent to-secondary",
  "from-secondary/80 to-secondary",
];

const CourseCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = courses.filter((c) => {
    if (activeCategory !== "all" && c.category !== activeCategory) return false;
    if (search && !c.full.toLowerCase().includes(search.toLowerCase()) && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Programs</span>
          <h2 className="section-heading">Explore Our Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From diploma to degree programs and professional certificates — find the right path for your career.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key); setShowAll(false); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Slider view */}
        {!showAll && (
          <div className="relative">
            <button onClick={() => scroll(-1)} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2">
              {filtered.map((course, i) => (
                <div key={course.name} className="flex-shrink-0 w-[260px] bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className={`bg-gradient-to-br ${gradients[i % gradients.length]} h-24 flex items-center justify-center`}>
                    <span className="font-heading text-2xl font-bold text-primary">{course.name}</span>
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="bg-primary/20 text-foreground text-xs font-semibold px-3 py-1 rounded-full">{course.type}</span>
                    <h3 className="font-heading text-sm font-semibold text-foreground leading-snug">{course.full}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                      <span className="flex items-center gap-1"><BookOpen size={12} /> Full-time</span>
                    </div>
                    <a href="#apply" className="btn-navy text-xs py-2 px-4 w-full block text-center mt-2">Explore More</a>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => scroll(1)} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        )}

        {/* Grid view (all courses) */}
        {showAll && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((course, i) => (
              <div key={course.name} className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-br ${gradients[i % gradients.length]} h-24 flex items-center justify-center`}>
                  <span className="font-heading text-2xl font-bold text-primary">{course.name}</span>
                </div>
                <div className="p-4 space-y-2">
                  <span className="bg-primary/20 text-foreground text-xs font-semibold px-3 py-1 rounded-full">{course.type}</span>
                  <h3 className="font-heading text-sm font-semibold text-foreground leading-snug">{course.full}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                    <span className="flex items-center gap-1"><BookOpen size={12} /> Full-time</span>
                  </div>
                  <a href="#apply" className="btn-navy text-xs py-2 px-4 w-full block text-center mt-2">Explore More</a>
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No courses found. Try a different search or category.</p>
        )}

        {/* View All button */}
        <div className="text-center mt-8">
          <button
            onClick={() => { setShowAll(!showAll); setActiveCategory("all"); }}
            className="btn-gold text-sm"
          >
            {showAll ? "Show Less" : "View All Courses"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseCarousel;
