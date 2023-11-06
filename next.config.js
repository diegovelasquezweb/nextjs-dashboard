/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
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
