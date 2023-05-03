'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Ana Souza',
        ativo: true,
        email: 'ana@gmail.com',
        role: 'administrativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Arnaldo Silva',
        ativo: true,
        email: 'arnaldo@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Beto Oliveira',
        ativo: true,
        email: 'beto@hotmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Carlos Nascimento',
        ativo: true,
        email: 'carlos@gmail.com',
        role: 'estutante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
