# Express Auth Example

## Setup Global
```sh
npm i -g sequelize-cli
# or
yarn global add sequelize-cli
```

## Setup Database

```sh
sequelize db:create
```

## Setup App

1. Install local dependencies:
   ```sh
   npm i
   # or
   yarn
   ```
2. Edit `.env`

## Starting App

Without migrations

```sh
npm start
# or
yarn start
```

Without migrations

```sh
sequelize db:migrate

npm start
# or
yarn start
```

Access API server by opening http://localhost:8000

## API Endpoints `/api`
`/users`

| Endpoint         | HTTP   | Description       | Body          |
| ---------------- | ------ | ----------------- | ------------- |
| `/users/`        | GET    | Get all users     | -             |
| `/users/:userId` | GET    | Get user by id    | -             |
| `/users/:userId` | PATCH  | Update user by id | `name`, `age` |
| `/users/:userId` | DELETE | DELETE user by id |               |

`/auth`

| Endpoint   | HTTP | Description              | Body                               |
| ---------- | ---- | ------------------------ | ---------------------------------- |
| `/signup/` | POST | Register new account     | `name`, `age`, `email`, `password` |
| `/signin/` | POST | Login registered account | `email`, `password`                |
