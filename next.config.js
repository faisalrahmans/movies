/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2,
  },
});

module.exports = nextConfig
