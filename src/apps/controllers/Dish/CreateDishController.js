const Dish = require("../../models/Dish");

class CreateDishController {
  async create(req, res) {
    const { name, description, price, image } = req.body;

    try {
      const newDish = await Dish.create({
        name,
        description,
        price,
        image,
      });

      return res.status(200).json({
        data: { name, description, price, image },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Dish not created!" });
    }
  }
}

module.exports = new CreateDishController();
