import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ShoppingBag, MessageCircle } from "lucide-react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/files/017c6741-9aa5-41ec-a37c-4f8746a9a349.svg"
              alt="FORMA Logo"
              className={`transition-all ${scrolled ? "h-10" : "h-12"}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#promo"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Акции
            </a>
            <a
              href="#brands"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Бренды
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary font-medium"
            >
              О компании
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Контакты
            </a>
          </nav>

          {/* Contact Buttons */}
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

            <Button className="bg-primary hover:bg-primary-600">
              <ShoppingBag className="mr-2 h-4 w-4" /> Каталог
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Positioned fixed to viewport */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col md:hidden overflow-auto">
          <div className="container px-4 mx-auto py-5 flex justify-between items-center border-b">
            <a href="/" className="flex items-center">
              <img
                src="https://cdn.poehali.dev/files/017c6741-9aa5-41ec-a37c-4f8746a9a349.svg"
                alt="FORMA Logo"
                className="h-10"
              />
            </a>
            <button
              className="flex items-center text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col flex-1 container px-4 mx-auto pt-8 pb-6">
            <nav className="flex flex-col space-y-6 mb-8">
              <a
                href="#promo"
                className="text-lg font-medium text-gray-800 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Акции
              </a>
              <a
                href="#brands"
                className="text-lg font-medium text-gray-800 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Бренды
              </a>
              <a
                href="#about"
                className="text-lg font-medium text-gray-800 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                О компании
              </a>
              <a
                href="#contacts"
                className="text-lg font-medium text-gray-800 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
            </nav>

            <div className="mt-auto space-y-4">
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
                  setMobileMenuOpen(false);
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Написать в WhatsApp
              </Button>

              <Button
                variant="outline"
                className="w-full justify-center border-primary text-primary hover:bg-primary-50 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingBag className="mr-2 h-5 w-5" /> Перейти в каталог
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
