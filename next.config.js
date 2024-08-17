/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  output: 'export',
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '/idw-intro', // 加上去在，dev開發模式會有問題
  assetPrefix: '/idw-intro/', // 加上去在，dev開發模式會有問題
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});
