"use client";
import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
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
      
      <section id="servicios" className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                <div className="badge badge-primary badge-outline mb-4 p-4 font-bold">Mis Servicios</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-base-content">Planes Diseñados para Ti</h2>
                <p className="text-xl text-base-content/70 max-w-2xl mx-auto">Ya sea que busques crecimiento personal o transformar la cultura de tu equipo, tengo una propuesta a tu medida.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
                <ServiceCard 
                    title="Sesión 1 a 1"
                    description="Un espacio exclusivo para ti. Trabajaremos en tus bloqueos específicos y diseñaremos una rutina de respiración personalizada."
                    features={[
                        "Duración: 60-90 minutos", 
                        "Modalidad: Online o Presencial", 
                        "Grabación de la sesión", 
                        "Guía PDF post-sesión"
                    ]}
                    ctaText="Agendar Sesión"
                    onAction={openModal}
                />
                <ServiceCard 
                    title="Wellness Corporativo"
                    description="Programas estratégicos para reducir el ausentismo y elevar la productividad. Inversión con alto retorno en capital humano."
                    features={[
                        "Workshops In-Company", 
                        "Pausas Activas Guiadas", 
                        "Team Building Consciente", 
                        "Reporte de Impacto"
                    ]}
                    isPopular={true}
                    ctaText="Solicitar Cotización"
                    onAction={scrollToContact}
                />
                <ServiceCard 
                    title="Cursos Grupales"
                    description="Sumérgete en la energía colectiva. Cursos temáticos de 4 semanas para dominar los fundamentos del Breathwork."
                    features={[
                        "4 Sesiones en vivo", 
                        "Grupo de soporte (WhatsApp)", 
                        "Material audiovisual", 
                        "Acceso de por vida"
                    ]}
                    ctaText="Ver Próximas Fechas"
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
                        <span className="text-6xl text-primary/20 absolute -top-4 -left-2 font-serif">"</span>
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
                         <span className="text-6xl text-primary/20 absolute -top-4 -left-2 font-serif">"</span>
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
