import {
  Award,
  BadgeCheck,
  Truck,
  ShieldCheck,
  Handshake,
  Sparkles,
  Clock,
} from "lucide-react";

const AboutCompany = () => {
  return (
    <div id="about" className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center text-gray-800">
        О компании FORMA
      </h2>

      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="md:w-1/2">
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            <span className="font-semibold text-gray-800">FORMA</span> — ведущий
            поставщик оригинальных препаратов для профессиональных косметологов.
            Мы сотрудничаем напрямую с производителями, что позволяет нам
            гарантировать качество и оригинальность всей продукции в нашем
            каталоге.
          </p>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Благодаря прямым контрактам с производителями мы можем предложить
            нашим клиентам не только высокое качество, но и привлекательные цены
            и широкий ассортимент препаратов для решения любых косметологических
            задач.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Наша миссия — обеспечить косметологов самыми эффективными и
            безопасными препаратами для достижения максимальных результатов в
            работе с клиентами.
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary-50 mr-4 mt-1">
                <BadgeCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-800">
                  Оригинальные препараты
                </h3>
                <p className="text-gray-600">
                  100% гарантия подлинности всей продукции
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary-50 mr-4 mt-1">
                <Handshake className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-800">
                  Прямые контракты
                </h3>
                <p className="text-gray-600">
                  Работаем напрямую с производителями
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary-50 mr-4 mt-1">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-800">
                  Широкий ассортимент
                </h3>
                <p className="text-gray-600">
                  Для решения любых косметологических задач
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary-50 mr-4 mt-1">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-800">
                  Высокое качество
                </h3>
                <p className="text-gray-600">
                  Тщательный контроль качества продукции
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary-50 mr-4 mt-1">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-800">
                  Оперативная доставка
                </h3>
                <p className="text-gray-600">По Москве и всей России</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary-50 mr-4 mt-1">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-800">
                  Персональный подход
                </h3>
                <p className="text-gray-600">
                  Индивидуальное сопровождение каждого клиента
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
