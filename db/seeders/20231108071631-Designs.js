const colorsCodes = {
  white: "#FFFFFF",
  yellow: "#FFFF00",
  purple: "#800080",
  pink: "#FF69B4",
  lightGreen: "#7CFC00",
  lightBlue: "#00BFFF",
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Designs",
      [
        {
          name: "custom sock 1",
          pictureUrl: "/pictures/alpaca.png",
          colorCode: colorsCodes.pink,
          printUrl: "/prints/1.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "custom sock 2",
          pictureUrl: "/pictures/cactus.png",
          colorCode: colorsCodes.yellow,
          printUrl: "/prints/2.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "custom sock 3",
          pictureUrl: "/pictures/duck.png",
          colorCode: colorsCodes.lightBlue,
          printUrl: "/prints/3.png",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "custom sock 4",
          pictureUrl: "/pictures/yoda.png",
          colorCode: colorsCodes.white,
          printUrl: "/prints/4.png",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Designs", null, {});
  },
};
