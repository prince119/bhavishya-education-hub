import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  { key: "all", label: "All" },
  { key: "admissions", label: "Admissions" },
  { key: "courses", label: "Courses" },
  { key: "placements", label: "Placements" },
  { key: "general", label: "General" },
];

const faqs = [
  { q: "What is Bhavishya Computer Education?", a: "Bhavishya Computer Education is a leading computer coaching center offering diploma, degree, and certificate courses in computer applications, programming, and more.", cat: "general" },
  { q: "What courses do you offer?", a: "We offer DCA, BCA, PGDCA, MA, BA, B.Com, and various certificate courses in Tally, MS Office, Web Design, Python, and more.", cat: "courses" },
  { q: "Are the courses government recognized?", a: "Yes, our degree and diploma programs are affiliated with recognized universities and our certificate courses are industry-certified.", cat: "courses" },
  { q: "Do you provide placement assistance?", a: "Absolutely! We have a dedicated placement cell that provides 100% placement support including resume building, interview preparation, and job referrals.", cat: "placements" },
  { q: "What are the batch timings?", a: "We offer flexible batch timings — morning, afternoon, and evening batches to suit working professionals and students.", cat: "general" },
  { q: "How can I enroll?", a: "You can enroll by visiting our center, calling us, or filling out the Apply Now form on this website. Our counsellor will guide you through the admission process.", cat: "admissions" },
  { q: "What documents are needed for admission?", a: "You need your latest marksheet, ID proof (Aadhar/PAN), passport-size photos, and the admission fee. Specific courses may require additional documents.", cat: "admissions" },
  { q: "Is there any entrance exam?", a: "No entrance exam is required for most courses. Admission is on a first-come, first-served basis with limited seats per batch.", cat: "admissions" },
  { q: "What is the average placement salary?", a: "Our students typically receive starting packages ranging from ₹1.5 LPA to ₹4 LPA depending on the course and skill level.", cat: "placements" },
  { q: "Do you offer online classes?", a: "Currently we focus on classroom-based training for better hands-on experience. However, study materials and resources are available online for enrolled students.", cat: "general" },
];

const FAQSection = () => {
  const [activeCat, setActiveCat] = useState("all");

  const filtered = activeCat === "all" ? faqs : faqs.filter(f => f.cat === activeCat);

  return (
    <section id="faq" className="py-12 sm:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center space-y-3 mb-6 sm:mb-8">
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
          {faqCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCat === cat.key
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {filtered.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-4 sm:px-5">
              <AccordionTrigger className="text-left font-medium text-sm sm:text-base text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs sm:text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
