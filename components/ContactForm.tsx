"use client";
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulación de envío
        setTimeout(() => {
            setStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contacto" className="py-20 bg-base-200">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Conectemos</h2>
                    <p className="text-lg opacity-80">Si tienes dudas específicas o requieres una cotización para empresas, escríbeme directamente.</p>
                </div>
                
                <div className="card shadow-2xl bg-base-100 max-w-2xl mx-auto">
                    <div className="card-body">
                        {status === 'success' ? (
                            <div className="alert alert-success animate-bounce">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>¡Gracias! Tu mensaje ha sido recibido. Te contactaré en breve.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control w-full">
                                        <label className="label"><span className="label-text font-semibold">Nombre</span></label>
                                        <input type="text" placeholder="Tu nombre" className="input input-bordered w-full" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label"><span className="label-text font-semibold">Email</span></label>
                                        <input type="email" placeholder="tucorreo@ejemplo.com" className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"><span className="label-text font-semibold">Interés Principal</span></label>
                                    <select className="select select-bordered w-full">
                                        <option disabled selected>Selecciona una opción</option>
                                        <option>Sesión Individual (1 a 1)</option>
                                        <option>Programa Wellness Empresarial</option>
                                        <option>Taller Grupal</option>
                                        <option>Otra consulta</option>
                                    </select>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"><span className="label-text font-semibold">Mensaje</span></label>
                                    <textarea className="textarea textarea-bordered h-32" placeholder="Cuéntame más sobre lo que buscas..." required></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary w-full"
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? <span className="loading loading-spinner"></span> : 'Enviar Mensaje'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
