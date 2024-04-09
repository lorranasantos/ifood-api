const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Dish extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.DataTypes.STRING,
        description: Sequelize.STRING,
        price: Sequelize.DECIMAL,
        image: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "Dish",
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Menu);
  }
}

module.exports = Dish;
