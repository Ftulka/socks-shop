module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          login: "ftulka",
          email: "rizo.ra@yandex.ru",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: "tardigrade",
          email: "tt@gmail.com",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: "123",
          email: "123@123",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
