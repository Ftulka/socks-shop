module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Positions",
      [
        {
          quantity: 2,
          orderId: 1,
          designId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 1,
          orderId: 1,
          designId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 3,
          orderId: 1,
          designId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 1,
          orderId: 2,
          designId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 4,
          orderId: 2,
          designId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 1,
          orderId: 3,
          designId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 10,
          orderId: 3,
          designId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Positions", null, {});
  },
};
