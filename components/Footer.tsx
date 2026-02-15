
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-10">
          <h2 className="text-3xl font-serif font-black italic gold-gradient tracking-tighter">FAMIBAN</h2>
          <p className="text-slate-600 text-[10px] mt-1 uppercase tracking-[0.4em] font-black">Private Family Banking System</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-amber-500 transition-colors">Términos de Servicio</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Soporte</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
        </div>
        
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-slate-700 text-[10px] leading-relaxed italic">
            Este producto es un sistema educativo. Alexander Rincon no es un asesor financiero registrado. La implementación del banco familiar es responsabilidad del usuario. Los resultados varían según la disciplina de cada familia.
          </p>
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Alexander Rincon | FAMIBAN. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
