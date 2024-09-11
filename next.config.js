const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  readingTime: true,
});

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  cleanDistDir: true,
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
  experimental: {
    outputFileTracing: false, // 禁用输出文件跟踪
  },
});
