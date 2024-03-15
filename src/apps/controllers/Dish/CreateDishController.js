const Dishes = require("../../models/Dishes");

class CreateDishController {
  async create(req, res) {
    const { name, description, price, image } = req.body;

    const newDish = await Dishes.create({
      name,
      description,
      price,
      image,
    });

    if (!newDish) {
      return res.status(400).json({ message: "restaurant not created!" });
    }

    return res
      .status(200)
      .json({ data: { name, description, price, description, image } });
  }
}

module.exports = new CreateDishController();
