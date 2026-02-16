
import React from 'react';
import { BookOpen, ShieldCheck, Zap, Layers, Target, Coins } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-40 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            {/* Visual Creative: The FAMIBAN Mockups */}
            <div className="relative z-10 perspective-1000">
               <div className="flex items-center justify-center -space-x-16">
                  {/* Workbook Mockup */}
                  <div className="w-[260px] h-[360px] bg-[#111] border-2 border-emerald-500/30 rounded-r-lg shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-700 p-8 flex flex-col justify-between group">
                     <div className="space-y-4">
                        <div className="w-12 h-1 bg-emerald-500"></div>
                        <h4 className="text-2xl font-serif font-black italic text-emerald-500 tracking-tighter">PROTOCOLO</h4>
                        <p className="text-[9px] uppercase font-black text-slate-500 tracking-widest">Actas & Reglamentos</p>
                     </div>
                     <div className="text-emerald-900 text-[8px] font-mono group-hover:text-emerald-500 transition-colors">LR-SYS-01 // CONFIDENCIAL</div>
                  </div>
                  {/* Main Book Mockup */}
                  <div className="w-[300px] h-[440px] bg-gradient-to-br from-[#0a0a0a] to-[#151515] border-2 border-emerald-500 rounded-r-2xl shadow-[0_0_100px_rgba(16,185,129,0.3)] z-20 flex flex-col justify-between p-12 transform hover:-translate-y-4 transition-all duration-700">
                     <div className="space-y-8">
                        <div className="inline-block px-3 py-1 bg-emerald-500 text-black text-[8px] font-black rounded uppercase tracking-[0.4em]">Master System</div>
                        <h4 className="text-5xl font-serif font-black italic text-white leading-none">EL CÓDIGO <br/> FAMIBAN</h4>
                        <div className="w-full h-px bg-white/10"></div>
                        <p className="text-[10px] font-black text-emerald-500/80 uppercase tracking-widest leading-relaxed">Manual Maestro de Operaciones Financieras Familiares</p>
                     </div>
                     <div className="flex justify-between items-end">
                        <div className="text-white/40 text-[10px] font-black tracking-widest">BY LEX R</div>
                        <Layers className="text-emerald-500" size={40} />
                     </div>
                  </div>
                  {/* Excel/Software Simulation */}
                  <div className="w-[260px] h-[360px] bg-[#050505] border-2 border-emerald-500/20 rounded-r-lg shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-700 p-8 flex flex-col justify-between group">
                     <div className="space-y-4">
                        <div className="w-12 h-1 bg-emerald-500/50"></div>
                        <h4 className="text-xl font-serif font-black italic text-slate-400 tracking-tighter uppercase">Calculadora <br/> de Captación</h4>
                        <p className="text-[9px] uppercase font-black text-emerald-900 tracking-widest group-hover:text-emerald-500">Automatizado</p>
                     </div>
                     <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => <div key={i} className="w-full h-1 bg-emerald-500/10 rounded-full"></div>)}
                     </div>
                  </div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 text-left">
            <span className="text-emerald-500 font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Desbloquea el Sistema</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold italic mb-8 leading-tight text-white">Tu familia es una empresa financiera. <br/><span className="text-emerald-500">Trátala como tal.</span></h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              FAMIBAN no es solo un curso; es la <span className="text-white font-bold italic">tecnología social</span> que Lex R utiliza para centralizar la riqueza, eliminar los pagos a terceros y fortalecer los lazos mediante la prosperidad compartida.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
               {[
                 { t: "Adiós a los Bancos", d: "Financia tus proyectos con capital familiar al 0%.", icon: <Target className="text-emerald-500" /> },
                 { t: "Control de Fechas", d: "Anticípate a cada evento del año con un plan maestro.", icon: <Zap className="text-emerald-500" /> },
                 { t: "Blindaje de Linaje", d: "Protección absoluta contra prestamistas y crisis.", icon: <ShieldCheck className="text-emerald-500" /> },
                 { t: "Activos en Crecimiento", d: "Aprende a crear activos digitales en familia.", icon: <Coins className="text-emerald-500" /> }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col gap-3 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all">
                    <div className="p-2 bg-emerald-500/10 rounded-xl w-fit">{item.icon}</div>
                    <h4 className="text-white font-bold font-serif text-lg italic">{item.t}</h4>
                    <p className="text-slate-500 text-sm italic font-light leading-snug">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
