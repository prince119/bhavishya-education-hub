import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone as PhoneIcon, Mail } from "lucide-react";
import formBg from "@/assets/form-bg.jpg";

const ApplyForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Our counsellor will contact you soon.");
    setForm({ name: "", phone: "", email: "", course: "" });
  };

  return (
    <section
      id="apply"
      className="py-12 sm:py-16 relative overflow-hidden"
      style={{ backgroundImage: `url(${formBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-secondary/90" />
      <div className="container mx-auto px-4 relative z-10 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Left info */}
          <div className="space-y-5 sm:space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">Start Your Journey Today</h2>
            <p className="text-sm sm:text-base text-white/70">
              Fill in the form and our counsellor will get in touch with you to guide through the admission process.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Visit Us</p>
                  <p className="text-xs sm:text-sm text-white/70">Balrampur - Samri - Kusmi Rd, Kusmi, Chhattisgarh 497224, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Call Us</p>
                  <p className="text-xs sm:text-sm text-white/70">+91 91712 78014</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-xs sm:text-sm text-white/70">Office@bhavishyaedu.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-card rounded-xl shadow-lg border border-border p-5 sm:p-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground text-center mb-5 sm:mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                <input required type="text" placeholder="Enter your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Phone Number *</label>
                <input required type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                <input required type="email" placeholder="abc@xyz.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Interested Course</label>
                <select value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a course</option>
                  <option>DCA</option><option>BCA</option><option>PGDCA</option><option>MA</option><option>BA</option><option>B.Com</option><option>Tally Prime</option><option>MS Office</option><option>Web Design</option><option>Python</option>
                </select>
              </div>
              <button type="submit" className="btn-gold w-full text-sm sm:text-base py-3">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
