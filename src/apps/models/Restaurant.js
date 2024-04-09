const { DataTypes, Model } = require("sequelize");

class Restaurant extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        category_id: DataTypes.INTEGER,
        address_id: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Category);
  }
  static associate(models) {
    this.belongsTo(models.Address);
  }
  static associate(models) {
    this.belongsToMany(models.Menu);
  }
}

module.exports = Restaurant;
