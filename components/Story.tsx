
import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="py-40 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-black text-emerald-500 tracking-[0.5em] uppercase mb-6">El Origen del Protocolo</h2>
            <h3 className="text-4xl md:text-7xl font-serif font-bold mb-10 italic text-white leading-[1.1]">No fue suerte. <br/> Fue ingeniería familiar.</h3>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light italic">
              Vi a mi propia madre y hermanos atrapados en el ciclo de felicidad prestada que los bancos venden cada año. Vi cómo las fechas importantes se convertían en fuentes de ansiedad en lugar de alegría.
            </p>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light italic">
              "Me cansé de ver cómo el capital de las familias honestas fluía hacia afuera para pagar deudas innecesarias. Creé FAMIBAN para que el dinero se quede donde debe estar: <span className="text-emerald-500 font-bold italic underline decoration-emerald-500/40">Dentro de tu hogar</span>."
            </p>
            <div className="p-12 rounded-[50px] bg-gradient-to-br from-[#0a0a0a] to-black border border-emerald-500/20 shadow-[0_30px_70px_rgba(0,0,0,1)] group">
              <p className="text-white text-2xl font-serif italic leading-relaxed group-hover:text-emerald-400 transition-colors">
                "Hoy no nos preocupa el banco. Nos preocupa el legado. Mis hermanos y mi madre son socios de un sistema que nos protege y nos une más que cualquier cena navideña."
              </p>
              <div className="mt-10 flex items-center gap-4">
                 <div className="w-16 h-px bg-emerald-500/30"></div>
                 <p className="text-emerald-500 font-black text-xs uppercase tracking-[0.4em]">Lex R</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[60px] overflow-hidden group border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573164060897-425941c30241?auto=format&fit=crop&q=80&w=1000" 
                alt="Estrategia Familiar" 
                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-emerald-500/20 blur-[100px] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
