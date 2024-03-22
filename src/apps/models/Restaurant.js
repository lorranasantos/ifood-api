// models/Restaurant.js
const { DataTypes, Model } = require("sequelize");

class Restaurant extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        dish_id: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Dish);
  }
}

module.exports = Restaurant;
