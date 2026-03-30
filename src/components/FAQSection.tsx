import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is Bhavishya Computer Education?", a: "Bhavishya Computer Education is a leading computer coaching center offering diploma, degree, and certificate courses in computer applications, programming, and more." },
  { q: "What courses do you offer?", a: "We offer DCA, BCA, PGDCA, MA, BA, B.Com, and various certificate courses in Tally, MS Office, Web Design, Python, and more." },
  { q: "Are the courses government recognized?", a: "Yes, our degree and diploma programs are affiliated with recognized universities and our certificate courses are industry-certified." },
  { q: "Do you provide placement assistance?", a: "Absolutely! We have a dedicated placement cell that provides 100% placement support including resume building, interview preparation, and job referrals." },
  { q: "What are the batch timings?", a: "We offer flexible batch timings — morning, afternoon, and evening batches to suit working professionals and students." },
  { q: "How can I enroll?", a: "You can enroll by visiting our center, calling us, or filling out the Apply Now form on this website. Our counsellor will guide you through the admission process." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center space-y-3 mb-10">
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-5">
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
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
