'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { LocaleSwitcher } from "@/app/components/LocaleSwitcher/LocaleSwitcher"
import { FaInstagram, FaFacebookF } from 'react-icons/fa'

export default function Header({ locales }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('header')
  const locale = useLocale()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-gray-900/95' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" locale={locale}>
            <Image src="/images/koma_logo_black.svg" width={160} height={60} alt={t('title')} />
          </Link>

          {/* Десктоп меню */}
          <nav className="hidden md:flex items-center space-x-6">
            <LocaleSwitcher locales={locales} />
            <Link href={`/${locale}`} className="text-white hover:text-red-500">{t('nav.home')}</Link>
            <Link href={`/${locale}/about`} className="text-white hover:text-red-500">{t('nav.about')}</Link>
            <a href="https://www.instagram.com/komastil" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61575736070776" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-blue-500"><FaFacebookF /></a>
          </nav>

          {/* Бургер кнопка */}
          <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
            <div className="md:hidden bg-gray-900/95 text-white px-4 py-6 space-y-4">
              <Link href={`/${locale}`} className="block" onClick={toggleMenu}>{t('nav.home')}</Link>
              <Link href={`/${locale}/about`} className="block" onClick={toggleMenu}>{t('nav.about')}</Link>
              <div className="flex space-x-4 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500"><FaInstagram /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500"><FaFacebookF /></a>
              </div>
            </div>
        )}
      </header>
  )
}
