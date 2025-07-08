import { Card, CardContent } from "@/components/ui/card";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: "Q1 2024",
      title: "Краудфандинг",
      description: "Запуск продажи NFT, формирование сообщества, сбор средств для развития проекта",
      status: "active",
      tasks: ["Выпуск NFT коллекции", "Создание DAO", "Маркетинговая кампания"]
    },
    {
      phase: "Q2 2024", 
      title: "MVP проекта",
      description: "Разработка и запуск минимально жизнеспособного продукта, первые реальные инвестиции",
      status: "upcoming",
      tasks: ["Смарт-контракты на TON", "Первые RWA инвестиции", "Запуск платформы"]
    },
    {
      phase: "Q3 2024",
      title: "Выпуск токена", 
      description: "Создание утилитарного токена для экосистемы, листинг на биржах",
      status: "upcoming",
      tasks: ["Токеномика", "Листинг на DEX", "Развитие экосистемы"]
    },
    {
      phase: "Q4 2024",
      title: "Масштабирование",
      description: "Расширение портфеля активов, международная экспансия, партнерства",
      status: "upcoming", 
      tasks: ["Новые RWA активы", "Международное расширение", "Стратегические партнерства"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold text-foreground mb-4">
            Роадмап проекта
          </h2>
          <p className="text-lg text-muted-foreground font-manrope max-w-3xl mx-auto">
            Пошаговый план развития The COD Project от идеи до глобального масштаба
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1">
                  <Card className={`border-border shadow-card hover:shadow-glow transition-all duration-300 ${item.status === 'active' ? 'ring-2 ring-primary bg-gradient-card' : 'bg-card'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-manrope font-semibold ${
                          item.status === 'active' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-secondary text-secondary-foreground'
                        }`}>
                          {item.phase}
                        </div>
                        {item.status === 'active' && (
                          <div className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-manrope">
                            В процессе
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-manrope font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground font-manrope mb-4">
                        {item.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-manrope font-semibold text-foreground text-sm">Ключевые задачи:</h4>
                        <ul className="space-y-1">
                          {item.tasks.map((task, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-manrope">
                              <span className="text-primary">•</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline marker */}
                <div className="hidden md:block relative">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    item.status === 'active' 
                      ? 'bg-primary border-primary shadow-glow' 
                      : 'bg-background border-border'
                  }`}></div>
                </div>
                
                <div className="flex-1 md:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-accent/50 rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-manrope font-bold text-foreground mb-3">
              Следите за обновлениями
            </h3>
            <p className="text-muted-foreground font-manrope">
              Присоединяйтесь к нашему сообществу, чтобы быть в курсе всех изменений в роадмапе
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;