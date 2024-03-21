const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Dish extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.DECIMAL,
        image: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Dish;
