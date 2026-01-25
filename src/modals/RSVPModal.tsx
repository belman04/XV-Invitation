import React, { useState } from 'react';
import { X, Check, Users, Minus, Plus } from 'lucide-react';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // ... (lógica de envío igual)
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdlwA1x9tumH5XhW8iX1o1iBJ-w7zqfCdjYHNl6MtrmJlNf0A/formResponse";
    const ENTRY_NAME = "entry.1275396921";
    const ENTRY_ADULTS = "entry.914025087";
    const ENTRY_KIDS = "entry.766816418";
    const formData = new FormData();
    const formElements = e.target as HTMLFormElement;
    const nameInput = formElements.elements.namedItem('name') as HTMLInputElement;
    formData.append(ENTRY_NAME, nameInput.value);
    formData.append(ENTRY_ADULTS, adults.toString());
    formData.append(ENTRY_KIDS, kids.toString());

    try {
      await fetch(GOOGLE_FORM_URL, { method: "POST", mode: "no-cors", body: formData });
      setIsSuccess(true);
      setTimeout(() => { onClose(); setIsSuccess(false); setAdults(1); setKids(0); }, 3000);
    } catch (error) {
      console.error(error);
      alert("Error al enviar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay: Asegúrate de que no tenga blur excesivo si se ve mal */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose}></div>
      
      <div className="bg-marfil rounded-[2.5rem] w-full max-w-lg p-8 md:p-10 relative shadow-2xl border border-white/50 animate-fade-in-up">
        
        {/* BOTÓN CERRAR: Forzado sin fondo y con color gris oscuro */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-4 text-[#555555] hover:text-rosa-mexicano transition-colors p-2 z-10 bg-transparent border-none outline-none"
        >
          <X size={32} strokeWidth={2} />
        </button>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-cafe mb-10 font-serif italic">
          Confirmar Asistencia
        </h2>

        {isSuccess ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-3xl font-bold text-cafe font-serif tracking-tight">¡Confirmado!</h3>
            <p className="text-gray-500 mt-3 text-lg italic">Nos vemos pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <div className="space-y-3">
              <label className="block text-sm font-bold text-cafe tracking-widest uppercase ml-1">Nombre de Familia</label>
              <input 
                name="name" 
                type="text" 
                className="w-full border-none rounded-2xl p-5 bg-white shadow-inner focus:ring-2 focus:ring-rosa-palo/40 outline-none transition-all text-lg italic text-gray-700 placeholder:text-gray-300" 
                placeholder="Ej. Familia Pérez" 
                required 
                disabled={isSubmitting} 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Contador Adultos */}
              <div className="bg-white/50 p-6 rounded-[2rem] border border-white shadow-sm text-center">
                <label className="block text-xs font-bold text-cafe mb-4 uppercase">Adultos</label>
                <div className="flex items-center justify-center gap-4">
                  <button 
                    type="button" 
                    onClick={() => setAdults(Math.max(1, adults - 1))} 
                    className="w-14 h-14 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-rosa-mexicano hover:text-white transition-all shadow-md active:scale-95"
                  >
                    <Minus size={28} color="#333333" strokeWidth={3} className="group-hover:stroke-white" />
                  </button>
                  <span className="text-3xl font-bold text-[#333333] w-8">{adults}</span>
                  <button 
                    type="button" 
                    onClick={() => setAdults(adults + 1)} 
                    className="w-14 h-14 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-rosa-mexicano hover:text-white transition-all shadow-md active:scale-95"
                  >
                    <Plus size={28} color="#333333" strokeWidth={3} className="group-hover:stroke-white" />
                  </button>
                </div>
              </div>

              {/* Contador Niños */}
              <div className="bg-white/50 p-6 rounded-[2rem] border border-white shadow-sm text-center">
                <label className="block text-xs font-bold text-cafe mb-4 uppercase">Niños</label>
                <div className="flex items-center justify-center gap-4">
                  <button 
                    type="button" 
                    onClick={() => setKids(Math.max(0, kids - 1))} 
                    className="w-14 h-14 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-rosa-mexicano hover:text-white transition-all shadow-md active:scale-95"
                  >
                    <Minus size={28} color="#333333" strokeWidth={3} />
                  </button>
                  <span className="text-3xl font-bold text-[#333333] w-8">{kids}</span>
                  <button 
                    type="button" 
                    onClick={() => setKids(kids + 1)} 
                    className="w-14 h-14 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-rosa-mexicano hover:text-white transition-all shadow-md active:scale-95"
                  >
                    <Plus size={28} color="#333333" strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-rosa-empolvado/20 p-5 rounded-2xl flex items-center gap-4 text-sm text-cafe/80 border border-rosa-palo/10">
              <Users className="w-5 h-5 shrink-0 text-rosa-mexicano" />
              <p className="italic font-medium">Por favor confirma antes del <span className="font-bold not-italic">1 de Junio</span>.</p>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting} 
              className={`w-full font-bold py-5 rounded-2xl shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-3 text-lg tracking-wider ${
                isSubmitting 
                  ? 'bg-gray-300 text-white' 
                  : 'bg-rosa-mexicano text-white'
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Confirmación"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RSVPModal;