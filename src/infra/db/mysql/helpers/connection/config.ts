import { DATABASE } from '../../../../../utils/constants';

export const mysqlConfig = {
  client: DATABASE.DB_DIALECT,
  connection: {
    host: DATABASE.DB_HOST,
    port: +DATABASE.DB_PORT,
    user: DATABASE.DB_USERNAME,
    password: DATABASE.DB_PASSWORD,
    database: DATABASE.DB_NAME,
    options: {
      encrypt: false,
      enableArithAbort: false,
    },
  },
}