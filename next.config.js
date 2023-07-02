/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["resizer.otstatic.com", "images.otstatic.com"],
  },
}

module.exports = nextConfig
