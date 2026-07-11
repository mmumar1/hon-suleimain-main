import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { gallery } from "@/data/gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/utils";

export default function Gallery() {
  useSEO({ title: "Photo Gallery" });
  
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(-1);

  const categories = ["All", ...Array.from(new Set(gallery.map(img => img.category)))];
  
  const filteredGallery = filter === "All" 
    ? gallery 
    : gallery.filter(img => img.category === filter);

  const slides = filteredGallery.map(img => ({
    src: img.src,
    alt: img.alt,
    description: img.caption
  }));

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Photo <span className="text-accent">Gallery</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Moments from the campaign trail, community meetings, and impactful projects.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                  filter === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-slate-100 text-muted-foreground hover:bg-slate-200 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div 
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredGallery.map((img, i) => (
              <div 
                key={img.id} 
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl bg-slate-100"
                onClick={() => setIndex(i)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                  <p className="text-white font-medium leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </motion.div>
  );
}
