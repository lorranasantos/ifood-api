const Restaurant = require("../../models/Restaurant");

class ListRestaurantController {
  async listRestaurant(req, res) {
    try {
      const allRestaurants = await Restaurant.findAll();
      return res.status(200).json(allRestaurants);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing restaurants!" });
    }
  }
}

module.exports = new ListRestaurantController();
