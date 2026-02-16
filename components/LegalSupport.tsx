
import React, { useState } from 'react';
import { X, Shield, FileText, MessageCircle, HelpCircle } from 'lucide-react';

const LegalSupport: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const Modal = ({ title, content, onClose }: { title: string, content: React.ReactNode, onClose: () => void }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-[#111] border border-white/10 w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-2xl font-serif font-bold italic text-white">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-400">
            <X size={24} />
          </button>
        </div>
        <div className="p-8 max-h-[60vh] overflow-y-auto text-slate-400 font-light leading-relaxed space-y-4">
          {content}
        </div>
      </div>
    </div>
  );

  const supportContent = (
    <>
      <p>Nuestro equipo de soporte está disponible para ayudarte a fundar tu banco familiar.</p>
      <div className="bg-emerald-500/5 p-6 rounded-3xl border border-emerald-500/20">
        <h4 className="text-emerald-500 font-bold mb-2">WhatsApp Business Directo</h4>
        <p className="mb-4">Para consultas rápidas sobre el protocolo o problemas con tu acceso.</p>
        <a href="https://wa.me/573163258377" target="_blank" className="inline-flex items-center gap-2 text-white font-bold bg-emerald-500 px-6 py-3 rounded-full hover:scale-105 transition-transform">
          <MessageCircle size={18} /> Chat con Lex R
        </a>
      </div>
      <p>Horario de atención: Lunes a Viernes (9:00 AM - 6:00 PM EST)</p>
    </>
  );

  const privacyContent = (
    <>
      <p>En FAMIBAN, valoramos la privacidad de tu familia. No compartimos tus datos financieros internos con terceros.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Tus plantillas de Excel son locales; nosotros no tenemos acceso a tus balances familiares.</li>
        <li>Tu correo electrónico solo se usa para enviarte actualizaciones del sistema y noticias de prosperidad.</li>
        <li>Usamos encriptación de grado bancario para procesar tus pagos de suscripción.</li>
      </ul>
    </>
  );

  const termsContent = (
    <>
      <p>Al adquirir FAMIBAN, aceptas que:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Lex R provee un sistema educativo, no asesoría financiera regulada.</li>
        <li>La responsabilidad del manejo del capital familiar recae exclusivamente en los miembros de tu hogar.</li>
        <li>El Círculo Dorado requiere un pago mensual de $10 USD para mantener el acceso a mentorías y comunidad.</li>
        <li>La garantía de devolución es válida por 7 días naturales desde la compra.</li>
      </ul>
    </>
  );

  return (
    <>
      <div className="bg-black py-10 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-10">
          <button onClick={() => setActiveModal('support')} className="flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest">
            <HelpCircle size={14} /> Soporte
          </button>
          <button onClick={() => setActiveModal('privacy')} className="flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest">
            <Shield size={14} /> Privacidad
          </button>
          <button onClick={() => setActiveModal('terms')} className="flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest">
            <FileText size={14} /> Términos
          </button>
        </div>
      </div>

      {activeModal === 'support' && <Modal title="Centro de Soporte" content={supportContent} onClose={() => setActiveModal(null)} />}
      {activeModal === 'privacy' && <Modal title="Política de Privacidad" content={privacyContent} onClose={() => setActiveModal(null)} />}
      {activeModal === 'terms' && <Modal title="Términos de Servicio" content={termsContent} onClose={() => setActiveModal(null)} />}
    </>
  );
};

export default LegalSupport;
