'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { LocaleSwitcher } from "@/app/components/LocaleSwitcher/LocaleSwitcher"

export default function Header({ locales }) {
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('header')
  const locale = useLocale() // ✅ получаем текущую локаль

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-gray-900/95' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <Link href="/" locale={locale}> {/* ✅ передаём локаль */}
              <Image
                  src="/images/komandor.svg"
                  width={120}
                  height={40}
                  alt={t('title')}
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <LocaleSwitcher locales={locales} />
            <Link href={`/${locale}`} className="text-white hover:text-red-500 transition">{t('nav.home')}</Link>
            <Link href={`/${locale}/about`} className="text-white hover:text-red-500 transition">{t('nav.about')}</Link>
            {/* <Link href="/contact" locale={locale} className="text-white hover:text-red-500 transition">{t('nav.contact')}</Link> */}
          </nav>

          <button className="md:hidden text-white">☰</button>
        </div>
      </header>
  )
}
