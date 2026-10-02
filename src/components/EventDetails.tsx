import { MapPin, Calendar, Clock, Church, ArrowUpRight, ForkKnife } from "lucide-react";
import { EVENT_CONFIG } from "../config.ts";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "Fecha",
      info: "Octubre 24",
      sub: "Sábado, 2026",
    },
    {
      icon: Church,
      title: "Misa de Acción de Gracias",
      info: "5:00 PM",
      sub: "Parroquia Nta. Sra. del Perpetuo Socorro",
    },
    {
      icon: Clock,
      title: "Recepción",
      info: "7:00 PM",
      sub: "Celebración hasta la 1:00 AM",
    },
    {
      icon: ForkKnife,
      title: "Cena",
      info: "8:00 PM",
      sub: "Contaremos con menú de adulto y niño",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6 mb-8">
        {details.map((item, idx) => (
          <div
            key={idx}
            className={`reveal ${idx > 0 ? `reveal-delay-${idx}` : ""} group relative flex flex-row md:flex-col items-center md:items-start p-6 md:p-8 bg-white/60 backdrop-blur-sm rounded-2xl border-l-[3px] md:border-l-0 md:border-t-[3px] border-accent-rose/50 hover:border-accent-rose transition-all duration-500 shadow-sm hover:shadow-md`}
          >
            <div className="mr-5 md:mr-0 md:mb-5 flex-shrink-0">
              <div className="p-3 bg-accent-blush/30 rounded-xl text-accent-rose">
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-1.5">
                {item.title}
              </h3>
              <p className="text-xl md:text-2xl font-serif font-medium text-text-primary mb-0.5">
                {item.info}
              </p>
              <p className="text-sm text-text-muted font-light">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal relative group w-full bg-gradient-to-br from-accent-blush/25 to-base-warm/50 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-accent-blush/30">
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-accent-rose" />
            <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest">
              Ubicación
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-text-primary mb-2">
            Hacienda NAVA
          </h3>
          <p className="text-text-muted font-light max-w-md">
            Un espacio mágico para una noche inolvidable.
          </p>
        </div>

        <a
          href={EVENT_CONFIG.locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 flex items-center gap-2 px-8 py-4 bg-text-primary text-base rounded-full hover:opacity-90 transition-all duration-300 font-medium text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 group-hover:pr-7"
        >
          Ver Mapa
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
};

export default EventDetails;
