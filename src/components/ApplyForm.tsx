import { useState } from "react";
import { toast } from "sonner";

const ApplyForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Our counsellor will contact you soon.");
    setForm({ name: "", phone: "", email: "", course: "" });
  };

  return (
    <section id="apply" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left info */}
          <div className="space-y-6">
            <h2 className="section-heading">Start Your Journey Today</h2>
            <p className="text-muted-foreground">
              Fill in the form and our counsellor will get in touch with you to guide through the admission process.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">📍</div>
                <div>
                  <p className="text-sm font-medium text-foreground">Visit Us</p>
                  <p className="text-sm text-muted-foreground">Main Branch, Your City, State</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">📞</div>
                <div>
                  <p className="text-sm font-medium text-foreground">Call Us</p>
                  <p className="text-sm text-muted-foreground">+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">✉️</div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@bhavishyaedu.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-card rounded-xl shadow-lg border border-border p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Phone Number *</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                <input
                  required
                  type="email"
                  placeholder="abc@xyz.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Interested Course</label>
                <select
                  value={form.course}
                  onChange={e => setForm({ ...form, course: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a course</option>
                  <option>DCA</option>
                  <option>BCA</option>
                  <option>PGDCA</option>
                  <option>MA</option>
                  <option>BA</option>
                  <option>B.Com</option>
                  <option>Tally Prime</option>
                  <option>MS Office</option>
                  <option>Web Design</option>
                  <option>Python</option>
                </select>
              </div>
              <button type="submit" className="btn-gold w-full text-base py-3">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
