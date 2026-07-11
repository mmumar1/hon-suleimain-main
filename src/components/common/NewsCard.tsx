import { Link } from "wouter";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "./Badge";
import { formatDate } from "@/utils";
import { motion } from "framer-motion";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export function NewsCard({ id, title, excerpt, date, category, image, readTime }: NewsCardProps) {
  return (
    <motion.div 
      className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -8 }}
    >
      <div className="aspect-[16/9] overflow-hidden bg-muted relative">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/95 text-primary hover:bg-white backdrop-blur-md border-none shadow-md uppercase tracking-wide">{category}</Badge>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-muted-foreground mb-4 font-semibold uppercase tracking-wider">
          <span className="text-primary">{formatDate(date)}</span>
          <span className="mx-2 opacity-50">•</span>
          <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {readTime}</span>
        </div>
        <h3 className="text-xl font-extrabold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-tight">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">{excerpt}</p>
        
        <div className="mt-auto pt-5 border-t">
          <Link href={`/news`} className="inline-flex items-center text-sm font-bold text-primary group/link uppercase tracking-wide">
            Read Article <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
