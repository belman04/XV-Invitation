import { useState } from "react";
import { Gift, Mail } from "lucide-react";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import RsvpModal from "../modals/RSVPModal";

const Home = () => {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const eventDate = "2026-10-24T17:00:00";

  return (
    <div className="min-h-screen bg-base text-text-primary font-sans selection:bg-accent-sage selection:text-white">
      <Hero />

      <main className="relative z-20">
        {/* Sección Countdown */}
        <div className="py-20 md:py-30 px-6 relative overflow-hidden bg-gradient-to-b from-white/40 to-base/40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-nude/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-xs font-bold text-text-muted uppercase tracking-[0.3em] mb-10">
              Cuenta regresiva para el gran día
            </p>
            <Countdown targetDate={eventDate} />
          </div>
        </div>

        <div className="mx-auto mb-14"></div>

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
      <div className="fixed bottom-8 right-6 z-50 animate-fade-in">
        <button
          onClick={() => setIsRsvpOpen(true)}
          className="group flex items-center gap-3 bg-accent-sage text-white px-6 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/20"
        >
          <span className="text-xs font-bold uppercase tracking-widest hidden md:block">
            Confirmar
          </span>
          <Mail className="w-5 h-5" />
        </button>
      </div>

      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
    </div>
  );
};

export default Home;
