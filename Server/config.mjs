import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  nbaApiKey: process.env.NBA_API_KEY,
  mongodbUri: process.env.MONGODB_URI,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT
}

export default config;