export default function WorkWithUs() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Как мы работаем</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Согласование</h3>
                        <p className="text-gray-800">
                            Наш дизайнер приедет к вам для замеров и обсуждения проекта.
                            Вы получите 3D-визуализацию будущей кухни и точный расчёт стоимости.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Заказ</h3>
                        <p className="text-gray-800">
                            После утверждения проекта мы заключаем договор и начинаем производство.
                            Средний срок изготовления - 4 недели. Вы всегда можете узнать статус заказа.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Установка</h3>
                        <p className="text-gray-800">
                            Наши мастера аккуратно доставят и установят кухню в согласованные сроки.
                            После монтажа вы получите гарантийный сертификат на 5 лет.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}