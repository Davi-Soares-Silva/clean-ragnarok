import 'dotenv/config';

export const DATABASE = {
  DB_NAME: process.env.DB_NAME || '',
  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  DB_HOST: process.env.DB_HOST || '',
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_PORT: process.env.DB_PORT || '',
};

export const SERVER = {
  PORT: process.env.SERVER_PORT || 3333,
  BASE_URI: process.env.SERVER_BASE_URI || '',
}

export const JWT = {
  APP_SECRET: process.env.APP_SECRET || '',
}