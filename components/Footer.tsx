
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-black italic text-emerald-500 tracking-tighter">FAMIBAN</h2>
          <p className="text-slate-600 text-[10px] mt-2 uppercase tracking-[0.6em] font-black">Private Family Banking System</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-slate-700 text-[10px] leading-relaxed italic uppercase tracking-widest font-medium">
            FAMIBAN es una marca propiedad de Lex R. Este material es estrictamente educativo. No constituye asesoría financiera legal ni regulada. La implementación de los protocolos y el manejo del capital familiar es responsabilidad absoluta de los usuarios.
          </p>
          <div className="w-12 h-px bg-white/10 mx-auto"></div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Lex R | FAMIBAN. El legado comienza en casa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
