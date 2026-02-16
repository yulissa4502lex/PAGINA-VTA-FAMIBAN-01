
import React from 'react';
import { AlertCircle, Landmark, TrendingDown, Clock, Ghost } from 'lucide-react';

const Problem: React.FC = () => {
  const painPoints = [
    {
      title: "El Diezmo Bancario",
      desc: "Estás pagando un 'impuesto' eterno a los accionistas bancarios por créditos que podrías financiar tú mismo.",
      icon: <Landmark className="text-emerald-500" />
    },
    {
      title: "Esclavitud por Fechas",
      desc: "Diciembre, cumpleaños, vacaciones... cada fecha importante se convierte en un ancla de deuda que arrastras meses.",
      icon: <Clock className="text-emerald-500" />
    },
    {
      title: "Extorsión Informal",
      desc: "El peligro de los agiotistas que devoran la paz de tu hogar ante la falta de un respaldo financiero interno.",
      icon: <AlertCircle className="text-emerald-500" />
    },
    {
      title: "Desangre de Linaje",
      desc: "La riqueza sale de tu familia en mil grietas porque no existe un sistema que la retenga y la multiplique.",
      icon: <Ghost className="text-emerald-500" />
    }
  ];

  return (
    <section className="py-40 bg-[#050505] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 italic">Estás financiando el futuro de extraños.</h2>
          <p className="text-2xl text-slate-500 max-w-4xl mx-auto font-light leading-relaxed">
            Mientras tu familia se esfuerza, las instituciones externas se quedan con el fruto de tu trabajo a través de intereses que no deberían existir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <div key={idx} className="p-12 rounded-[40px] bg-black border border-white/5 hover:border-emerald-500/20 transition-all group hover:-translate-y-2">
              <div className="mb-8 p-5 bg-emerald-500/5 rounded-3xl w-fit group-hover:scale-110 transition-transform border border-emerald-500/10">{point.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 font-serif">{point.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light italic">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 max-w-5xl mx-auto p-1 text-transparent bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 bg-clip-border rounded-[50px]">
          <div className="p-16 bg-black rounded-[49px] text-center">
             <p className="text-3xl md:text-4xl font-serif leading-snug text-white">
              "El sistema bancario está diseñado para que nunca termines de pagar. <span className="text-emerald-500 font-bold italic">FAMIBAN</span> es el botón de reset de tu economía."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
