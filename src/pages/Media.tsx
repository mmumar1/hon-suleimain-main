import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Play, FileText, Download } from "lucide-react";

export default function Media() {
  useSEO({ title: "Media & Resources" });

  const videos = [
    { id: "v1", title: "Declaration Speech in Gusau", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: "v2", title: "Townhall Meeting: Youth Tech Hub", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: "v3", title: "Interview on National TV", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: "v4", title: "Documentary: A Journey of Service", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  ];

  const documents = [
    { id: "d1", title: "The Zamfara Vision Manifesto 2024", type: "PDF", size: "2.4 MB", icon: FileText },
    { id: "d2", title: "Official Campaign Press Kit", type: "ZIP", size: "15 MB", icon: Download },
    { id: "d3", title: "Speech Transcript: Declaration Day", type: "PDF", size: "1.1 MB", icon: FileText },
    { id: "d4", title: "Policy Brief: Agricultural Reform", type: "PDF", size: "3.2 MB", icon: FileText }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Media & <span className="text-accent">Resources</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Watch recent speeches, download policy documents, and access our official press kits.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title="Video Gallery" align="left" />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-24"
          >
            {videos.map(video => (
              <motion.div key={video.id} variants={fadeUp} className="bg-white rounded-3xl p-4 shadow-xl border">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 relative group">
                  {/* Fake iframe overlay to look clickable if youtube doesn't load */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                  </div>
                  <iframe 
                    src={video.url} 
                    title={video.title}
                    className="w-full h-full opacity-50"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-6 mb-2 px-2">{video.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <SectionHeader title="Downloads & Documents" align="left" />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {documents.map(doc => (
              <motion.div 
                key={doc.id} 
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <doc.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-foreground mb-4 flex-grow">{doc.title}</h4>
                <div className="flex items-center justify-between mt-auto pt-4 border-t text-sm font-semibold">
                  <span className="text-muted-foreground">{doc.type} • {doc.size}</span>
                  <a href="#" className="text-primary hover:text-primary/80 flex items-center">
                    Download <Download className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
