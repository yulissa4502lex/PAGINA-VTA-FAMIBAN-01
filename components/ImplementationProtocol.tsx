
import React from 'react';
import { Key, Shield, UserCheck, TrendingUp, ArrowRight } from 'lucide-react';

const ImplementationProtocol: React.FC = () => {
  const steps = [
    {
      title: "Desbloqueo de Mentalidad",
      desc: "Descifrarás por qué el sistema actual te programa para gastar antes de recibir. Limpieza de deudas 'emocionales'.",
      icon: <Key className="text-emerald-500" />,
      tag: "Paso 01"
    },
    {
      title: "Activación del Acta",
      desc: "Se establecen las bases legales internas. Nadie saca dinero sin un propósito. El banco protege a los socios (madre, hermanos, tú).",
      icon: <Shield className="text-emerald-500" />,
      tag: "Paso 02"
    },
    {
      title: "El Multiplicador",
      desc: "Instalación del sistema de captación. Los gastos innecesarios se transforman automáticamente en capital de reserva.",
      icon: <TrendingUp className="text-emerald-500" />,
      tag: "Paso 03"
    }
  ];

  return (
    <section className="py-40 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-7xl font-serif font-bold italic text-white mb-6">El Código de 3 Fases</h2>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Un sistema que desconecta tu familia de la matriz financiera tradicional y la conecta a un futuro de abundancia real.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group p-12 rounded-[50px] bg-[#0a0a0a] border border-white/5 hover:border-emerald-500/40 transition-all shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
              <div className="absolute -top-6 left-12 px-6 py-2 bg-emerald-500 text-black text-xs font-black rounded-full uppercase tracking-[0.2em] shadow-lg">
                {step.tag}
              </div>
              <div className="mb-10 p-6 bg-emerald-500/5 rounded-[30px] w-fit border border-emerald-500/10 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white font-serif">{step.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-light italic">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationProtocol;
