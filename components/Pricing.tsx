
import React from 'react';
import { Check, ArrowRight, Star, Lock } from 'lucide-react';

const Pricing: React.FC = () => {
  const waLink = "https://wa.me/573163258377?text=Hola%20Lex%20R,%20estoy%20listo%20para%20activar%20mi%20banco%20familiar";

  return (
    <section id="pricing" className="py-40 bg-black text-white relative">
      <div className="absolute inset-0 bg-emerald-500/5 blur-[200px] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-8xl font-serif font-bold mb-8 italic">El Costo de Seguir Igual...</h2>
          <p className="text-2xl text-slate-500 font-light max-w-3xl mx-auto italic">
            ¿Cuánto te costará en intereses el próximo año si no tomas el mando hoy?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Protocolo FAMIBAN */}
          <div className="p-16 rounded-[60px] bg-[#0A0A0A] border border-white/10 flex flex-col h-full hover:border-white/20 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors"><Lock size={120} /></div>
            <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter italic font-serif">Protocolo FAMIBAN</h3>
            <p className="text-slate-500 mb-12 font-light italic text-lg">El manual de operaciones que todo hogar necesita.</p>
            <div className="mb-12">
              <span className="text-7xl font-black italic text-emerald-500">$17</span>
              <span className="text-slate-600 ml-2 text-2xl uppercase font-black tracking-widest">USD</span>
              <p className="text-sm text-slate-500 mt-4 uppercase tracking-widest font-bold">Un solo pago • Acceso de por vida</p>
            </div>
            <ul className="space-y-6 mb-16 flex-grow text-slate-400">
              {["Manual 'El Código FAMIBAN'", "Excel de Captación Lex R", "Acta Legal Familiar", "Guía de Retos de 30 días"].map((t, i) => (
                <li key={i} className="flex items-start gap-4 text-lg italic">
                  <Check className="text-emerald-500 mt-1 shrink-0" size={24} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 bg-white text-black font-black rounded-full hover:bg-slate-200 transition-all uppercase text-sm tracking-[0.2em] text-center"
            >
              ACTIVAR PROTOCOLO
            </a>
          </div>

          {/* Círculo Dorado */}
          <div className="relative p-16 rounded-[60px] bg-black border-2 border-emerald-500 flex flex-col h-full shadow-[0_0_100px_rgba(16,185,129,0.2)] transform md:scale-110 z-20">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-emerald-500 text-black text-xs font-black rounded-full uppercase tracking-[0.3em] shadow-2xl">
              FUNDADORES ELITE
            </div>
            <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter italic font-serif text-emerald-500">Círculo Dorado</h3>
            <p className="text-slate-500 mb-12 font-light italic text-lg">Mentoría y Comunidad exclusiva.</p>
            <div className="mb-12">
              <div className="flex items-baseline gap-4">
                <span className="text-7xl font-black italic">$27</span>
                <span className="text-slate-600 text-2xl line-through">$197</span>
              </div>
              <p className="text-emerald-500 font-bold text-sm mt-4 italic uppercase tracking-widest">Inversión Inicial + $10 USD/mes de mantenimiento</p>
            </div>
            <ul className="space-y-6 mb-16 flex-grow">
              <li className="flex items-start gap-4">
                <Star className="text-emerald-500 mt-1 shrink-0 fill-emerald-500" size={24} />
                <span className="text-lg font-bold text-white italic">Todo lo del Protocolo FAMIBAN</span>
              </li>
              {["Sesiones Q&A en vivo con Lex R", "Comunidad de Fundadores", "Sistema de Comisiones (Referidos)", "Acceso a Portafolios Digitales"].map((t, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300 text-lg italic">
                  <Check className="text-emerald-500 mt-1 shrink-0" size={24} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer w-full py-7 bg-emerald-500 text-black font-black rounded-full transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-[0.2em] shadow-[0_15px_40px_rgba(16,185,129,0.4)] text-center"
            >
              UNIRME AL CÍRCULO DORADO
              <ArrowRight size={24} />
            </a>
          </div>
        </div>

        <div className="mt-32 text-center grayscale opacity-50 hover:grayscale-0 transition-all">
           <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.5em] mb-10">Transacciones Seguras</p>
           <div className="flex justify-center gap-12 flex-wrap">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-8" alt="Paypal" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-8" alt="Visa" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-10" alt="Mastercard" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
