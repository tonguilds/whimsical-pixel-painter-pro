const AboutProjectSection = () => {
  return (
    <section className="relative py-20 px-4 bg-accent/30 overflow-hidden">
      {/* Decorative drops */}
      <div className="drop-shape drop-large top-1/4 -left-40 drop-animated" style={{ animationDelay: '2s' }}></div>
      <div className="drop-shape drop-small top-0 right-1/3" style={{ animationDelay: '5s' }}></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-manrope font-bold text-foreground mb-8">
          Что такое The COD Project?
        </h2>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <p className="text-lg text-foreground font-manrope leading-relaxed mb-6">
            The COD Project — это инновационная децентрализованная платформа, 
            использующая тренд <span className="text-primary font-semibold">RWA (Real World Assets)</span> 
            для создания устойчивой экосистемы инвестиций.
          </p>
          
          <p className="text-lg text-foreground font-manrope leading-relaxed mb-6">
            Мы токенизируем реальные активы через NFT на блокчейне TON, 
            позволяя инвесторам получать долю от прибыли реального бизнеса 
            через смарт-контракты.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🏢</span>
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Реальные активы</h4>
              <p className="text-sm text-muted-foreground font-manrope">Инвестиции в физический бизнес</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">⛓️</span>
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">Блокчейн TON</h4>
              <p className="text-sm text-muted-foreground font-manrope">Прозрачность и безопасность</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🗳️</span>
              </div>
              <h4 className="font-manrope font-semibold text-foreground mb-2">DAO управление</h4>
              <p className="text-sm text-muted-foreground font-manrope">Голосование сообщества</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectSection;