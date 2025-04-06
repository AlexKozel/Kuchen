import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export default async function LocaleLayout({ children, params: { locale } }) {
    // Загрузка сообщений для локали
    let messages
    try {
        messages = (await import(`@/locales/${locale}.json`)).default
    } catch (error) {
        notFound()
    }

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Europe/Berlin"
        >
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    )
}