/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental:{
    appDir:false
  },
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
