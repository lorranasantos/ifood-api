const Sequelize = require("sequelize");
const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        basket_id: DataTypes.INTEGER,
        restaurant_id: DataTypes.INTEGER,
        dish_id: DataTypes.INTEGER,
        dish_quantity: DataTypes.INTEGER,
        total: DataTypes.DECIMAL,
      },
      {
        sequelize,
        modelName: "Order",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Restaurant);
  }
  static associate(models) {
    this.hasMany(models.Dish);
  }
  static associate(models) {
    this.hasOne(models.Basket);
  }
}

module.exports = Order;
