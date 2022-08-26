/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['localhost', 'i.ytimg.com'],
  },
  pageExtensions: ['tsx', 'jsx']
}
