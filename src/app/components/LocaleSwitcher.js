'use client'
import { useRouter, usePathname } from 'next/navigation' // Импортируем из next/navigation
import { useLocale } from 'next-intl' // Для получения текущей локали
import { locales } from '../../../i18n-config'
import GlobeIcon from "@/app/components/icons/GlobeIcon";


export function LocaleSwitcher() {
    const router = useRouter()
    const pathname = usePathname() // Теперь из next/navigation
    const currentLocale = useLocale() // Получаем текущую локаль

    const changeLanguage = (locale) => {
        // Удаляем текущую локаль из пути
        const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '')
        router.push(`/${locale}${pathWithoutLocale}`)
    }

    return (
        <div className="relative group">
            <button className="flex items-center space-x-1 px-3 py-2">
                <GlobeIcon className="w-5 h-5" />
                <span className="text-sm">{currentLocale.toUpperCase()}</span>
            </button>

            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg hidden group-hover:block">
                {locales.map((locale) => (
                    <button
                        key={locale}
                        onClick={() => changeLanguage(locale)}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                            locale === currentLocale ? 'font-bold text-red-600' : ''
                        }`}
                    >
                        {{
                            ru: 'Русский',
                            en: 'English',
                            de: 'Deutsch',
                            uk: 'Українська'
                        }[locale]}
                    </button>
                ))}
            </div>
        </div>
    )
}