import { Clock, BookOpen, Award } from "lucide-react";

const courses = [
  { name: "DCA", full: "Diploma in Computer Applications", duration: "1 Year", type: "Diploma", color: "from-secondary to-navy" },
  { name: "BCA", full: "Bachelor of Computer Applications", duration: "3 Years", type: "Degree", color: "from-navy to-secondary" },
  { name: "PGDCA", full: "Post Graduate Diploma in Computer Applications", duration: "1 Year", type: "PG Diploma", color: "from-secondary to-charcoal" },
  { name: "MA", full: "Master of Arts (Computer Science)", duration: "2 Years", type: "Post Graduate", color: "from-charcoal to-secondary" },
  { name: "BA", full: "Bachelor of Arts", duration: "3 Years", type: "Degree", color: "from-secondary to-navy" },
  { name: "B.Com", full: "Bachelor of Commerce", duration: "3 Years", type: "Degree", color: "from-navy to-charcoal" },
  { name: "Tally Prime", full: "Tally Prime with GST", duration: "3 Months", type: "Certificate", color: "from-secondary to-navy" },
  { name: "MS Office", full: "Microsoft Office Complete", duration: "3 Months", type: "Certificate", color: "from-charcoal to-secondary" },
  { name: "Web Design", full: "HTML, CSS & JavaScript", duration: "6 Months", type: "Certificate", color: "from-navy to-secondary" },
  { name: "Python", full: "Python Programming", duration: "4 Months", type: "Certificate", color: "from-secondary to-charcoal" },
];

const CourseCard = ({ course }: { course: typeof courses[0] }) => (
  <div className="min-w-[280px] bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
    <div className={`bg-gradient-to-r ${course.color} h-32 flex items-center justify-center`}>
      <span className="font-heading text-4xl font-bold text-primary">{course.name}</span>
    </div>
    <div className="p-5 space-y-3">
      <span className="bg-primary/20 text-charcoal text-xs font-semibold px-3 py-1 rounded-full">{course.type}</span>
      <h3 className="font-heading text-lg font-semibold text-foreground leading-snug">{course.full}</h3>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
        <span className="flex items-center gap-1"><BookOpen size={14} /> Full-time</span>
      </div>
      <a href="#apply" className="btn-navy text-sm py-2 px-4 w-full block text-center mt-3">Explore More</a>
    </div>
  </div>
);

const CourseCarousel = () => {
  return (
    <section id="courses" className="py-16 bg-background">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center space-y-3">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Programs</span>
          <h2 className="section-heading">Explore Our Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From diploma to degree programs and professional certificates — find the right path for your career.
          </p>
        </div>
      </div>

      {/* Scrolling carousel */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-scroll-left" style={{ width: 'max-content' }}>
          {[...courses, ...courses].map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCarousel;
