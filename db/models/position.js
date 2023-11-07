"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
      this.belongsTo(models.Design, { foreignKey: "designId" });
      this.belongsTo(models.Order, { foreignKey: "orderId" });
    }
  }
  Position.init(
    {
      quantity: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      designId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Position",
    }
  );
  return Position;
};
