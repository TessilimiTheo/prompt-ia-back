## Description

Back application for generate social publication with chatGPT

## Technologies used

* Framework: NestJS 9.0
* Language: Typescript
* BDD: PostgresSQL

## Configuration

For the configuration of the application you will have to complete the file *.env*

````dotenv

API_KEY=your_api_key
ORGANIZATION_KEY=your_organization_key
DB_USERNAME=postgres
DB_PORT=5432
DB_HOST=db
DB_PASSWORD=postgres
DB_NAME=prompt-ia

````

## Installation

```bash
$ docker compose up
```

Once launched the application will be available at http://localhost:3000

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


