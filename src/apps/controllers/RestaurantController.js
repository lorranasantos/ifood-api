const Address = require("../models/Address");
const Category = require("../models/Category");
const Restaurant = require("../models/Restaurant");

class RestaurantController {
  async create(req, res) {
    try {
      const { name, image, description, category_id, address_id } = req.body;

      const address = await Address.findByPk(address_id);
      const category = await Category.findByPk(category_id);

      if (!address) {
        return res.status(404).json({ message: "Address not found!" });
      }

      if (!category) {
        return res.status(404).json({ message: "Category not found!" });
      }

      if (!name || !description) {
        return res
          .status(404)
          .json({ message: "You must register a name and description!" });
      }

      const newRestaurant = await Restaurant.create({
        name,
        image,
        description,
        category_id,
        address_id,
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
      const { name, image, description, category_id, address_id } = req.body;

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
          image: image || restaurant.image,
          description: description || restaurant.description,
          category_id: category_id || restaurant.category_id,
          address_id: address_id || restaurant.address_id,
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
  async reportRestaurantsByCategory(req, res) {
    try {
      const categories = await Category.findAll({
        include: [
          {
            model: Restaurant,
            attributes: ["id"],
          },
        ],
      });

      const report = categories.map((category) => ({
        category: category.category,
        restaurantCount: category.Restaurants.length,
      }));

      return res.status(200).json(report);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new RestaurantController();
