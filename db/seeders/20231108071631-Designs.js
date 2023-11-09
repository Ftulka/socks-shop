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
          pictureUrl: "/img/pictures/alpaca.png",
          colorCode: colorsCodes.pink,
          printUrl: "/img/prints/1.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "custom sock 2",
          pictureUrl: "/img/pictures/cactus.png",
          colorCode: colorsCodes.yellow,
          printUrl: "/img/prints/2.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "custom sock 3",
          pictureUrl: "/img/pictures/duck.png",
          colorCode: colorsCodes.lightBlue,
          printUrl: "/img/prints/3.png",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "custom sock 4",
          pictureUrl: "/img/pictures/yoda.png",
          colorCode: colorsCodes.white,
          printUrl: "/img/prints/4.png",
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
