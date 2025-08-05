import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Забронируй
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Столик
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Свяжись с нами любым удобным способом или забронируй столик онлайн
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">Адрес</h4>
                    <p className="text-gray-400">ул. Тверская, 15<br />Москва, 125009</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">Телефон</h4>
                    <p className="text-gray-400">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">Время работы</h4>
                    <p className="text-gray-400">
                      Пн-Чт: 18:00 - 02:00<br />
                      Пт-Сб: 18:00 - 04:00<br />
                      Вс: 18:00 - 02:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Соцсети</h3>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-800 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <p className="text-lg">Карта будет здесь</p>
                <p>Google Maps интеграция</p>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Онлайн бронирование</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-lg mb-2 block">Имя</label>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-amber-400"
                    required
                  />
                </div>
                <div>
                  <label className="text-white text-lg mb-2 block">Телефон</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__" 
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-amber-400"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-lg mb-2 block">Дата</label>
                  <Input 
                    type="date" 
                    className="bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
                    required
                  />
                </div>
                <div>
                  <label className="text-white text-lg mb-2 block">Время</label>
                  <Input 
                    type="time" 
                    className="bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-white text-lg mb-2 block">Количество гостей</label>
                <Input 
                  type="number" 
                  placeholder="2" 
                  min="1" 
                  max="20"
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-amber-400"
                  required
                />
              </div>
              
              <div>
                <label className="text-white text-lg mb-2 block">Комментарий</label>
                <Textarea 
                  placeholder="Особые пожелания или предпочтения по кальянам..."
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-amber-400 min-h-20"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white py-6 text-lg"
              >
                Забронировать сейчас
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}