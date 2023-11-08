module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          address: "moscow, Red Square",
          isDone: false,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          address: "moscow, Red Square",
          isDone: true,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          address: "Saint-Petersburg, Winter Palace",
          isDone: false,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
