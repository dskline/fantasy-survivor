import config from './config'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const fileExtensionRegex = extension => `**/*.${extension}.ts`

module.exports = {
  ...config.get('sql'),
  synchronize: true,
  logging: true,
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations'
  },
  entities: [fileExtensionRegex('entity')],
  seeds: [fileExtensionRegex('seed')],
  factories: [fileExtensionRegex('factory')],
}
