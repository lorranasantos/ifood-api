const Dish = require("../../models/Dish");

class ListDishController {
  async listDish(req, res) {
    try {
      const allDishes = await Dish.findAll();
      return res.status(200).json(allDishes);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error listing dishes!" });
    }
  }
}

module.exports = new ListDishController();
