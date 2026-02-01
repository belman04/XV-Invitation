import React, { useState } from "react";
import { X, Check, Minus, Plus } from "lucide-react";
import { EVENT_CONFIG } from "../config.ts";
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
    // Configuración de Google Forms
    const GOOGLE_FORM_URL = EVENT_CONFIG.googleForm.url;
    const ENTRY_NAME = EVENT_CONFIG.googleForm.fields.name;
    const ENTRY_ADULTS = EVENT_CONFIG.googleForm.fields.adults;
    const ENTRY_KIDS = EVENT_CONFIG.googleForm.fields.kids;
    const formData = new FormData();
    const formElements = e.target as HTMLFormElement;
    const nameInput = formElements.elements.namedItem(
      "name",
    ) as HTMLInputElement;
    formData.append(ENTRY_NAME, nameInput.value);
    formData.append(ENTRY_ADULTS, adults.toString());
    formData.append(ENTRY_KIDS, kids.toString());

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setAdults(1);
        setKids(0);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Error al enviar.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#4A3E38]/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      {/* Modal */}
      <div className="bg-base w-full max-w-lg rounded-[2rem] p-5 md:p-12 relative shadow-2xl animate-fade-in flex flex-col max-h-[85vh] overflow-y-auto border border-white/50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-surface hover:bg-surface/80 rounded-full transition-colors text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-sage z-10"
        >
          <X size={20} className="md:w-6 md:h-6" />
        </button>
        <div className="mb-6 md:mb-10 text-center mt-4 md:mt-2">
          <h2 className="text-xl md:text-3xl font-medium text-text-primary px-4">
            Confirmar Asistencia
          </h2>
        </div>
        {isSuccess ? (
          <div className="text-center py-12 flex flex-col items-center">
            <div className="w-20 h-20 bg-accent-sage/20 rounded-full flex items-center justify-center mb-6 text-accent-sage">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-medium text-text-primary mb-2">
              ¡Gracias!
            </h3>
            <p className="text-text-primary/60">
              Tu asistencia ha sido registrada.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
            <div className="group">
              <label className="block text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-widest mb-2">
                Nombre Completo / Familia
              </label>
              <input
                name="name"
                type="text"
                className="w-full bg-transparent border-b border-ui-detail py-2 md:py-4 text-base md:text-xl text-text-primary placeholder:text-text-primary/30 focus:outline-none focus:border-accent-sage transition-colors rounded-none"
                placeholder="Escribe aquí..."
                required
                disabled={isSubmitting}
              />
            </div>

            {/* CONTADORES */}
            <div className="grid grid-cols-2 gap-3 md:gap-8">
              <div className="flex flex-col items-center p-3 md:p-4 bg-surface/50 rounded-xl border border-white/50">
                <label className="text-[10px] md:text-xs font-bold text-text-muted uppercase mb-2 md:mb-4">
                  Adultos
                </label>
                <div className="flex items-center gap-2 md:gap-4">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors shadow-sm bg-white hover:bg-surface/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-sage"
                  >
                    <Minus size={16} className="md:w-5 md:h-5" />
                  </button>

                  <span className="text-lg md:text-2xl font-medium text-text-primary w-4 md:w-6 text-center">
                    {adults}
                  </span>

                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors shadow-sm bg-white hover:bg-surface/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-sage"
                  >
                    <Plus size={16} className="md:w-5 md:h-5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center p-3 md:p-4 bg-surface/50 rounded-xl border border-white/50">
                <label className="text-[10px] md:text-xs font-bold text-text-muted uppercase mb-2 md:mb-4">
                  Niños
                </label>
                <div className="flex items-center gap-2 md:gap-4">
                  <button
                    type="button"
                    onClick={() => setKids(Math.max(0, kids - 1))}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors shadow-sm bg-white hover:bg-surface/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-sage"
                  >
                    <Minus size={16} className="md:w-5 md:h-5" />
                  </button>

                  <span className="text-lg md:text-2xl font-medium text-text-primary w-4 md:w-6 text-center">
                    {kids}
                  </span>

                  <button
                    type="button"
                    onClick={() => setKids(kids + 1)}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors shadow-sm bg-white hover:bg-surface/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-sage"
                  >
                    <Plus size={16} className="md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Botón Submit */}
            <div className="pt-2 md:pt-4">
              <p className="text-center text-xs md:text-sm text-text-primary/60 mb-4 md:mb-6">
                Por favor confirmar antes del{" "}
                <span className="text-text-primary font-bold">1 de Junio</span>
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 md:py-5 rounded-xl font-bold tracking-widest uppercase text-xs md:text-sm transition-all shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-sage ${
                  isSubmitting
                    ? "bg-gray-200 text-gray-400"
                    : "bg-accent-sage text-white hover:opacity-90 hover:-translate-y-1"
                }`}
              >
                {isSubmitting ? "Enviando..." : "Confirmar Asistencia"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RSVPModal;
