const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/de', // Дефолтный язык (например, немецкий)
        permanent: true, // Постоянный редирект (301)
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
