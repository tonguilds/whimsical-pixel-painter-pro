import { Button } from "@/components/ui/button";

const CTASection = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: "💬",
      url: "#",
      description: "Официальный чат проекта"
    },
    {
      name: "Twitter",
      icon: "🐦", 
      url: "#",
      description: "Последние новости"
    },
    {
      name: "Discord",
      icon: "🎮",
      url: "#", 
      description: "Сообщество инвесторов"
    },
    {
      name: "Medium",
      icon: "📝",
      url: "#",
      description: "Блог и аналитика"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-glow">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            Инвестируй в будущее уже сегодня
          </h2>
          
          <p className="text-xl text-primary-foreground/90 font-manrope mb-8 max-w-2xl mx-auto">
            Не упустите возможность стать частью революции в области децентрализованных инвестиций
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-manrope font-semibold px-8 py-4 text-lg"
            >
              Купить NFT
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-manrope font-semibold px-8 py-4 text-lg"
            >
              Присоединиться к DAO
            </Button>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-manrope font-semibold mb-6">
              Следите за нами в социальных сетях
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2">{social.icon}</div>
                  <div className="font-manrope font-semibold text-sm mb-1">{social.name}</div>
                  <div className="text-xs text-primary-foreground/80 font-manrope">{social.description}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground font-manrope">Держателей NFT</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">$500K+</div>
              <div className="text-muted-foreground font-manrope">Привлечено средств</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <div className="text-muted-foreground font-manrope">Доходов инвесторам</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;