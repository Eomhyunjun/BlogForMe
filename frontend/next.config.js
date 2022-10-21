/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["", "*"],
  },
  reactStrictMode: true,
  // 러스트 컴파일러
  swcMinify: true,
}


module.exports = nextConfig
