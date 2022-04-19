# Build a Video Streaming endpoint with Express, MongoDB, & TypeScript

## Features

1. Register user
2. Login
3. Get current logged in user (me)
4. Upload video
5. Get all videos
6. Stream a video

## Technologies

### Backend

- [Express](https://expressjs.com/)
- [Mongoose](https://www.mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [argon2](https://www.npmjs.com/package/argon2)
- [busboy](https://www.npmjs.com/package/busboy)
- [pino](https://github.com/pinojs/pino)
- [Zod](https://github.com/colinhacks/zod)

## What you'll need

1. Code editor - VSCode
2. Postman/ insomnia
3. Browser - Chrome
4. Running instance of MongoDB
5. Node.js

## What I learnt

1. REST API principals in TypeScript
2. Some auth principals
3. Using Typegoose for models
4. MongoDB with Mongoose
5. Graceful shutdowns
6. File upload streams with Node.js
7. Video streaming with Node.js
8. Express with TypeScript
9. Clean project structure

## Server

1. yarn init

2. npx typescript --init

3. yarn add express http-status-codes pino @typegoose/typegoose mongoose express-async-errors zod zod-express-middleware argon2 jsonwebtoken cookie-parser mongoose-slug-generator nanoid busboy cors helmet @mantine/form

4. yarn add typescript ts-node-dev pino-pretty @types/express @types/jsonwebtoken @types/cookie-parser @types/busboy @types/cors -D
