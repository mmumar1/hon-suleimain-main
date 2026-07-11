import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { visionAreas } from "@/data/vision";
import { SectionHeader } from "@/components/common/SectionHeader";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Vision() {
  useSEO({ title: "My Vision for Zamfara" });

  const policyPriorities = [
    "Establishing a state-wide Technical & Vocational Education Training (TVET) fund.",
    "Subsidizing modern farming equipment for registered agricultural cooperatives.",
    "Upgrading 50 primary healthcare centers to operate 24/7 with solar power.",
    "Providing zero-interest micro-loans for market women and small business owners.",
    "Creating three regional IT Hubs to train youth in software development.",
    "Implementing community-led security initiatives in partnership with state agencies."
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            A Vision for <span className="text-accent">Tomorrow</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We are not just promising change; we are presenting a detailed, actionable blueprint to transform Zamfara into a hub of prosperity, security, and opportunity for all.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visionAreas.map((vision, index) => {
              const Icon = Icons[vision.icon as keyof typeof Icons] as React.ElementType;
              return (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary">
                    {Icon && <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{vision.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{vision.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader 
            title="Immediate Policy Priorities" 
            subtitle="The specific actions we will champion in the House of Representatives from Day One."
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {policyPriorities.map((priority, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <p className="text-lg text-foreground font-medium">{priority}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/volunteer" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1">
              Support Our Vision <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
