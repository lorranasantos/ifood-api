const Sequelize = require("sequelize");
const { Model, DataTypes } = require("sequelize");

class ConcludeOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        paid: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN,
        basket_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "ConcludeOrder",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Basket);
  }
}

module.exports = ConcludeOrder;
