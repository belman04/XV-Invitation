import { useState, useEffect } from "react";
import { Gift, Mail } from "lucide-react";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import RsvpModal from "../modals/RSVPModal";

const Home = () => {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const eventDate = "2026-10-24T17:00:00";

  useEffect(() => {
    const handleScroll = () => {
      // verifica final de la página
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200;
      setShowTooltip(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-base text-text-primary font-sans selection:bg-accent-sage selection:text-white">
      <Hero />

      <main className="relative z-20">
        {/* Sección Countdown */}
        <div className="py-20 md:py-30 px-6 relative overflow-hidden bg-gradient-to-b from-white/40 to-base/40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-nude/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-[11px] md:text-xs font-bold text-text-muted uppercase tracking-[0.2em] md:tracking-[0.3em] mb-10 text-center whitespace-nowrap">
              Cuenta regresiva para el gran día
            </p>
            <Countdown targetDate={eventDate} />
          </div>
        </div>

        <div className="mx-auto mb-14"></div>

        {/* Sección de Presentación */}
        <div className="pt-10 pb-20 px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-white/70 rounded-[3rem] py-16 px-6 md:px-16">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="text-[11px] md:text-xs font-bold text-text-muted uppercase tracking-[0.4em] mb-4">
                En compañía de
              </h2>
              <div className="w-12 h-[1px] bg-accent-sage"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 text-center">
              <div className="flex flex-col items-center justify-center">
                <p className="text-xl md:text-3xl font-serif font-light text-text-primary/90 mb-3 leading-relaxed tracking-wide">
                  Gustavo Belman
                  <span className="block text-3xl md:text-4xl text-accent-sage font-script my-1 lowercase">
                    y
                  </span>
                  María Franco
                </p>
                <p className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-[0.3em]">
                  Mis Padres
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="text-xl md:text-3xl font-serif font-light text-text-primary/90 mb-3 leading-relaxed tracking-wide">
                  Abel Bravo
                  <span className="block text-3xl md:text-4xl text-accent-sage font-script my-1 lowercase">
                    y
                  </span>
                  Leticia Belman
                </p>
                <p className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-[0.3em]">
                  Mis Padrinos
                </p>
              </div>
            </div>

            <div className="text-center relative max-w-3xl mx-auto">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-ui-detail to-transparent"></div>

              <div className="pt-14">
                <p className="text-xl md:text-3xl font-serif font-light text-text-primary/90 mb-4 tracking-wide">
                  Gustavo Belman Franco
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-6 h-[1px] bg-accent-sage/50"></div>
                  <p className="text-[10px] md:text-xs font-bold text-accent-sage uppercase tracking-[0.3em]">
                    Mi Chambelán de Honor
                  </p>
                  <div className="w-6 h-[1px] bg-accent-sage/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Detalles */}
        <div className="py-18 md:py-5 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-text-primary mb-4">
                Itinerario
              </h2>
              <p className="text-text-muted italic font-light">
                Acompáñanos en cada momento
              </p>
            </div>
            <EventDetails />
          </div>
        </div>

        {/* Sección Regalos */}
        <div className="py-24 px-6 bg-base">
          <div className="max-w-3xl mx-auto border-t border-b border-ui-detail py-16 text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-base px-4">
              <Gift className="w-6 h-6 text-accent-sage" strokeWidth={1.5} />
            </div>

            <h2 className="text-2xl font-medium uppercase tracking-widest text-text-primary mb-6">
              Regalos
            </h2>
            <p className="text-text-primary/80 text-lg leading-relaxed max-w-lg mx-auto font-light">
              Su presencia es mi mayor regalo. Si desean tener un detalle
              conmigo, contaremos con un buzón para sobres en la recepción.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-text-primary/95 py-16 text-center px-6 border-t border-white/10">
        <p className="text-base font-medium tracking-[0.2em] mb-3 uppercase text-base/100">
          Nos vemos pronto
        </p>
        <p className="text-xs text-base/80 uppercase tracking-widest">
          Daniela & Fam.
        </p>
      </footer>

      {/* Botón flotante */}
      <div className="fixed bottom-8 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3 animate-fade-in">
        <div
          className={`bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-br-none shadow-lg border border-accent-sage/30 animate-bounce-slow transition-all duration-500 origin-bottom-right ${
            showTooltip
              ? "opacity-100 scale-100"
              : "opacity-0 scale-50 pointer-events-none"
          }`}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary">
            ¡Aparta la fecha!
          </span>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-accent-sage/60 rounded-full animate-ping"></div>

          <button
            onClick={() => setIsRsvpOpen(true)}
            className="relative group flex items-center justify-center gap-3 bg-accent-sage text-white p-4 md:px-8 md:py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/30"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest hidden md:block">
              Confirmar
            </span>
            <Mail className="w-6 h-6 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
    </div>
  );
};

export default Home;
