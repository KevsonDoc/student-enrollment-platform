import * as dotenv from 'dotenv';
import knex from 'knex';
import path from 'path';

dotenv.config();

const production = {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : process.env.CREDENTIAL,
    database : 'student',
    useNullAsDefault: true,
  }
};

const development = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true
}

const knexConfig = process.env.NODE_ENV === 'development' ? development : production;

const connection = knex(knexConfig);

export default connection;