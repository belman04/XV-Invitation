import { useState, useEffect } from "react";
import { Mail, Shirt } from "lucide-react";
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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-base text-text-primary font-sans selection:bg-accent-rose selection:text-white">
      <Hero />

      <main className="relative z-20 -mt-10 rounded-t-[2.5rem] bg-base shadow-[0_-8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
        <section className="pt-14 pb-20 md:pt-20 md:pb-28 px-6 relative overflow-hidden bg-base-warm/50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blush/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="reveal text-[11px] md:text-xs font-semibold text-text-muted uppercase tracking-[0.25em] mb-10 text-center">
              Cuenta regresiva para el gran día
            </p>
            <div className="reveal reveal-delay-1">
              <Countdown targetDate={eventDate} />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 relative z-10 bg-base">
          <div className="max-w-4xl mx-auto">
            <div className="reveal flex flex-col items-center mb-14 text-center">
              <h2 className="text-[11px] md:text-xs font-semibold text-text-muted uppercase tracking-[0.4em] mb-5">
                En compañía de
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-accent-rose/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-rose/50"></div>
                <div className="w-8 h-[1px] bg-accent-rose/40"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 mb-16 text-center">
              <div className="reveal flex flex-col items-center justify-center">
                <p className="text-xl md:text-2xl font-serif font-light text-text-primary/90 mb-3 leading-relaxed tracking-wide">
                  José Gustavo Belman González
                  <span className="block text-3xl md:text-4xl text-accent-rose font-script my-2 lowercase">
                    y
                  </span>
                  María Elena Franco Hernández
                </p>
                <p className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-[0.3em]">
                  Mis Padres
                </p>
              </div>

              <div className="reveal reveal-delay-1 flex flex-col items-center justify-center">
                <p className="text-xl md:text-2xl font-serif font-light text-text-primary/90 mb-3 leading-relaxed tracking-wide">
                  Abel Bravo Guzmán
                  <span className="block text-3xl md:text-4xl text-accent-rose font-script my-2 lowercase">
                    y
                  </span>
                  Leticia Belman González
                </p>
                <p className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-[0.3em]">
                  Mis Padrinos
                </p>
              </div>
            </div>

            <div className="reveal text-center relative max-w-3xl mx-auto">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-ui-detail to-transparent"></div>

              <div className="pt-14">
                <p className="text-xl md:text-2xl font-serif font-light text-text-primary/90 mb-4 tracking-wide">
                  Gustavo Belman Franco
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-6 h-[1px] bg-accent-rose/40"></div>
                  <p className="text-[10px] md:text-xs font-bold text-accent-rose uppercase tracking-[0.3em]">
                    Mi Chambelán de Honor
                  </p>
                  <div className="w-6 h-[1px] bg-accent-rose/40"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 bg-base-warm/40">
          <div className="max-w-5xl mx-auto">
            <div className="reveal flex flex-col items-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-text-primary mb-3">
                Itinerario
              </h2>
              <p className="text-text-muted text-sm italic font-light mb-5">
                Acompáñanos en cada momento
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-accent-rose/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-rose/50"></div>
                <div className="w-8 h-[1px] bg-accent-rose/40"></div>
              </div>
            </div>
            <EventDetails />
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 bg-base">
          <div className="max-w-5xl mx-auto">
            <div className="reveal flex flex-col items-center mb-14 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-text-primary mb-3">
                Detalles del Evento
              </h2>
              <p className="text-text-muted text-sm italic font-light mb-5">
                Información importante para acompañarnos
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-accent-rose/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-rose/50"></div>
                <div className="w-8 h-[1px] bg-accent-rose/40"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="reveal group flex flex-col justify-between p-8 md:p-10 bg-white/60 backdrop-blur-sm rounded-2xl border border-ui-detail/30 hover:border-accent-rose/40 transition-all duration-500 shadow-sm hover:shadow-md text-left">
                <div>
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-accent-blush/30 rounded-xl text-accent-rose">
                      <Shirt className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-2">
                    Código de Vestimenta
                  </h3>
                  <p className="text-2xl font-serif font-medium text-text-primary mb-2">
                    Formal
                  </p>
                  <p className="text-sm text-text-muted font-light leading-relaxed mb-6">
                    Les pedimos de la manera más atenta evitar prendas en las siguientes
                    tonalidades, ya que están reservados exclusivamente para la quinceañera.
                  </p>
                </div>

                <div className="pt-5 border-t border-ui-detail/40">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3">
                    Tonos reservados
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#EADCD9] border border-white shadow-sm ring-1 ring-ui-detail inline-block"></span>
                      <span className="text-xs text-text-primary/80 font-light">
                        Nude
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#F3E5D4] border border-white shadow-sm ring-1 ring-ui-detail inline-block"></span>
                      <span className="text-xs text-text-primary/80 font-light">
                        Champagne
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#E4D5C7] border border-white shadow-sm ring-1 ring-ui-detail inline-block"></span>
                      <span className="text-xs text-text-primary/80 font-light">
                        Beige
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal reveal-delay-1 group flex flex-col justify-between p-8 md:p-10 bg-white/60 backdrop-blur-sm rounded-2xl border border-ui-detail/30 hover:border-accent-rose/40 transition-all duration-500 shadow-sm hover:shadow-md text-left">
                <div>
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-accent-blush/30 rounded-xl text-accent-rose">
                      <Mail className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-2">
                    Muestra de Afecto
                  </h3>
                  <p className="text-2xl font-serif font-medium text-text-primary mb-2">
                    Lluvia de Sobres
                  </p>
                  <p className="text-sm text-text-muted font-light leading-relaxed mb-6">
                    Su presencia es mi mayor regalo. Si desean tener un detalle
                    conmigo, contaremos con un buzón para sobres en la
                    recepción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-text-primary py-16 text-center px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-10 h-[1px] bg-accent-rose/40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-rose/50"></div>
          <div className="w-10 h-[1px] bg-accent-rose/40"></div>
        </div>
        <p className="text-sm font-medium tracking-[0.25em] mb-3 uppercase text-base/90">
          Nos vemos pronto
        </p>
        <p className="text-xs text-base/60 uppercase tracking-widest">
          Daniela & Fam.
        </p>
      </footer>

      <div className="fixed bottom-8 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3 animate-fade-in">
        <div
          className={`bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-br-none shadow-lg border border-accent-rose/20 animate-bounce-slow transition-all duration-500 origin-bottom-right ${showTooltip
            ? "opacity-100 scale-100"
            : "opacity-0 scale-50 pointer-events-none"
            }`}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary">
            ¡Confirma aquí!
          </span>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-accent-rose/50 rounded-full animate-ping"></div>

          <button
            onClick={() => setIsRsvpOpen(true)}
            className="relative group flex items-center justify-center gap-3 bg-accent-rose text-white p-4 md:px-8 md:py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/20 hover:bg-accent-rose-dark"
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
