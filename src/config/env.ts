import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  PORT: Number(process.env.PORT) || 3000,
  ENV: process.env.NODE_ENV || 'development',
  API_PREFIX: process.env.API_PREFIX || '/api',
  APP_NAME: 'Reactivation Core API',
  VERSION: '1.0.0',
};