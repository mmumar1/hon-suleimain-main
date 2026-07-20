import { motion } from "framer-motion";
import { Link } from "wouter";
import { Play, ArrowRight, CheckCircle2, FolderOpen, Users, Zap, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { fadeUp, staggerContainer, scaleIn, fadeLeft, fadeRight } from "@/animations/variants";
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
import { Quote, BookOpen, HeartPulse, Wheat, Flower, Laptop, Building2, Briefcase, ShieldCheck, Heart, Eye, TrendingUp } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/utils";
import { HeroSlider } from "@/components/common/HeroSlider";

const iconMap: Record<string, FC<LucideProps>> = {
  BookOpen, HeartPulse, Wheat, Users, Flower, Laptop, Building2, Briefcase, ShieldCheck,
  Heart, Eye, Zap, TrendingUp, FolderOpen, MapPin
};
const heroPortrait = "/images/hon-hero-image.jpeg";
const aboutPortrait = "/images/hon-image-2.jpeg";

export default function Home() {
  useSEO();
  const { t } = useTranslation();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const featuredProjects = projects.slice(0, 3);
  const featuredPrograms = programs.slice(0, 4);
  const latestNews = news.slice(0, 3);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      {/* 1. HeroSection */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <HeroSlider />

        <div className="container mx-auto px-4 md:px-6 z-10 grid lg:grid-cols-2 gap-12 items-center relative">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="pt-10 lg:pt-0">
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 py-1.5 px-4 text-sm bg-white/10 text-white backdrop-blur border-white/20">
                {t("hero.badge")}
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-6">
              {t("hero.title")}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/80 mb-8 font-light leading-relaxed max-w-lg">
              {t("hero.subtitle")}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <Link href="/vision" className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:-translate-y-1 transition-transform shadow-2xl block">
                {t("hero.cta_vision")}
              </Link>
              <Link href="/programs" className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors block">
                {t("hero.cta_programs")}
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
              <button className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all">
                <Play className="w-6 h-6 ml-1 fill-white" />
              </button>
              <span className="font-semibold text-white">{t("hero.watch")}</span>
            </motion.div>
          </motion.div>

       {/* Hero Image Container (Temporarily Disabled)
<motion.div
  variants={scaleIn}
  initial="hidden"
  animate="visible"
  className="relative h-[600px] lg:h-[800px] hidden lg:block z-10"
>
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 rounded-[2.5rem]" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10 rounded-[2.5rem]" />

  <img
    src={heroPortrait}
    alt="Hon. Suleiman Salihu Usman"
    className="object-cover w-full h-full object-bottom rounded-[2.5rem] ring-4 ring-white/30 shadow-[0_0_80px_rgba(255,255,255,0.15)] relative z-0"
  />

  <div className="absolute top-1/4 -left-8 bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 shadow-xl z-20 hidden lg:flex items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
      <CheckCircle2 className="w-6 h-6" />
    </div>

    <div>
      <div className="text-sm font-bold text-white">
        {t("hero.badge_title")}
      </div>
      <div className="text-xs text-white/80">
        {t("hero.badge_sub")}
      </div>
    </div>
  </div>
</motion.div>
*/}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white z-20">
          <span className="text-xs font-bold uppercase tracking-widest mb-2">{t("hero.scroll")}</span>
          <ArrowRight className="w-5 h-5 rotate-90" />
        </div>
      </section>

      {/* 2. StatsSection */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const statIcons = [FolderOpen, Users, Zap, MapPin];
              const StatIcon = statIcons[index % statIcons.length];

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 cursor-default text-center relative overflow-hidden group"
                >
                  <div className="mx-auto w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                    <StatIcon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-5xl font-extrabold text-primary mb-4">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full w-12 mx-auto mb-4" />
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. AboutPreview */}
      <section className="py-24 bg-white relative border-t">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-xl -z-10" />
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src={aboutPortrait}
                  alt="Hon. Suleiman at community event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl ring-1 ring-slate-200 max-w-sm hidden md:block">
                <QuoteIcon className="w-10 h-10 text-primary mb-4" />
                <p className="text-lg font-semibold italic text-foreground leading-relaxed">
                  "{aboutData.quote}"
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionHeader title={t("about.section_title")} align="left" />
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
                <p>{aboutData.bio[0]}</p>
                <p>{aboutData.bio[1]}</p>
              </div>

              <ul className="space-y-6 mb-10">
                {aboutData.values.slice(0, 3).map((value, i) => {
                  const Icon = iconMap[value.icon];
                  return (
                    <li key={i} className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {Icon && <Icon className="w-6 h-6 text-primary" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg mb-1">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <Link href="/about" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                {t("about.read_bio")} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VisionPreview */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeader
            title={t("vision.section_title")}
            subtitle={t("vision.section_sub")}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visionAreas.slice(0, 6).map((vision, index) => {
              const Icon = iconMap[vision.icon];
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-8 shadow-md border-transparent hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{vision.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{vision.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/vision" className="inline-flex items-center font-bold text-primary hover:text-primary/80 uppercase tracking-wide group">
              {t("vision.view_all")} <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CommunityImpactPreview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title={t("impact.section_title")}
            subtitle={t("impact.section_sub")}
          />

          <div className="space-y-32">
            {featuredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={cn(
                    "grid lg:grid-cols-2 gap-12 items-center",
                    !isEven && "lg:grid-flow-col-dense"
                  )}
                >
                  <motion.div
                    variants={isEven ? fadeRight : fadeLeft}
                    className={cn("relative h-full", !isEven && "lg:col-start-2")}
                  >
                    <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                      <img
                        src={project.featuredImage}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    </div>
                    <Badge variant="success" className="absolute top-6 left-6 shadow-md backdrop-blur-md bg-white/95">
                      {project.status}
                    </Badge>
                  </motion.div>

                  <motion.div
                    variants={isEven ? fadeLeft : fadeRight}
                    className={cn(!isEven && "lg:col-start-1")}
                  >
                    <Badge variant="outline" className="mb-4">{project.category}</Badge>
                    <h3 className="text-3xl font-extrabold text-foreground mb-6 leading-tight">{project.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.overview}</p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-white border shadow-sm p-5 rounded-2xl">
                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{t("impact.beneficiaries")}</div>
                        <div className="text-2xl font-extrabold text-foreground">{project.beneficiaries}</div>
                      </div>
                      <div className="bg-white border shadow-sm p-5 rounded-2xl">
                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{t("impact.location")}</div>
                        <div className="text-2xl font-extrabold text-foreground">{project.location}</div>
                      </div>
                    </div>

                    <Link href="/community-impact" className="inline-flex items-center text-primary font-bold hover:underline">
                      {t("impact.read_case")} <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-24 text-center">
            <Link href="/community-impact" className="inline-flex items-center px-10 py-4 bg-foreground text-white rounded-full font-bold hover:bg-foreground/90 transition-all shadow-xl hover:-translate-y-1">
              {t("impact.view_all")}
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ProgramsPreview */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title={t("programs.section_title")}
            subtitle={t("programs.section_sub")}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
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
              {t("programs.view_all")} <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TestimonialsSection */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="mb-12 md:mb-16 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
            <div className="h-1.5 w-24 bg-primary mt-6 rounded-full mx-auto" />
          </motion.div>

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-6 pb-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                  <div className="h-full bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/25 flex flex-col relative">
                    <span className="absolute top-4 left-6 text-8xl font-serif text-accent/50 leading-none">"</span>
                    <p className="text-lg italic leading-relaxed text-white/90 mb-8 flex-grow relative z-10 pt-8">
                      {testimonial.testimonial}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-yellow-400 text-primary flex items-center justify-center text-2xl font-extrabold shadow-lg shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{testimonial.name}</div>
                        <div className="text-sm text-white/70 uppercase tracking-wide font-medium">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. NewsPreview */}
      <section className="py-28 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title={t("news.section_title")}
            subtitle={t("news.section_sub")}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
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
              {t("news.read_more")} <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. VolunteerCTA */}
      <section className="py-24 bg-gradient-to-br from-[#0a2158] to-[#1a4db5] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              {t("volunteer.title")}
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              {t("volunteer.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link href="/volunteer" className="px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl block">
                  {t("volunteer.cta")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link href="/contact" className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all block">
                  {t("volunteer.contact")}
                </Link>
              </motion.div>
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
      <path d="M7 21h4V10H7v11zm6 0h4V10h-4v11z" />
    </svg>
  );
}
