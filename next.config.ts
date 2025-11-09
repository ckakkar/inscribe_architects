import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Modern image formats
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // React strict mode
  reactStrictMode: true,
  // Suppress hydration warnings in development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Webpack configuration to handle devtools errors
  webpack: (config, { isServer, dev }) => {
    if (dev && !isServer) {
      // Suppress devtools module resolution errors in development
      config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        {
          module: /next-devtools/,
        },
        {
          message: /Could not find the module.*next-devtools/,
        },
      ]
    }
    return config
  },
}

export default config