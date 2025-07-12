import { Card, CardContent } from "@/components/ui/card";

const VisionMissionSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Декоративные линии */}
      <div className="decorative-curves">
        <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 600 400" fill="none">
          <path d="M0,200 Q150,50 300,200 T600,200" stroke="hsl(263 96% 43% / 0.1)" strokeWidth="2" fill="none" />
          <path d="M100,300 Q250,150 400,300 T700,300" stroke="hsl(263 96% 60% / 0.15)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-manrope font-bold text-primary mb-6">
                Видение
              </h3>
              <p className="text-foreground font-manrope leading-relaxed">
                Создание революционной экосистемы, где инвестиции в реальные активы (RWA) 
                сочетаются с инновационными технологиями блокчейна, обеспечивая прозрачность, 
                децентрализацию и справедливое распределение прибыли между всеми участниками сообщества.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-manrope font-bold text-primary mb-6">
                Миссия
              </h3>
              <p className="text-foreground font-manrope leading-relaxed">
                Демократизировать доступ к инвестициям в реальные активы через NFT и DAO, 
                создавая устойчивую бизнес-модель, которая генерирует стабильный доход 
                для держателей токенов и способствует развитию осознанного потребления.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;