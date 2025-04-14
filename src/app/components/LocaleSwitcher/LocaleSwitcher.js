// src/app/components/LocaleSwitcher/LocaleSwitcher.js
'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import GlobeIcon from "@/app/components/icons/GlobeIcon";

export function LocaleSwitcher({ locales }) {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const changeLanguage = (locale) => {
    const pathSegments = pathname.split('/');
    if (pathSegments[1] === currentLocale) {
      pathSegments.splice(1, 1);
    }
    // Убедимся, что pathSegments[0] пустой (из-за начального /),
    // и если массив пустой после splice (была главная страница),
    // то join вернет '', добавим '/'
    const pathWithoutLocale = pathSegments.join('/') || '/';
    router.push(`/${locale}${pathWithoutLocale === '/' && pathWithoutLocale.length > 1 ? pathWithoutLocale.substring(1) : pathWithoutLocale}`); // Небольшая корректировка для join
  }

  if (!locales || locales.length === 0) {
    console.warn("LocaleSwitcher не получил список локалей.");
    return null;
  }

  return (
      <div className="relative group">
        <button className="flex items-center space-x-1 px-3 py-2 text-white"> {/* Добавил text-white для соответствия Header */}
          <GlobeIcon className="w-5 h-5" />
          <span className="text-sm">{currentLocale.toUpperCase()}</span>
        </button>

        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
          {locales.map((locale) => (
              <button
                  key={locale}
                  onClick={() => changeLanguage(locale)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      locale === currentLocale ? 'font-bold text-red-600' : 'text-gray-700'
                  }`}
              >
                {{
                  // Оставляем только те, что есть в routing.js
                  ru: 'Русский',
                  en: 'English',
                  // de: 'Deutsch', // Убираем
                  // uk: 'Українська' // Убираем
                }[locale]}
              </button>
          ))}
        </div>
      </div>
  )
}