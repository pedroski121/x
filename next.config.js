/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    SERVER:process.env.NEXT_PUBLIC_SERVER_BASE_URL
  }
}

module.exports = nextConfig
