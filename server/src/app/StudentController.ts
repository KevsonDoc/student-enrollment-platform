import {
  Request,
  Response,
} from 'express';
import { v4 as uuidv4 } from 'uuid';

import knex from '../database/connection';

type TypeDataSudent = {
  name: string;
  email: string;
  cpf: string;
}

class Student {
  async index(request: Request, response: Response) {
    const students = await knex('student').select('*');
    return response.status(200).json(students);
  }

  async create(request: Request, response: Response) {
    const { name, email, cpf  } : TypeDataSudent = request.body;
    const validationEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    
    if (!name)
      return response.status(400).json('Prenncha o campo de nome');
    
    if (!email || !validationEmail.test(email))
      return response.status(400).json('E-mail inválido');
    
    if (!cpf || cpf.length >= 12 || cpf.length <= 10)
      return response.status(400).json('CPF inválido');

    const matricula = uuidv4();
    const isMatricula = await knex('student').where('matricula', matricula).first();

    if (isMatricula)
      return response.status(400).json('Essa matrícula já existe inválido');

    try {
      await knex('student').insert({ name, email, cpf, matricula });

      return response.status(201).json({ message: "Aluno criado", student: { name, email, cpf, matricula }});
    } catch (error) {
      return response.status(500).json("Ops! Houve um erro. Não se preucupe estamos trabalhando para resolver");
    }
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const student = await knex('student').where({ matricula: id }).first();

    if (!student)
      return response.status(404).json('Aluno não encontrado');
    
    return response.status(200).json(student);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email } = request.body;

    if (!id)
      return response.status(200).json('Nenhum Aluno encontrado');

    const student = await knex('student').where({ matricula: id }).first();

    if (!student)
      return response.status(404).json('Aluno Não encontrado');
    
    try {
      await knex('student').where({ matricula: id }).update({ name, email });

      return response.status(200).json('Informações de aluno foram atualizadas');
    } catch (error) {
      return response.status(500).json("Ops! Houve um erro. Não se preucupe estamos trabalhando para resolver");
    }
  }
}

export default Student;