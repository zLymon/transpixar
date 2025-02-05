import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com', 'huggingface.co'],
  },
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
  output: 'export'
};

export default nextConfig;
