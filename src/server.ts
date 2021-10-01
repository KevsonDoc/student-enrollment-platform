import express, { Application } from 'express';
import http from 'http';

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
    this.app.get('/', (request, response) => {
      response.status(200).json("hello world");
    });
  }
}

http.createServer(new Server().app).listen(process.env.PORT || 3333, () => {
  console.log('Salyut! Server is running.');
});
