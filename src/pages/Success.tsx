import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function Success() {
  useSEO({ title: "Success" });

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-16 max-w-lg text-center border relative overflow-hidden"
      >
        {/* Confetti decoration bits */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-accent rounded-full animate-bounce delay-100" />
        <div className="absolute top-20 right-16 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300" />
        <div className="absolute bottom-16 left-20 w-4 h-4 bg-green-400 rounded-sm rotate-45 animate-pulse" />
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Thank You!</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Your submission has been received successfully. Our team will review it and get back to you shortly.
        </p>

        <Link href="/" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1">
          Return to Home <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </div>
  );
}
