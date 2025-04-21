'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useLocale, useTranslations} from 'next-intl'
import {useRouter} from "next/navigation";

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const router = useRouter()

  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                  src="/images/koma_logo_black.svg"
                  width={200}
                  height={75}
                  alt={t('logoAlt')}
                  className="mb-4"
              />
              <p className="text-gray-400">
                {t('description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">{t('contactsTitle')}</h3>
              <address className="text-gray-400 not-italic">
                <p>{t('address')}</p>
                <p>{t('phone')}</p>
                <p>{t('email')}</p>
              </address>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">{t('menuTitle')}</h3>
              <nav className="space-y-2">
                <Link href={`/${locale}`} className="block text-gray-400 hover:text-white">
                  {t('home')}
                </Link>
                <button
                    onClick={() => {
                      router.push(`/${locale}/#portfolio`)
                    }}
                    className="block text-gray-400 hover:text-white"
                >
                  {t('portfolio')}
                </button>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>{t('rights')}</p>
          </div>
        </div>
      </footer>
  )
}
