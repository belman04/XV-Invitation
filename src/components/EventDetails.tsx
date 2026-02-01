import { MapPin, Calendar, Clock, Church, ArrowUpRight } from "lucide-react";

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
      sub: "Celebración hasta las 2:00 AM",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="group flex flex-col p-8 bg-surface/80 backdrop-blur-sm rounded-2xl border border-white/50 hover:border-accent-sage/50 transition-all duration-500 shadow-sm hover:shadow-md"
          >
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 bg-white rounded-full shadow-sm text-accent-sage">
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
            </div>

            <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">
              {item.title}
            </h3>
            <p className="text-2xl font-medium text-text-primary mb-1">
              {item.info}
            </p>
            <p className="text-sm text-text-primary/70">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="relative group w-full bg-accent-nude/30 rounded-2xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-accent-nude/50">
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-accent-sage" />
            <span className="text-xs font-bold text-text-muted uppercase tracking-widest">
              Ubicación
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-medium text-text-primary mb-2">
            Hacienda NAVA
          </h3>
          <p className="text-text-primary/70 max-w-md">
            Un espacio mágico para una noche inolvidable.
          </p>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Hacienda+NAVA"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 flex items-center gap-2 px-8 py-4 bg-text-primary text-base rounded-full hover:bg-[#382E29] transition-all duration-300 font-medium text-sm tracking-wide group-hover:pr-6 shadow-lg hover:shadow-xl"
        >
          Ver Mapa
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
};

export default EventDetails;
