/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'huaxingpcba.com' },
    ],
  },
};
module.exports = nextConfig;
