module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Designs", [{}], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Designs", null, {});
  },
};
