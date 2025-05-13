
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShoppingBag, 
  ChevronRight,
  Mail
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PromoSection from "@/components/PromoSection";
import BrandsMap from "@/components/BrandsMap";
import ContactInfo from "@/components/ContactInfo";
import AboutCompany from "@/components/AboutCompany";
import Header from "@/components/Header";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrolled={scrolled} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white py-20 md:py-32">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-gray-800">
              Оригинальные препараты для профессиональных косметологов
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-body">
              Прямые контракты с производителями, гарантированное качество, привлекательные цены и широкий ассортимент
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8">
                <ShoppingBag className="mr-2 h-5 w-5" /> Перейти в каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary-50"
                onClick={() => window.open("https://wa.me/79166806904", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute left-0 bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Promo Section */}
      <PromoSection />

      {/* Brands Map Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center text-gray-800">
            Наши бренды
          </h2>
          <BrandsMap />
        </div>
      </section>

      {/* Contact Manager Section */}
      <section className="py-16 bg-primary-50">
        <div className="container px-4 md:px-8 mx-auto">
          <ContactInfo />
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 mx-auto">
          <AboutCompany />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-8 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center text-gray-800">
            Наше расположение
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Card className="md:w-1/3 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 font-heading">FORMA</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Адрес:</p>
                      <p className="text-gray-600">
                        г. Москва, ул Спартаковская 6
                      </p>
                      <p className="text-gray-600">м. Бауманская</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Телефон:</p>
                      <a href="tel:+79166806904" className="text-primary hover:text-primary-700 transition-colors">
                        +7 (916) 680-69-04
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email:</p>
                      <a href="mailto:info@forma-cosmetics.ru" className="text-primary hover:text-primary-700 transition-colors">
                        info@forma-cosmetics.ru
                      </a>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-4"
                    onClick={() => window.open("https://yandex.ru/maps/-/CHvMYXKN", "_blank")}
                  >
                    Построить маршрут <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex-1 w-full h-96 md:h-[450px] rounded-lg overflow-hidden shadow-md border border-gray-200">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A4f12c9f7ec61d2fec52ba2349f5b8e0ba81cc9a15a19e9a68c9be3abb8bc6a13&amp;source=constructor" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Карта расположения FORMA"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <img 
                  src="https://cdn.poehali.dev/files/017c6741-9aa5-41ec-a37c-4f8746a9a349.svg" 
                  alt="FORMA Logo" 
                  className="h-12 mr-3 invert"
                />
              </div>
              <p className="mt-4 text-gray-400 max-w-md">
                Оригинальные препараты для косметологов напрямую от производителей
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 font-heading">Контакты</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary-300" />
                    <span>г. Москва, ул Спартаковская 6</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary-300" />
                    <a href="tel:+79166806904" className="hover:text-primary-300 transition-colors">
                      +7 (916) 680-69-04
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2 text-primary-300" />
                    <a 
                      href="https://wa.me/79166806904" 
                      className="hover:text-primary-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 font-heading">Быстрые ссылки</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-primary-300 transition-colors">Каталог</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-300 transition-colors">Акции</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-300 transition-colors">О компании</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-300 transition-colors">Контакты</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} FORMA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
