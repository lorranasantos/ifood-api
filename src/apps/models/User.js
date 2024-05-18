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
        address_id: Sequelize.DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Address);
  }
}

module.exports = User;
