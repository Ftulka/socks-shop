const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Design extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.hasMany(models.Favourite, { foreignKey: "designId" });
      this.hasMany(models.Position, { foreignKey: "designId" });
    }
  }
  Design.init(
    {
      name: DataTypes.STRING,
      pictureUrl: DataTypes.STRING,
      colorCode: DataTypes.STRING,
      printUrl: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Design",
    }
  );
  return Design;
};
