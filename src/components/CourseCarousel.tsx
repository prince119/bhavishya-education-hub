import { useState } from "react";
import { Clock, BookOpen, Search } from "lucide-react";

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

const subTags = [
  { key: "trending", label: "🔥 Trending" },
  { key: "it", label: "IT Courses" },
  { key: "arts", label: "Arts & Humanities" },
  { key: "commerce", label: "Commerce" },
];

const gradients = [
  "from-secondary to-secondary/80",
  "from-secondary/90 to-charcoal",
  "from-charcoal to-secondary",
  "from-secondary/80 to-secondary",
];

const CourseCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) => {
    if (activeCategory !== "all" && c.category !== activeCategory) return false;
    if (activeTag && !c.tags.includes(activeTag)) return false;
    if (search && !c.full.toLowerCase().includes(search.toLowerCase()) && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

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
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key); setActiveTag(null); }}
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

        {/* Sub-tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {subTags.map((tag) => (
            <button
              key={tag.key}
              onClick={() => setActiveTag(activeTag === tag.key ? null : tag.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                activeTag === tag.key
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((course, i) => (
            <div key={course.name} className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`bg-gradient-to-br ${gradients[i % gradients.length]} h-28 flex items-center justify-center`}>
                <span className="font-heading text-3xl font-bold text-primary">{course.name}</span>
              </div>
              <div className="p-5 space-y-3">
                <span className="bg-primary/20 text-charcoal text-xs font-semibold px-3 py-1 rounded-full">{course.type}</span>
                <h3 className="font-heading text-base font-semibold text-foreground leading-snug">{course.full}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><BookOpen size={14} /> Full-time</span>
                </div>
                <a href="#apply" className="btn-navy text-sm py-2 px-4 w-full block text-center mt-2">Explore More</a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No courses found. Try a different search or category.</p>
        )}
      </div>
    </section>
  );
};

export default CourseCarousel;
