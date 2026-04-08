import { useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blogPlacement from "@/assets/blog-placement.jpg";

const blogs = [
  { img: blog1, category: "Career", title: "Top 5 IT Careers After Completing DCA", excerpt: "Discover the most in-demand IT career paths you can pursue after completing your Diploma in Computer Applications.", date: "Mar 28, 2026" },
  { img: blog2, category: "Learning", title: "Why Digital Skills Are Essential in 2026", excerpt: "In today's digital-first world, computer literacy is no longer optional. Learn why upskilling matters now more than ever.", date: "Mar 22, 2026" },
  { img: blog3, category: "Tips", title: "How to Ace Your First IT Job Interview", excerpt: "Practical tips from our placement cell on preparing for technical interviews and landing your dream IT role.", date: "Mar 15, 2026" },
  { img: blog4, category: "Technology", title: "Getting Started with Python Programming", excerpt: "A beginner-friendly guide to Python — the most versatile programming language for students and professionals alike.", date: "Mar 10, 2026" },
  { img: blog5, category: "Finance", title: "Understanding GST with Tally Prime", excerpt: "Learn how Tally Prime simplifies GST compliance and why it's a must-have skill for commerce students.", date: "Mar 5, 2026" },
  { img: blogPlacement, category: "Success", title: "Our Students Celebrate Campus Placements", excerpt: "Bhavishya Education students secure top offers at leading companies. Read about their inspiring journeys.", date: "Feb 28, 2026" },
];

const categoryColors: Record<string, string> = {
  Career: "bg-blue-500/10 text-blue-600",
  Learning: "bg-green-500/10 text-green-600",
  Tips: "bg-orange-500/10 text-orange-600",
  Technology: "bg-purple-500/10 text-purple-600",
  Finance: "bg-emerald-500/10 text-emerald-600",
  Success: "bg-primary/10 text-primary",
};

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, hsl(210 40% 96%), hsl(40 30% 96%))" }}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Blog</span>
          <h2 className="section-heading">Latest News & Blogs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Stay updated with the latest in technology, education tips, and career guidance.</p>
        </div>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <ChevronLeft size={20} className="text-foreground" />
          </button>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2">
            {blogs.map((b, i) => (
              <article key={i} className="flex-shrink-0 w-[340px] bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[b.category] || "bg-primary/10 text-primary"}`}>
                    {b.category}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>{b.date}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground leading-snug line-clamp-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{b.excerpt}</p>
                  <a href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </article>
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

export default BlogSection;
