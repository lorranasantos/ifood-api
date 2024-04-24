const Sequelize = require("sequelize");
const { Model, DataTypes } = require("sequelize");

class Basket extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        total: DataTypes.DECIMAL,
      },
      {
        sequelize,
        modelName: "Basket",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Order);
  }
  static associate(models) {
    this.hasOne(models.User);
  }
}

module.exports = Basket;
