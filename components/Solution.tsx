
import React from 'react';
import { Landmark, ShieldCheck, Heart, PieChart, Zap, Globe } from 'lucide-react';

const Solution: React.FC = () => {
  const features = [
    { title: "Tu Propia Reserva", desc: "Aprende a captar el ahorro familiar y convertirlo en un fondo de inversión privado.", icon: <Landmark className="text-amber-500" /> },
    { title: "Auto-Financiamiento", desc: "Pide prestado a tu propio sistema, no a terceros. Los intereses se quedan en casa.", icon: <Zap className="text-amber-500" /> },
    { title: "Escuela de Valores", desc: "Tus hijos verán cómo se gestiona el dinero real, aprendiendo con el ejemplo.", icon: <Heart className="text-amber-500" /> },
    { title: "Activos Digitales", desc: "Estrategias para sembrar en la nueva economía mientras te proteges en familia.", icon: <Globe className="text-amber-500" /> },
    { title: "Reglamento y Orden", desc: "No es improvisación. Recibes el acta constitutiva y estatutos del banco.", icon: <ShieldCheck className="text-amber-500" /> },
    { title: "Dividendos Familiares", desc: "Al final del ciclo, los beneficios se reparten o se reinvierten en proyectos.", icon: <PieChart className="text-amber-500" /> }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <span className="text-amber-500 font-black tracking-widest uppercase text-xs mb-4 block">El Protocolo FAMIBAN</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold italic mt-2">No es un Ebook, es una Institución en tu hogar</h2>
          <p className="text-xl text-slate-500 mt-6 max-w-3xl mx-auto font-light leading-relaxed">
            Un sistema llave en mano para que tu familia opere con la inteligencia de un banco y el corazón de un legado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="group p-10 rounded-[40px] bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-amber-500/40 transition-all hover:-translate-y-2">
              <div className="mb-8 p-4 bg-black rounded-3xl w-fit shadow-2xl group-hover:shadow-amber-500/10 transition-all border border-white/5">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-serif">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light italic">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
