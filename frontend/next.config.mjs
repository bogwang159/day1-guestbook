/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  /* config options here */
  // Ensure server runs on all network interfaces
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '127.0.0.1:3000'],
    },
  },
};

export default nextConfig;
