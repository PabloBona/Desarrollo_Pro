/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://68.183.49.192:8001/api/v1' // development api
        : 'http://68.183.49.192:8001/api/v1', // production api
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
