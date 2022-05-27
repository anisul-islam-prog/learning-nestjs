# Learning Nest JS

## Installation

```bash
# install
$ yarn install
```

## Running the app

```bash
# start docker [-d is for running in background]
docker compose up dev-db -d

# start
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

# Database client
$ npx prisma studio
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```