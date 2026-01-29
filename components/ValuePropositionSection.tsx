"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ValuePropositionSection() {
    return (
        <section className="py-20 md:py-32 relative z-10 bg-base-100">
             <div className="max-w-7xl mx-auto px-4">
                
                {/* Intro / Philosophy */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-5xl font-bold mb-8 text-base-content"
                    >
                        ¿Por qué la respiración importa?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-base-content/80 space-y-6 leading-relaxed"
                    >
                        <p className="font-medium text-2xl text-primary">
                            Respiras todos los días. Pero no todos respiramos de la forma óptima para el cuerpo.
                        </p>
                        <p>
                            Estás perdiendo el mejor potencial de tu cuerpo. La respiración es el puente entre tu cuerpo y tu <span className="italic font-bold">sistema nervioso</span>. Es la llave que regula tu sistema nervioso, y este a su vez regula los aspectos más importantes para una buena salud y bienestar.
                        </p>
                    </motion.div>
                </div>

                {/* Venn Diagram Visual - The Bridge */}
                <div className="relative py-20 mb-20 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex items-center justify-center">
                        
                        {/* Center Image (The Intersection) */}
                        <motion.div 
                             initial={{ opacity: 0, scale: 0.8 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             viewport={{ once: true }}
                             transition={{ duration: 1 }}
                             className="absolute z-10 w-48 h-64 md:w-64 md:h-80 rounded-[50%] overflow-hidden border-4 border-base-100 shadow-2xl group"
                        >
                             <Image 
                                src="/images/brand/venn-visual.jpg" 
                                alt="Respiración Regulada" 
                                fill
                                className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 block"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                <span className="text-white text-center font-heading text-lg md:text-2xl leading-none px-4 drop-shadow-md">
                                    RESPIRACIÓN<br/>REGULADA
                                </span>
                            </div>
                        </motion.div>

                        {/* Left Circle - Body */}
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ 
                                x: { duration: 1, delay: 0.2 },
                                opacity: { duration: 1, delay: 0.2 },
                                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute left-1/2 -translate-x-[85%] md:-translate-x-[70%] w-64 h-64 md:w-96 md:h-96 rounded-full border border-primary/40 flex items-center justify-start md:justify-center p-8 md:p-12 z-0 hover:border-primary hover:bg-primary/5 transition-colors duration-500 cursor-default"
                        >
                            <div className="text-right md:text-center w-full pr-16 md:pr-0">
                                <span className="block font-heading text-2xl md:text-3xl text-primary opacity-80 mb-1">CUERPO</span>
                                <span className="block text-xs md:text-sm uppercase tracking-widest opacity-60">(Fisiología)</span>
                            </div>
                        </motion.div>

                        {/* Right Circle - Mind */}
                        <motion.div 
                             initial={{ x: -50, opacity: 0 }}
                             whileInView={{ x: 0, opacity: 1 }}
                             viewport={{ once: true }}
                             animate={{ scale: [1, 1.02, 1] }}
                             transition={{ 
                                x: { duration: 1, delay: 0.2 },
                                opacity: { duration: 1, delay: 0.2 },
                                scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 } // Offset breathing
                            }}
                             className="absolute right-1/2 translate-x-[85%] md:translate-x-[70%] w-64 h-64 md:w-96 md:h-96 rounded-full border border-secondary/40 flex items-center justify-end md:justify-center p-8 md:p-12 z-0 hover:border-secondary hover:bg-secondary/5 transition-colors duration-500 cursor-default"
                        >
                             <div className="text-left md:text-center w-full pl-16 md:pl-0">
                                <span className="block font-heading text-2xl md:text-3xl text-secondary opacity-80 mb-1">MENTE</span>
                                <span className="block text-xs md:text-sm uppercase tracking-widest opacity-60">(Estado Emocional)</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quote */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-8 md:mt-0 z-20 max-w-2xl px-6"
                    >
                        <p className="font-heading text-3xl md:text-5xl text-base-content leading-tight">
                            Cuando el cuerpo se <span className="italic">regula</span>, <br/>
                            la mente encuentra <span className="uppercase tracking-widest text-primary">Calma</span>.
                        </p>
                    </motion.div>
                </div>

                {/* Benefits & Symptoms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* Benefits Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-base-200/50 p-8 md:p-12 rounded-[2.5rem] border border-primary/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-primary">
                            <span className="text-3xl">✨</span> Beneficios
                            <span className="text-sm font-normal text-base-content/60 ml-auto block md:hidden lg:block">Basados en ciencia</span>
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Regular el estrés y la ansiedad",
                                "Dormir mejor y conciliar el sueño",
                                "Mejorar energía y claridad mental",
                                "Aumentar tolerancia al estrés",
                                "Optimizar rendimiento físico y mental",
                                "Sentirte más presente y en calma"
                            ].map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Symptoms Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-base-200/50 p-8 md:p-12 rounded-[2.5rem] border border-secondary/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 -mt-10 -ml-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-secondary">
                            <span className="text-3xl">⚠️</span> Síntomas
                            <span className="text-sm font-normal text-base-content/60 ml-auto block md:hidden lg:block">De respiración disfuncional</span>
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Baja tolerancia a la frustración",
                                "Problemas digestivos",
                                "Estrés, ansiedad e irritabilidad",
                                "Insomnio",
                                "Rumiación y falta de concentración",
                                "Vivir en alerta",
                                "Baja energía y fatiga constante",
                                "Mareo, hiperventilación crónica",
                                "Bajo rendimiento deportivo"
                            ].map((symptom, i) => (
                                <li key={i} className="flex items-start gap-3 opacity-90">
                                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span className="text-lg">{symptom}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Closing Focus */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <p className="text-2xl md:text-3xl font-heading font-medium text-base-content max-w-3xl mx-auto leading-normal">
                        &ldquo;Mi enfoque se basa en enseñarte a <span className="text-primary underline decoration-wavy decoration-primary/30 underline-offset-4">respirar correctamente</span>, regular tu sistema nervioso y llevarte a tu mayor potencial.&rdquo;
                    </p>
                </motion.div>

             </div>
        </section>
    )
}
