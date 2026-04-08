import { GraduationCap, Award } from "lucide-react";

const heroCards = [
  { name: "DCA", specs: "5 Specializations" },
  { name: "BCA", specs: "8 Specializations" },
  { name: "PGDCA", specs: "6 Specializations" },
  { name: "Tally Prime", specs: "GST Ready" },
  { name: "Python", specs: "4 Modules" },
  { name: "Web Design", specs: "3 Tracks" },
  { name: "MS Office", specs: "Complete Suite" },
  { name: "B.Com", specs: "Commerce Track" },
  { name: "BA", specs: "Arts Stream" },
  { name: "MA", specs: "Post Graduate" },
];

const cardColors = [
  "from-primary/30 to-primary/10",
  "from-secondary/60 to-secondary/30",
  "from-primary/20 to-secondary/40",
  "from-secondary/50 to-primary/20",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-accent">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-4 h-4 bg-primary rotate-45 opacity-60" />
      <div className="absolute top-32 right-40 text-primary opacity-40 text-3xl">✦</div>
      <div className="absolute bottom-40 right-60 text-primary opacity-30 text-2xl">+</div>
      <div className="absolute top-20 left-[60%] w-3 h-3 bg-primary/40 rotate-45" />

      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30">
              <Award size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">ISO Certified Institute</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
              Your Future in{" "}
              <span className="bg-primary text-primary-foreground px-3 py-1 inline-block transform -rotate-1">Tech</span>{" "}
              Starts Here
            </h1>

            <p className="text-lg text-secondary-foreground/80 max-w-lg">
              Join <strong className="text-primary">5000+</strong> successful students who built their careers
              through our industry-recognized computer courses.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="btn-gold text-base">Apply Now</a>
              <a href="#courses" className="border-2 border-primary/60 text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Explore Courses
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { val: "5000+", label: "Students Trained" },
                { val: "15+", label: "Courses Offered" },
                { val: "95%", label: "Placement Rate" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-primary">{s.val}</p>
                  <p className="text-xs text-secondary-foreground/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - visual */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-primary/30 flex items-center justify-center">
                  <GraduationCap size={120} className="text-primary" />
                </div>
              </div>
              <div className="absolute top-4 -left-8 bg-card shadow-lg rounded-lg px-4 py-3 animate-bounce" style={{ animationDuration: "3s" }}>
                <p className="text-sm font-bold text-foreground">DCA</p>
                <p className="text-xs text-muted-foreground">Diploma Course</p>
              </div>
              <div className="absolute bottom-8 -right-4 bg-card shadow-lg rounded-lg px-4 py-3 animate-bounce" style={{ animationDuration: "3.5s" }}>
                <p className="text-sm font-bold text-foreground">BCA</p>
                <p className="text-xs text-muted-foreground">Bachelor's Degree</p>
              </div>
              <div className="absolute bottom-32 -left-12 bg-card shadow-lg rounded-lg px-4 py-3 animate-bounce" style={{ animationDuration: "4s" }}>
                <p className="text-sm font-bold text-foreground">PGDCA</p>
                <p className="text-xs text-muted-foreground">Post Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling course strip */}
      <div className="bg-secondary/80 border-t border-primary/20 py-4 overflow-hidden">
        <div className="flex animate-scroll-left gap-4 w-max">
          {[...heroCards, ...heroCards].map((card, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-44 bg-gradient-to-br ${cardColors[i % cardColors.length]} rounded-xl p-4 border border-primary/20 backdrop-blur-sm`}
            >
              <p className="font-heading text-lg font-bold text-secondary-foreground">{card.name}</p>
              <p className="text-xs text-secondary-foreground/70 mt-1">{card.specs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
