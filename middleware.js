import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    locales: ['ru', 'en', 'de', 'uk'],
    defaultLocale: 'ru',
    localePrefix: 'as-needed'
})

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
}