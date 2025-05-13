
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Icon from '@/components/ui/icon';

// Sample brands data with icons
const brands = [
  {
    id: 1,
    name: "Natura Bisse",
    logo: "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?auto=format&fit=crop&q=80&w=150&h=150",
    icon: "Star"
  },
  {
    id: 2,
    name: "SkinCeuticals",
    logo: "https://images.unsplash.com/photo-1629793926139-4919047ebc4d?auto=format&fit=crop&q=80&w=150&h=150",
    icon: "FlaskConical"
  },
  {
    id: 3,
    name: "Obagi",
    logo: "https://images.unsplash.com/photo-1570513896641-4c02b4a48b4d?auto=format&fit=crop&q=80&w=150&h=150",
    icon: "Sparkles"
  },
  {
    id: 4,
    name: "La Prairie",
    logo: "https://images.unsplash.com/photo-1629187916687-4e97e5c3afe1?auto=format&fit=crop&q=80&w=150&h=150",
    icon: "Star"
  },
  {
    id: 5,
    name: "Valmont",
    logo: "https://images.unsplash.com/photo-1583946099793-2e73ea6f7e74?auto=format&fit=crop&q=80&w=150&h=150",
    icon: "Sparkles"
  },
  {
    id: 6,
    name: "Biologique Recherche",
    logo: "https://images.unsplash.com/photo-1574179637783-4550ffe5236e?auto=format&fit=crop&q=80&w=150&h=150",
    icon: "FlaskConical"
  },
  {
    id: 7,
    name: "Sisley",
    logo: "https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?auto=format&fit=crop&q=80&w=150&h=150",
    icon: "Star"
  },
  {
    id: 8,
    name: "ZO Skin Health",
    logo: "https://images.unsplash.com/photo-1628177142780-ae2be7c4e275?auto=format&fit=crop&q=80&w=150&h=150",
    icon: "FlaskConical"
  },
];

const ThreeDMapBrands = () => {
  const [hoveredBrandId, setHoveredBrandId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Анимированное вращение карты
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      if (isAnimating) {
        // Медленное вращение карты
        const speed = 0.01; // скорость вращения
        setRotationAngle(angle => (angle + speed * elapsed) % 360);
      }
      
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAnimating]);
  
  // Остановка анимации при наведении на карту
  const handleMouseEnter = () => setIsAnimating(false);
  const handleMouseLeave = () => setIsAnimating(true);

  return (
    <div 
      id="brands-3d" 
      className="relative overflow-hidden"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 text-center mb-10">
          Мы сотрудничаем напрямую с ведущими производителями косметологических
          препаратов, что гарантирует оригинальность и качество всей нашей
          продукции.
        </p>

        <div className="relative h-[360px] perspective-1000">
          <div 
            className="absolute inset-0 transform-style-3d"
            style={{ transform: `rotateY(${rotationAngle}deg)` }}
          >
            {brands.map((brand, index) => {
              // Расчет позиции на окружности
              const angle = (index / brands.length) * Math.PI * 2;
              const radius = 150; // Радиус окружности
              const x = Math.sin(angle) * radius;
              const z = Math.cos(angle) * radius;
              
              return (
                <div
                  key={brand.id}
                  className={`
                    absolute left-1/2 top-1/2 w-[120px] h-[150px] 
                    bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 
                    transform-style-3d cursor-pointer transition-transform duration-300
                    flex flex-col items-center justify-center p-3 text-center
                    ${hoveredBrandId === brand.id ? 'scale-110 shadow-lg z-10' : ''}
                  `}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${-angle * (180/Math.PI)}deg)`,
                  }}
                  onMouseEnter={() => setHoveredBrandId(brand.id)}
                  onMouseLeave={() => setHoveredBrandId(null)}
                >
                  <div className="bg-primary-50 p-3 rounded-full mb-3">
                    <Icon name={brand.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-gray-800">{brand.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary-600">
            Весь ассортимент брендов <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="hidden md:block absolute left-0 top-1/4 w-32 h-32 rounded-full bg-primary-50 -z-10"></div>
      <div className="hidden md:block absolute right-0 bottom-1/3 w-40 h-40 rounded-full bg-primary-50 -z-10"></div>
    </div>
  );
};

export default ThreeDMapBrands;
