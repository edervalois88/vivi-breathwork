"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  const openModal = () => {
    const modal = document.getElementById('booking_modal') as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  const titleWords = ["Respira.", "Conecta.", "Transforma."];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-20">
      
      {/* Abstract Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
            src="/images/hero-bg.png" 
            alt="Breathwork abstract background" 
            className="w-full h-full object-cover blur-3xl scale-110 animate-pulse-slow"
        />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Animated Pill Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
        >
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-white/30 backdrop-blur-md text-xs md:text-sm font-medium text-primary shadow-sm">
                ✨ Bienestar Integral a través de la Respiración
            </span>
        </motion.div>

        {/* Dynamic Title */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading font-bold tracking-tight leading-[1.1] mb-8 text-base-content break-words">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.8, ease: "easeOut" }}
              className="inline-block mx-2 bg-gradient-to-br from-base-content to-base-content/60 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-xl md:text-2xl text-base-content/70 max-w-2xl mb-12 font-light"
        >
          Domina el arte del Breathwork para desbloquear tu potencial, reducir el estrés y encontrar claridad en un mundo ruidoso.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1.4, duration: 0.5 }}
           className="flex flex-col sm:flex-row gap-6"
        >
          <button
              className="btn btn-primary btn-lg rounded-full px-8 shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-none bg-gradient-to-r from-primary to-secondary text-white"
              onClick={openModal}
          >
            Agenda tu Sesión
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          <a href="#servicios" className="btn btn-ghost btn-lg rounded-full px-8 hover:bg-base-content/5">
              Explorar Servicios
          </a>
        </motion.div>
      </div>
      
       {/* Modal for Booking (Keep existing logic) */}
      <dialog id="booking_modal" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box p-10 bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl">
          <h3 className="font-heading font-bold text-3xl text-primary mb-2">¡Comienza tu viaje!</h3>
          <p className="py-4 text-lg opacity-80">
            Serás redirigido a nuestra agenda para reservar tu sesión de descubrimiento gratuita.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost mr-2 rounded-full">Cancelar</button>
              <button 
                className="btn btn-primary rounded-full px-6" 
                onClick={() => alert("Redirigiendo a Calendly...")} // Replace with real link logic
              >
                Ir al Calendario
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
      </dialog>
    </section>
  );
}
