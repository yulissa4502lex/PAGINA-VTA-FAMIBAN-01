
import React from 'react';
import { Award, ShieldCheck, Briefcase } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Alexander Rincon - Lex R" 
              className="relative rounded-[40px] border-2 border-amber-500/30 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 bg-amber-500 p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-black font-black text-4xl mb-1 italic leading-none">20+</p>
              <p className="text-black font-bold text-xs uppercase tracking-tighter">Años de experiencia <br/> en el sector bancario</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-black text-amber-500 tracking-[0.3em] uppercase mb-4">La mente detrás del sistema</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Alexander Rincon (Lex R)</h3>
            <p className="text-xl text-slate-300 mb-6 font-light leading-relaxed">
              Tras dos décadas viendo cómo los bancos tradicionales multiplican su riqueza a costa del desconocimiento de las familias, decidió "voltear la mesa".
            </p>
            <p className="text-lg text-slate-400 mb-10 font-light italic">
              "He visto miles de créditos, balances y quiebras. Entendí que el secreto no está en el producto financiero, sino en la estructura familiar que lo soporta."
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500"><Briefcase size={20}/></div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm tracking-wide">Ex-Ejecutivo Bancario</h4>
                  <p className="text-slate-500 text-sm">Conocimiento profundo de las reglas del juego financiero.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500"><Award size={20}/></div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm tracking-wide">Mentor de Legado</h4>
                  <p className="text-slate-500 text-sm">Especialista en estructurar activos que trascienden generaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
