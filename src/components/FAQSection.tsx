import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Как начать инвестировать в The COD Project?",
      answer: "Для начала инвестирования вам необходимо: 1) Установить TON Wallet, 2) Приобрести TON криптовалюту, 3) Подключиться к нашей платформе, 4) Выбрать и купить подходящий NFT. После покупки вы автоматически станете участником DAO и начнете получать долю от прибыли проекта."
    },
    {
      question: "Сколько я смогу заработать с NFT?",
      answer: "Доходность зависит от уровня NFT и общей прибыли проекта. Bronze NFT дает 0.1% от общих доходов, Silver - 0.5%, Gold - 1.5%. При прибыли проекта в $100,000 в месяц, держатель Gold NFT получит $1,500. Все выплаты происходят автоматически через смарт-контракты каждый месяц."
    },
    {
      question: "Насколько безопасны мои инвестиции?",
      answer: "Безопасность обеспечивается несколькими уровнями: 1) Все транзакции происходят через проверенные смарт-контракты на TON blockchain, 2) Средства хранятся в мультиподписных кошельках, 3) Все активы проекта аудируются независимыми компаниями, 4) DAO-голосование позволяет сообществу контролировать ключевые решения."
    },
    {
      question: "Что такое DAO и как я могу участвовать в управлении?",
      answer: "DAO (Децентрализованная Автономная Организация) — это система управления проектом через голосование держателей NFT. Владея NFT, вы получаете право голоса пропорционально уровню NFT. Голосования проходят по важным вопросам: распределение прибыли, новые инвестиции, стратегические партнерства."
    },
    {
      question: "Можно ли продать NFT и вывести инвестиции?",
      answer: "Да, NFT можно продать на вторичном рынке в любое время. Ликвидность поддерживается через партнерские маркетплейсы и собственную торговую площадку. При продаже все права на получение доходов переходят к новому владельцу. Комиссия за продажу составляет 2.5%."
    },
    {
      question: "Как часто происходят выплаты доходов?",
      answer: "Выплаты происходят ежемесячно в автоматическом режиме через смарт-контракты. Расчет производится на основе прибыли за предыдущий месяц. Средства поступают напрямую на ваш TON кошелек без необходимости дополнительных действий с вашей стороны."
    }
  ];

  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground font-manrope max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о The COD Project
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-card p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-manrope font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-manrope leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-manrope font-bold text-foreground mb-3">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-muted-foreground font-manrope mb-4">
              Обратитесь к нашей службе поддержки или задайте вопрос в официальном Telegram чате
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="#" 
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-manrope font-semibold hover:bg-primary/90 transition-colors"
              >
                Написать в поддержку
              </a>
              <a 
                href="#" 
                className="border border-primary text-primary px-6 py-2 rounded-lg font-manrope font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Telegram чат
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;