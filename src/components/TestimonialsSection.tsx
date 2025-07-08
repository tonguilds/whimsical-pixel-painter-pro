import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр Петров",
      role: "Криптоинвестор",
      content: "The COD Project — это именно то, чего не хватало в DeFi пространстве. Реальные активы, прозрачность и стабильные выплаты. Держу NFT уже 3 месяца и получаю регулярные доходы.",
      rating: 5,
      initials: "АП"
    },
    {
      name: "Мария Сидорова", 
      role: "Блокчейн-аналитик",
      content: "Проект впечатляет своим подходом к RWA. Смарт-контракты работают безупречно, а DAO по-настоящему дает голос сообществу. Это будущее децентрализованных инвестиций.",
      rating: 5,
      initials: "МС"
    },
    {
      name: "Дмитрий Волков",
      role: "Предприниматель", 
      content: "Впервые вижу криптопроект, который действительно связан с реальной экономикой. 70% доходов держателям NFT — это революционно. Рекомендую всем серьезным инвесторам.",
      rating: 5,
      initials: "ДВ"
    }
  ];

  const publications = [
    {
      title: "CoinDesk: 'RWA проекты набирают популярность'",
      excerpt: "The COD Project выделяется среди новых RWA платформ своим инновационным подходом..."
    },
    {
      title: "CryptoNews: 'DAO и NFT: новая эра инвестиций'", 
      excerpt: "Эксперты отмечают уникальную модель распределения доходов в The COD Project..."
    },
    {
      title: "Blockchain Today: 'TON экосистема растет'",
      excerpt: "The COD Project демонстрирует потенциал TON блокчейна для реальных применений..."
    }
  ];

  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold text-foreground mb-4">
            Отзывы и упоминания
          </h2>
          <p className="text-lg text-muted-foreground font-manrope max-w-3xl mx-auto">
            Что говорят наши инвесторы и криптосообщество о The COD Project
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-manrope font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-manrope font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground font-manrope">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                
                <p className="text-foreground font-manrope leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-2xl font-manrope font-bold text-center text-foreground mb-8">
            Упоминания в СМИ
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((publication, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-manrope font-semibold text-foreground mb-3 leading-tight">
                    {publication.title}
                  </h4>
                  <p className="text-muted-foreground font-manrope text-sm">
                    {publication.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-primary font-manrope text-sm hover:underline cursor-pointer">
                      Читать полностью →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-manrope font-bold text-primary-foreground mb-3">
              Станьте частью сообщества
            </h3>
            <p className="text-primary-foreground/90 font-manrope">
              Присоединяйтесь к более чем 1000+ инвесторов, которые уже инвестируют в будущее
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;