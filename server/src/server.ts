import express, { Application } from 'express';
import http from 'http';

import knex from './database/connection';

class Server {
  app: Application;

  constructor() {
    this.app = express();
     
    this.middlewares();
    this.routes();
  }

  middlewares() :void {
    this.app.use(express.json());
  }

  routes() {
    this.app.get('/', async (request, response) => {
      try {
        const data = await knex('student').insert({ matricula: '129830918023', name: 'Kevson', email: 'kevsonfilipesantos@gmail.com', cpf: '078005001' });
        response.status(200).json({ meseage: 'Hello World'});
      } catch (error) {
        console.log(error)
        response.status(500).send({ meseage: 'Hello World'});
      }
    });
  }
}

http.createServer(new Server().app).listen(process.env.PORT || 3333, () => {
  console.log('Salyut! Server is running.');
  console.log(process.env.CREDENTIAL)
});
