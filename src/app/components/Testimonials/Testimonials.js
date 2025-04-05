// src/components/Testimonials/Testimonials.js
'use client'
import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: 'Шрэк Петрович',
        position: 'Дизайнер интерьеров',
        text: 'Отличное качество мебели и профессиональный подход. Рекомендую!',
        avatar: '/images/testimonials/person1.jpg',
        rating: 5
    },
    {
        id: 2,
        name: 'Вероника Козел   ',
        position: 'Архитектор',
        text: 'У нас самая лучшая мама, а кузни тут ни при чём.',
        avatar: '/images/testimonials/Vera=mini.jpg',
        rating: 5
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>

                <div className="relative bg-gray-50 p-8 rounded-lg shadow-md">
                    <div className="text-center mb-6">
                        <div className="inline-flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`text-2xl ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                >
                  ★
                </span>
                            ))}
                        </div>
                        <p className="text-lg italic mb-6">&quot;{testimonials[currentIndex].text}&quot;</p>

                        <div className="flex items-center justify-center space-x-4">
                            <Image
                                src={testimonials[currentIndex].avatar}
                                width={60}
                                height={60}
                                alt={testimonials[currentIndex].name}
                                className="rounded-full"
                            />
                            <div>
                                <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                                <p className="text-gray-600 text-sm">{testimonials[currentIndex].position}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                    >
                        &rarr;
                    </button>

                    <div className="flex justify-center mt-4 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}