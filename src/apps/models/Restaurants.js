const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Restaurants extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        food_type: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = Restaurants;
