/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/v1/authentication/token',
        destination: `https://18.215.108.155:8080/api/v1/authentication/token`,
      }
    ]
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
