import { motion } from "framer-motion";
import { Link } from "wouter";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer, scaleIn } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { statistics } from "@/data/statistics";
import { aboutData } from "@/data/about";
import { visionAreas } from "@/data/vision";
import { projects } from "@/data/projects";
import { programs } from "@/data/programs";
import { testimonials } from "@/data/testimonials";
import { news } from "@/data/news";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProgramCard } from "@/components/common/ProgramCard";
import { NewsCard } from "@/components/common/NewsCard";
import { Badge } from "@/components/common/Badge";
import { Quote, BookOpen, HeartPulse, Wheat, Users, Flower, Laptop, Building2, Briefcase, ShieldCheck, Heart, Eye, Zap, TrendingUp } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";

const iconMap: Record<string, FC<LucideProps>> = {
  BookOpen, HeartPulse, Wheat, Users, Flower, Laptop, Building2, Briefcase, ShieldCheck,
  Heart, Eye, Zap, TrendingUp,
};
const heroPortrait = "/images/hero-portrait.jpg";
const aboutPortrait = "/images/about-portrait.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { cn } from "@/utils";

export default function Home() {
  useSEO();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const featuredProjects = projects.slice(0, 3);
  const featuredPrograms = programs.slice(0, 4);
  const latestNews = news.slice(0, 3);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      {/* 1. HeroSection */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden hero-pattern bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="pt-10 lg:pt-0">
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 py-1.5 px-4 text-sm bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                NDC Aspirant, Zamfara State
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Leadership <br/>Rooted in <span className="text-gradient">Service</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed max-w-lg">
              Building Opportunities for Every Community in Zamfara State.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <Link href="/vision" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Explore My Vision
              </Link>
              <Link href="/programs" className="px-8 py-4 bg-white text-foreground border-2 border-border rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md">
                Community Programs
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
              <button className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:scale-110 transition-transform">
                <Play className="w-6 h-6 ml-1" />
              </button>
              <span className="font-semibold text-foreground">Watch My Story</span>
            </motion.div>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate="visible" className="relative h-[600px] lg:h-[800px] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10" />
            <img 
              src={heroPortrait} 
              alt="Hon. Suleiman Salihu Usman" 
              className="object-cover w-full h-full object-bottom rounded-t-full shadow-2xl border-4 border-white"
            />
            
            {/* Floating Badge */}
            <div className="absolute top-1/4 -left-8 glass rounded-2xl p-4 shadow-xl z-20 hidden lg:flex items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Proven Track Record</div>
                <div className="text-xs text-muted-foreground">15+ Years in Service</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground">
          <span className="text-xs font-bold uppercase tracking-widest mb-2">Scroll</span>
          <ArrowRight className="w-5 h-5 rotate-90" />
        </div>
      </section>

      {/* 2. StatsSection */}
      <section className="py-20 bg-[#f4f7fb]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AboutPreview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutPortrait} 
                  alt="Hon. Suleiman at community event" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <QuoteIcon className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm font-semibold italic text-foreground leading-relaxed">
                  "{aboutData.quote}"
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionHeader title="Meet Hon. Suleiman" align="left" />
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
                <p>{aboutData.bio[0]}</p>
                <p>{aboutData.bio[1]}</p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {aboutData.values.slice(0, 3).map((value, i) => {
                  const Icon = iconMap[value.icon];
                  return (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        {Icon && <Icon className="w-5 h-5 text-primary" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <Link href="/about" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors">
                Read Full Biography <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VisionPreview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="My Vision for Zamfara" 
            subtitle="A comprehensive plan to uplift our communities through strategic investments in key sectors."
          />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visionAreas.slice(0, 6).map((vision, index) => {
              const Icon = iconMap[vision.icon];
              return (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{vision.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{vision.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/vision" className="inline-flex items-center font-bold text-primary hover:text-primary/80 uppercase tracking-wide group">
              View All Policy Areas <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CommunityImpactPreview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Community Impact" 
            subtitle="Real projects delivering tangible results for the people of Zamfara State."
          />

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-center",
                  index % 2 !== 0 && "lg:grid-flow-col-dense"
                )}
              >
                <div className={cn("relative", index % 2 !== 0 && "lg:col-start-2")}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={project.featuredImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  <Badge variant="success" className="absolute top-6 left-6 shadow-md backdrop-blur-md bg-white/95">
                    {project.status}
                  </Badge>
                </div>
                
                <div className={cn(index % 2 !== 0 && "lg:col-start-1")}>
                  <Badge variant="outline" className="mb-4">{project.category}</Badge>
                  <h3 className="text-3xl font-extrabold text-foreground mb-6 leading-tight">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.overview}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <div className="text-sm font-bold text-primary uppercase tracking-wide mb-1">Beneficiaries</div>
                      <div className="text-xl font-extrabold text-foreground">{project.beneficiaries}</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <div className="text-sm font-bold text-primary uppercase tracking-wide mb-1">Location</div>
                      <div className="text-xl font-extrabold text-foreground">{project.location}</div>
                    </div>
                  </div>

                  <Link href="/community-impact" className="inline-flex items-center text-primary font-bold hover:underline">
                    Read Case Study <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/community-impact" className="inline-flex items-center px-8 py-4 bg-foreground text-white rounded-full font-bold hover:bg-foreground/90 transition-colors shadow-lg">
              View All Impact Projects
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ProgramsPreview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Active Programs" 
            subtitle="Initiatives designed to empower, educate, and elevate our people."
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredPrograms.map(program => (
              <motion.div key={program.id} variants={fadeUp}>
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/programs" className="inline-flex items-center font-bold text-primary hover:text-primary/80 uppercase tracking-wide group">
              View All Programs <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TestimonialsSection */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeader 
            title="Voices from the Community" 
            subtitle="Don't just take our word for it. Hear from the people whose lives have been impacted."
            className="text-white"
          />

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-6 pb-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                  <div className="h-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 flex flex-col">
                    <Quote className="w-10 h-10 text-accent mb-6" />
                    <p className="text-lg leading-relaxed mb-8 flex-grow">"{testimonial.testimonial}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center text-xl font-bold font-serif shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-sm text-white/70 uppercase tracking-wide">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. NewsPreview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Latest Updates" 
            subtitle="News, announcements, and insights from the campaign trail."
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {latestNews.map(item => (
              <motion.div key={item.id} variants={fadeUp}>
                <NewsCard {...item} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/news" className="inline-flex items-center font-bold text-primary hover:text-primary/80 uppercase tracking-wide group">
              Read More News <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. VolunteerCTA */}
      <section className="py-24 bg-gradient-to-br from-[#0a2158] to-[#1a4db5] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Join the Movement</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              We cannot do this alone. Be part of the change by volunteering your time, skills, or voice to help us build a better Zamfara.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/volunteer" className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Volunteer Now
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
