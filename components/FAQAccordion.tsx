export default function FAQAccordion() {
  const faqs = [
    {
      question: "¿Qué es el Breathwork y para qué sirve?",
      answer: "El Breathwork engloba diversas técnicas de respiración consciente diseñadas para influir en tu estado mental, emocional y físico. Sirve para reducir el estrés, mejorar la concentración, liberar bloqueos emocionales y promover una relajación profunda."
    },
    {
      question: "¿Cómo funciona una sesión 1 a 1?",
      answer: "Iniciamos con una breve entrevista para entender tus necesidades actuales. Luego, te guío a través de patrones de respiración específicos durante 45-60 minutos. Finalizamos con un espacio de integración para procesar la experiencia."
    },
    {
      question: "¿Qué beneficios tienen los cursos empresariales?",
      answer: "Para las empresas, el Breathwork es una herramienta potente para reducir el burnout, mejorar la claridad mental para la toma de decisiones y fomentar un ambiente laboral más armónico y resiliente."
    },
    {
      question: "¿Necesito equipo especial o experiencia previa?",
      answer: "No necesitas nada más que un lugar cómodo donde sentarte o recostarte. No se requiere experiencia previa; las técnicas son accesibles y adaptables a cualquier persona."
    },
    {
      question: "¿Es seguro practicar online?",
      answer: "Absolutamente. Las sesiones online son igual de efectivas. Solo necesitas una buena conexión a internet, cámara y un espacio privado donde no seas interrumpido."
    }
  ];

  return (
    <section className="py-16 bg-base-100" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-base-200 hover:bg-base-300 transition-colors duration-300">
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content bg-base-100 text-base-content/80">
                <p className="p-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
