
import React from 'react';
import { Gavel, FileText, Users, Scale, ShieldCheck, ArrowRight } from 'lucide-react';

const ImplementationProtocol: React.FC = () => {
  const steps = [
    {
      title: "El Acta Constitutiva",
      desc: "El primer paso es la firma del acta. No es un papel más, es el contrato emocional donde se definen los valores, el propósito del banco y el compromiso de cada integrante.",
      icon: <FileText className="text-amber-500" />,
      tag: "Fase 1: Fundación"
    },
    {
      title: "Los Estatutos y Roles",
      desc: "Aquí conectamos las políticas. Definimos quién es el Tesorero (gestión), quién el Auditor (transparencia) y quiénes los Socios. Se establecen las tasas de ahorro y reglas de crédito.",
      icon: <Users className="text-amber-500" />,
      tag: "Fase 2: Estructura"
    },
    {
      title: "El Sistema de Justicia Familiar",
      desc: "Las políticas se mantienen vivas a través de las reuniones mensuales. Se revisan acuerdos, se premia el cumplimiento y se ajustan las misiones de los niños.",
      icon: <Gavel className="text-amber-500" />,
      tag: "Fase 3: Operación"
    }
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex p-3 bg-amber-500/10 rounded-2xl mb-6 border border-amber-500/20">
            <Scale className="text-amber-500" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold italic mb-6">
            ¿Cómo se conectan las políticas en casa?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Un banco sin reglas es un caos. FAMIBAN te entrega el marco "legal" para que tu sistema financiero sea <span className="text-white font-bold italic underline decoration-amber-500">indestructible y justo.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group p-10 rounded-[40px] bg-black border border-white/5 hover:border-amber-500/30 transition-all">
              <div className="absolute -top-4 left-10 px-4 py-1 gold-bg text-black text-[10px] font-black rounded-full uppercase tracking-widest">
                {step.tag}
              </div>
              <div className="mb-8 p-4 bg-white/5 rounded-3xl w-fit group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-serif">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light italic mb-6">
                {step.desc}
              </p>
              <div className="flex items-center gap-2 text-amber-500 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Ver detalle del protocolo <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-black border border-amber-500/20 rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/4">
             <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400" 
                  alt="Legal Document" 
                  className="relative rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
                />
             </div>
          </div>
          <div className="md:w-3/4">
            <h4 className="text-2xl font-serif font-bold mb-4 italic text-white">El Blindaje del Legado</h4>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
              "Conectar las políticas" significa que cada miembro de la familia entiende que hay un orden superior. En el curso, Lex R te enseña a redactar los <span className="text-amber-500 font-bold">Acuerdos de Prosperidad</span> que evitan discusiones por dinero y fomentan el ahorro sistemático.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-black">
                  <ShieldCheck size={14} className="text-amber-500" /> Transparencia Total
               </div>
               <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-black">
                  <ShieldCheck size={14} className="text-amber-500" /> Cero Conflictos
               </div>
               <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-black">
                  <ShieldCheck size={14} className="text-amber-500" /> Crecimiento Seguro
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProtocol;
