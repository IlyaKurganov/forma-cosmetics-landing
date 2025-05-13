import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Sample brands data
const brands = [
  {
    id: 1,
    name: "Natura Bisse",
    logo: "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 2,
    name: "SkinCeuticals",
    logo: "https://images.unsplash.com/photo-1629793926139-4919047ebc4d?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 3,
    name: "Obagi",
    logo: "https://images.unsplash.com/photo-1570513896641-4c02b4a48b4d?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 4,
    name: "La Prairie",
    logo: "https://images.unsplash.com/photo-1629187916687-4e97e5c3afe1?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 5,
    name: "Valmont",
    logo: "https://images.unsplash.com/photo-1583946099793-2e73ea6f7e74?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 6,
    name: "Biologique Recherche",
    logo: "https://images.unsplash.com/photo-1574179637783-4550ffe5236e?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 7,
    name: "Sisley",
    logo: "https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 8,
    name: "ZO Skin Health",
    logo: "https://images.unsplash.com/photo-1628177142780-ae2be7c4e275?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

const BrandsMap = () => {
  const [hoveredBrandId, setHoveredBrandId] = useState<number | null>(null);

  return (
    <div id="brands" className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 text-center mb-10">
          Мы сотрудничаем напрямую с ведущими производителями косметологических
          препаратов, что гарантирует оригинальность и качество всей нашей
          продукции.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md cursor-pointer"
              onMouseEnter={() => setHoveredBrandId(brand.id)}
              onMouseLeave={() => setHoveredBrandId(null)}
            >
              <div className="p-4 flex flex-col items-center">
                <div
                  className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-gray-100"
                  style={{
                    backgroundImage: `url(${brand.logo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h3 className="text-center font-medium text-gray-800">
                  {brand.name}
                </h3>

                <div
                  className={`
                  absolute inset-0 bg-primary-50/90 flex items-center justify-center opacity-0 
                  transition-opacity group-hover:opacity-100 p-4
                `}
                >
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 mb-2">
                      {brand.name}
                    </h3>
                    <Button size="sm">
                      Смотреть продукцию{" "}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary-600">
            Весь ассортимент брендов <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Изменение декоративных элементов, чтобы они не создавали горизонтальную прокрутку */}
      <div className="hidden md:block absolute left-0 top-1/4 w-32 h-32 rounded-full bg-primary-50 -z-10"></div>
      <div className="hidden md:block absolute right-0 bottom-1/3 w-40 h-40 rounded-full bg-primary-50 -z-10"></div>
    </div>
  );
};

export default BrandsMap;
