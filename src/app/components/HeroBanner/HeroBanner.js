// app/components/HeroBanner/HeroBanner.js
import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
    return (
        <section className="relative h-screen">
            <Image
                src="/images/back.webp"
                alt="Мебель на заказ"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Студия мебели на заказ
                    </h1>
                    <Link
                        href="/contact"
                        className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition"
                    >
                        Бесплатная консультация
                    </Link>
                </div>
            </div>
        </section>
    )
}