import { useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FranchiseCard from "@/components/FranchiseCard";

const franchises = [
  { name: "Bhavishya Computer Education - Kusmi HQ", location: "Kusmi, Chhattisgarh 497224", authorized: true, authTitle: "Authorized Head Office & Training Center", phone: "+91 91712 78014" },
  { name: "Bhavishya Computer Education - Balrampur", location: "Balrampur, Chhattisgarh", authorized: true, authTitle: "Authorized Franchise Center", phone: "+91 98765 43210" },
  { name: "Bhavishya Computer Education - Ambikapur", location: "Ambikapur, Surguja, Chhattisgarh", authorized: true, authTitle: "Authorized Franchise Center", phone: "+91 98765 43211" },
  { name: "Bhavishya Computer Education - Raipur", location: "Raipur, Chhattisgarh", authorized: true, authTitle: "Authorized Regional Center", phone: "+91 98765 43212" },
  { name: "Bhavishya Computer Education - Bilaspur", location: "Bilaspur, Chhattisgarh", authorized: true, authTitle: "Authorized Franchise Center", phone: "+91 98765 43213" },
];

const FranchisePage = () => {
  const [search, setSearch] = useState("");

  const filtered = franchises.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <ShieldCheck size={16} />
            Verified Centers
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-3">Our Authorized Franchise Centers</h1>
          <p className="text-white/70 max-w-2xl mx-auto">Find a verified Bhavishya Computer Education center near you. All listed centers are officially authorized.</p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          {/* Search */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((f, i) => (
              <FranchiseCard key={i} {...f} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-10">No franchise centers found matching your search.</p>
          )}
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default FranchisePage;
