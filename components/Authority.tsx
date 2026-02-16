
import React from 'react';
import { Award, ShieldCheck, Briefcase } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Lex R" 
              className="relative rounded-[40px] border-2 border-emerald-500/30 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl h-[500px] w-full object-cover"
            />
            <div className="absolute -bottom-10 -right-10 bg-emerald-500 p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-black font-black text-4xl mb-1 italic leading-none">20+</p>
              <p className="text-black font-bold text-xs uppercase tracking-tighter">Años de experiencia <br/> financiera aplicada</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-black text-emerald-500 tracking-[0.3em] uppercase mb-4">El Arquitecto del Sistema</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Lex R</h3>
            <p className="text-xl text-slate-300 mb-6 font-light leading-relaxed">
              Tras dos décadas operando en el sistema bancario, Lex R descubrió que la verdadera libertad no está en un banco externo, sino en la capacidad de una familia de autogestionarse.
            </p>
            <p className="text-lg text-slate-400 mb-10 font-light italic">
              "He visto a miles de personas caer en las garras de agiotistas por pura desesperación. FAMIBAN nació para que ninguna familia vuelva a sentir ese miedo."
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><Briefcase size={20}/></div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm tracking-wide">Estratega Financiero</h4>
                  <p className="text-slate-500 text-sm">20 años descifrando los secretos de la banca tradicional.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><Award size={20}/></div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm tracking-wide">Mentor Familiar</h4>
                  <p className="text-slate-500 text-sm">Especialista en fortalecer lazos mediante la prosperidad compartida.</p>
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
