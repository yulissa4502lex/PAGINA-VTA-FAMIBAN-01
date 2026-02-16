
import React from 'react';
import { Lock, ChevronRight, ShieldCheck } from 'lucide-react';

const WhatIsInside: React.FC = () => {
  const modules = [
    { num: "01", title: "El Algoritmo Mental", focus: "Eliminando el virus de la deuda bancaria innecesaria." },
    { num: "02", title: "Arquitectura del Banco", focus: "Roles estratégicos: Del Tesorero al Auditor de Linaje." },
    { num: "03", title: "El Acta de Soberanía", focus: "Documentos legales internos que blindan tu apellido." },
    { num: "04", title: "Captación Maestro", focus: "Cómo 'robarle' intereses al banco para tu familia." },
    { num: "05", title: "Ciclo de Fechas Clave", focus: "Planificación táctica para eventos importantes sin estrés." },
    { num: "06", title: "Factoría de Activos", focus: "Iniciación en finanzas personales y activos digitales." },
    { num: "07", title: "Reuniones de Élite", focus: "El ritual que fortalece lazos y celebra dividendos." },
    { num: "08", title: "Legado Generacional", focus: "Entrenando a los socios del futuro (tus hijos)." }
  ];

  return (
    <section className="py-40 bg-[#080808]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-2/5">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight italic">Descifra el Sistema Digital.</h2>
            <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
              Recibirás el código fuente que Lex R diseñó para que su propia familia dejara de ser dependiente de entidades financieras externas.
            </p>
            <div className="space-y-6">
              {[
                "Dossier Digital 'El Código FAMIBAN'",
                "Calculadora de Captación Automatizada",
                "Plantillas de Actas de Soberanía",
                "Protocolo de Fechas Importantes"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white font-medium group">
                  <div className="p-1.5 bg-emerald-500 rounded-lg group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <ShieldCheck size={18} className="text-black" />
                  </div>
                  <span className="tracking-tight italic text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="grid sm:grid-cols-2 gap-6">
              {modules.map((m, idx) => (
                <div key={idx} className="p-10 bg-black rounded-[40px] border border-white/5 hover:border-emerald-500/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors">
                    <Lock size={60} />
                  </div>
                  <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em] block mb-6 opacity-60">Fase {m.num}</span>
                  <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 flex items-center gap-2 font-serif italic">
                    {m.title}
                  </h4>
                  <p className="text-slate-500 text-sm italic font-light leading-relaxed">{m.focus}</p>
                  <ChevronRight size={16} className="mt-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsInside;
