/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");
const withTranslateRoutes = require('next-translate-routes/plugin')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

module.exports = withTranslateRoutes(nextConfig);
