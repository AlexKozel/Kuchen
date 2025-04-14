'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import GlobeIcon from "@/app/components/icons/GlobeIcon";
// НЕ ИМПОРТИРУЙ getRequestConfig отсюда
// import {getRequestConfig} from "next-intl/server";

// Принимаем locales как пропс
export function LocaleSwitcher({ locales }) {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const changeLanguage = (locale) => {
    // Удаляем текущую локаль из пути, если она есть
    const pathSegments = pathname.split('/');
    if (pathSegments[1] === currentLocale) {
      pathSegments.splice(1, 1); // Удаляем сегмент локали
    }
    const pathWithoutLocale = pathSegments.join('/') || '/'; // Собираем путь обратно
    router.push(`/<span class="math-inline">\{locale\}</span>{pathWithoutLocale}`)
  }

  // Добавим проверку на случай, если пропс не передали
  if (!locales || locales.length === 0) {
    console.warn("LocaleSwitcher не получил список локалей.");
    return null; // Или отобразить что-то по умолчанию
  }

  return (
      <div className="relative group">
        <button className="flex items-center space-x-1 px-3 py-2">
          <GlobeIcon className="w-5 h-5" />
          <span className="text-sm">{currentLocale.toUpperCase()}</span>
        </button>

        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg hidden group-hover:block z-10"> {/* Добавь z-index, если нужно */}
          {/* Используем locales из пропсов */}
          {locales.map((locale) => (
              <button
                  key={locale}
                  onClick={() => changeLanguage(locale)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      locale === currentLocale ? 'font-bold text-red-600' : 'text-gray-700' // Явно задай цвет неактивных
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