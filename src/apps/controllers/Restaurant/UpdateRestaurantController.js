const Restaurants = require("../../models/Restaurants");

class UpdateRestaurantController {
  async update(req, res) {
    const { name, food_type } = req.body;
    const { id } = req.params;

    const restaurant = await Restaurants.findOne({
      where: {
        id: id,
      },
    });

    if (!restaurant) {
      return res.status(400).json({ message: "Restaurant do not exists!" });
    }

    await Restaurants.update(
      {
        name: name || restaurant.name,
        food_type: food_type || restaurant.food_type,
      },
      {
        where: {
          id: restaurant.id,
        },
      }
    );

    return res.status(200).json({ message: "Restaurant updated" });
  }
}

module.exports = new UpdateRestaurantController();
