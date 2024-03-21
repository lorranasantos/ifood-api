const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
        avatar: Sequelize.STRING,
        phone: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
