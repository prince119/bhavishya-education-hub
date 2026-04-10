const partners = [
  "MCRPV", "RGPV", "Barkatullah University", "MAKAUT", "Devi Ahilya University",
  "Vikram University", "Jiwaji University", "NIELIT", "MPONLINE", "CPCT"
];

const AffiliatedPartners = () => (
  <section className="py-10 sm:py-14 bg-card border-y border-border overflow-hidden">
    <div className="container mx-auto px-4 text-center mb-6 sm:mb-8 max-w-full">
      <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">Our Affiliations</span>
      <h2 className="section-heading mt-2">Trusted & Affiliated With Leading Universities</h2>
    </div>
    <div className="overflow-hidden">
      <div className="flex gap-6 sm:gap-10 animate-scroll-left items-center" style={{ width: "max-content" }}>
        {[...partners, ...partners].map((name, i) => (
          <div key={i} className="flex-shrink-0 bg-background border border-border rounded-xl px-5 sm:px-8 py-4 sm:py-5 min-w-[140px] sm:min-w-[180px] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
            <span className="font-heading text-sm sm:text-lg font-bold text-secondary whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AffiliatedPartners;
