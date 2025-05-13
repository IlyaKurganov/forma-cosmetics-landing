
import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrolled: boolean;
}

// Навигационные ссылки для повторного использования
const navLinks = [
  { href: "#promo", label: "Акции" },
  { href: "#brands", label: "Бренды" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

// Компонент логотипа
const Logo = ({ scrolled }: { scrolled?: boolean }) => (
  <a href="/" className="flex items-center">
    <img
      src="https://cdn.poehali.dev/files/017c6741-9aa5-41ec-a37c-4f8746a9a349.svg"
      alt="FORMA Logo"
      className={`transition-all ${scrolled ? "h-10" : "h-12"}`}
    />
  </a>
);

// Компонент с десктопной навигацией
const DesktopNavigation = () => (
  <nav className="hidden md:flex items-center space-x-8">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="text-gray-700 hover:text-primary font-medium"
      >
        {link.label}
      </a>
    ))}
  </nav>
);

// Компонент с контактной информацией и кнопками
const ContactButtons = () => (
  <div className="hidden md:flex items-center space-x-4">
    <a
      href="tel:+79166806904"
      className="flex items-center text-gray-700 hover:text-primary transition-colors"
    >
      <Phone className="h-5 w-5 mr-2" />
      <span className="font-medium">+7 (916) 680-69-04</span>
    </a>

    <Button
      variant="outline"
      className="border-primary text-primary hover:bg-primary-50"
      onClick={() => window.open("https://wa.me/79166806904", "_blank")}
    >
      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
    </Button>

    <a
      href={`https://drive.google.com/file/d/1kXOPexq-3psxUqLzMmK-015rvxWaXaLG/view?usp=sharing`}
      target="_blank"
      rel="noopener noreferrer"
    >
    <Button className="bg-primary hover:bg-primary-600">
      <ShoppingBag className="mr-2 h-4 w-4" /> Каталог
    </Button>
    </a>
  </div>
);

// Компонент с мобильным меню
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  // Предотвращаем прокрутку страницы, когда меню открыто
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col md:hidden">
      {/* Фиксированная шапка меню */}
      <div className="sticky top-0 z-10 border-b border-gray-100 bg-white">
        <div className="container px-4 mx-auto py-5 flex justify-between items-center">
          <Logo />
          <button
            onClick={onClose}
            className="flex items-center text-gray-700"
            aria-label="Закрыть меню"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Прокручиваемый контент меню */}
      <div className="flex-1 overflow-auto px-4 py-8">
        <nav className="flex flex-col space-y-6 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-gray-800 hover:text-primary"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="space-y-4 mt-8">
          <a
            href="tel:+79166806904"
            className="flex items-center text-gray-700 text-lg font-medium"
          >
            <Phone className="h-5 w-5 mr-3 text-primary" />
            +7 (916) 680-69-04
          </a>

          <Button
            className="w-full justify-center text-base"
            onClick={() => {
              window.open("https://wa.me/79166806904", "_blank");
              onClose();
            }}
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Написать в WhatsApp
          </Button>

          <Button
            variant="outline"
            className="w-full justify-center border-primary text-primary hover:bg-primary-50 text-base"
            onClick={onClose}
          >
            <ShoppingBag className="mr-2 h-5 w-5" /> Перейти в каталог
          </Button>
        </div>
      </div>
    </div>
  );
};

// Основной компонент заголовка
const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Закрываем мобильное меню при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Logo scrolled={scrolled} />
            <DesktopNavigation />
            <ContactButtons />

            {/* Кнопка мобильного меню */}
            <button
              className="md:hidden flex items-center text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
