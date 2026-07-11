import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { news } from "@/data/news";
import { NewsCard } from "@/components/common/NewsCard";
import { Badge } from "@/components/common/Badge";
import { Clock, ArrowRight } from "lucide-react";
import { formatDate, cn } from "@/utils";
import { Link } from "wouter";

export default function News() {
  useSEO({ title: "News & Updates" });
  const [filter, setFilter] = useState("all");

  const filters = ["all", "Announcement", "Community", "Policy", "Event"];
  
  const featuredArticle = news.find(n => n.featured);
  const filteredNews = news.filter(n => filter === "all" || n.category === filter);
  const remainingNews = filter === "all" ? filteredNews.filter(n => n.id !== featuredArticle?.id) : filteredNews;

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            News & <span className="text-accent">Updates</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Stay informed on our latest activities, policy announcements, and community engagements.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Featured Article */}
          {featuredArticle && filter === "all" && (
            <motion.div variants={fadeUp} className="mb-20">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border grid lg:grid-cols-2 group hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-accent text-white uppercase tracking-wide">Featured</Badge>
                    <Badge variant="outline">{featuredArticle.category}</Badge>
                  </div>
                  <div className="flex items-center text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                    {formatDate(featuredArticle.date)} <span className="mx-2 text-muted-foreground">•</span> <Clock className="w-4 h-4 mr-1" /> {featuredArticle.readTime}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors">{featuredArticle.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed line-clamp-3">{featuredArticle.excerpt}</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-primary font-bold group-hover:underline text-lg">
                      Read Full Story <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <span className="font-bold text-foreground mr-2">Filter by:</span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-bold transition-all",
                  filter === f 
                    ? "bg-foreground text-white shadow-md" 
                    : "bg-white text-muted-foreground border hover:bg-slate-100 hover:text-foreground"
                )}
              >
                {f === "all" ? "All Updates" : f}
              </button>
            ))}
          </div>

          <motion.div 
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {remainingNews.map(item => (
              <motion.div key={item.id} variants={fadeUp}>
                <NewsCard {...item} />
              </motion.div>
            ))}
          </motion.div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20 text-muted-foreground text-lg">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
