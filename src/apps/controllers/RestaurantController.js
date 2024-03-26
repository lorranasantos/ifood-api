const Dish = require("../models/Dish");
const Restaurant = require("../models/Restaurant");

class RestaurantController {
  async create(req, res) {
    try {
      const { name, category, image, description, address_id, dish_id } =
        req.body;

      const dish = await Dish.findByPk(dish_id);

      if (!dish) {
        return res.status(404).json({ message: "Dish not found!" });
      }

      const newRestaurant = await Restaurant.create({
        name,
        category,
        image,
        description,
        address_id,
        dish_id,
      });

      return res.status(201).json(newRestaurant);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async index(req, res) {
    const { id } = req.params;

    try {
      const findRestaurant = await Restaurant.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(findRestaurant);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed find this Restaurant!" });
    }
  }

  async listRestaurant(req, res) {
    try {
      const allRestaurants = await Restaurant.findAll();
      return res.status(200).json(allRestaurants);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing restaurants!" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const verifyRestaurant = await Restaurant.findOne({
        where: {
          id,
        },
      });

      if (!verifyRestaurant) {
        return res.status(404).json({ message: "Restaurant does not exist!" });
      }

      await Restaurant.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({ message: "Restaurant deleted!" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "failed to delete this restaurant!" });
    }
  }

  async update(req, res) {
    try {
      const { name, category, image, description, address_id, dish_id } =
        req.body;

      const { id } = req.params;

      const restaurant = await Restaurant.findOne({
        where: {
          id: id,
        },
      });

      if (!restaurant) {
        return res.status(400).json({ message: "Restaurant do not exists!" });
      }

      await Restaurant.update(
        {
          name: name || restaurant.name,
          category: category || restaurant.category,
          image: image || restaurant.image,
          description: description || restaurant.description,
          address_id: address_id || restaurant.address_id,
          dish_id: dish_id || restaurant.dish_id,
        },
        {
          where: {
            id: restaurant.id,
          },
        }
      );

      return res.status(200).json({ message: "Restaurant updated" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "failed update this restaurant!" });
    }
  }
}

module.exports = new RestaurantController();
