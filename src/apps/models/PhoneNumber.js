const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class PhoneNumber extends Model {
  static init(sequelize) {
    super.init(
      {
        phone_number: Sequelize.DataTypes.STRING,
        code: Sequelize.DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = PhoneNumber;
