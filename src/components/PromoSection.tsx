import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Percent, Clock, Tag } from "lucide-react";

// Sample promotional data
const promoData = [
  {
    id: 1,
    title: "Скидка 500 рублей на первый заказ",
    description: "Для новых клиентов при заказе от 10 000 ₽",
    backgroundColor: "bg-primary-100",
    icon: "Percent",
    expiry: "До 31 мая",
  },
  {
    id: 2,
    title: "Бесплатная доставка",
    description: "При заказе от 15 000 ₽ по Москве",
    backgroundColor: "bg-green-100",
    icon: "Truck",
    expiry: "Постоянная акция",
  },
  {
    id: 3,
    title: "Мега-акция на филлеры",
    description: "Любимый препарат по лучшей цене",
    backgroundColor: "bg-amber-100",
    icon: "Gift",
    expiry: "До 31 мая",
  },
  {
    id: 4,
    title: "Скидка до 15% на Коллост",
    description: "Уникальная скидка от объема",
    backgroundColor: "bg-blue-100",
    icon: "GraduationCap",
    expiry: "Ограниченное предложение",
  },
];

const PromoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate promotions
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % promoData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="promo" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 text-center text-gray-800 px-2">
            Актуальные акции
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl px-2">
            Выгодные предложения для наших клиентов – используйте возможность
            сэкономить уже сегодня!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promoData.map((promo, index) => (
            <Card
              key={promo.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                activeIndex === index ? "ring-2 ring-primary scale-[1.02]" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`${promo.backgroundColor} h-2`}></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-full ${promo.backgroundColor}`}>
                    {promo.icon === "Percent" && (
                      <Percent className="h-5 w-5 text-primary-700" />
                    )}
                    {promo.icon === "Truck" && (
                      <Tag className="h-5 w-5 text-green-700" />
                    )}
                    {promo.icon === "Gift" && (
                      <Tag className="h-5 w-5 text-amber-700" />
                    )}
                    {promo.icon === "GraduationCap" && (
                      <Tag className="h-5 w-5 text-blue-700" />
                    )}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{promo.expiry}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 font-heading text-gray-800">
                  {promo.title}
                </h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>

                <a
                  href={`https://wa.me/+79166806904?text=Здравствуйте! Подскажите, какие есть актуальные акции?`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary-700 hover:bg-transparent"
                >
                  Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                  </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {promoData.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Перейти к акции ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
