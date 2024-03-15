const Restaurants = require("../../models/Restaurants");

class ListRestaurantController {
  async listRestaurants(req, res) {
    const allRestaurants = await Restaurants.findAll();

    return res.status(200).json({ data: allRestaurants });
  }
}

module.exports = new ListRestaurantController();
