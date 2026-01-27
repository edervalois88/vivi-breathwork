"use client";

export default function CallToActionSticky() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-base-100/90 backdrop-blur-md border-t border-base-200 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
                 <div>
                    <div className="font-bold text-sm">¿Listo para transformar tu vida?</div>
                    <div className="text-xs opacity-70">Agenda tu sesión gratuita hoy</div>
                 </div>
                 <button 
                    className="btn btn-primary btn-sm shadow" 
                    onClick={()=>(document.getElementById('booking_modal') as HTMLDialogElement)?.showModal()}
                 >
                    Agendar
                 </button>
            </div>
        </div>
    )
}
