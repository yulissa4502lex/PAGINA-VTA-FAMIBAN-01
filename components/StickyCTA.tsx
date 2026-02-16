
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const waLink = "https://wa.me/573163258377?text=Hola%20Lex%20R,%20quiero%20empezar%20mi%20banco%20ahora";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-emerald-500/30 p-4 z-50 animate-in fade-in slide-in-from-bottom-5">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-4">
          <div className="p-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]">
            <Star size={14} className="text-black fill-black" />
          </div>
          <div>
            <p className="text-white font-black italic text-sm tracking-tight">Toma el mando de tu economía hoy</p>
            <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest">Oferta disponible por tiempo limitado</p>
          </div>
        </div>
        <a 
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow sm:flex-grow-0 px-8 py-3.5 bg-emerald-500 text-black font-black rounded-full transition-all flex items-center justify-center gap-2 text-xs shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-widest text-center"
        >
          ACTIVAR MI BANCO AHORA
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
