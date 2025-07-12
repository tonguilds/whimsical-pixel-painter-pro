import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Большие декоративные формы как в примере */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Большой круг справа */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-primary opacity-30"></div>
        
        {/* Средний круг слева */}
        <div className="absolute top-1/2 -left-48 w-80 h-80 rounded-full bg-gradient-to-br from-primary/40 to-primary-glow/20"></div>
        
        {/* Малый круг внизу */}
        <div className="absolute -bottom-24 right-1/4 w-48 h-48 rounded-full bg-primary/20"></div>
        
        {/* Кривые линии как в первом примере */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,400 Q300,150 600,400 Q900,650 1200,400" stroke="hsl(263 96% 60%)" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M0,300 Q400,600 800,300 Q1000,100 1200,300" stroke="hsl(263 96% 43%)" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M-200,500 Q200,200 600,500 Q1000,800 1400,500" stroke="hsl(263 96% 60%)" strokeWidth="4" fill="none" opacity="0.3" />
        </svg>
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