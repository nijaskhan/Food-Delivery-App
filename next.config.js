/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mdbcdn.b-cdn.net']
  },
  scripts: [
    { src: 'https://code.jquery.com/jquery-3.6.0.min.js' },
    { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js' }
  ]
}

module.exports = nextConfig
