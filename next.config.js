// TODO: refactor to typescript (see https://github.com/zeit/next.js/issues/9607)
/* eslint-disable @typescript-eslint/no-var-requires */
const { publicRuntimeConfig, serverRuntimeConfig } = require('./src/config/nextjs/configAdapter')

const plugins = [
  './src/features/pwa/nextConfig',
]
const withPlugins = config => plugins.reduce((previousValue, plugin) => require(plugin)(previousValue), config)

module.exports = withPlugins({
  publicRuntimeConfig,
  serverRuntimeConfig,
  // NextJS proposal (https://github.com/vercel/next.js/issues/7579)
  // options: {
  //   sourcemaps: 'production'
  // }
})
