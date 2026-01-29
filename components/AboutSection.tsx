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
                        className="w-full md:w-5/12 relative sticky top-24"
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
                        <div className="badge badge-primary badge-outline mb-6 px-4 py-3 font-semibold tracking-wider">QUIÉN SOY</div>
                        
                        <div className="space-y-8 text-lg text-base-content/80 leading-relaxed font-light text-justify">
                            <p className="font-medium text-xl text-base-content transform-cpu">
                                Durante mucho tiempo, mientras la vida seguía, yo me estaba rompiendo por dentro.
                            </p>
                            
                            <p>
                                Vivía un vacío profundo. Sostenía malos hábitos. Me rodeaba de personas que no compartían mi filosofía de vida. Poco a poco, todo eso me fue alejando de mí. Apagué mi esencia, mi autoestima se fue debilitando y empecé a tomar decisiones que no estaban alineadas con quien realmente era.
                            </p>

                            <div className="pl-6 border-l-4 border-primary/20 italic">
                                <p>
                                    La vida, de alguna forma, me dio una segunda oportunidad. Una ruptura me obligó a cuestionarlo absolutamente todo. Quién soy. Qué quiero de mi vida. Con quién quiero estar.
                                </p>
                            </div>

                            <p>
                                Sabía que quería un estilo de vida diferente. Había algo dentro de mí que sabía que así no quería seguir viviendo. Pero no sabía por dónde empezar. <br/>
                                <span className="font-medium text-base-content">¿Cómo cambias el rumbo cuando llevas tanto tiempo caminando en una misma dirección?</span>
                            </p>
                            
                            <p>
                                Me daba miedo dar pasos distintos a los que conocía. Miedo a perder personas en el camino. Miedo a los cambios radicales. Miedo a ser diferente.
                            </p>

                            <h3 className="text-2xl font-heading font-bold text-primary pt-4">Y en medio de todo eso, llegó el breathwork a mi vida.</h3>

                            <p>
                                <strong className="text-primary block mb-2">Volver al cuerpo</strong>
                                La respiración no solo me dio calma. Me dio claridad. Me dio presencia. Y, poco a poco, me dio sentido. Me permitió deconstruirme para volver a construirme.
                            </p>

                            <p>
                                Recuerdo darme cuenta de algo que me impactó profundamente: <strong>Respiraba muy mal.</strong> Respiraba rápido, por el pecho. Respiraba por la boca durante las noches. Vivía en estrés, ansiedad y en un estado constante de alerta.
                            </p>

                            <p>
                                Ser consciente de mi respiración hizo que todo, poco a poco, empezara a mejorar. <span className="italic">Awareness is the key to all positive change.</span>
                            </p>

                            <p className="font-medium text-base-content">
                                Hoy estoy decidida a compartir esta herramienta que todos llevamos con nosotros, pero que muy pocos sabemos usar a nuestro favor. Pero no quiero que me creas. Quiero que lo experimentes.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
