// TODO: refactor to typescript (see https://github.com/zeit/next.js/issues/9607)
/* eslint-disable @typescript-eslint/no-var-requires */
const manifest = require('./src/config/nextjs/pwa')
const { publicRuntimeConfig, serverRuntimeConfig } = require('./src/config/nextjs/configAdapter')

const plugins = [
  'next-manifest',
  'next-pwa'
]
const withPlugins = config => plugins.reduce((previousValue, plugin) => require(plugin)(previousValue), config)

module.exports = withPlugins({
  ...manifest,
  publicRuntimeConfig,
  serverRuntimeConfig,
})
