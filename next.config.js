/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['momodo.s3.ap-northeast-2.amazonaws.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
