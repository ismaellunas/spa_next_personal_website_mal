/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'res.cloudinary.com'],
  },
  // Optimize for static export if needed
  trailingSlash: true,
}

module.exports = nextConfig