// src/app/[locale]/layout.js (Явный вызов getRequestConfig)
import {hasLocale, NextIntlClientProvider} from 'next-intl'; // useMessages больше не нужен здесь
import { notFound } from 'next/navigation';
import {routing} from '@/i18n/routing';
import { getRequestConfig } from 'next-intl/server';

// --- Остальные импорты (шрифты, CSS, аналитика) оставляем ---
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({ /* ... */ });
const geistMono = Geist_Mono({ /* ... */ });
// --- Конец остальных импортов ---

// generateStaticParams можно оставить
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// metadata можно оставить
export const metadata = { /* ... */ };

// ДЕЛАЕМ LAYOUT СНОВА ASYNC
export default async function LocaleLayout({ children, params: { locale } }) {

    // Сначала валидируем локаль из параметров маршрута
    if (!hasLocale(routing.locales, locale)) {
        console.error(`LocaleLayout: Получен невалидный параметр locale: ${locale}`);
        notFound();
    }
    const { messages } = await getRequestConfig({ locale });
    console.log(`LocaleLayout: Валидный параметр locale: ${locale}`); // Лог валидной локали


    return (
        <html lang={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Передаем locale и загруженные messages в провайдер */}
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    );
}