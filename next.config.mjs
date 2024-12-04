/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["mongoose"] = false;
    }
    return config;
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
