import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { siteConfig } from "@/constants/siteConfig";
import { NetlifyForm } from "@/components/forms/NetlifyForm";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  useSEO({ title: "Contact Us" });

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Get in <span className="text-accent">Touch</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have a question, suggestion, or want to invite Hon. Suleiman to your community? We're here to listen.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <motion.div variants={fadeUp}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border">
                <h3 className="text-2xl font-bold text-foreground mb-8">Send a Message</h3>
                
                <NetlifyForm 
                  name="contact" 
                  submitText="Send Message"
                  successMessage="Thank you for reaching out. We will get back to you as soon as possible."
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Your Name</label>
                      <input type="text" name="name" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                      <input type="email" name="email" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
                      <input type="text" name="subject" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                      <textarea name="message" required rows={6} className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all resize-none"></textarea>
                    </div>
                  </div>
                </NetlifyForm>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold text-foreground mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Office Address</h4>
                      <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Office Hours</h4>
                      <p className="text-muted-foreground">{siteConfig.contact.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold text-foreground mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-md">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-md">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#fd5949] to-[#d6249f] text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-md">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-200 rounded-3xl h-64 border shadow-inner flex flex-col items-center justify-center text-slate-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://placehold.co/800x400/e2e8f0/94a3b8?text=Map+View')] bg-cover bg-center opacity-50 mix-blend-multiply" />
                <MapPin className="w-10 h-10 mb-2 z-10" />
                <span className="font-bold uppercase tracking-widest z-10">Map Location</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
