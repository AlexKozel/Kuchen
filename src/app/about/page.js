import Image from 'next/image'
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <header
                className={`fixed top-0 left-0 w-full bg-gray-900/95`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-20">
                </div>
                    <Header/>
            </header>
            <main className="flex-grow pt-20 pb-12">
                <div className="max-w-6xl mx-auto px-4 py-20">

                    <h1 className="text-3xl font-bold text-gray-900 mb-8">О нашей компании</h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-800">
                                Основанная в 2015 году, наша компания быстро стала лидером в производстве
                                качественных
                                кухонных гарнитуров.
                                Мы сочетаем немецкое качество с индивидуальным подходом к каждому клиенту.
                            </p>
                            <p className="text-gray-800">
                                Наш коллектив - это команда профессиональных дизайнеров, инженеров и мастеров с
                                многолетним опытом работы.
                                Мы гордимся тем, что 98% наших клиентов рекомендуют нас своим друзьям.
                            </p>
                            <p className="text-gray-800">
                                Каждое изделие проходит тщательный контроль качества на всех этапах производства.
                                Мы используем только экологичные материалы от проверенных европейских поставщиков.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <div className="relative h-64 rounded-xl overflow-hidden">
                                <Image
                                    src="/about-1.jpg"
                                    alt="Наше производство"
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,..."
                                />
                            </div>
                            <div className="relative h-64 rounded-xl overflow-hidden">
                                <Image
                                    src="/about-2.jpg"
                                    alt="Наша команда"
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Юридическая информация</h2>
                        <div className="grid md:grid-cols-3 gap-6 text-gray-800">
                            <div>
                                <h3 className="font-medium">Название</h3>
                                <p>Kuchen GmbH</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Регистрационный номер</h3>
                                <p>HRB 123456</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Адрес</h3>
                                <p>Berlin, Friedrichstrasse 123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}