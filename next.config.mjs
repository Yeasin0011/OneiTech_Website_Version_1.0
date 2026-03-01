/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warnings won't block production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
