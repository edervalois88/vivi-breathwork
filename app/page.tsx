"use client";
import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import AboutSection from "@/components/AboutSection";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const openModal = () => {
    const modal = document.getElementById('booking_modal') as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col gap-0 animate-in fade-in duration-500">
      <HeroSection />
      
      <ValuePropositionSection />

      <AboutSection />
      
      <section id="servicios" className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                <div className="badge badge-primary badge-outline mb-4 p-4 font-bold">Mis Servicios</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-base-content">Experiencias y Programas</h2>
                <p className="text-xl text-base-content/70 max-w-2xl mx-auto">Propuestas educativas y prácticas diseñadas para transformar tu biología y tu mente.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                
                {/* Service 1: Coaching */}
                <ServiceCard 
                    title="Coaching 1:1"
                    description="Programas personalizados diseñados según tus objetivos: regulación emocional, estrés, sueño, enfoque o rendimiento."
                    features={[
                        "Duración: 6, 10 o 12 semanas", 
                        "Diseño 100% personalizado", 
                        "Modalidad Online",
                        "Seguimiento profundo"
                    ]}
                    imageSrc="/images/session-1on1.png"
                    ctaText="Aplicar al Programa"
                    onAction={openModal}
                />

                {/* Service 2: Cursos */}
                <ServiceCard 
                    title="Cursos y Talleres"
                    description="Programas de educación + práctica + herramientas aplicables a la vida diaria. Diseñados para empresas, grupos privados o estudios."
                    features={[
                        "Online y Presenciales", 
                        "Para empresas y equipos", 
                        "Fundamentos del Breathwork",
                        "Herramientas para la vida diaria"
                    ]}
                    imageSrc="/images/corporate.png"
                    isPopular={true}
                    ctaText="Ver Información"
                    onAction={scrollToContact}
                />

                {/* Service 3: Experiencias */}
                <ServiceCard 
                    title="Experiencias Inmersivas"
                    description="Espacios seguros, conscientes y regulados para conectar con tu interior."
                    features={[
                        "Sesiones guiadas de Breathwork",
                        "Inmersión en tina de hielos", 
                        "Flow respiratorio",
                        "Regulación del sistema nervioso"
                    ]}
                    imageSrc="/images/brand/abstract-bg.png"
                    ctaText="Próximas Fechas"
                    onAction={scrollToContact}
                />

                {/* Service 4: Conferencias */}
                <ServiceCard 
                    title="Conferencias"
                    description="Pláticas educativas sobre la importancia de la respiración, sistema nervioso, estrés y bienestar."
                    features={[
                        "Base científica", 
                        "Lenguaje claro y accesible", 
                        "Teoría + Práctica", 
                        "Ideal para eventos y congresos"
                    ]}
                    ctaText="Cotizar Conferencia"
                    onAction={scrollToContact}
                />
             </div>
        </div>
      </section>

      <section className="py-24 bg-base-100">
        <div className="max-w-5xl mx-auto px-4">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Lo Que Dicen Mis Clientes</h2>
                <p className="text-lg opacity-70">Experiencias reales de transformación.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card bg-base-200 border border-base-300 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="rating rating-sm mb-4">
                        <div className="mask mask-star-2 bg-orange-400"></div>
                        <div className="mask mask-star-2 bg-orange-400"></div>
                        <div className="mask mask-star-2 bg-orange-400"></div>
                        <div className="mask mask-star-2 bg-orange-400"></div>
                        <div className="mask mask-star-2 bg-orange-400"></div>
                    </div>
                    <p className="italic mb-6 text-lg relative text-base-content/80">
                        <span className="text-6xl text-primary/20 absolute -top-4 -left-2 font-serif">&quot;</span>
                        Llegué buscando reducir mi ansiedad y encontré una herramienta poderosa para toda la vida. La guía es impecable.
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-12 text-xl"><span>S</span></div>
                        </div>
                        <div>
                            <div className="font-bold">Sofía Martínez</div>
                            <div className="text-xs opacity-70">Diseñadora UX</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 border border-base-300 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="rating rating-sm mb-4">
                        <div className="mask mask-star-2 bg-orange-400"></div>
                        <div className="mask mask-star-2 bg-orange-400"></div>
                        <div className="mask mask-star-2 bg-orange-400"></div>
                        <div className="mask mask-star-2 bg-orange-400"></div>
                        <div className="mask mask-star-2 bg-orange-400"></div>
                    </div>
                    <p className="italic mb-6 text-lg relative text-base-content/80">
                         <span className="text-6xl text-primary/20 absolute -top-4 -left-2 font-serif">&quot;</span>
                        Implementamos el programa de bienestar en la empresa y el feedback del equipo fue increíble. Se respira otro aire en la oficina.
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                        <div className="avatar placeholder">
                            <div className="bg-primary text-primary-content rounded-full w-12 text-xl"><span>J</span></div>
                        </div>
                        <div>
                            <div className="font-bold">Javier López</div>
                            <div className="text-xs opacity-70">Director de RRHH</div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
      </section>

      <FAQAccordion />

      <ContactForm />
    </div>
  );
}
