'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';

const LOCALE_LABELS = {
  en: { label: 'English', icon: '/icons/flags/uk.svg' },
  ru: { label: 'Русский', icon: '/icons/flags/ru.svg' },
};

export function LocaleSwitcher({ locales }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [open, setOpen] = useState(false);

  const changeLanguage = (locale) => {
    const pathSegments = pathname.split('/');
    if (pathSegments[1] === currentLocale) {
      pathSegments.splice(1, 1);
    }
    const pathWithoutLocale = pathSegments.join('/') || '/';
    router.push(`/${locale}${pathWithoutLocale === '/' && pathWithoutLocale.length > 1
        ? pathWithoutLocale.substring(1)
        : pathWithoutLocale}`);
    setOpen(false);
  };

  return (
      <div className="relative inline-block text-sm font-medium text-white">
        <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition duration-150 min-w-fit"
        >
          <img
              src={LOCALE_LABELS[currentLocale]?.icon}
              alt={currentLocale}
              className="w-5 h-5 rounded-sm"
          />
          <span>{currentLocale.toUpperCase()}</span>
          <span className="text-xs">▼</span>
        </button>

        {open && (
            <div className="absolute top-full left-0 mt-1 min-w-full bg-gray-800 rounded-md overflow-hidden shadow-lg z-20">
              {locales.map((locale) => {
                const isActive = locale === currentLocale;
                return (
                    <button
                        key={locale}
                        onClick={() => changeLanguage(locale)}
                        className={`flex items-center w-full px-3 py-2 text-left transition duration-150 ${
                            isActive
                                ? 'bg-gray-700 text-blue-400'
                                : 'hover:bg-gray-700 text-white'
                        }`}
                    >
                      <img
                          src={LOCALE_LABELS[locale]?.icon}
                          alt={locale}
                          className="w-5 h-5 rounded-sm mr-2"
                      />
                      <span>{LOCALE_LABELS[locale]?.label}</span>
                    </button>
                );
              })}
            </div>
        )}
      </div>
  );
}
