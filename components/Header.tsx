"use client";
import Link from 'next/link';

export default function Header() {
    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Sobre Mí", href: "#sobre-mi" },
        { name: "Servicios", href: "#servicios" },
        { name: "Preguntas", href: "#faq" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <div className="navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-40 border-b border-base-200 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks.map((link) => (
                    <li key={link.name}><Link href={link.href}>{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost text-xl font-bold">
                <span className="font-heading text-2xl lowercase">vivi gonzález</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
                {navLinks.map((link) => (
                    <li key={link.name}><Link href={link.href} className="font-medium hover:text-primary transition-colors">{link.name}</Link></li>
                ))}
            </ul>
          </div>
          <div className="navbar-end">
            <button 
                className="btn btn-primary hidden sm:flex shadow-md hover:scale-105 transition-transform" 
                onClick={()=>(document.getElementById('booking_modal') as HTMLDialogElement)?.showModal()}
            >
                Agendar Llamada
            </button>
          </div>
        </div>
    );
}
