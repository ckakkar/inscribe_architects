/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
    },
    experimental: {
      optimizeCss: true,
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    swcMinify: true,
  }
  
  module.exports = nextConfig