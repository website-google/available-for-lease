// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/available-for-lease',   // 👈 your repo name
  assetPrefix: '/available-for-lease/',
  output: 'export',                   // 👈 ensures static export for GitHub Pages
};

module.exports = nextConfig;
