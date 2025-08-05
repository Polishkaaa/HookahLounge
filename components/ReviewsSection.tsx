import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Алексей М.",
    text: "Невероятная атмосфера! Кальяны на высшем уровне, обслуживание безупречное. Особенно понравился микс с малиной и розой. Обязательно вернусь!",
    rating: 5,
    date: "2 дня назад",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Мария К.",
    text: "Лучшая кальянная в городе! Интерьер просто завораживает, а табаки — это что-то невероятное. DJ-сеты по выходным — отдельная любовь!",
    rating: 5,
    date: "5 дней назад",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Дмитрий П.",
    text: "Отличное место для отдыха с друзьями. Качественные кальяны, уютная обстановка, адекватные цены. Рекомендую всем!",
    rating: 5,
    date: "1 неделю назад",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Елена В.",
    text: "Прекрасное место! Персонал очень внимательный, всегда подскажут лучший вкус. Атмосфера располагает к долгим посиделкам с друзьями.",
    rating: 5,
    date: "2 недели назад",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Андрей Л.",
    text: "Был на DJ-сете в прошлые выходные — просто огонь! Музыка, кальяны, атмосфера — всё на высоте. Теперь только сюда!",
    rating: 5,
    date: "3 недели назад",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    name: "София Н.",
    text: "Идеальное место для романтического вечера. Приглушенный свет, качественные кальяны, отличное обслуживание. Влюбилась в это место!",
    rating: 5,
    date: "1 месяц назад",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export function ReviewsSection() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating 
                ? "fill-amber-400 text-amber-400" 
                : "text-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Отзывы
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Гостей
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Что говорят о нас наши постоянные клиенты
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-gray-800/50 border-gray-700 p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/5">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback className="bg-gradient-to-r from-amber-500 to-rose-500 text-white">
                    {review.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                  <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed italic">
                "{review.text}"
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="text-2xl font-bold text-white">4.9</span>
              <span>средняя оценка</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <span>более 500 отзывов</span>
          </div>
        </div>
      </div>
    </section>
  );
}