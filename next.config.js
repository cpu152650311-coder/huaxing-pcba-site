/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'huaxingpcba.com' },
    ],
  },
};
module.exports = nextConfig;
