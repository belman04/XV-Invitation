import { useState } from 'react';
import { Gift, Check, Heart } from 'lucide-react';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import EventDetails from '../components/EventDetails';
import RsvpModal from '../modals/RSVPModal';

const Home = () => {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const eventDate = "2026-10-24T17:00:00"; 

  return (
    <div className="min-h-screen bg-beige-claro text-gray-800 selection:bg-rosa-palo">
      <Hero />

      <main className="relative z-20 -mt-32 md:-mt-52 px-6 md:px-12 pb-32">
        {/* Contenedor más ancho y con bordes más redondeados para PC */}
        <div className="max-w-[1400px] mx-auto bg-marfil/95 backdrop-blur-md rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white">
          
          <div className="py-16 md:py-28 px-8 md:px-20 lg:px-32">
            <h2 className="text-center text-4xl md:text-7xl font-bold text-rosa-empolvado mb-20 font-serif italic">
              ¡Solo faltan!
            </h2>
            
            <Countdown targetDate={eventDate} />
            
            <hr className="my-10 border-gray-200 mx-auto" />

            <EventDetails />

            {/* Sección Regalos: Menos rosa, más elegancia */}
            <div className="max-w-5xl mx-auto text-center border border-gray-100 p-8 md:p-24 rounded-[3rem] bg-white/50 mt-32 transition-transform hover:scale-[1.01] duration-500">
              <Gift className="w-16 h-16 text-rosa-palo mx-auto mb-10 opacity-80" />
              <h2 className="text-4xl md:text-5xl font-bold text-cafe mb-8 font-serif uppercase tracking-widest">Lluvia de Sobres</h2>
              <p className="text-gray-500 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                Tu presencia es mi mayor regalo, pero si deseas tener un detalle conmigo, 
                encontrarás un buzón en la entrada para sobres.
              </p>
              </div>
          </div>
        </div>
      </main>

      {/* Footer minimalista */}
      <footer className="bg-marfil border-t border-gray-100 text-center py-24">
        <p className="font-serif italic text-4xl text-cafe mb-6 tracking-tighter">¡Te espero!</p>
        <div className="flex justify-center items-center gap-3 text-gray-400 text-xs tracking-[0.5em] uppercase">
          <span>Hecho con</span>
          <Heart className="w-4 h-4 text-rosa-mexicano fill-current animate-pulse" />
          <span>para Daniela</span>
        </div>
      </footer>
      
      {/* Botón flotante siempre visible y moderno */}
      <div className="fixed bottom-6 right-4 z-50">
         <button onClick={() => setIsRsvpOpen(true)} className="bg-rosa-mexicano text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-transform border-4 border-white">
            <Check className="w-6 h-6" />
         </button>
      </div>

      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
    </div>
  );
};

export default Home;