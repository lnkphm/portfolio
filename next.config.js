/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  output: "standalone",
});
