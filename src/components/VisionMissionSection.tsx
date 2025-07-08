import { Card, CardContent } from "@/components/ui/card";

const VisionMissionSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
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