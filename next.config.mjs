/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["mongoose"] = false;
    }
    return config;
  },
};

export default nextConfig;
