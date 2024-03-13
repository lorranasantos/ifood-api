const { restart } = require("nodemon");
const Restaurants = require("../models/Restaurants");

class RestaurantController {
  async create(req, res) {
    const { name, food_type } = req.body;

    const newRestaurant = await Restaurants.create({
      name,
      food_type,
    });

    if (!newRestaurant) {
      return restart.status(400).json({ message: "restaurant not created!" });
    }

    return res.status(200).json({ data: { name, food_type } });
  }

  async delete(req, res) {
    const { id } = req.params;

    const verifyRestaurant = await Restaurants.findOne({
      where: {
        id,
      },
    });

    if (!verifyRestaurant) {
      return res.status(404).json({ message: "Restaurant does not exist!" });
    }

    const deleteRestaurant = await Restaurants.destroy({
      where: {
        id,
      },
    });

    if (!deleteRestaurant) {
      return res
        .status(400)
        .json({ message: "failed to delete this restaurant!" });
    }

    return res.status(200).json({ message: "Restaurant deleted!" });
  }

  async listRestaurants(req, res) {
    const allRestaurants = await Restaurants.findAll();

    return res.status(200).json({ data: allRestaurants });
  }

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

module.exports = new RestaurantController();
