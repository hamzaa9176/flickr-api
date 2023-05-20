/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY_FLICKR: process.env.API_KEY_FLICKR,
      }
}

module.exports = nextConfig
