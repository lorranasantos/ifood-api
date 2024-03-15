const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Dishes extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.DOUBLE,
        image: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = Dishes;
