import { Router } from 'express';

import Student from '../app/StudentController';

class Routes {
  routes;
  student;

  constructor() {
    this.routes = Router();
    this.student = new Student();

    this.routes.get('/', this.student.index);
    this.routes.get('/:id', this.student.show);
    this.routes.post('/', this.student.create);
    this.routes.put('/:id', this.student.update);
    this.routes.delete('/:id', this.student.delete);
  }
}

export default Routes;