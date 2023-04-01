/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/edit/:id",
        destination: "/new"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
