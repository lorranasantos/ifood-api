const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        category: Sequelize.DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Category",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Restaurant);
  }
}

module.exports = Category;
