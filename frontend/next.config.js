/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
}

module.exports = nextConfig