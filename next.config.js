/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    GRAPHQL_URI: process.env.GRAPHQL_URI ? process.env.GRAPHQL_URI : '',
  },
}

module.exports = nextConfig
