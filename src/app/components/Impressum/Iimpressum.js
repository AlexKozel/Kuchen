'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from "@/app/components/Footer/Footer"
import FeedbackForm from "@/app/components/FeedbackForm"
import { useTranslations } from 'next-intl'

export default function Impressum() {
  const [scrollY, setScrollY] = useState(0)
  const t = useTranslations('impressum')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const opacity = Math.max(0, 1 - scrollY / 300)

  return (
      <>
        <main className="bg-white text-gray-900">
          {/* Hero баннер */}
          <section className="relative h-[90vh] overflow-hidden">
            <Image
                src="/images/about-hero.webp"
                alt={t('hero.alt')}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />

            <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity }}
            >
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('hero.title')}</h1>
                <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                  {t('hero.title')}
                </p>
              </div>
            </div>
          </section>
          <section className="py-24 px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">{t('content.title')}</h2>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li> {t('content.point1')}</li>
                  <li> {t('content.point2')}</li>
                  <li> {t('content.point3')}</li>
                </ul>
              </div>
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                    src="/images/about-hero.webp"
                    alt={t('content.imageAlt')}
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </section>


        </main>
        <FeedbackForm />
        <Footer />
      </>
  )
}
