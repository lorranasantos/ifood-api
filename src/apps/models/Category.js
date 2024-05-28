const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        category: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Category",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Restaurant, { foreignKey: "category_id" });
  }
}

module.exports = Category;
