import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { programs } from "@/data/programs";
import { NetlifyForm } from "@/components/forms/NetlifyForm";
import { Badge } from "@/components/common/Badge";
import { Calendar, CheckCircle2, ChevronLeft } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function ProgramDetail() {
  const [, params] = useRoute("/programs/:id");
  const program = programs.find(p => p.id === params?.id);
  
  useSEO({ title: program ? `${program.title} | Programs` : "Program Not Found" });

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Program Not Found</h1>
        <Link href="/programs" className="text-primary hover:underline">Return to Programs</Link>
      </div>
    );
  }

  const isOpen = program.status === "open" || program.status === "featured";

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-slate-50 min-h-screen">
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/programs" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors font-medium">
            <ChevronLeft className="w-5 h-5 mr-1" /> Back to all programs
          </Link>
          <div className="max-w-3xl">
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 mb-6">{program.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{program.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">{program.description}</p>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center font-semibold">
                <Calendar className="w-5 h-5 mr-2 text-accent" /> {program.timeline}
              </div>
              <Badge variant={isOpen ? "success" : "secondary"} className="text-sm px-3 py-1">
                Status: {program.status.toUpperCase()}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Program Benefits</h2>
              <ul className="space-y-4 mb-10">
                {program.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-foreground border-t pt-8">Eligibility Requirements</h2>
              <p className="text-lg text-muted-foreground bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 leading-relaxed">
                {program.eligibility}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl border sticky top-32">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Application Form</h3>
              {isOpen ? (
                <NetlifyForm 
                  name={`application-${program.id}`} 
                  submitText="Submit Application"
                  successMessage="Your application has been received successfully. We will contact you regarding the next steps."
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1.5">Full Name</label>
                      <input type="text" name="name" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-1.5">Phone</label>
                        <input type="tel" name="phone" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-1.5">Email</label>
                        <input type="email" name="email" className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1.5">Local Government Area</label>
                      <select name="lga" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all">
                        <option value="">Select LGA...</option>
                        <option value="Gusau">Gusau</option>
                        <option value="Kaura Namoda">Kaura Namoda</option>
                        <option value="Maru">Maru</option>
                        <option value="Tsafe">Tsafe</option>
                        <option value="Zurmi">Zurmi</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1.5">Statement of Need / Interest</label>
                      <textarea name="statement" required rows={4} className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Briefly explain why you should be selected..."></textarea>
                    </div>
                    <div className="flex items-start gap-3 mt-4">
                      <input type="checkbox" name="declaration" required id="decl" className="mt-1.5 rounded text-primary focus:ring-primary" />
                      <label htmlFor="decl" className="text-xs text-muted-foreground leading-relaxed">
                        I declare that the information provided is true and accurate. I understand that false information will lead to automatic disqualification.
                      </label>
                    </div>
                  </div>
                </NetlifyForm>
              ) : (
                <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Application Closed</h4>
                  <p className="text-muted-foreground">
                    This program is currently not accepting new applications. Please check the timeline or sign up for our newsletter to be notified when it reopens.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
