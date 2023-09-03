/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/v1/authentication/token',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      }
    ]
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
