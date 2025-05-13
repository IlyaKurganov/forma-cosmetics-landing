import React from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <img
                src="https://iimg.su/s/13/yJXhzHPT9Z3g0YzrbvuxrZIqMHaktC6conRWXGAj.png"
                alt="FORMA Logo"
                className="h-12 mr-3"
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
                  <a
                    href="tel:+79166806904"
                    className="hover:text-primary-300 transition-colors"
                  >
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
              <h3 className="text-lg font-bold mb-4 font-heading">
                Быстрые ссылки
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-300 transition-colors"
                  >
                    Каталог
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-300 transition-colors"
                  >
                    Акции
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-300 transition-colors"
                  >
                    О компании
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-300 transition-colors"
                  >
                    Контакты
                  </a>
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
  );
};

export default Footer;
