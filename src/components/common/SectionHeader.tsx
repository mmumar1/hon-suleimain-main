import { cn } from "@/utils";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  return (
    <motion.div 
      className={cn("mb-12 md:mb-16", align === "center" ? "text-center" : "text-left", className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:text-xl leading-relaxed">{subtitle}</p>
      )}
      <div className={cn("h-1.5 w-24 bg-primary mt-6 rounded-full", align === "center" && "mx-auto")} />
    </motion.div>
  );
}
