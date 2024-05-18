const { DataTypes, Model } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        address: DataTypes.STRING,
        house_number: DataTypes.INTEGER,
        zip_code: DataTypes.INTEGER,
        neighborhood: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.TEXT,
        complement: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Restaurant);
  }
  static associate(models) {
    this.hasMany(models.User);
  }
}

module.exports = Address;
