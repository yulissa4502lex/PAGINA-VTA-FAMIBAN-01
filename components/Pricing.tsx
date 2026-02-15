
import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">Inicia tu Dinastía Financiera</h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto italic">
            El precio de la improvisación es el estrés. El precio del sistema es la libertad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Base Tier */}
          <div className="p-12 rounded-[50px] bg-[#0A0A0A] border border-white/10 flex flex-col h-full hover:border-white/20 transition-all">
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter italic">Protocolo FAMIBAN</h3>
            <p className="text-slate-500 mb-10 font-light italic">Acceso total al método y herramientas.</p>
            <div className="mb-10">
              <span className="text-5xl font-black italic">$27</span>
              <span className="text-slate-600 ml-2 text-xl">USD</span>
              <p className="text-xs text-slate-500 mt-2">Acceso de por vida • Pago único</p>
            </div>
            <ul className="space-y-5 mb-12 flex-grow text-slate-400">
              <li className="flex items-start gap-3">
                <Check className="text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-sm">Ebook Maestro (Estrategia Lex R)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-sm">Kit de Herramientas Excel Automatizadas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-sm">Modelos Legales del Banco Familiar</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-sm">Bono: Guía de Retos de 30 días</span>
              </li>
            </ul>
            <button className="w-full py-5 bg-white text-black font-black rounded-full hover:bg-slate-200 transition-all uppercase text-sm tracking-widest">
              OBTENER EL PROTOCOLO
            </button>
          </div>

          {/* Premium Tier */}
          <div className="relative p-12 rounded-[50px] bg-black border-2 border-amber-500 flex flex-col h-full shadow-[0_0_60px_rgba(191,149,63,0.15)] transform md:scale-105">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 gold-bg text-black text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl">
              Experiencia Elite
            </div>
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter italic gold-gradient">Círculo Dorado FAMIBAN</h3>
            <p className="text-slate-500 mb-10 font-light italic">Crecimiento en comunidad y mentoría.</p>
            <div className="mb-10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black italic">$27</span>
                <span className="text-slate-600 text-sm line-through">$147</span>
              </div>
              <p className="text-amber-500 font-bold text-xs mt-2 italic uppercase">Solo $10 USD/mes adicionales para mentoría en vivo</p>
            </div>
            <ul className="space-y-5 mb-12 flex-grow">
              <li className="flex items-start gap-3">
                <Star className="text-amber-500 mt-1 shrink-0 fill-amber-500" size={18} />
                <span className="text-sm font-bold text-white">Todo lo del Protocolo FAMIBAN</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-sm text-slate-300">Sesiones Q&A mensuales con Alexander Rincon</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-sm text-slate-300">Comunidad Privada de Fundadores de Bancos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-sm text-slate-300">Sistema Dorado de Referidos (Comisiones)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-sm text-slate-300">Acceso a Inversiones Digitales Exclusivas</span>
              </li>
            </ul>
            <button className="shimmer w-full py-6 gold-bg text-black font-black rounded-full transition-all flex items-center justify-center gap-2 uppercase text-sm tracking-widest shadow-[0_10px_30px_rgba(191,149,63,0.3)]">
              UNIRME AL CÍRCULO DORADO
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-6 px-10 py-5 rounded-full bg-white/5 border border-white/10 grayscale opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
          </div>
          <p className="text-slate-500 text-xs mt-8 font-light italic">
            Garantía incondicional de 7 días. Si no sientes que puedes transformar tu familia, te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
