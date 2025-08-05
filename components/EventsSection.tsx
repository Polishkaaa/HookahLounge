import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, Music, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "DJ Night: Electronic Vibes",
    description: "Погрузись в мир электронной музыки с лучшими ди-джеями города",
    date: "15 августа",
    time: "22:00",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: "50 мест",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-400/30",
    icon: "dj"
  },
  {
    id: 2,
    title: "Скидка 30% на все кальяны",
    description: "Каждый вторник — день больших скидок для наших постоянных гостей",
    date: "Каждый вторник",
    time: "18:00-23:00",
    image: "https://images.unsplash.com/photo-1544207240-6c5e8c9ed68b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: "Без ограничений",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-400/30",
    icon: "special"
  },
  {
    id: 3,
    title: "Кальянная вечеринка",
    description: "Тематическая вечеринка с живой музыкой и специальными миксами",
    date: "22 августа",
    time: "20:00",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: "80 мест",
    badgeColor: "bg-rose-500/20 text-rose-400 border-rose-400/30",
    icon: "party"
  }
];

export function EventsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            События &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Акции
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Не пропустите наши эксклюзивные мероприятия и выгодные предложения
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10">
              <div className="relative">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                
                <Badge className={`absolute top-4 right-4 ${event.badgeColor} border`}>
                  <span className="flex items-center gap-1">
                    {event.icon === "dj" && <Music className="w-5 h-5" />}
                    {event.icon === "party" && <Users className="w-5 h-5" />}
                    {event.icon === "special" && <Calendar className="w-5 h-5" />}
                    {event.icon === "dj" ? "DJ SET" : event.icon === "party" ? "PARTY" : "АКЦИЯ"}
                  </span>
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>{event.capacity}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white border-none">
                  Узнать подробнее
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}