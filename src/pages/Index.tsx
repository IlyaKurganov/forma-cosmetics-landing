
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PromoWrapper from "@/components/sections/PromoWrapper";
import BrandsSection from "@/components/sections/BrandsSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutSection from "@/components/sections/AboutSection";
import LocationSection from "@/components/sections/LocationSection";
import Footer from "@/components/sections/Footer";

/**
 * Главная страница сайта
 * @returns {JSX.Element} Компонент главной страницы
 */
const Index = () => {
  // Состояние для отслеживания прокрутки страницы
  const [scrolled, setScrolled] = useState(false);

  // Эффект для отслеживания прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Добавляем слушатель события прокрутки
    window.addEventListener("scroll", handleScroll);
    
    // Очищаем слушатель при размонтировании компонента
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Шапка сайта */}
      <Header scrolled={scrolled} />

      {/* Основное содержимое */}
      <main>
        {/* Главный баннер */}
        <HeroSection />

        {/* Секция с акциями */}
        <PromoWrapper />

        {/* Секция с брендами */}
        <BrandsSection />

        {/* Секция с контактной информацией менеджера */}
        <ContactSection />

        {/* Секция о компании */}
        <AboutSection />

        {/* Секция с расположением на карте */}
        <LocationSection />
      </main>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
};

export default Index;
