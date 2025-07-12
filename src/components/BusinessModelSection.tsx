import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BusinessModelSection = () => {
  return (
    <section className="relative py-20 px-4 bg-background overflow-hidden">
      {/* Decorative drops */}
      <div className="drop-shape drop-medium top-10 -right-32 drop-animated" style={{ animationDelay: '1s' }}></div>
      <div className="drop-shape drop-small bottom-20 -left-24" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-manrope font-bold text-center text-foreground mb-4">
          Децентрализованная бизнес-модель
        </h2>
        
        <p className="text-lg text-center text-muted-foreground font-manrope mb-12 max-w-3xl mx-auto">
          Инновационная модель распределения доходов через смарт-контракты на блокчейне TON
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-foreground">💰</span>
              </div>
              <CardTitle className="font-manrope text-xl text-foreground">
                Распределение доходов
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <p className="text-muted-foreground font-manrope">
                всех доходов автоматически распределяется среди держателей NFT 
                через смарт-контракты на TON
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-foreground">🎨</span>
              </div>
              <CardTitle className="font-manrope text-xl text-foreground">
                Участие через NFT
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground font-manrope">
                Владение NFT дает право на получение доли прибыли, 
                участие в голосованиях DAO и эксклюзивные привилегии
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-foreground">🗳️</span>
              </div>
              <CardTitle className="font-manrope text-xl text-foreground">
                DAO-голосование
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground font-manrope">
                Все важные решения принимаются сообществом через 
                децентрализованное голосование держателей NFT
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-accent/50 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-manrope font-bold text-center text-foreground mb-6">
            Как это работает?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Покупаете NFT</h4>
              <p className="text-sm text-muted-foreground font-manrope">Получаете долю в проекте</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Бизнес работает</h4>
              <p className="text-sm text-muted-foreground font-manrope">Генерирует прибыль</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                3
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Смарт-контракт</h4>
              <p className="text-sm text-muted-foreground font-manrope">Автоматически распределяет доходы</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                4
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Получаете прибыль</h4>
              <p className="text-sm text-muted-foreground font-manrope">Пассивный доход в TON</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;