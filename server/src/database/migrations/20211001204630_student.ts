import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('student', table => {
    table.string('matricula').notNullable().primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('cpf', 11).notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}

