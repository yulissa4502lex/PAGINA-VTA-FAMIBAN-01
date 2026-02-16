
import React from 'react';
import { ArrowRight, Lock, Landmark, Sparkles, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const waLink = "https://wa.me/573163258377?text=Hola%20Lex%20R,%20quiero%20descifrar%20el%20Código%20FAMIBAN";

  return (
    <section className="relative overflow-hidden bg-black text-white pt-28 pb-40">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-emerald-600/20 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black tracking-[0.5em] mb-10 uppercase animate-pulse">
          <Lock size={12} />
          <span>Acceso Restringido: El Protocolo Lex R</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black mb-10 leading-[1] tracking-tighter">
          No heredes deudas. <br />
          <span className="text-emerald-500 italic">Hereda el Banco.</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-400 max-w-5xl mx-auto mb-16 leading-relaxed font-light">
          Existe un <span className="text-white font-bold italic underline decoration-emerald-500">algoritmo financiero silencioso</span> que permite a las familias absorber los beneficios que hoy regalas a los bancos y prestamistas. Toma el control total en cada <span className="text-white font-bold">Fecha Importante</span> del año.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer px-16 py-6 bg-emerald-500 text-black font-black text-xl rounded-full transition-all transform hover:scale-105 hover:rotate-1 shadow-[0_20px_50px_rgba(16,185,129,0.4)] flex items-center justify-center gap-3 uppercase tracking-widest"
          >
            DESCIFRAR EL CÓDIGO FAMIBAN
            <ArrowRight size={24} />
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase">
          <div className="flex items-center gap-2 text-emerald-500/80">
            <ShieldCheck size={14} />
            Unión Estratégica
          </div>
          <div className="flex items-center gap-2 text-emerald-500/80">
            <ShieldCheck size={14} />
            Sin deudas externas innecesarias
          </div>
          <div className="flex items-center gap-2 text-emerald-500/80">
            <ShieldCheck size={14} />
            Soberanía Financiera
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
