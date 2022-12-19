/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'http://local.dx.traegerdev.com:3000',
  },
};

module.exports = nextConfig;
