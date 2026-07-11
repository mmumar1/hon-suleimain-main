import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";
import { Badge } from "./Badge";
import { motion } from "framer-motion";

interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  timeline: string;
  status: string;
  category: string;
  image?: string;
}

export function ProgramCard({ id, title, description, timeline, status, category, image }: ProgramCardProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "open": return "success";
      case "coming-soon": return "warning";
      case "closed": return "secondary";
      case "completed": return "default";
      case "featured": return "outline";
      default: return "default";
    }
  };

  const statusLabel = status.replace("-", " ").toUpperCase();

  return (
    <motion.div 
      className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -8 }}
    >
      <div className="aspect-[16/9] overflow-hidden bg-muted relative">
        <img 
          src={image || `https://placehold.co/600x400/0a2158/ffffff?text=${encodeURIComponent(category)}`} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant={getStatusVariant(status)} className="shadow-md backdrop-blur-md bg-background/95">{statusLabel}</Badge>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-sm font-bold text-primary mb-2 tracking-wide uppercase">{category}</div>
        <h3 className="text-xl font-extrabold mb-3 text-foreground line-clamp-2 leading-tight">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-5 border-t">
          <div className="flex items-center text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            {timeline}
          </div>
          <Link href={`/programs/${id}`} className="inline-flex items-center text-sm font-bold text-primary group/link uppercase tracking-wide">
            Details <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
