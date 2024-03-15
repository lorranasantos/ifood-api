const Restaurants = require("../../models/Restaurants");

class CreateRestaurantController {
  async create(req, res) {
    console.log("puxanto a rota");
    const { name, food_type } = req.body;

    const newRestaurant = await Restaurants.create({
      name,
      food_type,
    });

    if (!newRestaurant) {
      return res.status(400).json({ message: "restaurant not created!" });
    }

    return res.status(200).json({ data: { name, food_type } });
  }
}

module.exports = new CreateRestaurantController();
