import FondoIMG from '../assets/fondo-xv.jpg';

const Hero = () => {
  return (
    <header className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={FondoIMG}          
          alt="Portada" 
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        {/* Overlay degradado para suavizar el rosa de la imagen */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-beige-claro"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-[1400px] mx-auto animate-fade-in-up">
        <p className="text-lg md:text-3xl tracking-[0.6em] text-white drop-shadow-md mb-6 font-light uppercase">
          Mis XV Años
        </p>
        <h1 className="text-7xl md:text-[12rem] font-bold text-white drop-shadow-2xl mb-8 font-serif leading-none tracking-tighter">
          Daniela
        </h1>
        <div className="w-32 md:w-80 h-1 bg-white/60 mx-auto rounded-full mb-10 shadow-lg"></div>
        <p className="text-xl md:text-3xl text-white font-medium max-w-3xl mx-auto drop-shadow-lg italic leading-relaxed opacity-90">
          "Hay momentos que se vuelven inolvidables cuando se comparten con el corazón."
        </p>
      </div>
    </header>
  );
};

export default Hero;