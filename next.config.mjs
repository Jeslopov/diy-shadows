/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["d16kd6gzalkogb.cloudfront.net", "images.saatchiart.com"],
    
  },
}

export default nextConfig
