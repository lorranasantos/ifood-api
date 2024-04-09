const Sequelize = require("sequelize");
const { Model, DataTypes } = require("sequelize");

class Menu extends Model {
  static init(sequelize) {
    super.init(
      {
        dish_id: DataTypes.INTEGER,
        restaurant_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Menu",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Restaurant);
  }
  static associate(models) {
    this.hasMany(models.Dish);
  }
}

module.exports = Menu;
