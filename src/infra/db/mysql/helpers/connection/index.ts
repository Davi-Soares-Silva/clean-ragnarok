import knex from 'knex';

import { mysqlConfig } from './config';

export const mysql = knex(mysqlConfig);