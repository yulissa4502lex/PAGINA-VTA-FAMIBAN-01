
import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const WhatIsInside: React.FC = () => {
  const modules = [
    { num: "01", title: "Psicología de la Riqueza Familiar", focus: "Rompiendo los techos de cristal heredados." },
    { num: "02", title: "La Estructura Bancaria", focus: "Cómo organizar los roles: Tesorero, Auditor y Socios." },
    { num: "03", title: "El Acta Constitutiva", focus: "Estatutos reales para que el banco perdure años." },
    { num: "04", title: "Mecánica de Captación", focus: "Cómo convertir gastos hormiga en capital de inversión." },
    { num: "05", title: "Créditos de Honor", focus: "Financiando sueños familiares sin burocracia externa." },
    { num: "06", title: "Inversión en la Nueva Economía", focus: "Activos digitales y diversificación inteligente." },
    { num: "07", title: "El Ritual del Balance", focus: "Reuniones que celebran el avance, no el castigo." },
    { num: "08", title: "Educación de Próxima Generación", focus: "Actividades prácticas para niños de 5 a 18 años." }
  ];

  return (
    <section className="py-32 bg-[#080808]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight italic">Tu Manual de Operaciones Financieras</h2>
            <p className="text-lg text-slate-400 mb-10 font-light leading-relaxed">
              Recibirás el método paso a paso que Alexander Rincon usa en su propia familia para mantener la unión y el crecimiento constante.
            </p>
            <ul className="space-y-6">
              {[
                "Manual Digital 'El Banco Familiar'",
                "Plantillas de Excel Automatizadas",
                "Modelos de Actas y Reglamentos",
                "Guía de Dinámicas con Niños"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-medium group">
                  <div className="p-1 bg-amber-500 rounded-full group-hover:scale-125 transition-transform">
                    <CheckCircle2 size={16} className="text-black" />
                  </div>
                  <span className="tracking-tight italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-3/5">
            <div className="grid sm:grid-cols-2 gap-4">
              {modules.map((m, idx) => (
                <div key={idx} className="p-8 bg-black rounded-3xl border border-white/5 hover:border-amber-500/20 transition-all group">
                  <span className="text-amber-500 font-black text-xs uppercase tracking-widest block mb-4 opacity-50">Módulo {m.num}</span>
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 flex items-center gap-2">
                    {m.title}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-slate-500 text-sm italic font-light">{m.focus}</p>
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
