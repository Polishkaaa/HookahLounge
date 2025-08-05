import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544207240-6c5e8c9ed68b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Кальянная атмосфера"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Smoke Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            SMOKE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              LOUNGE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Дым, который говорит за тебя
          </p>
          <p className="text-lg text-gray-400 max-w-lg mx-auto mb-12">
            Погрузись в атмосферу роскоши и расслабления в самой стильной кальянной города
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
        >
          Забронировать столик
        </Button>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-rose-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-50"></div>
    </section>
  );
}