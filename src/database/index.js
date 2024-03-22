const Sequelize = require("sequelize");
const User = require("../apps/models/User");
const Restaurant = require("../apps/models/Restaurant");
const Dish = require("../apps/models/Dish");

const models = [User, Dish, Restaurant];
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
