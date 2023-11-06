/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  images: {
    unoptimized: true,
    domains: [
      'https://nextjs-dashboard-diego.vercel.app/',
      'nextjs-dashboard-diego.vercel.app/'
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      }
    ];
  }
};

module.exports = nextConfig;
