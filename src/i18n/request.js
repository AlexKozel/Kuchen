import { createRequestConfig } from 'next-intl/request';

export default createRequestConfig({
    locales: ['ru', 'en', 'de', 'uk'],
    defaultLocale: 'ru',
    localePrefix: 'never'
});