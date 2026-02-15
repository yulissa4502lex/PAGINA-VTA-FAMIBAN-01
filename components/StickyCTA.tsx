
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-amber-500/30 p-4 z-50 animate-in fade-in slide-in-from-bottom-5">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-4">
          <div className="p-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            <Star size={14} className="text-black fill-black" />
          </div>
          <div>
            <p className="text-white font-black italic text-sm tracking-tight">Toma el mando de tu economía</p>
            <p className="text-amber-500 text-[10px] uppercase font-bold tracking-widest">Últimos accesos con bono exclusivo</p>
          </div>
        </div>
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex-grow sm:flex-grow-0 px-8 py-3.5 gold-bg text-black font-black rounded-full transition-all flex items-center justify-center gap-2 text-xs shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-widest"
        >
          ACTIVAR MI BANCO AHORA
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
