const Dish = require("../../models/Dish");
const Restaurant = require("../../models/Restaurant");

class CreateRestaurantController {
  async create(req, res) {
    try {
      const { name, category, image, description, idAddress, dish_id } =
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
        idAddress,
        dish_id,
      });

      return res.status(201).json(newRestaurant);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new CreateRestaurantController();
