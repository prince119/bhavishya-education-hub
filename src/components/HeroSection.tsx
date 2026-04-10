import { Award } from "lucide-react";
import heroStudent from "@/assets/hero-student.jpg";
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

const heroCards = [
  { name: "DCA", specs: "5 Specializations", img: courseDca },
  { name: "BCA", specs: "8 Specializations", img: courseBca },
  { name: "PGDCA", specs: "6 Specializations", img: coursePgdca },
  { name: "Tally Prime", specs: "GST Ready", img: courseTally },
  { name: "Python", specs: "4 Modules", img: coursePython },
  { name: "Web Design", specs: "3 Tracks", img: courseWebdesign },
  { name: "MS Office", specs: "Complete Suite", img: courseMsoffice },
  { name: "B.Com", specs: "Commerce Track", img: courseBcom },
  { name: "BA", specs: "Arts Stream", img: courseBa },
  { name: "MA", specs: "Post Graduate", img: courseMa },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-background to-amber-50/40">
      {/* Decorative square boxes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-8 w-16 h-16 border-2 border-primary/15 rounded-lg rotate-12" />
        <div className="absolute top-32 right-12 w-10 h-10 border-2 border-secondary/10 rounded-md -rotate-6" />
        <div className="absolute bottom-20 left-16 w-12 h-12 border-2 border-primary/10 rounded-lg rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-blue-200/20 rounded-xl rotate-12 hidden sm:block" />
        <div className="absolute bottom-32 right-8 w-14 h-14 border-2 border-amber-200/20 rounded-lg -rotate-12 hidden sm:block" />
        <div className="absolute top-20 left-1/3 w-8 h-8 bg-primary/5 rounded-md rotate-45" />
        <div className="absolute bottom-10 left-1/2 w-10 h-10 bg-secondary/5 rounded-md -rotate-12 hidden sm:block" />
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-20 relative z-10 max-w-full overflow-hidden">
        <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
          {/* Left content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-primary/30">
              <Award size={14} className="text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-primary">Admissions Open for July 2026</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Build Your Career with{" "}
              <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-0.5 sm:py-1 inline-block transform -rotate-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Future-Ready Skills
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg">
              Join <strong className="text-primary">1500+</strong> successful students who built
              future-ready digital skills through our industry-recognized programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#apply" className="btn-gold text-sm md:text-base text-center w-full sm:w-auto">Apply Now</a>
              <a href="#courses" className="border-2 border-secondary text-secondary font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-sm md:text-base text-center w-full sm:w-auto">
                Explore Courses
              </a>
            </div>

            {/* Scrolling course strip */}
            <div className="overflow-hidden rounded-xl pt-2">
              <div className="flex animate-scroll-left gap-2 sm:gap-3 w-max">
                {[...heroCards, ...heroCards].map((card, i) => (
                  <a href="#apply" key={i} className="flex-shrink-0 w-28 sm:w-36 rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-shadow">
                    <img src={card.img} alt={card.name} className="w-full h-16 sm:h-20 object-cover" loading="lazy" />
                    <div className="bg-secondary p-1.5 sm:p-2">
                      <p className="font-heading text-xs sm:text-sm font-bold text-secondary-foreground">{card.name}</p>
                      <p className="text-[9px] sm:text-[10px] text-secondary-foreground/70">{card.specs}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-6 md:gap-8 pt-2">
              {[
                { val: "1500+", label: "Students Trained" },
                { val: "15+", label: "Courses Offered" },
                { val: "95%", label: "Placement Rate" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{s.val}</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - hero image */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={heroStudent}
                  alt="Confident student at Bhavishya Computer Education"
                  className="w-full h-48 sm:h-56 md:h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
