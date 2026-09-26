const Hero = () => {
  return (
    <header className="relative h-[100svh] md:h-screen w-full flex items-end justify-center overflow-hidden bg-base">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/fondo-xv.jpg"
          alt="Portada"
          className="w-full h-full object-cover scale-[1.65] origin-[50%_28%] md:scale-120 md:origin-[50%_35%] brightness-[0.88] contrast-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 via-40% to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 animate-fade-in flex flex-col items-center justify-end pb-28 md:pb-36 text-center">
        <div className="flex flex-col items-center mb-3 md:mb-4">
          <span className="text-white/80 text-[11px] md:text-sm tracking-[0.45em] uppercase font-medium drop-shadow-md mb-2">
            Festejando mis
          </span>
          <span className="text-2xl md:text-4xl text-accent-blush font-serif tracking-widest drop-shadow-lg">
            XV Años
          </span>
        </div>

        <h1 className="text-7xl md:text-8xl lg:text-9xl text-white mb-4 font-script leading-[0.85] drop-shadow-2xl py-1">
          Daniela
        </h1>

        <div className="w-16 h-[1px] bg-white/50 mb-4"></div>

        <p className="text-sm md:text-lg text-center text-white/90 font-light max-w-md mx-auto leading-relaxed italic drop-shadow-md px-4">
          "Con la bendición de Dios y el amor de mi familia, te invito a
          compartir este día tan especial."
        </p>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="w-[1px] h-8 bg-white/40 animate-scroll-hint"></div>
      </div>
    </header>
  );
};

export default Hero;
