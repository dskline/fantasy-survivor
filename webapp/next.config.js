const withPWA = require("next-pwa")({
  dest: "public",
  sw: "service-worker.js",
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  eslint: {
    dirs: ["features", "pages"],
  },
});
