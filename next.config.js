/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ddragon.leagueoflegends.com',
        port: '',
        pathname: '/cdn/13.14.1/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.communitydragon.org',
        port: '',
      }
    ],
  },
}

module.exports = nextConfig
