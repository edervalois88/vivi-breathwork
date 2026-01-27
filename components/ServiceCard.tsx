"use client";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  isPopular?: boolean;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, features, ctaText = "Solicitar Info", isPopular = false, onAction, icon }: ServiceCardProps) {
  return (
    <motion.div 
        whileHover={{ y: -10 }}
        className={`relative h-full flex flex-col p-8 rounded-[2rem] backdrop-blur-md border transition-all duration-500
        ${isPopular 
            ? 'bg-white/40 border-primary/30 shadow-[0_20px_40px_-15px_rgba(var(--color-primary),0.2)]' 
            : 'bg-white/20 border-white/50 hover:bg-white/30 hover:shadow-xl hover:border-white/80'
        }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full shadow-lg tracking-wide uppercase">
          Más Popular
        </div>
      )}
      
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-white/50 to-transparent w-fit shadow-inner">
         {icon || <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
      </div>

      <h3 className="font-heading text-3xl font-bold mb-4 text-base-content">{title}</h3>
      <p className="text-base-content/70 mb-8 min-h-[3rem] leading-relaxed">{description}</p>
      
      <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base opacity-90">
                  <span className={`mt-1 flex items-center justify-center w-5 h-5 rounded-full ${isPopular ? 'bg-primary text-white' : 'bg-base-content/10 text-base-content'}`}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span>{feature}</span>
              </li>
          ))}
      </ul>
      
      <button 
        className={`btn w-full rounded-xl text-lg h-auto py-3 transition-all duration-300 ${isPopular ? 'btn-primary shadow-lg shadow-primary/30 hover:shadow-primary/50' : 'btn-outline border-base-content/20 hover:bg-base-content hover:text-base-100'}`}
        onClick={onAction}
      >
        {ctaText}
      </button>
    </motion.div>
  );
}
