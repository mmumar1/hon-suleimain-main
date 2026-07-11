import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { NetlifyForm } from "@/components/forms/NetlifyForm";
import { Heart, Megaphone, Users } from "lucide-react";

export default function Volunteer() {
  useSEO({ title: "Join the Movement - Volunteer" });

  const skills = [
    "Data Entry", "Community Outreach", "Social Media", 
    "Transportation", "Event Management", "Medical Support", 
    "Legal Aid", "Teaching", "Photography"
  ];

  const interests = [
    "Education", "Healthcare", "Youth", "Women", 
    "Agriculture", "Infrastructure", "General Support"
  ];

  const benefits = [
    { icon: Users, title: "Community Building", desc: "Work alongside passionate people who want the best for Zamfara." },
    { icon: Megaphone, title: "Amplify Your Voice", desc: "Have a direct impact on policies and programs being developed." },
    { icon: Heart, title: "Create Real Change", desc: "See the tangible results of your efforts in the lives of others." }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Join the <span className="text-accent">Movement</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Real change requires collective action. We need your energy, your skills, and your passion.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-extrabold text-foreground mb-6">Why Volunteer?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Volunteering with the campaign is more than just politics; it is a commitment to the future of our state. We are building a grassroots network of change-makers.
                </p>
                
                <div className="space-y-8">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        <b.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">{b.title}</h4>
                        <p className="text-muted-foreground">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border">
                <h3 className="text-2xl font-bold text-foreground mb-8">Volunteer Registration Form</h3>
                
                <NetlifyForm 
                  name="volunteer" 
                  submitText="Join the Team"
                  successMessage="Welcome to the team! We have received your details and our volunteer coordinator will reach out to you shortly."
                >
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Full Name</label>
                        <input type="text" name="name" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Phone Number</label>
                        <input type="tel" name="phone" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                        <input type="email" name="email" className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Local Government Area</label>
                        <select name="lga" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none">
                          <option value="">Select LGA...</option>
                          <option value="Anka">Anka</option>
                          <option value="Bakura">Bakura</option>
                          <option value="Bungudu">Bungudu</option>
                          <option value="Gusau">Gusau</option>
                          <option value="Kaura Namoda">Kaura Namoda</option>
                          <option value="Maru">Maru</option>
                          <option value="Shinkafi">Shinkafi</option>
                          <option value="Talata Mafara">Talata Mafara</option>
                          <option value="Tsafe">Tsafe</option>
                          <option value="Zurmi">Zurmi</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3 border-t pt-6">Skills you can contribute</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {skills.map(skill => (
                          <label key={skill} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" name={`skill-${skill}`} value="yes" className="rounded text-primary focus:ring-primary" />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3 border-t pt-6">Areas of Interest</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {interests.map(interest => (
                          <label key={interest} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" name={`interest-${interest}`} value="yes" className="rounded text-primary focus:ring-primary" />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </NetlifyForm>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
