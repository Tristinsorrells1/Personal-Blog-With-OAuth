// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};