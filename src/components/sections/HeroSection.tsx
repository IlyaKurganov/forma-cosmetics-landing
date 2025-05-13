
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white pt-28 md:pt-32 pb-20 md:pb-32">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-gray-800 px-4">
            Оригинальные препараты для профессиональных косметологов
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 font-body px-4">
            Прямые контракты с производителями, гарантированное качество,
            привлекательные цены и широкий ассортимент
          </p>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
