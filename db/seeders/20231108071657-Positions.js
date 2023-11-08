module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Positions", [], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Positions", null, {});
  },
};
