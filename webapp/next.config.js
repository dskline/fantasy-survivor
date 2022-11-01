const withOffline = require("next-offline");
const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
module.exports = withOffline(
  withPWA({
    reactStrictMode: true,
    images: {
      domains: ["res.cloudinary.com"],
    },
    eslint: {
      dirs: ["features", "pages"],
    },
  })
);
