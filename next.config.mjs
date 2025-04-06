// @ts-check
import withNextIntl from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['images.unsplash.com'],
    },
    experimental: {
        serverActions: true,
    },
}

export default withNextIntl(nextConfig)