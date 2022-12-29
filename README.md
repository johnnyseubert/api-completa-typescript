```json
{
   "name": "api-rest-node-typescript",
   "version": "1.0.0",
   "main": "build/index.js",
   "license": "MIT",
   "scripts": {
      "start": "node build/index.js",
      "dev": "ts-node-dev src/index.ts --respawn --transpile-only --ignore-watch node_modules",
      "test": "jest",
      "build": "tsc"
   },
   "dependencies": {
      "cors": "^2.8.5",
      "dotenv": "^16.0.3",
      "express": "^4.18.2",
      "http-status-codes": "^2.2.0",
      "knex": "^2.3.0",
      "yup": "^0.32.11"
   },
   "devDependencies": {
      "@types/cors": "^2.8.13",
      "@types/dotenv": "^8.2.0",
      "@types/express": "^4.17.15",
      "@types/jest": "^29.2.4",
      "@types/knex": "^0.16.1",
      "@types/node": "^18.11.18",
      "@types/supertest": "^2.0.12",
      "jest": "^29.3.1",
      "sqlite": "^4.1.2",
      "supertest": "^6.3.3",
      "ts-jest": "^29.0.3",
      "ts-node-dev": "^2.0.0",
      "typescript": "^4.9.4"
   }
}
```
