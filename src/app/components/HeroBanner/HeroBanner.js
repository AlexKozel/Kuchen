'use client';
import Image from 'next/image';
import { useState } from 'react';
import FeedbackForm from '@/app/components/FeedbackForm';
import { useTranslations } from 'next-intl';

export default function HeroBanner() {
  const t = useTranslations('HeroBanner');
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
      <section className="relative h-screen">
        <Image
            src="/images/back.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <button
                onClick={() => setIsFormOpen(true)}
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              {t('cta')}
            </button>

            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                  <div
                      className="absolute inset-0 backdrop-blur-sm bg-transparent"
                      onClick={() => setIsFormOpen(false)}
                  />
                  <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden">
                    <button
                        onClick={() => setIsFormOpen(false)}
                        className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                        aria-label={t('closeModal')}
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="max-h-[90vh] overflow-y-auto">
                      <FeedbackForm onSuccess={() => setIsFormOpen(false)} />
                    </div>
                  </div>
                </div>
            )}
          </div>
        </div>
      </section>
  );
}
