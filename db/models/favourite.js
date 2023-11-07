"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate(models) {
      this.belongsTo(models.Design, { foreignKey: "designId" });
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Favourite.init(
    {
      userId: DataTypes.INTEGER,
      designId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favourite",
    }
  );
  return Favourite;
};
