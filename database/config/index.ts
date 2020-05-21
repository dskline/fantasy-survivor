import convict from 'convict'
import glob from 'glob'

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging'],
    default: 'development',
    env: 'NODE_ENV'
  },
  sql: {
    type: {
      default: 'postgres',
      format: String,
      env: 'DATABASE_SQL_TYPE'
    },
    host: {
      default: 'localhost',
      format: String,
      env: 'DATABASE_SQL_HOST'
    },
    port: {
      default: 5432,
      format: 'port',
      env: 'DATABASE_SQL_PORT',
    },
    username: {
      default: 'postgres',
      format: String,
      env: 'DATABASE_SQL_USERNAME',
    },
    password: {
      default: 'docker',
      format: String,
      env: 'DATABASE_SQL_PASSWORD',
    },
    database: {
      default: 'postgres',
      format: String,
      env: 'DATABASE_SQL_PRIMARY_DB'
    },
  },
  graphql: {
    endpoint: {
      default: 'http://localhost:8080',
      format: String,
      env: 'DATABASE_GRAPHQL_ENDPOINT'
    }
  }
})

// Load environment dependent configuration
const env = config.get('env')

for (const configFile of glob.sync(`.?(/database)/config/${env}.json`)) {
  config.loadFile(configFile)
}

export default config
