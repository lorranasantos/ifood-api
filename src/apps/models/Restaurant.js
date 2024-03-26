const { DataTypes, Model } = require("sequelize");

class Restaurant extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        address_id: DataTypes.INTEGER,
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
  static associate(models) {
    this.belongsTo(models.Address);
  }
}

module.exports = Restaurant;
