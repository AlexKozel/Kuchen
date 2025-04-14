import Image from 'next/image';

export default function WorkWithUs() {
  return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Индивидуальный подход и точность — с первого замера до последнего винта
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Шаг 1 */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="min-w-[60px]">
                <Image src="/icons/workWithUs/measure.svg" width={60} height={60} alt="Снятие замеров" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Снятие замеров</h3>
                <p className="text-gray-700 leading-relaxed">
                  Специалист снимает все размеры, учитывая ниши, трубы, розетки, выступы — чтобы ничего не мешало будущей кухне. Это бесплатно.
                </p>
              </div>
            </div>

            {/* Шаг 2 */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="min-w-[60px]">
                <Image src="/icons/workWithUs/design.svg" width={60} height={60} alt="Проектирование" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Проектирование в ПО от производителя</h3>
                <p className="text-gray-700 leading-relaxed">
                  Мы создаём макет кухни в официальной программе от производителя мебели.
                  Программа учитывает всё: размеры помещения, ниши, особенности планировки,
                  а главное — <strong>размеры бытовой техники</strong> из встроенной базы данных.
                  Это исключает ошибки и гарантирует, что всё встанет идеально.
                </p>
              </div>
            </div>

            {/* Шаг 3 */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="min-w-[60px]">
                <Image src="/icons/workWithUs/approve.svg" width={60} height={60} alt="Утверждение" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Утверждение и согласование</h3>
                <p className="text-gray-700 leading-relaxed">
                  Вы получаете реалистичный проект и финальную смету. Никаких скрытых доплат — всё прозрачно.
                </p>
              </div>
            </div>

            {/* Шаг 4 */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="min-w-[60px]">
                <Image src="/icons/workWithUs/install.svg" width={60} height={60} alt="Установка" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Производство и установка</h3>
                <p className="text-gray-700 leading-relaxed">
                  После согласования, заказ отправляется на производство. Установку выполняют сертифицированные монтажники — чисто, аккуратно, по стандартам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
