
import React from 'react';
import { Gift, FileText, CheckCircle } from 'lucide-react';

const Bonuses: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Bonos Adicionales de Altísimo Valor</h2>
          <p className="text-lg text-slate-600">Al adquirir FAMIBAN hoy, recibes estos recursos exclusivos gratis:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Bonus 1 */}
          <div className="relative p-8 rounded-3xl border-2 border-emerald-100 bg-emerald-50 overflow-hidden">
            <div className="absolute top-4 right-4 text-emerald-500/20"><Gift size={64} /></div>
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold mb-4">BONO #1</span>
            <h3 className="text-xl font-bold mb-3">Guía de 12 Temas Mensuales</h3>
            <p className="text-slate-600 text-sm mb-4">Toda la temática lista para tus reuniones durante un año entero. Desde el valor del ahorro hasta la gratitud y prosperidad.</p>
            <div className="text-emerald-700 font-bold text-sm">Valor: $29 USD - <span className="text-emerald-500 line-through">HOY GRATIS</span></div>
          </div>

          {/* Bonus 2 */}
          <div className="relative p-8 rounded-3xl border-2 border-emerald-100 bg-emerald-50 overflow-hidden">
            <div className="absolute top-4 right-4 text-emerald-500/20"><CheckCircle size={64} /></div>
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold mb-4">BONO #2</span>
            <h3 className="text-xl font-bold mb-3">Retos Financieros Familiares</h3>
            <p className="text-slate-600 text-sm mb-4">Dinámicas prácticas para niños y adultos. Retos sin 'gastos hormiga', retos solidarios y planificación real.</p>
            <div className="text-emerald-700 font-bold text-sm">Valor: $19 USD - <span className="text-emerald-500 line-through">HOY GRATIS</span></div>
          </div>

          {/* Bonus 3 */}
          <div className="relative p-8 rounded-3xl border-2 border-emerald-500 bg-emerald-600 text-white overflow-hidden shadow-xl">
            <div className="absolute top-4 right-4 text-white/20"><FileText size={64} /></div>
            <span className="inline-block px-3 py-1 rounded-full bg-white text-emerald-600 text-xs font-bold mb-4">BONO PREMIUM</span>
            <h3 className="text-xl font-bold mb-3">Checklist Maestro de Implementación</h3>
            <p className="text-emerald-50 text-sm mb-4">El paso a paso exacto en 13 fases para activar tu Banco Familiar hoy mismo sin complicaciones.</p>
            <div className="text-white font-bold text-sm">Valor: $37 USD - <span className="text-emerald-200">INCLUIDO</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
