'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  const parseData = JSON.parse(fs.readFileSync('./data.json','utf8'));
  const studentData = [];

  parseData.forEach(el => {
    const {name,major,score} = data;
    studentData.push({
      name,major,score,createdAt: new Date(),updatedAt: new Date()
    })
  })
  await queryInterface.bulkInsert('students',studentData,{});
  },



  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
