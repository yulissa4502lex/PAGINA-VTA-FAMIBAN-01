
import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-10 bg-amber-900/10 blur-[120px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200" 
              alt="Cena Familiar" 
              className="relative rounded-[50px] shadow-2xl grayscale-[0.5] hover:grayscale-0 transition-all duration-700 border border-white/5"
            />
            <div className="absolute top-10 -left-10 p-6 bg-black border border-amber-500/30 rounded-3xl hidden md:block backdrop-blur-md">
               <p className="text-amber-500 font-black italic text-xl">"¿Y si nosotros mismos somos el banco?"</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-sm font-black text-amber-500 tracking-[0.4em] uppercase mb-4">La chispa del cambio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic text-white leading-tight">Todo comenzó en una mesa común, pero con un sueño extraordinario...</h3>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed font-light italic">
              Era diciembre, la época donde la mayoría de las familias sufren por los gastos de último minuto. Lex R, cansado de ver el mismo ciclo financiero destructivo, propuso algo radical.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light italic">
              "No necesitamos más créditos bancarios. Necesitamos un sistema propio que nos proteja y nos haga crecer".
            </p>
            <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/5 to-transparent border-l-4 border-amber-500">
              <p className="text-white text-xl font-serif italic leading-relaxed">
                "El verdadero éxito no fue la cifra de la cuenta, sino ver a mis hijos proponer inversiones y entender el valor de cada centavo. Ese día, el dinero dejó de ser una preocupación para convertirse en nuestra herramienta de unión."
              </p>
              <p className="text-amber-500 font-black text-xs uppercase tracking-[0.2em] mt-6">— Alexander Rincon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
