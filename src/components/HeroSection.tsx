import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="decorative-curves">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,400 Q300,200 600,400 T1200,400" stroke="hsl(263 96% 43% / 0.3)" strokeWidth="2" fill="none" />
          <path d="M0,300 Q400,500 800,300 T1600,300" stroke="hsl(263 96% 60% / 0.2)" strokeWidth="3" fill="none" />
          <path d="M-200,600 Q200,100 600,600 T1400,600" stroke="hsl(263 96% 43% / 0.15)" strokeWidth="4" fill="none" />
        </svg>
      </div>
      
      {/* Плавающие фигуры */}
      <div className="floating-shapes">
        <div className="shape-circle w-32 h-32 top-20 left-20" style={{animationDelay: '0s'}}></div>
        <div className="shape-circle w-16 h-16 top-40 right-40" style={{animationDelay: '1s'}}></div>
        <div className="shape-circle w-24 h-24 bottom-32 left-32" style={{animationDelay: '2s'}}></div>
        <div className="shape-line w-48 h-1 top-60 right-20 rotate-45" style={{animationDelay: '0.5s'}}></div>
        <div className="shape-line w-32 h-1 bottom-48 right-48 -rotate-12" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div className="mb-8">
          <div className="inline-block bg-gradient-primary bg-clip-text text-transparent font-manrope font-bold text-2xl mb-4">
            THE
          </div>
          <h1 className="text-6xl md:text-8xl font-manrope font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            COD
          </h1>
          <div className="inline-block bg-gradient-primary bg-clip-text text-transparent font-manrope font-bold text-2xl">
            PROJECT
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-manrope font-semibold text-foreground mb-4">
          Революция в инвестициях и осознанном потреблении
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground font-manrope mb-8 max-w-3xl mx-auto">
          Инвестируйте в будущее, сохраняя гармонию с традициями
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-manrope font-semibold px-8 py-4 text-lg"
          >
            Купить NFT
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-manrope font-semibold px-8 py-4 text-lg"
          >
            Присоединиться к DAO
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border shadow-card">
            <div className="text-2xl font-bold text-primary mb-1">70%</div>
            <div className="text-sm text-muted-foreground font-manrope">ревеню холдерам NFT</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border shadow-card">
            <div className="text-lg font-semibold text-primary mb-1">TON</div>
            <div className="text-sm text-muted-foreground font-manrope">blockchain powered</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border shadow-card">
            <div className="text-lg font-semibold text-primary mb-1">DAO</div>
            <div className="text-sm text-muted-foreground font-manrope">community governed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;