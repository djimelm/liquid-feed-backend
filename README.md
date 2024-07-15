# Liquid Feed Backend

This is the backend for the Liquid Feed Control (LFC) system, built with Node.js and Express. It provides APIs for user authentication, device management, and data logging.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Testing](#testing)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/djimelm/liquid-feed-backend.git
cd liquid-feed-backend
npm install
```

## Usage

To start the server, run the following command:
Install Cypress and the CORS middleware:

```bash
node index.js
```

The server will run on http://localhost:3000 by default.

## Project Structure

```
liquid-feed-backend/
├── config/
│   └── config.json
├── migrations/
│   └── <migration_files>.js
├── models/
│   ├── authentication.js
│   ├── data.js
│   ├── device.js
│   ├── index.js
│   ├── log.js
│   └── user.js
├── routes/
│   ├── index.js
│   ├── users.js
│   └── devices.js
├── node_modules/
├── package.json
└── index.js

```

### Dependencies

Express: Fast, unopinionated, minimalist web framework for Node.js.
Body-Parser: Node.js body parsing middleware.
Cors: Node.js CORS middleware.

## Testing

```sh
npm install cypress --save-dev
npm install cors
npx cypress open

```

## Data base

```shell
sudo service postgresql start
```

## Run Migration after creating the data base

```shell
npx sequelize-cli migration:generate --name create-NAME_OF_THE_TABLE
npx sequelize-cli db:migrate
```

## Contributing

None

## Contact

- Name : **Michael Djimeli**
- Email : **mdjimel@okstate.edu**
- GitHub : **djimelm**

## Routes use to get and post data

```js
// Use routes
app.use("/users", userRoutes); //
app.use("/devices", deviceRoutes);
app.use("/cattles", cattleRoutes);
app.use("/events", eventRoutes); // route to get the recent event
app.use("/download", downloadRoutes); // route to download csv and wxcel file
// Add more route uses as needed
```

## Docker Contenair

### Data base first

- 1 Stop the existing container:

```shell
docker stop backend
docker stop postgres

```

- 2 Remove the existing container:

```shell
docker rm backend
docker rm postgres


```

- 3 Run the backend container again:

```shell
docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=057193 -e POSTGRES_DB=database_development -p 5432:5432 -d postgres:13

docker run --name backend --network host -e DATABASE_URL=postgres://postgres:057193@localhost:5432/database_development -p 3000:3000 my-backend


```
