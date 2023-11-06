/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  images: {
    unoptimized: true,
    domains: [
      'https://nextjs-dashboard-navy-xi.vercel.app/',
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
