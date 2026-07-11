import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  testimonial: string;
  avatar: string;
}

export function TestimonialCard({ name, role, location, testimonial, avatar }: TestimonialCardProps) {
  return (
    <div className="h-full bg-card rounded-2xl p-8 border shadow-sm flex flex-col hover:shadow-md transition-shadow">
      <Quote className="w-12 h-12 text-primary/10 mb-6 flex-shrink-0" />
      <p className="text-lg text-foreground mb-8 flex-grow leading-relaxed italic">"{testimonial}"</p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold font-serif shrink-0">
          {avatar}
        </div>
        <div>
          <div className="font-bold text-foreground text-lg">{name}</div>
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide mt-0.5">{role}, {location}</div>
        </div>
      </div>
    </div>
  );
}
