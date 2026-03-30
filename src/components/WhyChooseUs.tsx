import { Monitor, Users, Award, Briefcase, BookOpen, Headphones } from "lucide-react";

const features = [
  { icon: Monitor, title: "Modern Computer Labs", desc: "Fully equipped labs with latest hardware and software" },
  { icon: Users, title: "Experienced Faculty", desc: "Learn from industry professionals with years of experience" },
  { icon: Award, title: "Certified Courses", desc: "Government recognized and industry-certified programs" },
  { icon: Briefcase, title: "100% Placement Support", desc: "Dedicated placement cell for career guidance" },
  { icon: BookOpen, title: "Updated Curriculum", desc: "Regularly updated syllabus matching industry demands" },
  { icon: Headphones, title: "Student Support", desc: "Dedicated mentoring and doubt-clearing sessions" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Bhavishya?</span>
          <h2 className="section-heading">Why Choose Us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border group">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <f.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
