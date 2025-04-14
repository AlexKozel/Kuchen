'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from "@/app/components/Footer/Footer"
import FeedbackForm from "@/app/components/FeedbackForm"
import { useTranslations } from 'next-intl'

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0)
  const t = useTranslations('about')

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
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>
          </section>

          {/* Контент */}
          <section className="py-24 px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">{t('content.title')}</h2>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li> {t('content.point1')}</li>
                  <li> {t('content.point2')}</li>
                  <li> {t('content.point3')}</li>
                  <li> {t('content.point4')}</li>
                  <li> {t('content.point5')}</li>
                </ul>
              </div>
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                    src="/images/about-details.webp"
                    alt={t('content.imageAlt')}
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Логотипы */}
          <section className="bg-gray-50 py-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold">{t('partners.title')}</h3>
              <p className="text-gray-600 mt-2">{t('partners.subtitle')}</p>
            </div>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center opacity-90">
              <Image src="/logos/nobilia.png" alt="Nobilia" width={120} height={60} />
              <Image src="/logos/aeg.png" alt="AEG" width={120} height={60} />
              <Image src="/logos/Haecker.png" alt="Haecker" width={120} height={60} />
              <Image src="/logos/miele.png" alt="Miele" width={120} height={60} />
              <Image src="/logos/siemens.png" alt="Siemens" width={120} height={60} />
              <Image src="/logos/neff.png" alt="Neff" width={120} height={60} />
              <Image src="/logos/blanco.png" alt="Blanco" width={120} height={60} />
              <Image src="/logos/franke.png" alt="Franke" width={120} height={60} />
              <Image src="/logos/grohe.png" alt="Grohe" width={120} height={60} />
            </div>
          </section>
        </main>
        <FeedbackForm />
        <Footer />
      </>
  )
}
