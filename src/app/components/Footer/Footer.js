// app/components/Footer/Footer.js
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <Image
                            src="/images/komandor.svg"
                            width={160}
                            height={50}
                            alt="Логотип"
                            className="mb-4"
                        />
                        <p className="text-gray-400">
                            Производство мебели на заказ с 2010 года
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Контакты</h3>
                        <address className="text-gray-400 not-italic">
                            <p>г. Москва, ул. Примерная, 123</p>
                            <p>+7 (123) 456-78-90</p>
                            <p>info@example.com</p>
                        </address>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Меню</h3>
                        <nav className="space-y-2">
                            <Link href="/" className="block text-gray-400 hover:text-white">Главная</Link>
                            <Link href="/portfolio" className="block text-gray-400 hover:text-white">Портфолио</Link>
                            <Link href="/contacts" className="block text-gray-400 hover:text-white">Контакты</Link>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>© 2023 Студия мебели. Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}