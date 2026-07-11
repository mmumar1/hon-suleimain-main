import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { Calendar, Users, MapPin, Target } from "lucide-react";
import { cn } from "@/utils";

export default function CommunityImpact() {
  useSEO({ title: "Community Impact" });

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Community <span className="text-accent">Impact</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We don't just talk about development; we build it. Explore the projects that have transformed communities across Zamfara.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-start",
                  index % 2 !== 0 && "lg:grid-flow-col-dense"
                )}
              >
                <div className={cn("relative", index % 2 !== 0 && "lg:col-start-2")}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={project.featuredImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge variant={project.status === "Active" ? "success" : "default"} className="absolute top-6 left-6 shadow-lg text-sm px-4 py-1">
                    {project.status}
                  </Badge>
                </div>
                
                <div className={cn(index % 2 !== 0 && "lg:col-start-1")}>
                  <Badge variant="outline" className="mb-4 bg-slate-50">{project.category}</Badge>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">{project.title}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.overview}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-xl flex flex-col justify-center">
                      <div className="flex items-center text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                        <Users className="w-4 h-4 mr-2" /> Beneficiaries
                      </div>
                      <div className="text-lg font-bold text-foreground">{project.beneficiaries}</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl flex flex-col justify-center">
                      <div className="flex items-center text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                        <MapPin className="w-4 h-4 mr-2" /> Location
                      </div>
                      <div className="text-lg font-bold text-foreground">{project.location}</div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="flex items-center text-xl font-bold text-foreground mb-3">
                        <Target className="w-6 h-6 mr-2 text-accent" /> The Problem
                      </h4>
                      <p className="text-muted-foreground leading-relaxed bg-red-50 p-4 rounded-xl border border-red-100">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center text-xl font-bold text-foreground mb-3">
                        <Target className="w-6 h-6 mr-2 text-green-600" /> The Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed bg-green-50 p-4 rounded-xl border border-green-100">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">The Impact</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center font-medium">
                      <Calendar className="w-4 h-4 mr-2 text-primary" /> 
                      {project.startDate} to {project.endDate}
                    </div>
                    {project.partners.length > 0 && (
                      <div className="font-medium">
                        Partners: <span className="text-foreground">{project.partners.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
