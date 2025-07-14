import { Button } from "@/components/ui/button";
import codLogo from "@/assets/cod-logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-8">
          <img 
            src={codLogo} 
            alt="THE COD PROJECT" 
            className="mx-auto max-w-md w-full h-auto"
          />
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