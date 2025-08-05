import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Атмосфера
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
                Роскоши
              </span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Добро пожаловать в мир изысканного отдыха, где каждая деталь создана для вашего комфорта. 
                Наша кальянная — это не просто место, это целая философия наслаждения моментом.
              </p>
              <p>
                Мягкое освещение, качественные табаки, профессиональные кальянщики и атмосфера, 
                которая заставляет забыть о суете повседневной жизни. Здесь время течет по-особенному.
              </p>
              <p className="text-amber-400 font-semibold">
                Каждый вечер с нами — это маленькое путешествие в мир вкусов и ароматов.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544207240-6c5e8c9ed68b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Интерьер кальянной"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-rose-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}