
import React, { useEffect, useRef } from 'react';

interface YandexMapProps {
  organizationUrl?: string;
  className?: string;
}

const YandexMap: React.FC<YandexMapProps> = ({ 
  organizationUrl = "https://yandex.ru/maps/-/CHvMYXKN",
  className = "w-full h-full" 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Функция для получения HTML карточки организации из Яндекс.Карт
    const loadYandexMap = () => {
      // Проверяем, что контейнер для карты существует
      if (!mapRef.current) return;
      
      // Создаем iframe для встраивания карты
      const iframe = document.createElement('iframe');
      iframe.src = "https://yandex.ru/map-widget/v1/?um=constructor%3A45bd5015b723bd7ca3cd668ccf85ede28c4fcf376862fa6df17a137751a0e4fe&amp;source=constructor";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.frameBorder = "0";
      iframe.title = "Местоположение компании FORMA";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      
      // Очищаем контейнер и добавляем iframe
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    };
    
    // Загружаем карту
    loadYandexMap();
    
    // Удаляем iframe при размонтировании компонента
    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full h-full"></div>
      <a 
        href={organizationUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 bg-white py-1 px-3 rounded-md shadow-md text-sm font-medium text-primary hover:bg-primary-50 transition-colors"
      >
        Открыть на Яндекс Картах
      </a>
    </div>
  );
};

export default YandexMap;
