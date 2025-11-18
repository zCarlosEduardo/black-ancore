import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
    images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 80, 85, 90], // Adicione as qualidades que você usa
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: 'standalone',
  experimental: {
  },
};

export default nextConfig;