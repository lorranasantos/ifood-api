const Dishes = require("../../models/Dishes");

class ListDishController {
  async listDishes(req, res) {
    const allDishes = await Dishes.findAll();

    return res.status(200).json({ data: allDishes });
  }
}

module.exports = new ListDishController();
