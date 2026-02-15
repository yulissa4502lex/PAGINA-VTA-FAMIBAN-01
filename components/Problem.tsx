
import React from 'react';
import { AlertTriangle, TrendingDown, Users, DollarSign } from 'lucide-react';

const Problem: React.FC = () => {
  const painPoints = [
    {
      title: "La Trampa del Consumo",
      desc: "Vivir pagando intereses a bancos externos mientras tus propios sueños se quedan sin gasolina.",
      icon: <TrendingDown className="text-amber-500" />
    },
    {
      title: "Desconexión Familiar",
      desc: "El dinero suele ser el motivo #1 de conflicto. FAMIBAN lo convierte en el motivo #1 de unión.",
      icon: <Users className="text-amber-500" />
    },
    {
      title: "Crisis en Diciembre",
      desc: "¿Cansado de que las épocas especiales signifiquen deudas y estrés en lugar de paz?",
      icon: <AlertTriangle className="text-amber-500" />
    },
    {
      title: "Hijos Sin Futuro",
      desc: "Si no les enseñas tú a gestionar el dinero, el sistema les enseñará a ser esclavos de él.",
      icon: <DollarSign className="text-amber-500" />
    }
  ];

  return (
    <section className="py-32 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">El sistema tradicional te quiere solo y endeudado</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto font-light">
            Es hora de dejar de alimentar las arcas ajenas y empezar a capitalizar el amor y el esfuerzo de tu propia familia. 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-black border border-white/10 hover:border-amber-500/50 transition-all group">
              <div className="mb-6 p-4 bg-amber-500/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">{point.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-400">{point.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-light italic">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-r from-amber-950/20 to-black text-white rounded-[40px] border border-amber-500/20 text-center max-w-5xl mx-auto">
          <p className="text-2xl md:text-3xl font-serif leading-snug">
            "No es un problema de cuánto ganas, sino de <span className="text-amber-500 font-bold">quién controla el flujo</span> de lo que ganas."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
