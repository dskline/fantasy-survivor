# @fantasy-survivor/database

## Installation

Prerequisites: NPM and Docker

First, create a .env file in this directory (see `.env.example`) and replace the `DATABASE_SQL_VOLUME` variable with a
working Docker volume. Then, run the following commands in this directory: 

```
docker-compose up
```

```
npm install
npm start
```

## Usage

After Hasura is up and running (via Docker), and TypeORM has created all the necessary SQL tables, the GraphQL
playground can be accessed at `localhost:8080/console`.

## Contributing

When making database schema changes, follow the guidelines on [TypeORM migrations](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md).

#### 1. Create or generate the migration

```
npm run migration:create -- -n NameOfMigration
npm run migration:generate -- -n NameOfMigration
```

#### 2. Refresh Hasura / Export Metadata

```
npm run hasura:reload
```

