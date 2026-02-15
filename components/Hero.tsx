
import React from 'react';
import { ArrowRight, ShieldCheck, Landmark } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white pt-24 pb-32">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600 rounded-full blur-[200px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-900 rounded-full blur-[180px] -ml-64 -mb-64"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-black tracking-widest mb-8 uppercase">
          <Landmark size={14} />
          <span>Legado Financiero por Alexander Rincon</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-8 leading-[1.1]">
          Deja de ser cliente de los bancos y <br />
          <span className="gold-gradient italic">Conviértete en el Banco de tu Familia</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          Aprende a financiar tus propios proyectos, eliminar la escasez y educar a tus hijos con un sistema real creado por un experto con <span className="text-amber-500 font-bold">20 años en la banca tradicional.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="shimmer w-full sm:w-auto px-10 py-5 gold-bg text-black font-black text-lg rounded-full transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(191,149,63,0.3)] flex items-center justify-center gap-2 uppercase tracking-tighter"
          >
            SÍ, QUIERO MI PROPIO BANCO FAMILIAR
            <ArrowRight size={22} />
          </button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 text-slate-500 text-xs font-bold tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
            Unión Familiar
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
            Activos Digitales
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
            Educación Generacional
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
