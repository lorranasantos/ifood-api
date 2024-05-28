const { Model, DataTypes } = require("sequelize");

class Restaurant extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        category_id: DataTypes.INTEGER,
        address_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Restaurant",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: "category_id" });
    this.belongsTo(models.Address, { foreignKey: "address_id" });
    this.belongsToMany(models.Dish, {
      through: models.Menu,
      foreignKey: "restaurant_id",
      otherKey: "dish_id",
    });
  }
}

module.exports = Restaurant;
