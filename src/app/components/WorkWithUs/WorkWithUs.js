'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function WorkWithUs() {
  const t = useTranslations('workWithUs')

  return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
            {t('howWeWorkTitle')}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            {t('howWeWorkDescription')}
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Шаг 1 */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="min-w-[60px]">
                <Image src="/icons/workWithUs/measure.svg" width={60} height={60} alt={t('step1Alt')} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('step1Title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('step1Description')}
                </p>
              </div>
            </div>

            {/* Шаг 2 */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="min-w-[60px]">
                <Image src="/icons/workWithUs/design.svg" width={60} height={60} alt={t('step2Alt')} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('step2Title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('step2Description')}
                </p>
              </div>
            </div>

            {/* Шаг 3 */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="min-w-[60px]">
                <Image src="/icons/workWithUs/approve.svg" width={60} height={60} alt={t('step3Alt')} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('step3Title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('step3Description')}
                </p>
              </div>
            </div>

            {/* Шаг 4 */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="min-w-[60px]">
                <Image src="/icons/workWithUs/money.svg" width={60} height={60} alt={t('step4Alt')} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('step4Title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('step4Description')}
                </p>
              </div>
            </div>

            {/* Шаг 5 */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="min-w-[60px]">
                <Image src="/icons/workWithUs/install.svg" width={60} height={60} alt={t('step5Alt')} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('step5Title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('step5Description')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}
