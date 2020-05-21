import config from 'src/config'

module.exports = {
  url: `${config.get('graphql.endpoint')}/v1/graphql`,
  outputDir: '../src/utilities/graphql'
}
