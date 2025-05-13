
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import YandexMap from "@/components/YandexMap";

const LocationSection = () => {
  return (
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
                    <a
                      href="tel:+79166806904"
                      className="text-primary hover:text-primary-700 transition-colors"
                    >
                      +7 (916) 680-69-04
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email:</p>
                    <a
                      href="mailto:info@forma-cosmetics.ru"
                      className="text-primary hover:text-primary-700 transition-colors"
                    >
                      info@forma-cosmetics.ru
                    </a>
                  </div>
                </div>

                <Button
                  className="w-full mt-4"
                  onClick={() =>
                    window.open("https://yandex.ru/maps/-/CHvMYXKN", "_blank")
                  }
                >
                  Построить маршрут <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex-1 w-full h-96 md:h-[450px] rounded-lg overflow-hidden shadow-md border border-gray-200">
            <YandexMap organizationUrl="https://yandex.ru/maps/-/CHvMYXKN" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
