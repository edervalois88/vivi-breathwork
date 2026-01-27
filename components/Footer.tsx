import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral text-neutral-content">
             <div className="footer p-10 max-w-7xl mx-auto">
                <aside>
                    <div className="text-3xl font-bold mb-2 text-primary-content">Vivi Breathwork</div>
                    <p className="font-medium">Transformando vidas a través de la respiración.<br/>Bienestar corporativo y personal.</p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.instagram.com/vivibreathwork/" target="_blank" rel="noopener noreferrer" className="btn btn-square btn-ghost btn-sm hover:scale-110 transition-transform">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>
                    <p className="text-sm opacity-70 mt-2">© {new Date().getFullYear()} Vivi Breathwork. Todos los derechos reservados.</p>
                </aside> 
                <nav>
                    <h6 className="footer-title opacity-100 text-white">Servicios</h6> 
                    <a href="#servicios" className="link link-hover">Sesiones 1 a 1</a>
                    <a href="#servicios" className="link link-hover">Programas Empresariales</a>
                    <a href="#servicios" className="link link-hover">Talleres y Retiros</a>
                </nav> 
                <nav>
                    <h6 className="footer-title opacity-100 text-white">Explora</h6> 
                    <a href="#" className="link link-hover">Inicio</a>
                    <a href="#faq" className="link link-hover">Preguntas Frecuentes</a>
                    <a href="#contacto" className="link link-hover">Contacto</a>
                </nav> 
                <nav>
                    <h6 className="footer-title opacity-100 text-white">Redes</h6> 
                    <a href="https://www.instagram.com/vivibreathwork/" target="_blank" className="link link-hover flex items-center gap-2">
                        Instagram
                    </a>
                </nav>
            </div>
        </footer>
    );
}
