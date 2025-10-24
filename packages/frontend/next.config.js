/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@shared"],
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
