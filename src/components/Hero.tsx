import FondoIMG from "../assets/fondo-xv.png";

const Hero = () => {
  return (
    <header className="relative h-[100dvh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-base">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={FondoIMG}
          alt="Portada"
          className="w-full h-full object-cover brightness-[0.75] sepia-[20%] contrast-110"
        />

        <div className="absolute inset-0 bg-[#4A3E38]/30 mix-blend-multiply"></div>

        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-base via-base/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 animate-fade-in flex flex-col items-center justify-center h-full pt-16">
        <div className="flex flex-col items-center mb-6">
          <span className="text-white/80 text-xs md:text-sm tracking-[0.5em] uppercase font-medium drop-shadow-md mb-2">
            Festejando mis
          </span>
          <span className="text-2xl md:text-4xl text-accent-nude font-serif tracking-widest drop-shadow-lg">
            XV Años
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl lg:text-[10rem] text-white mb-6 font-script leading-[0.8] drop-shadow-2xl py-2 relative z-20 text-center">
          Daniela
        </h1>

        <div className="w-16 h-[1px] bg-white/60 mb-6"></div>

        <p className="text-base md:text-xl text-center text-white/90 font-light max-w-lg mx-auto leading-relaxed italic drop-shadow-md text-shadow-sm px-4">
          "Con la bendición de Dios y el amor de mi familia, te invito a
          compartir este día soñado."
        </p>
      </div>
    </header>
  );
};

export default Hero;
