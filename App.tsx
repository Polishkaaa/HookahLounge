import React, { useState } from "react";

// Навигационная шапка
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 cursor-pointer" 
               onClick={() => scrollToSection('hero')}>
            SMOKE LOUNGE
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-300 hover:text-white transition-colors">
              Меню
            </button>
            <button onClick={() => scrollToSection('events')} className="text-gray-300 hover:text-white transition-colors">
              События
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-300 hover:text-white transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-4 py-2 rounded-full transition-all duration-300">
              Бронь
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                О нас
              </button>
              <button onClick={() => scrollToSection('menu')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                Меню
              </button>
              <button onClick={() => scrollToSection('events')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                События
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                Контакты
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Обновленная Hero секция с индикатором прокрутки
function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-16">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      
      {/* Размытый дым */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-rose-500/5 to-purple-500/5 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/8 to-amber-500/8 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="mb-8">
          <h1 className="text-white mb-4 tracking-tight">
            SMOKE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              LOUNGE
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Дым, который говорит за тебя
          </p>
          <p className="text-gray-400 max-w-lg mx-auto mb-12">
            Погрузись в атмосферу роскоши и расслабления в самой стильной кальянной города
          </p>
        </div>
        
        <button 
          onClick={scrollToContact}
          className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-12 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
        >
          Забронировать столик
        </button>
      </div>
      
      {/* Индикатор "Листай вниз" */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm mb-2">Листай вниз</span>
          <div className="w-6 h-10 border-2 border-gray-400 group-hover:border-white rounded-full flex justify-center transition-colors duration-300">
            <div className="w-1 h-3 bg-gray-400 group-hover:bg-white rounded-full mt-2 animate-bounce transition-colors duration-300"></div>
          </div>
        </button>
      </div>
      
      <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-rose-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-50"></div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-white mb-8">
              Атмосфера
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
                Роскоши
              </span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Добро пожаловать в мир изысканного отдыха, где каждая деталь создана для вашего комфорта. 
                Наша кальянная — это не просто место, это целая философия наслаждения моментом.
              </p>
              <p>
                Мягкое освещение, качественные табаки, профессиональные кальянщики и атмосфера, 
                которая заставляет забыть о суете повседневной жизни. Здесь время течет по-особенному.
              </p>
              <p className="text-amber-400">
                Каждый вечер с нами — это маленькое путешествие в мир вкусов и ароматов.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544207240-6c5e8c9ed68b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Интерьер кальянной"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-rose-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  
  const categories = ['Все', 'Классика', 'Премиум', 'Освежающие', 'Фруктовые'];
  
  const menuItems = [
    {
      id: 1,
      name: "Двойное яблоко",
      description: "Классический вкус с насыщенным ароматом спелых яблок",
      price: "1500₽",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isPopular: true,
      tags: ["Классика", "Сладкий"],
      category: "Классика"
    },
    {
      id: 2,
      name: "Мята и лайм",
      description: "Освежающее сочетание прохладной мяты и цитрусового лайма",
      price: "1600₽",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["Освежающий", "Цитрус"],
      category: "Освежающие"
    },
    {
      id: 3,
      name: "Малина и роза",
      description: "Изысканный микс ягодной сладости и цветочной нежности",
      price: "1700₽",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isPopular: true,
      tags: ["Премиум", "Цветочный"],
      category: "Премиум"
    },
    {
      id: 4,
      name: "Ягодный микс",
      description: "Сочетание клубники, черники и малины",
      price: "1650₽",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["Фруктовый", "Сладкий"],
      category: "Фруктовые"
    }
  ];

  const filteredItems = selectedCategory === 'Все' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const orderItem = (itemName: string) => {
    alert(`Заказ "${itemName}" отправлен! Наш администратор свяжется с вами в ближайшее время.`);
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6">
            Наше
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Меню
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Премиальные табаки и авторские миксы от наших мастеров
          </p>
          
          {/* Фильтр категорий */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800/70 transition-all duration-300 overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {item.isPopular && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-full">
                    Популярный
                  </span>
                )}
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-black/50 text-gray-300 border border-gray-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white">{item.name}</h3>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
                <button 
                  onClick={() => orderItem(item.name)}
                  className="w-full bg-gradient-to-r from-amber-500/80 to-rose-500/80 hover:from-amber-500 hover:to-rose-500 text-white py-2 rounded-lg transition-all duration-300"
                >
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  const events = [
    {
      id: 1,
      title: "DJ Night: Electronic Vibes",
      description: "Погрузись в мир электронной музыки с лучшими ди-джеями города",
      date: "15 августа",
      time: "22:00",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "50 мест"
    },
    {
      id: 2,
      title: "Скидка 30% на все кальяны",
      description: "Каждый вторник — день больших скидок для наших постоянных гостей",
      date: "Каждый вторник",
      time: "18:00-23:00",
      image: "https://images.unsplash.com/photo-1544207240-6c5e8c9ed68b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "Без ограничений"
    }
  ];

  const learnMore = (eventTitle: string) => {
    alert(`Подробная информация о "${eventTitle}" будет отправлена на ваш телефон. Звоните: +7 (495) 123-45-67`);
  };

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6">
            События &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Акции
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Не пропустите наши эксклюзивные мероприятия и выгодные предложения
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden group hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white mb-3">{event.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-amber-400">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-amber-400">🕒</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-amber-400">👥</span>
                    <span>{event.capacity}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => learnMore(event.title)}
                  className="w-full bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white py-3 rounded-lg border-none transition-all duration-300"
                >
                  Узнать подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Алексей М.",
      text: "Невероятная атмосфера! Кальяны на высшем уровне, обслуживание безупречное. Особенно понравился микс с малиной и розой.",
      rating: 5,
      date: "2 дня назад",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Мария К.",
      text: "Лучшая кальянная в городе! Интерьер просто завораживает, а табаки — это что-то невероятное.",
      rating: 5,
      date: "5 дней назад",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Дмитрий П.",
      text: "Отличное место для отдыха с друзьями. Качественные кальяны, уютная обстановка, адекватные цены.",
      rating: 5,
      date: "1 неделю назад",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`${
              i < rating 
                ? "text-amber-400" 
                : "text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const writeReview = () => {
    alert("Спасибо за желание оставить отзыв! Перейдите на нашу страницу в Google Maps или оставьте отзыв при посещении.");
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6">
            Отзывы
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Гостей
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Что говорят о нас наши постоянные клиенты
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/5">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white">{review.name}</h4>
                  <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                    <span className="text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">★</span>
              <span className="text-white">4.9</span>
              <span>средняя оценка</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <span>более 500 отзывов</span>
          </div>
          <button 
            onClick={writeReview}
            className="bg-gradient-to-r from-amber-500/80 to-rose-500/80 hover:from-amber-500 hover:to-rose-500 text-white px-8 py-3 rounded-lg transition-all duration-300"
          >
            Оставить отзыв
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    comment: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Ваша заявка принята. Мы свяжемся с вами по номеру ${formData.phone} для подтверждения бронирования.`);
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      comment: ''
    });
  };

  const callUs = () => {
    window.open('tel:+74951234567');
  };

  const openInstagram = () => {
    alert("Перенаправляем в Instagram @smokelounge_moscow");
  };

  const openTelegram = () => {
    alert("Перенаправляем в Telegram @smokelounge_bot");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6">
            Забронируй
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Столик
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Свяжись с нами любым удобным способом или забронируй столик онлайн
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white mb-6">Контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Адрес</h4>
                    <p className="text-gray-400">ул. Тверская, 15<br />Москва, 125009</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Телефон</h4>
                    <button 
                      onClick={callUs}
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      +7 (495) 123-45-67
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">🕒</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Время работы</h4>
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
              <h3 className="text-white mb-6">Соцсети</h3>
              <div className="flex gap-4">
                <button 
                  onClick={openInstagram}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300"
                >
                  📷 Instagram
                </button>
                <button 
                  onClick={openTelegram}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg transition-all duration-300"
                >
                  💬 Telegram
                </button>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-800 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <span className="text-amber-400 block mb-4">🗺️</span>
                <p>Карта будет здесь</p>
                <p>Google Maps интеграция</p>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <h3 className="text-white mb-6">Онлайн бронирование</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white mb-2 block">Имя</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ваше имя" 
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:border-amber-400 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-white mb-2 block">Телефон</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (___) ___-__-__" 
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:border-amber-400 outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white mb-2 block">Дата</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:border-amber-400 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-white mb-2 block">Время</label>
                  <input 
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:border-amber-400 outline-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-white mb-2 block">Количество гостей</label>
                <input 
                  type="number" 
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  placeholder="2" 
                  min="1" 
                  max="20"
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:border-amber-400 outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="text-white mb-2 block">Комментарий</label>
                <textarea 
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Особые пожелания или предпочтения по кальянам..."
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:border-amber-400 outline-none resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white py-4 rounded-lg transition-all duration-300"
              >
                Забронировать сейчас
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <EventsSection />
      <ReviewsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 mb-4">
              SMOKE LOUNGE
            </h3>
            <p className="text-gray-400 mb-6">
              Дым, который говорит за тебя
            </p>
            <div className="flex justify-center gap-8 text-gray-500">
              <span>© 2024 Smoke Lounge</span>
              <span>•</span>
              <span>Все права защищены</span>
              <span>•</span>
              <span>18+</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}