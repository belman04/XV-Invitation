import { MapPin, Calendar, Clock, Church } from 'lucide-react';

const EventDetails = () => {
  const details = [
    { 
      icon: Calendar, 
      title: "Día", 
      info: "Sábado 24 Octubre", 
      sub: "2026",
      color: "bg-rosa-empolvado/20"
    },
    { 
      icon: Church, 
      title: "Misa", 
      info: "4:00 PM", 
      sub: "Parroquia de Nuestra Señora del Perpetuo Socorro",
      color: "bg-beige-claro/50" 
    },
    { 
      icon: Clock, 
      title: "Recepción", 
      info: "6:00 PM", 
      sub: "Hasta las 2:00 AM",
      color: "bg-beige-arena/30"
    },
  ];

  return (
    <section className="py-10 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {details.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center p-10 bg-white/40 backdrop-blur-sm rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(232,183,193,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <item.icon className="w-10 h-10 text-rosa-mexicano stroke-[1.5px]" />
              </div>

              {/* Text Content */}
              <h3 className="font-serif italic text-2xl mb-4 text-cafe tracking-tight">
                {item.title}
              </h3>
              
              <div className="flex-grow flex flex-col items-center justify-start text-center">
                <p className="text-gray-800 font-bold text-xl mb-2 leading-tight">
                  {item.info}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] font-medium uppercase tracking-widest px-2">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}

          {/* Ubicación Card */}
          <div className="group flex flex-col items-center p-10 bg-white/40 backdrop-blur-sm rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(232,183,193,0.15)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-20 h-20 bg-rosa-mexicano/10 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <MapPin className="w-10 h-10 text-rosa-mexicano stroke-[1.5px]" />
            </div>

            <h3 className="font-serif italic text-2xl mb-4 text-cafe tracking-tight">
              Lugar
            </h3>
            
            <p className="text-gray-800 font-bold text-xl mb-6 text-center">
              Hacienda NAVA
            </p>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto w-full py-4 px-6 bg-rosa-mexicano text-white rounded-2xl text-xs font-bold tracking-[0.2em] shadow-lg shadow-rosa-mexicano/20 hover:bg-rosa-palo hover:shadow-xl transition-all duration-300 text-center uppercase"
            >
              Ver Ubicación
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventDetails;