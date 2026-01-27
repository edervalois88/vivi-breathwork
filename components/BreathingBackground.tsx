"use client";
import { motion } from "framer-motion";

export default function BreathingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base-100">
      {/* Círculo Principal - Inhalación/Exhalación Lenta */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[50vh] h-[50vh] bg-primary/20 rounded-full blur-[100px]"
      />

      {/* Círculo Secundario - Contrapunto */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[20%] right-[10%] w-[40vh] h-[40vh] bg-secondary/20 rounded-full blur-[80px]"
      />

      {/* Círculo Inferior - Base */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] left-[20%] w-[60vh] h-[60vh] bg-accent/10 rounded-full blur-[120px]"
      />
      
      {/* Ruido sutil para textura (opcional) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
    </div>
  );
}
