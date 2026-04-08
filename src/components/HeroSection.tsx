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
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 border border-primary/30">
              <Award size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Admissions Open for July 2026</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Build Your Career with{" "}
              <span className="bg-primary text-primary-foreground px-3 py-1 inline-block transform -rotate-1">
                Future-Ready Skills
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Join <strong className="text-primary">1500+</strong> successful students who built
              future-ready digital skills through our industry-recognized programs at Bhavishya Education.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="btn-gold text-base">Apply Now</a>
              <a href="#courses" className="border-2 border-secondary text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                Explore Courses
              </a>
            </div>

            {/* Scrolling course strip below CTA */}
            <div className="overflow-hidden rounded-xl pt-2">
              <div className="flex animate-scroll-left gap-3 w-max">
                {[...heroCards, ...heroCards].map((card, i) => (
                  <a href="#apply" key={i} className="flex-shrink-0 w-36 rounded-xl overflow-hidden border border-border bg-card shadow-md hover:shadow-lg transition-shadow">
                    <img src={card.img} alt={card.name} className="w-full h-20 object-cover" />
                    <div className="p-2">
                      <p className="font-heading text-sm font-bold text-foreground">{card.name}</p>
                      <p className="text-[10px] text-muted-foreground">{card.specs}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-2">
              {[
                { val: "1500+", label: "Students Trained" },
                { val: "15+", label: "Courses Offered" },
                { val: "95%", label: "Placement Rate" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-primary">{s.val}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - hero image (visible on all screens) */}
          <div className="flex justify-center order-first md:order-last">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={heroStudent}
                  alt="Confident student at Bhavishya Computer Education"
                  width={800}
                  height={1024}
                  className="w-full max-w-xs md:max-w-lg object-cover"
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
