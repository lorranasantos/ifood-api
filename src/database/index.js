const Sequelize = require("sequelize");
const User = require("../apps/models/User");
/*const Restaurants = require("../apps/models/Restaurants");*/
const Dish = require("../apps/models/Dish");

//const models = [Users, Restaurants, Dishes];

const models = [User, Dish];
const databaseConfig = require("../configs/db");

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
