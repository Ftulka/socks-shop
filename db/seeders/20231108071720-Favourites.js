module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Favourites", [], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Favourites", null, {});
  },
};
