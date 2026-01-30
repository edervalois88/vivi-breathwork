"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="sobre-mi" className="py-24 relative overflow-hidden bg-base-100">
             {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
                    
                    {/* Image Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-5/12 relative lg:sticky lg:top-24 mb-12 md:mb-0"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-xl">
                            <Image 
                                src="/images/profile-placeholder.png" 
                                alt="Vivi González" 
                                fill
                                className="object-cover"
                            />
                        </div>
                        
                        <div className="mt-8 space-y-4">
                            <h3 className="text-xl font-heading font-bold text-primary">Certificaciones</h3>
                            <ul className="space-y-2 text-sm opacity-80">
                                <li className="flex items-center gap-2">
                                    <span>✨</span> Formación en respiración funcional
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>✨</span> Salud y regulación basada en evidencia
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>✨</span> Certificada por escuelas internacionales
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-7/12"
                    >
                        <div className="badge badge-primary badge-outline mb-8 px-4 py-3 font-semibold tracking-wider">QUIÉN SOY</div>
                        
                        <div className="space-y-8 text-lg text-base-content/80 leading-relaxed text-left">
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-base-content mb-4">El camino hacia la regulación</h3>
                                <p>
                                    Durante mucho tiempo, viví desconectada de mí misma. Sosteniendo hábitos que me drenaban y rodeada de entornos que no resonaban con mi esencia. El resultado fue un vacío profundo y una salud debilitada.
                                </p>
                            </div>

                            <div className="pl-6 border-l-4 border-primary/20 italic bg-base-200/30 p-6 rounded-r-2xl">
                                <p className="font-heading text-xl text-primary">
                                    &ldquo;La vida me dio una segunda oportunidad para cuestionarlo todo: Quién soy, qué quiero y cómo quiero vivir.&rdquo;
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-base-content mb-2">El Descubrimiento</h4>
                                <p>
                                    En medio de la incertidumbre, el <strong>breathwork</strong> llegó a mi vida no como una técnica más, sino como la respuesta que mi sistema nervioso gritaba. Descubrí que llevaba años respirando mal:
                                </p>
                                <ul className="mt-4 space-y-2 ml-4 list-disc marker:text-primary">
                                    <li>Respiración bucal y superficial</li>
                                    <li>Estado de alerta crónico</li>
                                    <li>Fatiga y ansiedad constante</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-base-content mb-2">Mi Misión Hoy</h4>
                                <p>
                                    No se trata solo de inhalar y exhalar. Se trata de usar tu biología a tu favor. Hoy, mi propósito es enseñarte esta herramienta científica y accesible para que tú también recuperes el control de tu cuerpo y tu mente.
                                </p>
                            </div>

                            <p className="font-medium text-xl text-primary pt-4">
                                ¿Listo para transformar tu biología?
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
