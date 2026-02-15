
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "¿Necesito experiencia financiera previa?", a: "No. Alexander ha simplificado sus 20 años de experiencia bancaria en pasos que un niño de 7 años puede entender. El sistema es intuitivo y práctico." },
    { q: "¿Qué pasa si mi familia es pequeña?", a: "FAMIBAN es escalable. Funciona desde parejas hasta familias de 10 integrantes. La clave es la estructura, no el número de personas." },
    { q: "¿Es legal crear un 'banco' en casa?", a: "Absolutamente. Es un sistema de gestión de recursos privados y familiares. FAMIBAN te enseña a formalizar estos acuerdos internos mediante actas que dan seriedad al compromiso familiar." },
    { q: "¿Cuánto tiempo toma implementarlo?", a: "El protocolo de fundación toma una tarde. La operación mensual requiere solo de 60 a 90 minutos de reunión familiar. Es un tiempo de calidad que paga dividendos." }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6">
            <HelpCircle size={48} className="text-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-white">Preguntas de Futuros Fundadores</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border transition-all duration-300 rounded-[30px] overflow-hidden ${isOpen ? 'border-amber-500/40 bg-white/5' : 'border-white/10 bg-black'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-white text-lg pr-8">{question}</span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-amber-500 text-black' : 'bg-white/5 text-slate-400'}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-8 pb-8 pt-2 text-slate-400 leading-relaxed font-light italic">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
