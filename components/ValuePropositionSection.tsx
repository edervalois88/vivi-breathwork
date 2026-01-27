"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ValuePropositionSection() {
    return (
        <section className="py-20 md:py-32 relative z-10">
             <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-5xl font-bold mb-4 md:mb-6"
                    >
                        Más que respirar,<br/><span className="text-primary italic">es vivir conscientemente</span>
                    </motion.h2>
                    <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto">La ciencia y la tradición se unen para ofrecerte resultados tangibles.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[300px]">
                    
                    {/* Bento Box 1: Corporate Image (Large) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-lg h-80 md:h-auto"
                    >
                        <Image 
                            src="/images/corporate.png" 
                            alt="Corporate Wellness Group" 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-3xl font-bold mb-2 font-heading text-white">Wellness Corporativo</h3>
                            <p className="text-white/90 text-sm md:text-base">Equipos más resilientes, enfocados y conectados. Reduce el burnout organizacional.</p>
                        </div>
                    </motion.div>

                    {/* Bento Box 2: Stress Reduction (Text) */}
                    <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.1 }}
                         className="md:col-span-2 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/50 flex flex-col justify-center shadow-sm relative overflow-hidden"
                    >
                         <div className="absolute top-0 right-0 -m-10 opacity-10 rotate-12">
                             <svg className="w-64 h-64 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-8-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                         </div>
                        <h3 className="text-2xl font-bold mb-4 font-heading text-base-content">Reducción de Ansiedad</h3>
                        <p className="opacity-80 text-lg">Regula tu sistema nervioso de forma natural. Reduce los niveles de cortisol y recupera tu calma interior en minutos.</p>
                    </motion.div>

                    {/* Bento Box 3: Personal Session Image (Tall) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 row-span-1 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-lg h-80 md:h-auto"
                    >
                         <Image 
                            src="/images/session-1on1.png" 
                            alt="Sesión Personal de Breathwork" 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-bold font-heading text-white">Sesiones 1 a 1</h3>
                            <p className="text-white/80 text-xs">Transformación profunda y personalizada.</p>
                        </div>
                    </motion.div>

                    {/* Bento Box 4: Focus (Small) */}
                    <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.3 }}
                         className="md:col-span-1 bg-secondary/10 p-8 rounded-[2.5rem] border border-white/30 flex flex-col justify-center text-center items-center hover:bg-secondary/20 transition-colors"
                    >
                        <span className="text-5xl mb-4">🎯</span>
                        <h3 className="text-xl font-bold font-heading">Enfoque Láser</h3>
                    </motion.div>

                     {/* Bento Box 5: Sleep (Small) */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1 bg-accent/10 p-8 rounded-[2.5rem] border border-white/30 flex flex-col justify-center text-center items-center hover:bg-accent/20 transition-colors"
                    >
                        <span className="text-5xl mb-4">😴</span>
                        <h3 className="text-xl font-bold font-heading">Sueño Profundo</h3>
                    </motion.div>

                </div>
             </div>
        </section>
    )
}
