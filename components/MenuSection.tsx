import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuItems = [
  {
    id: 1,
    name: "Двойное яблоко",
    description: "Классический вкус с насыщенным ароматом спелых яблок",
    price: "1500₽",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    tags: ["Классика", "Сладкий"]
  },
  {
    id: 2,
    name: "Мята и лайм",
    description: "Освежающее сочетание прохладной мяты и цитрусового лайма",
    price: "1600₽",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["Освежающий", "Цитрус"]
  },
  {
    id: 3,
    name: "Малина и роза",
    description: "Изысканный микс ягодной сладости и цветочной нежности",
    price: "1700₽",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isPopular: true,
    tags: ["Премиум", "Цветочный"]
  },
  {
    id: 4,
    name: "Шоколад и ваниль",
    description: "Насыщенный десертный вкус для истинных гурманов",
    price: "1800₽",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["Десертный", "Сладкий"]
  },
  {
    id: 5,
    name: "Тропический микс",
    description: "Экзотическое сочетание манго, ананаса и маракуйи",
    price: "1750₽",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["Фруктовый", "Экзотика"]
  },
  {
    id: 6,
    name: "Кола и лимон",
    description: "Бодрящий вкус с игристыми нотками и цитрусовой свежестью",
    price: "1650₽",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tags: ["Бодрящий", "Цитрус"]
  }
];

export function MenuSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наше
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Меню
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Премиальные табаки и авторские миксы от наших мастеров
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {item.isPopular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white border-none">
                    Популярный
                  </Badge>
                )}
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-black/50 text-gray-300 border-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}