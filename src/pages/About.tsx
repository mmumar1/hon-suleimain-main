import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { aboutData } from "@/data/about";
import { timeline } from "@/data/timeline";
import { statistics } from "@/data/statistics";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import * as Icons from "lucide-react";
const aboutPortrait = "/images/about-portrait.jpg";
const heroPortrait = "/images/hero-portrait.jpg";

export default function About() {
  useSEO({ title: "About Hon. Suleiman Salihu Usman" });

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Meet <span className="text-accent">Hon. Suleiman</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            A lifetime of dedication to the prosperity, peace, and progress of Zamfara State.
          </motion.p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutPortrait} 
                  alt="Hon. Suleiman Salihu Usman" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 bg-slate-50 p-6 rounded-2xl border">
                <h3 className="font-bold text-lg mb-2 text-foreground">Personal Philosophy</h3>
                <p className="text-muted-foreground italic leading-relaxed">"{aboutData.quote}"</p>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="prose prose-lg prose-slate"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">A Journey of Service</h2>
              {aboutData.bio.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Core Values & Principles</h3>
              <div className="grid sm:grid-cols-2 gap-6 not-prose">
                {aboutData.values.map((value, i) => {
                  const Icon = Icons[value.icon as keyof typeof Icons] as React.ElementType;
                  return (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        {Icon && <Icon className="w-6 h-6 text-primary" />}
                      </div>
                      <h4 className="font-bold text-lg text-foreground mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeader 
            title="Leadership Timeline" 
            subtitle="Milestones in a career dedicated to community development."
          />
          
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-1/2">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12 relative pl-8 md:pl-0 md:w-1/2 md:even:ml-auto md:odd:pr-12 md:even:pl-12 md:odd:text-right"
              >
                <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-9px] md:even:left-[-9px] w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
                <div className="font-extrabold text-primary text-xl mb-1">{item.year}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-extrabold text-accent mb-4 drop-shadow-md">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base font-bold text-white/80 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
