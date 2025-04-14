'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('Testimonials');
  const testimonialKeys = ['shrek', 'abdul'];

  const testimonials = testimonialKeys.map((key) => ({
    name: t(`items.${key}.name`),
    position: t(`items.${key}.position`),
    text: t(`items.${key}.text`),
    avatar: t(`items.${key}.avatar`),
    rating: parseInt(t(`items.${key}.rating`)),
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('title')}</h2>

          <div className="relative bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <div className="inline-flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`text-2xl ${i < current.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                  ★
                </span>
                ))}
              </div>
              <p className="text-lg italic mb-6">&quot;{current.text}&quot;</p>

              <div className="flex items-center justify-center space-x-4">
                <Image
                    src={current.avatar}
                    width={60}
                    height={60}
                    alt={current.name}
                    className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">{current.name}</h4>
                  <p className="text-gray-600 text-sm">{current.position}</p>
                </div>
              </div>
            </div>

            <button
                onClick={prev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
            >
              &larr;
            </button>
            <button
                onClick={next}
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
  );
}
