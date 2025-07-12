import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InvestmentSection = () => {
  const nftTiers = [
    {
      name: "Bronze",
      price: "50 TON",
      revenue: "0.1%",
      benefits: ["Базовая доля прибыли", "Участие в голосованиях", "Доступ к чату"],
      color: "bg-gradient-to-br from-amber-600 to-amber-800",
      textColor: "text-amber-100"
    },
    {
      name: "Silver", 
      price: "200 TON",
      revenue: "0.5%",
      benefits: ["Увеличенная доля прибыли", "Приоритетное голосование", "Эксклюзивный контент", "Ранний доступ к новостям"],
      color: "bg-gradient-to-br from-slate-400 to-slate-600",
      textColor: "text-slate-100",
      popular: true
    },
    {
      name: "Gold",
      price: "500 TON", 
      revenue: "1.5%",
      benefits: ["Максимальная доля прибыли", "Влияние на стратегические решения", "Персональные консультации", "VIP статус", "Доступ к закрытым мероприятиям"],
      color: "bg-gradient-to-br from-yellow-500 to-yellow-700",
      textColor: "text-yellow-100"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-accent/30 overflow-hidden">
      {/* Decorative drops */}
      <div className="drop-shape drop-large top-0 right-1/4 drop-animated" style={{ animationDelay: '3s' }}></div>
      <div className="drop-shape drop-medium bottom-10 -left-20" style={{ animationDelay: '6s' }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold text-foreground mb-4">
            Как инвестировать?
          </h2>
          <p className="text-lg text-muted-foreground font-manrope max-w-3xl mx-auto">
            Покупайте NFT различных уровней и получайте долю от прибыли проекта. 
            Все выплаты происходят автоматически через смарт-контракты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {nftTiers.map((tier, index) => (
            <Card key={index} className={`relative border-border shadow-card hover:shadow-glow transition-all duration-300 ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Популярный
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className={`text-2xl font-bold ${tier.textColor}`}>{tier.name[0]}</span>
                </div>
                <CardTitle className="font-manrope text-2xl text-foreground">
                  {tier.name} NFT
                </CardTitle>
                <div className="text-3xl font-bold text-primary">{tier.price}</div>
                <div className="text-sm text-muted-foreground">
                  {tier.revenue} доли от общей прибыли
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-manrope font-semibold text-foreground mb-3">Преимущества:</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-manrope">
                        <span className="text-primary mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-manrope font-semibold"
                  size="lg"
                >
                  Купить {tier.name} NFT
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
          <h3 className="text-2xl font-manrope font-bold text-center text-foreground mb-6">
            Процесс инвестирования
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🔗</span>
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Подключите кошелек</h4>
              <p className="text-sm text-muted-foreground font-manrope">Используйте TON Wallet</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🎨</span>
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Выберите NFT</h4>
              <p className="text-sm text-muted-foreground font-manrope">Подходящий уровень</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">💳</span>
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Совершите покупку</h4>
              <p className="text-sm text-muted-foreground font-manrope">Оплатите в TON</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">💰</span>
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Получайте доходы</h4>
              <p className="text-sm text-muted-foreground font-manrope">Автоматические выплаты</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;