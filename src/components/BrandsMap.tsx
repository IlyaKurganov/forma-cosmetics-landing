import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Sample brands data
const brands = [
  {
    id: 1,
    name: "Релатокс",
    logo: "https://iimg.su/s/13/ioIPScuJHcfU4wDj1EzrapVzTPfGn6eS7DETwWqm.jpg",
  },
  {
    id: 2,
    name: "Belotero",
    logo: "https://iimg.su/s/13/5spLURs5NSc6rqTvjPLDvMl6WFeSQTHmF0rowzqd.jpg",
  },
  {
    id: 3,
    name: "Revi",
    logo: "https://iimg.su/s/13/I1ISuNlV4Sykt9YMRT4VpI2SMj8JOZ2bh7STUvkt.jpg",
  },
  {
    id: 4,
    name: "Bellarti",
    logo: "https://iimg.su/s/13/rAdW2Xt2gKaP20P7GHByFk17hPDPgIUgMAIEedu1.jpg",
  },
  {
    id: 5,
    name: "Коллост",
    logo: "https://iimg.su/s/13/UB9eX42gzio2Znp1AmUVisRgDm0ImEo0Uo1SX7Z6.jpg",
  },
  {
    id: 6,
    name: "BioGel",
    logo: "https://iimg.su/s/13/RSShHVyJvyQMbaX5dHenKqKQUD30MmUGMmLpzCXc.jpg",
  },
  {
    id: 7,
    name: "Repart",
    logo: "https://iimg.su/s/13/yfOIQJ1WTzFTxhe6kygpdBAT2BpM9BD8uN58GvtZ.jpg",
  },
  {
    id: 8,
    name: "FillMed",
    logo: "https://iimg.su/s/13/Hnlu8B0CCuzDQR7dm0xUcxyzEfkwFH6vsT2AmQfq.jpg",
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
                  className={`absolute inset-0 bg-primary-50/90 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 p-4`}
                >
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 mb-2">
                      {brand.name}
                    </h3>
                    <a
                      href={`https://wa.me/+79166806904?text=Здравствуйте! Интересует продукция бренда ${encodeURIComponent(brand.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm">
                        Узнать <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={`https://drive.google.com/file/d/1kXOPexq-3psxUqLzMmK-015rvxWaXaLG/view?usp=sharing`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-600 text-white"
            >
              Весь ассортимент брендов <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      {/* Изменение декоративных элементов, чтобы они не создавали горизонтальную прокрутку */}
      <div className="hidden md:block absolute left-0 top-1/4 w-32 h-32 rounded-full bg-primary-50 -z-10"></div>
      <div className="hidden md:block absolute right-0 bottom-1/3 w-40 h-40 rounded-full bg-primary-50 -z-10"></div>
    </div>
  );
};

export default BrandsMap;
