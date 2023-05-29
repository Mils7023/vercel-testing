/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  trailingSlash: true,
  images: {
    domains: ['projects.theglobalwebdev.com'],
  },
  
}

module.exports = nextConfig
