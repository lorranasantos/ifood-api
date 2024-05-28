const { Model, DataTypes } = require("sequelize");

class Dish extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        image: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Dish",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Restaurant, {
      through: models.Menu,
      foreignKey: "dish_id",
      otherKey: "restaurant_id",
    });
  }
}

module.exports = Dish;
