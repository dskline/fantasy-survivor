// TODO: refactor to typescript (pending https://github.com/zeit/next.js/issues/9607)
/* eslint-disable @typescript-eslint/no-var-requires */
const packageJson = require('../../../package.json')
const { colors } = require('../../config/css/colors.json')

const prod = process.env.NODE_ENV === 'production'

const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512]

module.exports = {
  pwa: {
    disable: !prod,
    dest: 'public',
  },
  manifest: {
    output: './public',
    name: 'Fantasy Survivor',
    shortName: 'Fantasy Survivor',
    display: 'minimal-ui',
    description: packageJson.description,
    themeColor: colors.primary,
    backgroundColor: colors.light,
    icons: iconSizes.map(size => ({
      src: `/favicon/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: 'image/png'
    })),
  }
}
